import { useEffect, useRef, useState } from 'react';
import { SwarmEngine, type SwarmStatus } from './engine';

/** Swarm aktif kecuali pengunjung memilih "kurangi gerakan" di pengaturan perangkatnya. */
export const swarmEnabled =
  typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useSwarm() {
  const engine = useRef<SwarmEngine | null>(null);
  const [status, setStatus] = useState<SwarmStatus>({ running: swarmEnabled, remaining: 1, total: 1 });

  useEffect(() => {
    if (!swarmEnabled) return;
    const eng = new SwarmEngine();
    engine.current = eng;
    // Tunggu font siap supaya ukuran teks yang "diketik" sudah final.
    let cancelled = false;
    let off = () => {};
    const go = () => {
      if (cancelled) return;
      eng.start();
      off = eng.subscribe(setStatus);
    };
    if (document.fonts?.ready) {
      Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 900))]).then(go);
    } else go();
    return () => {
      cancelled = true;
      off();
      eng.destroy();
    };
  }, []);

  return {
    status,
    skip: () => engine.current?.skip(),
    replay: () => {
      engine.current?.replay();
    },
  };
}
