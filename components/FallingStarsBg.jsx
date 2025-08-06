'use client';

import { useRef, useEffect } from 'react';

export default function ShootingStarsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf;
    const stars = [];
    const maxStars = 30;

    function fadeCanvas() {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';
    }

    function createStar() {
      const speed = Math.random() * 3 + 1;
      const angle = Math.PI / 4; // 45°
      const parent = canvas.parentElement;
      const pw = parent.clientWidth * 1.5;
      const ph = parent.clientHeight;
      const fromTop = Math.random() < 0.5;
      let x, y;
      if (fromTop) {
        x = Math.random() * pw;
        y = -Math.random() * ph * 0.5;
      } else {
        x = -Math.random() * pw * 0.5;
        y = Math.random() * ph;
      }
      return {
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 80 + 40,
        opacity: (Math.random() * 0.5 + 0.3) * 0.6,
        width: Math.random() * 1.5 + 0.5,
      };
    }

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;

      // CSS‐owe wymiary względem rodzica
      const cssW = parent.clientWidth * 1.5;
      const cssH = parent.clientHeight;

      canvas.style.width  = cssW + 'px';
      canvas.style.height = cssH + 'px';
      canvas.style.right  = '0';

      // back‐buffer pod DPR
      canvas.width  = cssW * dpr;
      canvas.height = cssH * dpr;

      // reset i skalowanie
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
    }

    resize();
    window.addEventListener('resize', resize);

    // init stars
    for (let i = 0; i < maxStars; i++) {
      stars.push(createStar());
    }

    function draw() {
      fadeCanvas();

      const parent = canvas.parentElement;
      const pw = parent.clientWidth * 1.5;
      const ph = parent.clientHeight;

      stars.forEach((s, idx) => {
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * s.length, s.y - s.vy * s.length);
        ctx.strokeStyle = `rgba(255,255,255,${s.opacity})`;
        ctx.lineWidth = s.width;
        ctx.stroke();

        s.x += s.vx;
        s.y += s.vy;

        if (s.x > pw + 50 || s.y > ph + 50) {
          stars[idx] = createStar();
        }
      });

      raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: -3,
        width: '150%',
        height: '100%',
        background: 'transparent',
        opacity: 0.3,
      }}
    />
  );
}
