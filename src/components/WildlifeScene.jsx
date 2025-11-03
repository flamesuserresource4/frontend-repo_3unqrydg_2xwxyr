import React from 'react';
import Spline from '@splinetool/react-spline';

// Fullscreen animated 3D wildlife scene background using Spline
// Note: The overlay has pointer-events-none so it never blocks interaction with the 3D scene
export default function WildlifeScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Spline
        scene="https://prod.spline.design/1m9v0mO5p8JkKp3o/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-70 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(16,185,129,0.25),transparent),radial-gradient(40%_40%_at_80%_20%,rgba(6,182,212,0.25),transparent)]" />
    </div>
  );
}
