import { useEffect, useRef, useState, type AnimationEvent, type PointerEvent } from 'react';
import { C, hangTags, nav } from '../data';
import { Use } from './Svg';

function Logo({ build }: { build?: boolean }) {
  return (
    <a href="#prolog" className="logo" data-build={build ? 'pop' : undefined}>
      <span className="logo-face" style={{ background: C.yellow }}>
        <Use id="head" w={54} h={58} />
      </span>
      <span className="logo-text">ricoo!</span>
    </a>
  );
}

/** Isi menu garis-tiga (HP/tablet): Kontak sudah tampil di luar menu. */
const sheetNav = nav.filter((n) => n.id !== 'kontak');

/** Tombol Kontak yang tetap terlihat di samping tombol menu (hanya mode garis-tiga). */
function ContactPill({ active }: { active?: string }) {
  return (
    <a
      href="#kontak"
      className={`nav-pill is-accent nav-contact${active === 'kontak' ? ' is-current' : ''}`}
      aria-current={active === 'kontak' ? 'true' : undefined}
    >
      Kontak
    </a>
  );
}

function Links({ active, onPick, items = nav }: { active?: string; onPick?: () => void; items?: typeof sheetNav }) {
  return (
    <>
      {items.map((n) => (
        <a
          key={n.id}
          href={`#${n.id}`}
          className={`nav-pill${n.accent ? ' is-accent' : ''}${active === n.id ? ' is-current' : ''}`}
          aria-current={active === n.id ? 'true' : undefined}
          onClick={onPick}
        >
          {n.label}
        </a>
      ))}
    </>
  );
}

function MenuToggle({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      className={`menu-toggle${open ? ' is-open' : ''}`}
      aria-expanded={open}
      aria-label={open ? 'Tutup menu' : 'Buka menu'}
      onClick={onToggle}
    >
      <span />
      <span />
      <span />
    </button>
  );
}

function useMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  return { open, toggle: () => setOpen((o) => !o), close: () => setOpen(false) };
}

/** Tag gantung "disenggol": berayun kencang ke arah gerakan pointer, lalu reda. */
function nudge(e: PointerEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  if (el.classList.contains('is-wobble') && e.type === 'pointerover') return;
  el.style.setProperty('--dir', e.movementX < 0 ? '-1' : '1');
  el.classList.remove('is-wobble');
  void el.offsetWidth; // restart animasi
  el.classList.add('is-wobble');
}

function settle(e: AnimationEvent<HTMLDivElement>) {
  if (e.animationName === 'hang-wobble') e.currentTarget.classList.remove('is-wobble');
}

/** Header besar di dalam hero (sesuai desain), dengan tag gantung yang berayun. */
export function HeroHeader() {
  const menu = useMenu();
  return (
    <header className="hero-header">
      <Logo build />
      <nav aria-label="Bab" className="nav-desktop" data-build="box">
        <Links />
      </nav>
      <ContactPill />
      <MenuToggle open={menu.open} onToggle={menu.toggle} />
      {menu.open && (
        <nav aria-label="Bab" className="nav-sheet">
          <Links onPick={menu.close} items={sheetNav} />
        </nav>
      )}
      <div className="hang-row" aria-hidden="true">
        {hangTags.map((t) => (
          <div className="hang" key={t.label}>
            <div className="hang-inner" onPointerOver={nudge} onPointerDown={nudge} onAnimationEnd={settle}>
              <span className="hang-pin" />
              <span className="hang-string" style={{ height: t.len }} />
              <span className={`hang-tag${t.mono ? ' is-mono' : ''}`} style={{ background: t.bg }} data-build="pop">
                {t.icon && <Use id={t.icon} w={t.w} h={t.h} />}
                {t.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}

/** Nav ringkas yang turun dari atas setelah melewati hero + progress bar cerita. */
export function FloatingNav() {
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState<string>('');
  const bar = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const menu = useMenu();

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      const hero = document.getElementById('prolog');
      const limit = hero ? hero.offsetHeight - 120 : 600;
      setShown(y > limit);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Tandai bab yang sedang dibaca.
  useEffect(() => {
    const els = nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    // Saat tersembunyi, nav tidak bisa difokus lewat keyboard.
    wrap.current?.toggleAttribute('inert', !shown);
    if (!shown) menu.close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shown]);

  return (
    <>
      <div className="story-progress" aria-hidden="true">
        <div ref={bar} />
      </div>
      <div ref={wrap} className={`float-nav${shown ? ' is-shown' : ''}`}>
        <Logo />
        <nav aria-label="Bab" className="nav-desktop">
          <Links active={active} />
        </nav>
        <ContactPill active={active} />
        <MenuToggle open={menu.open} onToggle={menu.toggle} />
        {menu.open && (
          <nav aria-label="Bab" className="nav-sheet">
            <Links active={active} onPick={menu.close} items={sheetNav} />
          </nav>
        )}
      </div>
    </>
  );
}
