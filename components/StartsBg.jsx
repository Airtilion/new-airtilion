'use client';

import { useRef, useEffect } from 'react';

export default function StarsCanvas({ bg }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    const stars = [];
    const maxStars = 150;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      // chcemy 150% szerokości okna, więc:
      const cssWidth = window.innerWidth;
      const cssHeight = window.innerHeight;

      // ustawiamy CSS-owe wymiary (użytkownik widzi 150vw × 100vh)
      canvas.style.width = cssWidth + 'px';
      canvas.style.height = cssHeight + 'px';

      // atrybuty back-buffera mnożymy przez devicePixelRatio
      canvas.width = cssWidth * dpr;
      canvas.height = cssHeight * dpr;

      // skalujemy kontekst, by rysować “w normalnych” współrzędnych
      ctx.scale(dpr, dpr);
    }

    resize();
    window.addEventListener('resize', resize);

    function createStar() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: 0,
        fadeSpeed: Math.random() * 0.02 + 0.005,
        growing: true,
      };
    }

    for (let i = 0; i < maxStars; i++) {
      stars.push(createStar());
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star, i) => {
        if (star.growing) {
          star.opacity += star.fadeSpeed;
          if (star.opacity >= 1) star.growing = false;
        } else {
          star.opacity -= star.fadeSpeed;
          if (star.opacity <= 0) {
            stars[i] = createStar(); // replace star
          }
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
      }}
    />
  );
}
