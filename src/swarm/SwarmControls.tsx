import { swarmEnabled, useSwarm } from './useSwarm';

export default function SwarmControls() {
  const { status, skip, replay } = useSwarm();
  if (!swarmEnabled) return null;

  const building = status.running && status.remaining > 0;

  return (
    <div className="swarm-controls">
      {building ? (
        <button type="button" className="pill-btn" onClick={skip}>
          <span className="swarm-dot" aria-hidden="true" />
          Lewati animasi
        </button>
      ) : (
        <button type="button" className="pill-btn" onClick={replay} title="Biarkan kursor menyusun ulang halaman">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M13 8a5 5 0 1 1-1.6-3.7M13 2.5V5h-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Ulangi animasi
        </button>
      )}
    </div>
  );
}
