import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import blogsData from '@/data/blogs.json';
import BlogContentInteractive from './BlogContentInteractive';

const blogsBySlug = Object.fromEntries(blogsData.map((b) => [b.slug, b]));

/* ── Static Generation ─────────────────────────────────────────────────────
   Pre-renders every blog post at build time → fully static (○) pages.
   Instant load from CDN, zero server cost per request.
   ────────────────────────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return blogsData.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogsBySlug[slug];
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: post.metaTitle || `${post.title} – SyteRoam Blog`,
    description: post.metaDescription || post.excerpt,
    ...(post.canonicalUrl && {
      alternates: {
        canonical: post.canonicalUrl,
      },
    }),
    ...(post.robots && {
      robots: post.robots,
    }),
    openGraph: {
      title: post.metaTitle || `${post.title} – SyteRoam Blog`,
      description: post.metaDescription || post.excerpt,
      type: "article",
      images: post.image ? [{ url: post.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || `${post.title} – SyteRoam Blog`,
      description: post.metaDescription || post.excerpt,
    },
  };
}

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;
  const post = blogsBySlug[slug];

  if (!post) {
    redirect('/blog');
  }

  return (
    <div className="sr-blog-page">
      {/* ── Hero Banner (Server-rendered) ────────────────── */}
      <header className="sr-blog-hero sr-blog-details-hero">
        <div className="sr-blog-hero__circle bc1"></div>
        <div className="sr-blog-hero__circle bc2"></div>
        <div className="sr-blog-hero__circle bc3"></div>

        <div className="sr-blog-container">
          <div className="sr-blog-details-meta">
            <span>{post.category}</span> • <time>{post.date}</time>
          </div>
          <h1>{post.title}</h1>
        </div>
      </header>

      {/* ── Blog Body (Server-rendered with tiny client leaf) ── */}
      <article className="sr-blog-body">
        <div className="sr-blog-container sr-blog-details-container">

          {!post.hideTopImage && (
            <div className="sr-blog-details-image-wrap">
              <Image
                src={post.image}
                alt={post.alt || post.title}
                width={800}
                height={800}
                priority
                className="sr-blog-details-image"
                style={{ width: '100%', height: 'auto', maxWidth: '800px' }}
              />
            </div>
          )}

          {/* Only the content click handler needs client JS */}
          <BlogContentInteractive html={post.content} />

          <nav className="sr-blog-details-footer">
            <Link href="/blog" className="sr-btn-back">
              &larr; Back to all posts
            </Link>
          </nav>

        </div>
      </article>
    </div>
  );
}
