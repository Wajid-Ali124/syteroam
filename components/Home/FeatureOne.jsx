"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import homedata from '../../data/homedata.json';

export default function FeatureOne() {
  const { title, content, btn1url, btn1label, imgurl1 } = homedata.feature1;

  const loopVars = {
    hidden: { opacity: 0, y: -30, rotateY: 0, scale: 1 },
    visible: (i) => ({
      opacity: [   0,   1,   1,   1,   1,    1,    0,    0],
      y:       [ -30,   0,   0,   0,   0,    0,    0,    0],
      rotateY: [   0,   0,   0, 180, 360,  360,  360,  360],
      scale:   [   1,   1,   1, 1.2,   1,    1,    1,    1],
      transition: {
        duration: 15,
        ease: "easeInOut",
        times: [   0, 0.1, 0.45, 0.55, 0.65, 0.95, 0.98, 1], 
        repeat: Infinity,
        delay: i * 0.05
      }
    })
  };

  let globalCharIndex = 0;
  const words = title.split(' ');

  return (
    <section id="feature1" className="sr-featureone">
      <div className="sr-featureone__circle" />
      
      <div className="sr-featureone__container">
        <div className="sr-featureone__row">
          
          <div className="sr-featureone__col">
            <div className="sr-featureone__img-wrap">
              <Image className="sr-featureone__img" src={imgurl1} alt="SyteRoam Mobile ERP App — Built for Manufacturing ERP Users" width={425} height={470} style={{ width: '100%', height: 'auto', maxWidth: '425px' }} />
            </div>
          </div>
          
          <div className="sr-featureone__col">
            <h2 className="sr-featureone__title">
              {words.map((word, wordIndex) => {
                const isLastWord = wordIndex === words.length - 1;
                return (
                  <span 
                    key={wordIndex} 
                    style={{ display: 'inline-block', marginRight: isLastWord ? '0px' : '0.25em' }}
                  >
                    {Array.from(word).map((char, charIndex) => {
                      const currentIndex = globalCharIndex++;
                      return (
                        <motion.span
                          key={charIndex}
                          custom={currentIndex}
                          variants={loopVars}
                          initial="hidden"
                          animate="visible"
                          style={{ display: 'inline-block' }}
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                  </span>
                );
              })}
            </h2>
            <p className="sr-featureone__text">{content}</p>
            
            {/* Navigates cleanly using same animated-btn system wired in hero.css */}
            <Link href={'/' + btn1url} className="sr-btn sr-btn--filled">
              {btn1label}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
