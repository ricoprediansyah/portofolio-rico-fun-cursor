import type { CSSProperties } from 'react';
import chars from '../art/chars';
import sprites from '../art/sprites';

/** Sprite global: semua simbol karakter & ornamen. Render sekali di root. */
export function Sprites() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs dangerouslySetInnerHTML={{ __html: sprites + chars }} />
    </svg>
  );
}

interface UseProps {
  id: string;
  w?: number | string;
  h?: number | string;
  label?: string;
  className?: string;
  style?: CSSProperties;
}

/** Pakai satu simbol dari sprite, mis. <Use id="pose-yeay" w={120} h={170} />. */
export function Use({ id, w, h, label, className, style }: UseProps) {
  // karakter Rico bisa disorot (goyang) & diklik (lompat), lihat .char di styles.css
  const isChar = id.startsWith('pose-') || id.startsWith('rk-p-');
  return (
    <svg
      width={w}
      height={h}
      className={isChar ? `${className ?? ''} char` : className}
      style={style}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      <use href={`#${id}`} />
    </svg>
  );
}

interface ArtProps {
  html: string;
  viewBox: string;
  label?: string;
  className?: string;
  preserve?: string;
  style?: CSSProperties;
}

/** Ilustrasi inline dari fragment SVG di src/art/fragments.ts. */
export function Art({ html, viewBox, label, className, preserve, style }: ArtProps) {
  return (
    <svg
      viewBox={viewBox}
      className={className}
      style={style}
      preserveAspectRatio={preserve}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
