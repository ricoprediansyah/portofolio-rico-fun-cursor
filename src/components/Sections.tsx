import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import * as art from '../art/fragments';
import {
  C,
  droneMini,
  jobs,
  kampus,
  kreatifStats,
  links,
  marquee,
  projects,
  roles,
  sideQuests,
  skills,
  socials,
  tools,
} from '../data';
import { HeroHeader } from './Nav';
import { Art, Use } from './Svg';

/* ------------------------------------------------------------------ helpers */

interface DecoProps {
  id: string;
  w: number;
  h: number;
  style: CSSProperties;
  anim?: string;
  /** tetap tampil di layar kecil */
  keep?: boolean;
  /** sembunyikan juga di tablet */
  md?: boolean;
}

/** Ornamen dekoratif (bintang, gear, awan, ...) yang ikut bergerak pelan. */
function Deco({ id, w, h, style, anim = '', keep, md }: DecoProps) {
  const hide = md ? 'hide-md' : keep ? '' : 'hide-sm';
  return <Use id={id} w={w} h={h} className={`deco ${anim} ${hide}`} style={style} />;
}

function Head({ label, color, title, children }: { label: string; color: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="sec-head">
      <span className="sec-label" style={{ color }} data-build="pop">
        {label}
      </span>
      <h2 data-build="text">{title}</h2>
      {children && <p data-build="text">{children}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------- prolog */

/** true kalau layar selebar HP (≤760px). */
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

export function Prolog() {
  // Di HP adegan dipotong; geser fokusnya ke kanan supaya gedung bank terlihat utuh.
  const phone = useIsPhone();
  return (
    <section id="prolog" className="prolog">
      <Art
        html={art.prolog}
        viewBox={phone ? '200 0 1440 900' : '0 0 1440 900'}
        preserve="xMidYMax slice"
        className="prolog-scene"
      />
      <HeroHeader />
      <div className="prolog-copy">
        <span className="badge" data-build="pop">
          PROLOG · Cerita Rico
        </span>
        <h1 className="prolog-title" data-build="text">
          Hai, aku Rico!
        </h1>
        <p className="speech" data-build="box">
          <strong>Anak elektro yang banyak kesukaan.</strong> Lulusan Teknik Elektro Unila yang betah ngoprek
          IoT, jaringan, Drone, dan AI. Sekarang Officer IT di Bank Mandiri.
        </p>
        <div className="cta-row" data-build="box">
          <a href="#kampus" className="btn" style={{ background: C.orange }}>
            Mulai cerita
          </a>
          <a href={links.linkedin} className="btn" style={{ background: C.white }} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <a href="#kampus" className="scroll-hint" aria-label="Gulir ke bab 1">
        <span />
      </a>
    </section>
  );
}

/* ------------------------------------------------------------------ marquee */

function MarqueeRow() {
  return (
    <div className="marquee-row">
      {[...marquee, ...marquee].map((m, i) =>
        'face' in m ? (
          <span key={i} className="marquee-face" style={{ background: m.bg }}>
            <Use id={m.face} w={42} h={44} />
          </span>
        ) : (
          <span key={i} className="marquee-item">
            <span>{m.text}</span>
            <Use id={m.icon} w={m.w} h={m.h} />
          </span>
        ),
      )}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- bab 1 kampus */

export function Kampus() {
  return (
    <section id="kampus" className="band band-white">
      <div className="wrap rel">
        <Deco id="sun" w={60} h={60} anim="a-spin-slow" style={{ top: 60, right: 60 }} />
        <Deco id="cube" w={50} h={50} anim="a-float" style={{ top: 150, right: 260, color: C.teal }} />
        <Deco id="arc" w={46} h={46} anim="a-float a-d2" style={{ top: 24, right: 440, color: C.yellow }} />
        <Deco id="cloud" w={110} h={55} anim="a-drift" style={{ top: 120, right: 150 }} />
        <Deco id="spark" w={36} h={36} anim="a-spin" style={{ top: 40, right: 300 }} />
        <Deco id="gear" w={34} h={34} anim="a-spin" style={{ top: 180, right: 40 }} />
        <Deco id="star" w={30} h={30} anim="a-twinkle" style={{ top: 200, right: 340 }} />

        <Head label="BAB 1" color="#6B5B00" title="Kampus Unila, 3,48 tahun ngebut.">
          Teknik Elektro, Jul 2021 – Feb 2025. Di sela kuliah: asisten lab, riset bareng dosen, dan sering jadi
          pembicara di kampus.
        </Head>

        <div className="grid grid-kampus">
          {kampus.map((k) => (
            <div key={k.pose + k.bg} className={`card lift ${k.tilt} kampus-card`} style={{ background: k.bg }} data-build="box">
              <Use id={k.pose} label={k.label} className="kampus-pose" />
              <div>
                {k.big ? <div className="num">{k.big}</div> : <div className="strong">{k.title}</div>}
                <div className={k.big ? '' : 'small'}>{k.small}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- bab 2 kerja */

/** Koin & uang kertas yang melayang pelan di latar bab kerja (tema bank). */
const RAIN = [
  { id: 'coin', left: '3%', top: '30%', size: 26, dur: 5, delay: 0 },
  { id: 'banknote', left: '4%', top: '78%', size: 46, dur: 6.5, delay: -2 },
  { id: 'coin', left: '33%', top: '93%', size: 20, dur: 4.5, delay: -1 },
  { id: 'coin', left: '50%', top: '26%', size: 24, dur: 5.5, delay: -3 },
  { id: 'banknote', left: '64%', top: '94%', size: 40, dur: 6, delay: -4 },
  { id: 'coin', left: '93%', top: '55%', size: 22, dur: 5, delay: -2.5 },
  { id: 'coin', left: '95%', top: '86%', size: 30, dur: 5.8, delay: -1.5 },
  { id: 'coin', left: '20%', top: '40%', size: 18, dur: 4.8, delay: -3.5 },
];

function CoinRain() {
  return (
    <div className="coin-rain" aria-hidden="true">
      {RAIN.map((c, i) => (
        <span
          key={i}
          className={`rain-item${i % 2 ? ' hide-sm' : ''}`}
          style={{ left: c.left, top: c.top, animationDuration: `${c.dur}s`, animationDelay: `${c.delay}s` }}
        >
          <Use
            id={c.id}
            w={c.size}
            h={c.id === 'banknote' ? Math.round(c.size * 0.57) : c.size}
            className={c.id === 'coin' ? 'a-coin' : ''}
          />
        </span>
      ))}
    </div>
  );
}

export function Kerja() {
  return (
    <section id="kerja" className="band">
      <CoinRain />
      <div className="wrap rel">
        <Deco id="briefcase" w={150} h={125} anim="a-bob" style={{ top: 46, right: 40, rotate: '6deg' }} />
        <Deco id="idcard" w={100} h={130} anim="a-swing" style={{ top: 30, right: 230, rotate: '-8deg' }} />
        <Deco id="moneybag" w={78} h={86} anim="a-bob a-d2" style={{ top: 120, right: 360, rotate: '-6deg' }} />
        <Deco id="banknote" w={96} h={55} anim="a-float" style={{ top: 30, right: 410, rotate: '10deg' }} />
        <Deco id="coins-stack" w={58} h={58} anim="a-bob a-d3" style={{ top: 150, right: 150 }} />
        {/* versi HP: koin kecil di pojok judul */}
        <span className="deco show-sm a-bob" style={{ top: 34, right: 16 }}>
          <Use id="coins-stack" w={44} h={44} />
        </span>
        <span className="deco show-sm a-bob a-d2" style={{ top: 30, right: 66 }}>
          <Use id="coin" w={26} h={26} className="a-coin" />
        </span>
        <Deco id="star" w={36} h={36} anim="a-twinkle" style={{ top: 168, right: 480 }} />
        <Deco id="spark" w={30} h={30} anim="a-spin" style={{ top: 196, right: 250 }} />

        <Head label="BAB 2" color="#1E4FA0" title="Petualangan kerja.">
          Ganti kostum di setiap kantor, dari advertising sampai perbankan.
        </Head>

        <ol className="grid grid-jobs">
          {jobs.map((j, i) => (
            <li
              key={j.org}
              className={`card lift ${j.tilt} job-card${i % 2 ? ' is-low' : ''}`}
              style={{ background: j.bg }}
              data-build="box"
            >
              <Use id={j.pose} label={j.label} className="job-pose" />
              {j.bolt && <Use id="bolt" w={34} h={50} className="job-bolt a-twinkle" />}
              {j.coins && (
                <>
                  <Use id="coins-stack" w={54} h={54} className="job-coins" />
                  <span className="job-coin a-bob">
                    <Use id="coin" w={34} h={34} className="a-coin" />
                  </span>
                  <span className="job-coin job-coin-2 a-bob a-d2">
                    <Use id="coin" w={24} h={24} className="a-coin a-d3" />
                  </span>
                </>
              )}
              <span className={`job-when${j.now ? ' is-now' : ''}`}>{j.when}</span>
              <div className="job-org">{j.org}</div>
              <div className="small">{j.role}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- bab 3 drone/iot */

export function Drone() {
  return (
    <div className="band band-white">
      {/* ranting menempel ke tepi layar, bukan ke kolom konten */}
      <Use id="branch" w={300} h={157} className="deco branch branch-l hide-sm" />
      <Use id="branch" w={480} h={250} className="deco branch branch-r" />
      <section id="drone" className="wrap rel">
        <Deco id="arc" w={44} h={44} anim="a-float" md style={{ top: 120, right: 480, color: C.green }} />

        <Head label="BAB 3 · sorotan utama" color="#1F6B3A" title="Di tanah, di air dan di udara.">
          Drone pemetaan, sensor bertenaga surya, sampai robot rover sawit. Bab paling seru dari perjalanan Rico.
        </Head>

        <div className="grid grid-drone">
          <div className="card lift drone-hero" style={{ background: C.teal }} data-build="box">
            <Art html={art.droneHero} viewBox="0 0 400 240" label="Rico menerbangkan drone" className="fluid-art" />
            <div className="stack-12">
              <span className="chip">Unila Robotika · Fixed Wing</span>
              <h3 className="h3-lg">Finalis KRTI 2024</h3>
              <p>Spesialis Ground Control Station. Memetakan sawit, mangrove, sungai, dan pantai dengan drone.</p>
            </div>
          </div>

          <div className="drone-side">
            <div className="card lift tilt-r side-card" style={{ background: C.green }} data-build="box">
              <Art html={art.iconGreenhouse} viewBox="0 0 80 80" className="side-icon" />
              <div>
                <div className="num">20+</div>
                <div>sensor IoT di smart greenhouse Desa Gisting &amp; Fakultas Pertanian</div>
              </div>
              <Use id="rk-p-sit" label="Rico memantau sensor dengan tablet" className="side-pose" />
            </div>
            <div className="card lift tilt-l side-card" style={{ background: C.yellow }} data-build="box">
              <Art html={art.iconTsunami} viewBox="0 0 80 80" className="side-icon" />
              <div>
                <div className="strong">Deteksi dini tsunami</div>
                <div>Sistem IoT tenaga surya untuk mitigasi bencana pesisir</div>
              </div>
              <Use id="pose-helmet" label="Rico teknisi dengan helm dan kunci pas" className="side-pose" />
            </div>
          </div>
        </div>

        <div className="grid grid-3 grid-mini">
          {droneMini.map((d) => (
            <div key={d.title} className={`card lift ${d.tilt} mini-card`} style={{ background: d.bg }} data-build="box">
              <Art html={d.art} viewBox="0 0 300 200" label={d.label} className="fluid-art" />
              <div className="strong-sm">{d.title}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ----------------------------------------------------------- bab 4 kreatif */

export function Kreatif() {
  return (
    <section id="kreatif" className="band" style={{ background: C.peach }}>
      <div className="wrap rel split">
        <Deco id="spark" w={40} h={40} anim="a-spin" keep style={{ top: 40, right: 60 }} />
        <Deco id="star" w={34} h={34} anim="a-twinkle" style={{ top: 70, right: 200 }} />
        <Deco id="bolt" w={26} h={40} anim="a-twinkle a-d2" style={{ top: 30, right: 320 }} />
        <Deco id="cube" w={48} h={48} anim="a-float" style={{ top: 40, right: 440, color: C.yellow }} />
        <Deco id="loop" w={110} h={36} anim="a-bob" style={{ bottom: 24, right: 160 }} />
        <Deco id="star" w={30} h={30} anim="a-twinkle a-d3" style={{ bottom: 30, right: 40 }} />

        <div className="kreatif-art hide-sm" data-build="box">
          <div className="card tilt-l kreatif-back" style={{ background: C.orange }} />
          <Use id="pose-idea" label="Rico punya ide desain" className="kreatif-main a-bob" />
          <Use id="pose-mic" label="Maskot Rico memegang mikrofon" className="kreatif-mic" />
          <Use id="star" w={40} h={40} className="kreatif-star a-twinkle" />
        </div>

        <div className="split-main">
          <div className="sec-head">
            <span className="sec-label" style={{ color: '#7A3410' }} data-build="pop">
              BAB 4
            </span>
            <h2 data-build="text">Si paling kreatif.</h2>
          </div>
          <div className="grid grid-2">
            {kreatifStats.map((s) => (
              <div key={s.text} className={`card lift ${s.tilt} stat-card`} style={{ background: s.bg }} data-build="box">
                {s.big ? <div className="num-md">{s.big}</div> : <div className="strong">{s.title}</div>}
                <div>{s.text}</div>
              </div>
            ))}
          </div>
          <div className="stack-12">
            <span className="strong-sm" data-build="pop">
              Alat tempur desain:
            </span>
            <ul className="tools">
              {tools.map((t) => (
                <li key={t.name} className="tool" data-build="pop">
                  <span className="tool-icon">
                    <img src={t.logo} alt="" width={36} height={36} decoding="async" />
                  </span>
                  <span>{t.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ bab 5 web dev */

export function WebDev() {
  return (
    <section id="webdev" className="band webdev" style={{ background: C.teal }}>
      <Use id="branch" w={400} h={209} className="deco branch branch-web hide-sm" />
      <Deco id="chip" w={40} h={40} anim="a-bob" style={{ top: 40, left: '4%' }} />
      <Deco id="gear" w={44} h={44} anim="a-spin" style={{ top: 50, left: '46%' }} />
      <Deco id="wifi" w={40} h={36} anim="a-pulse" style={{ top: 30, left: '58%' }} />
      <Deco id="star" w={34} h={34} anim="a-twinkle" keep style={{ bottom: 40, left: '3%' }} />
      <Deco id="chip" w={36} h={36} anim="a-bob a-d2" style={{ bottom: 60, right: '3%' }} />
      <Deco id="arc" w={44} h={44} anim="a-float" style={{ bottom: 20, left: '46%', color: C.yellow }} />

      <div className="wrap wrap-web">
        <div className="web-top">
          <Head label="BAB 5" color="#0E4F4A" title="Petualangan web dev.">
            Dari sensor di greenhouse sampai marketplace CPNS. Ada masalah? Rico bikinin web-nya.
          </Head>
          <div className="web-mascot hide-sm" data-build="box">
            <Use id="pose-laptop" label="Maskot Rico ngoding di laptop" className="web-pose" />
            <div className="card tilt-l code-chip dark">&lt;/&gt;</div>
            <div className="card tilt-r code-chip">
              npm run dev<span className="blink">_</span>
            </div>
            <Use id="star" w={36} h={36} className="web-star a-twinkle" />
          </div>
        </div>

        <div className="grid grid-3">
          {projects.map((p) => (
            <article key={p.title} className={`card lift ${p.tilt} project`} data-build="box">
              <div className="project-screen" style={{ background: p.screen }}>
                <Art html={p.art} viewBox="0 0 320 150" preserve="xMidYMid meet" label={p.label} />
              </div>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag" style={{ background: p.tagBg }}>
                    {t}
                  </span>
                ))}
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              {p.link && (
                <a href={p.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  {p.cta} <span aria-hidden="true">→</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- bab 6 skill tree */

export function Skill() {
  return (
    <section id="skill" className="band band-white">
      <div className="wrap rel split">
        <Deco id="trophy" w={120} h={130} anim="a-bob" style={{ top: 20, right: 380, rotate: '-6deg' }} />
        <Deco id="star" w={34} h={34} anim="a-twinkle" style={{ top: 24, right: 520 }} />
        <Deco id="spark" w={30} h={30} anim="a-spin" style={{ top: 40, right: 340 }} />

        <div className="split-main">
          <div className="sec-head">
            <span className="sec-label" style={{ color: '#6B5B00' }} data-build="pop">
              BAB 6
            </span>
            <h2 data-build="text">Side quest &amp; skill tree.</h2>
          </div>
          <div className="grid grid-3">
            {sideQuests.map((q) => (
              <div key={q.title} className={`card lift ${q.tilt} quest`} style={{ background: q.bg }} data-build="box">
                <div className="strong">{q.title}</div>
                <div>{q.text}</div>
              </div>
            ))}
          </div>
          <ul className="skills">
            {skills.map((s) => (
              <li key={s} className="skill" data-build="pop">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="skill-art hide-sm" data-build="box">
          <div className="card tilt-r skill-back" style={{ background: C.teal }} />
          <Use id="pose-idea" label="Maskot Rico mendapat ide" className="skill-pose a-bob" />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- satu rico, banyak */

export function Peran() {
  return (
    <section aria-label="Para Rico" className="peran" style={{ background: C.orange }}>
      <div className="wrap peran-wrap">
        <h2 data-build="text">Satu Rico, banyak peran.</h2>
        <ul className="peran-row">
          {roles.map((r, i) => (
            <li key={r.pose} data-build="pop">
              <Use
                id={r.pose}
                label={r.label}
                className="peran-pose"
                style={{ '--i': i, '--w': r.w, '--h': r.h } as CSSProperties}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ epilog */

const ICON = { fill: 'none', stroke: '#1B1B1B', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="3" fill="#fff" stroke="#1B1B1B" strokeWidth="2.2" />
      <path d="M3.5 6.5 L12 13 L20.5 6.5" {...ICON} strokeWidth={2.2} />
    </svg>
  );
}

/** Ikon sosmed sederhana bergaya garis tebal, senada dengan ilustrasi. */
function SocialIcon({ name }: { name: string }) {
  let body;
  switch (name) {
    case 'instagram':
      body = (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5.5" {...ICON} />
          <circle cx="12" cy="12" r="4.2" {...ICON} />
          <circle cx="17.3" cy="6.7" r="1.3" fill="#1B1B1B" />
        </>
      );
      break;
    case 'tiktok':
      body = (
        <>
          <path d="M13 3 V15.5 A3.8 3.8 0 1 1 9.2 11.7" {...ICON} />
          <path d="M13 3 C13.6 6 15.6 7.8 19 8" {...ICON} />
        </>
      );
      break;
    case 'linkedin':
      body = (
        <>
          <rect x="3" y="3" width="18" height="18" rx="4" {...ICON} />
          <path d="M8 10.5 V16.5 M8 7.4 V7.6 M11.5 16.5 V10.5 M11.5 13 C11.5 11.2 12.6 10.4 13.9 10.4 C15.3 10.4 16 11.3 16 13 V16.5" {...ICON} />
        </>
      );
      break;
    case 'threads':
      body = (
        <path
          d="M17.5 8.2 C16.6 5.4 14.6 4 12 4 C7.6 4 5 7.2 5 12 C5 16.8 7.6 20 12 20 C15.6 20 18.3 17.9 18.3 15 C18.3 12.2 15.8 11 13 11 C10.4 11 8.9 12.3 8.9 13.9 C8.9 15.4 10.2 16.4 11.8 16.4 C14.6 16.4 15.6 14 15.3 10.6 C15 8.6 13.9 7.6 12.3 7.6 C11.2 7.6 10.3 8 9.7 8.8"
          {...ICON}
        />
      );
      break;
    default:
      body = <path d="M14.5 21 V12.5 H17.5 M14.5 21 M10.5 12.5 H14.5 M14.5 12.5 V9 C14.5 7.4 15.4 6.5 17 6.5 H18" {...ICON} />;
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      {body}
    </svg>
  );
}

export function Epilog() {
  return (
    <section id="kontak" className="wrap rel epilog">
      <Deco id="cloud" w={120} h={60} anim="a-drift" keep style={{ top: 30, left: 40 }} />
      <Deco id="minidrone" w={80} h={40} anim="a-hover" keep style={{ top: 50, right: 120, rotate: '8deg' }} />
      <Deco id="sun" w={60} h={60} anim="a-spin-slow" keep style={{ top: 20, right: 30 }} />
      <Deco id="cube" w={50} h={50} anim="a-float" style={{ top: 70, left: 220, color: C.green }} />
      <Deco id="arc" w={46} h={46} anim="a-float a-d2" style={{ top: 40, right: 280, color: C.teal }} />
      <Deco id="loop" w={120} h={40} anim="a-bob" style={{ bottom: 40, left: '44%' }} />
      <Deco id="bush" w={180} h={90} keep style={{ bottom: 20, left: 0 }} />
      <Deco id="bush" w={200} h={100} keep style={{ bottom: 20, right: 0 }} />

      <div className="card epilog-card" style={{ background: C.yellow }} data-build="box">
        <Use id="pose-yeay" label="Maskot Rico bersorak" className="epilog-pose" />
        <div className="stack-18">
          <span className="strong-sm">EPILOG</span>
          <h2>Ceritanya belum tamat. Ayo ngobrol!</h2>
          <div className="cta-row left">
            <a href={`mailto:${links.email}`} className="btn btn-mail" style={{ background: C.orange }}>
              <MailIcon />
              {links.email}
            </a>
          </div>
          <p>Bandar Lampung · Jakarta</p>
          <div className="socials">
            <span className="strong-sm">Mampir juga ke sosmedku:</span>
            <ul className="social-row">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    className="social"
                    style={{ background: s.bg }}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.name} ${s.handle}`}
                    title={`${s.name} · ${s.handle}`}
                  >
                    <SocialIcon name={s.icon} />
                    <span className="social-name">{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Use id="star" w={44} h={44} className="epilog-star a-twinkle" />
        <Use id="star" w={28} h={28} className="epilog-star2 a-twinkle a-d2" />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Rico Prediansyah</span>
      <a href="#prolog">Kembali ke atas ↑</a>
    </footer>
  );
}
