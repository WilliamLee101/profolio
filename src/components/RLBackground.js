import React, { useEffect, useRef } from 'react';

// Warm orange/amber palette for the neural graph nodes
const PALETTE = [
  [251, 146, 60],  // orange-400
  [249, 115, 22],  // orange-500
  [253, 186, 116], // orange-300
  [245, 158, 11],  // amber-500
  [252, 211, 77],  // amber-300
];

const RLBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const N = Math.max(18, Math.min(50, Math.round((W * H) / 45000)));
    const nodes = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
    }));

    let pulses = [];
    let spawnTimer = 0;
    let rafId;

    const draw = () => {
      const THRESH = Math.min(W, H) * 0.18;
      ctx.clearRect(0, 0, W, H);

      // Drift nodes, bouncing softly off the viewport edges
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      // Connect nearby nodes with faint lines
      const edges = [];
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < THRESH) {
            edges.push([i, j]);
            const alpha = (1 - dist / THRESH) * 0.12;
            ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Occasionally send one quiet pulse along a random edge
      spawnTimer++;
      if (spawnTimer > 110 && edges.length) {
        spawnTimer = 0;
        const [i, j] = edges[Math.floor(Math.random() * edges.length)];
        pulses.push({ i, j, t: 0, color: nodes[i].color });
      }
      pulses = pulses.filter((p) => p.t < 1);
      pulses.forEach((p) => {
        p.t += 0.012;
        const a = nodes[p.i];
        const b = nodes[p.j];
        const px = a.x + (b.x - a.x) * p.t;
        const py = a.y + (b.y - a.y) * p.t;
        const [r, g, bl] = p.color;
        const glow = ctx.createRadialGradient(px, py, 0, px, py, 6);
        glow.addColorStop(0, `rgba(${r}, ${g}, ${bl}, 0.9)`);
        glow.addColorStop(1, `rgba(${r}, ${g}, ${bl}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();
      });

      // Nodes
      nodes.forEach((n) => {
        const [r, g, b] = n.color;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.55)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.4, 0, Math.PI * 2);
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
    />
  );
};

export default RLBackground;
