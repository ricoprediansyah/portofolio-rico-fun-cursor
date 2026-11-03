import { useEffect } from 'react';
import { Overview } from './components/Charts';
import { FloatingNav } from './components/Nav';
import { Drone, Epilog, Footer, Kampus, Kerja, Kreatif, Marquee, Peran, Prolog, Skill, WebDev } from './components/Sections';
import { Sprites } from './components/Svg';
import SwarmControls from './swarm/SwarmControls';

/** Klik/sentuh karakter Rico → putar ulang animasi lompat (.is-boing). */
function useCharBoing() {
  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.('.char');
      if (!el) return;
      const target = el instanceof SVGSVGElement ? el.querySelector('use') : el;
      if (!target) return;
      target.classList.remove('is-boing');
      void target.getBoundingClientRect(); // restart animasi
      target.classList.add('is-boing');
    };
    const onEnd = (e: AnimationEvent) => {
      if (e.animationName === 'char-boing') (e.target as Element).classList.remove('is-boing');
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('animationend', onEnd);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('animationend', onEnd);
    };
  }, []);
}

export default function App() {
  useCharBoing();
  return (
    <>
      <Sprites />
      <a href="#kampus" className="skip-link">
        Lewati ke konten
      </a>
      <FloatingNav />
      <main className="page">
        <Prolog />
        <Marquee />
        <Kampus />
        <Kerja />
        <Drone />
        <Kreatif />
        <WebDev />
        <Skill />
        <Peran />
        <Overview />
        <Epilog />
      </main>
      <Footer />
      <SwarmControls />
    </>
  );
}
