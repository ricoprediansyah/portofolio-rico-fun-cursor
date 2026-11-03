import { useEffect, useState } from 'react';
import { skillMap, timeSplit } from '../data';

/** true di layar HP (≤760px): grafik jadi kecil, jadi teks di dalam SVG diperbesar. */
function useIsPhone() {
  const query = '(max-width: 760px)';
  const [phone, setPhone] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setPhone(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return phone;
}

/* ------------------------------------------------------------- peta skill */

function SkillRadar() {
  const [hot, setHot] = useState<number | null>(null);
  const phone = useIsPhone();
  // ukuran tooltip mengikuti skala grafik
  const tipFont = phone ? 30 : 12.5;
  const cx = 180;
  const cy = 150;
  const R = phone ? 128 : 104;
  const n = skillMap.length;
  const angle = (i: number) => -Math.PI / 2 + (i * 2 * Math.PI) / n;
  const pt = (i: number, f: number): [number, number] => [cx + Math.cos(angle(i)) * R * f, cy + Math.sin(angle(i)) * R * f];
  const ring = (f: number) => skillMap.map((_, i) => pt(i, f).join(',')).join(' ');
  const shape = skillMap.map((s, i) => pt(i, s.value / 100).join(',')).join(' ');

  return (
    <div className="chart-box">
      <svg
        viewBox={phone ? '-62 -30 484 360' : '0 0 360 300'}
        className="radar"
        role="img"
        aria-label={`Peta skill: ${skillMap.map((s) => `${s.label} ${s.value}%`).join(', ')}`}
      >
        {/* grid: cincin & jari-jari, dibuat redup */}
        {[0.25, 0.5, 0.75, 1].map((f) => (
          <polygon key={f} points={ring(f)} className="radar-ring" />
        ))}
        {skillMap.map((_, i) => {
          const [x, y] = pt(i, 1);
          return <line key={i} x1={cx} y1={cy} x2={x} y2={y} className="radar-ring" />;
        })}
        {/* data */}
        <polygon points={shape} className="radar-shape" />
        {skillMap.map((s, i) => {
          const [x, y] = pt(i, s.value / 100);
          const [lx, ly] = pt(i, phone ? 1.17 : 1.2);
          const anchor = Math.abs(lx - cx) < 4 ? 'middle' : lx > cx ? 'start' : 'end';
          return (
            <g key={s.label}>
              <text x={lx} y={ly + (phone ? 10 : 5)} textAnchor={anchor} className="radar-label">
                {phone && 'short' in s && s.short ? s.short : s.label}
              </text>
              <circle cx={x} cy={y} r={hot === i ? 8 : 6.5} className="radar-dot" />
              {/* area sentuh lebih besar dari titiknya */}
              <circle
                cx={x}
                cy={y}
                r={18}
                className="hit"
                tabIndex={0}
                aria-label={`${s.label}: ${s.value}%`}
                onPointerEnter={() => setHot(i)}
                onPointerLeave={() => setHot(null)}
                onFocus={() => setHot(i)}
                onBlur={() => setHot(null)}
              />
            </g>
          );
        })}
        {hot !== null &&
          (() => {
            const [x, y] = pt(hot, skillMap[hot].value / 100);
            const label = `${skillMap[hot].label} · ${skillMap[hot].value}%`;
            const w = label.length * tipFont * 0.58 + tipFont * 1.4;
            const h = tipFont * 2.1;
            const [minX, maxX] = phone ? [-60, 420] : [4, 356];
            const tx = Math.min(Math.max(x - w / 2, minX), maxX - w);
            const ty = y > cy ? y + tipFont * 1.1 : y - h - tipFont * 1.1;
            return (
              <g className="chart-tip" pointerEvents="none">
                <rect x={tx} y={ty} width={w} height={h} rx={h * 0.3} />
                <text x={tx + w / 2} y={ty + h * 0.68} textAnchor="middle" style={{ fontSize: tipFont }}>
                  {label}
                </text>
              </g>
            );
          })()}
      </svg>
    </div>
  );
}

/* ---------------------------------------------------------- pembagian waktu */

function arc(cx: number, cy: number, r0: number, r1: number, a0: number, a1: number) {
  const p = (r: number, a: number) => `${cx + Math.cos(a) * r} ${cy + Math.sin(a) * r}`;
  const large = a1 - a0 > Math.PI ? 1 : 0;
  return `M${p(r1, a0)} A${r1} ${r1} 0 ${large} 1 ${p(r1, a1)} L${p(r0, a1)} A${r0} ${r0} 0 ${large} 0 ${p(r0, a0)} Z`;
}

function TimeDonut() {
  const [hot, setHot] = useState<number | null>(null);
  const total = timeSplit.reduce((s, t) => s + t.value, 0);
  const cx = 110;
  const cy = 110;
  let a = -Math.PI / 2;
  const segs = timeSplit.map((t) => {
    const a0 = a;
    const a1 = a + (t.value / total) * Math.PI * 2;
    a = a1;
    return { ...t, a0, a1, mid: (a0 + a1) / 2 };
  });
  const cur = hot === null ? null : segs[hot];

  return (
    <div className="donut-wrap">
      <svg
        viewBox="0 0 220 220"
        className="donut"
        role="img"
        aria-label={`Pembagian waktu: ${timeSplit.map((t) => `${t.label} ${t.value}%`).join(', ')}`}
      >
        {segs.map((s, i) => {
          const off = hot === i ? 5 : 0;
          return (
            <path
              key={s.label}
              d={arc(cx, cy, 56, 92, s.a0, s.a1)}
              fill={s.color}
              className={`donut-seg${hot !== null && hot !== i ? ' is-dim' : ''}`}
              style={{ transform: `translate(${Math.cos(s.mid) * off}px, ${Math.sin(s.mid) * off}px)` }}
              tabIndex={0}
              aria-label={`${s.label}: ${s.value}%`}
              onPointerEnter={() => setHot(i)}
              onPointerLeave={() => setHot(null)}
              onFocus={() => setHot(i)}
              onBlur={() => setHot(null)}
            />
          );
        })}
        {/* garis tepi kartun */}
        <circle cx={cx} cy={cy} r={93.5} className="donut-edge" />
        <circle cx={cx} cy={cy} r={54.5} className="donut-edge" />
        <text x={cx} y={cy + 6} textAnchor="middle" className="donut-big">
          {cur ? `${cur.value}%` : '100%'}
        </text>
        <text x={cx} y={cy + 26} textAnchor="middle" className="donut-small">
          {cur ? cur.label : 'waktu Rico'}
        </text>
      </svg>

      <ul className="donut-legend">
        {segs.map((s, i) => (
          <li
            key={s.label}
            className={hot !== null && hot !== i ? 'is-dim' : ''}
            onPointerEnter={() => setHot(i)}
            onPointerLeave={() => setHot(null)}
          >
            <span className="swatch" style={{ background: s.color }} />
            <span className="legend-label">{s.label}</span>
            <span className="legend-val">{s.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------------------------------------- section sebelum bab 1 */

export function Overview() {
  return (
    <section id="sekilas" className="band overview" aria-label="Sekilas tentang Rico">
      <div className="wrap overview-wrap">
        <div className="card overview-card" data-build="box">
          <h3>Peta skill</h3>
          <p>Memetakan perkiraan seberapa tinggi skill yang dimiliki.</p>
          <SkillRadar />
          <table className="sr-only">
            <caption>Peta skill</caption>
            <tbody>
              {skillMap.map((s) => (
                <tr key={s.label}>
                  <th scope="row">{s.label}</th>
                  <td>{s.value}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card overview-card" data-build="box">
          <h3>Ke mana waktu Rico habis?</h3>
          <p>Perkiraan pembagian waktu, dalam persen.</p>
          <TimeDonut />
          <table className="sr-only">
            <caption>Pembagian waktu</caption>
            <tbody>
              {timeSplit.map((t) => (
                <tr key={t.label}>
                  <th scope="row">{t.label}</th>
                  <td>{t.value}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
