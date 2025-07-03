import React, { useEffect, useRef } from 'react';

const ICONS = [
  '/Images/Unity.png',
  '/Images/Csharp.png',
  '/Images/Git.png',
  '/Images/Jira.png',
  '/Images/React.png',
  '/Images/VS.png',
  '/Images/Game.png',
];

const ICON_SIZE = 48; 
const PARTICLE_COUNT = 30;

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

const TechParticles = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const images = useRef([]);

  // Preload images
  useEffect(() => {
    images.current = ICONS.map(src => {
      const img = new window.Image();
      img.src = src;
      return img;
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Initialize particles
    particles.current = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      x: randomBetween(0, width - ICON_SIZE),
      y: randomBetween(0, height - ICON_SIZE),
      dx: randomBetween(-0.5, 0.5),
      dy: randomBetween(-0.5, 0.5),
      icon: i % ICONS.length,
      size: ICON_SIZE * randomBetween(0.8, 1.2),
      opacity: randomBetween(0.5, 0.9),
      angle: randomBetween(0, 360), // initial rotation angle in degrees
      dAngle: randomBetween(-0.3, 0.3), // rotation speed in degrees per frame
    }));

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.current.forEach(p => {
        // Move
        p.x += p.dx;
        p.y += p.dy;
        p.angle += p.dAngle;
        // Bounce
        if (p.x < 0 || p.x > width - p.size) p.dx *= -1;
        if (p.y < 0 || p.y > height - p.size) p.dy *= -1;
        // Draw with rotation
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x + p.size / 2, p.y + p.size / 2);
        ctx.rotate((p.angle * Math.PI) / 180);
        ctx.drawImage(images.current[p.icon], -p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });
      animationId = requestAnimationFrame(animate);
    }
    animate();
    // Resize handler
    function handleResize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ display: 'block' }}
      width={1920}
      height={1080}
      aria-hidden="true"
    />
  );
};

export default TechParticles;
