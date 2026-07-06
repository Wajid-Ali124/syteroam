import Link from 'next/link';
import Image from 'next/image';
import blogsData from '@/data/blogs.json';

export default function Blog() {
  return (
    <div className="sr-blog-page">
      {/* ── Theme-Matched Hero Banner ───────────────── */}
      <div className="sr-blog-hero">
        <div className="sr-blog-hero__circle bc1"></div>
        <div className="sr-blog-hero__circle bc2"></div>
        <div className="sr-blog-hero__circle bc3"></div>

        <div className="sr-blog-container">
          <h1>SyteRoam Blog</h1>
          <p>The latest insights on mobile ERP applications, SyteLine optimizations, and field mobility.</p>
        </div>
      </div>

      {/* ── Blog Grid Body ──────────────────────────── */}
      <div className="sr-blog-body">
        <div className="sr-blog-container">

          <div className="sr-blog-grid">
            {Array.from({ length: blogsData.length }, (_, i) => { const post = blogsData[blogsData.length - 1 - i]; return (
              <div key={post.id} className="sr-blog-card">
                
                {/* Card Image */}
                <div className="sr-blog-card__image-wrap">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    width={800}
                    height={800}
                    className="sr-blog-card__image"
                    style={{ width: '100%', height: 'auto', maxWidth: '800px' }}
                  />
                </div>
                
                {/* Content */}
                <div className="sr-blog-card__content">
                  <div className="sr-blog-card__meta">
                    <span>{post.category}</span> • {post.date}
                  </div>
                  
                  <h3 className="sr-blog-card__title">
                    {post.title}
                  </h3>
                  
                  <p className="sr-blog-card__excerpt">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/blog/${post.slug}`} className="sr-blog-card__link">
                    Read Article
                  </Link>
                </div>

              </div>
            ); })}

          </div>

        </div>
      </div>
    </div>
  );
}
