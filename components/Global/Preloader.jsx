"use client";

import { useState, useEffect } from 'react';

/**
 * Preloader — replicates the legacy loader-wrapper / loader animation.
 * Mounts on top of everything (z-index 99999), then fades out once the
 * window's 'load' event fires (or after a 2.5 s safety timeout).
 */
export default function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Safety timeout — hide after 2.5 s even if 'load' is late
    const timeout = setTimeout(() => setLoaded(true), 2500);

    const onLoad = () => {
      clearTimeout(timeout);
      setLoaded(true);
    };

    // If the page already finished loading (fast cache hit), dismiss immediately
    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return (
    <div className={`loader-wrapper${loaded ? ' loaded' : ''}`}>
      <div className="loader" />
    </div>
  );
}
