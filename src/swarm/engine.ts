/**
 * Swarm Build — sekumpulan kursor yang "menyusun" halaman saat di-scroll.
 *
 * Cara pakai di markup: beri atribut `data-build` pada elemen yang mau dibangun.
 *   data-build="box"  → kursor menarik kotak seleksi dari pojok kiri-atas ke kanan-bawah
 *   data-build="text" → kursor "mengetik" teks baris demi baris
 *   data-build="pop"  → kursor mengklik, elemen muncul memantul
 *
 * Semua animasi berjalan di luar React (requestAnimationFrame + manipulasi DOM langsung)
 * supaya tetap mulus 60fps tanpa re-render.
 */

export type BuildKind = 'box' | 'text' | 'pop';

export interface SwarmStatus {
  running: boolean;
  remaining: number;
  total: number;
}

type Listener = (s: SwarmStatus) => void;

interface Job {
  el: HTMLElement;
  kind: BuildKind;
  queuedAt: number;
  taken: boolean;
}

type Phase = 'idle' | 'fly' | 'work' | 'rest';

interface Agent {
  name: string;
  color: string;
  x: number;
  y: number;
  node: HTMLDivElement;
  box: HTMLDivElement;
  size: HTMLDivElement;
  job: Job | null;
  phase: Phase;
  t0: number;
  dur: number;
  fx: number;
  fy: number;
  bend: number;
  lines: number;
  lh: number;
  revealed: boolean;
  idleAt: number;
  wx: number;
  wy: number;
}

interface Measure {
  a: HTMLElement;
  b: HTMLElement;
  node: HTMLDivElement;
  label: HTMLSpanElement;
  until: number;
}

const CREW = [
  { name: 'Rico', color: '#3B82D9' },
  { name: 'Desainer', color: '#E8453C' },
  { name: 'Pilot Drone', color: '#1F9D55' },
  { name: 'Engineer', color: '#7C4DDB' },
  { name: 'Dev', color: '#E07B00' },
  { name: 'AI', color: '#D6377F' },
];

const CURSOR_SVG =
  '<svg class="swarm-arrow" width="22" height="26" viewBox="0 0 22 26" aria-hidden="true">' +
  '<path d="M3 2 L3 20.5 L8 16 L11.6 24 L15 22.5 L11.4 14.8 L18 14.8 Z" fill="var(--c)" stroke="#1B1B1B" stroke-width="2" stroke-linejoin="round"/>' +
  '</svg>';

const FAILSAFE_MS = 4500;
const SLEEP_AFTER_MS = 2600;

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export class SwarmEngine {
  private layer: HTMLDivElement | null = null;
  private agents: Agent[] = [];
  private queue: Job[] = [];
  private measures: Measure[] = [];
  private targets: HTMLElement[] = [];
  private io: IntersectionObserver | null = null;
  private raf = 0;
  private last = 0;
  private dt = 0;
  private lastBusy = 0;
  private asleep = false;
  private running = false;
  private listeners = new Set<Listener>();

  subscribe(fn: Listener) {
    this.listeners.add(fn);
    fn(this.status());
    return () => {
      this.listeners.delete(fn);
    };
  }

  start() {
    if (this.running) return;
    this.running = true;
    document.documentElement.classList.add('swarm');
    this.targets = Array.from(document.querySelectorAll<HTMLElement>('[data-build]'));
    this.buildLayer();
    this.io = new IntersectionObserver(this.onIntersect, {
      rootMargin: '0px 0px -6% 0px',
      threshold: 0,
    });
    this.targets.forEach((t) => this.io!.observe(t));
    this.last = performance.now();
    this.lastBusy = this.last;
    this.raf = requestAnimationFrame(this.tick);
    this.emit();
  }

  /** Lewati animasi: tampilkan semua konten sekarang juga. */
  skip() {
    this.teardown();
    this.targets.forEach((el) => {
      el.classList.remove('is-building');
      el.classList.add('is-built');
      el.style.clipPath = '';
    });
    document.documentElement.classList.remove('swarm');
    this.emit();
  }

  /** Ulangi animasi untuk semua elemen (yang sedang terlihat dibangun ulang). */
  replay() {
    this.teardown();
    document.querySelectorAll<HTMLElement>('[data-build]').forEach((el) => {
      el.classList.remove('is-built', 'is-building');
      el.style.clipPath = '';
    });
    this.start();
  }

  /** Bersihkan tanpa mengubah status konten (dipakai saat komponen di-unmount). */
  destroy() {
    this.teardown();
    this.listeners.clear();
  }

  // ---------------------------------------------------------------- internal

  private teardown() {
    this.running = false;
    cancelAnimationFrame(this.raf);
    this.io?.disconnect();
    this.io = null;
    this.layer?.remove();
    this.layer = null;
    this.agents = [];
    this.queue = [];
    this.measures = [];
  }

  private status(): SwarmStatus {
    const built = this.targets.filter((t) => t.classList.contains('is-built')).length;
    return { running: this.running, remaining: this.targets.length - built, total: this.targets.length };
  }

  private emit() {
    const s = this.status();
    this.listeners.forEach((fn) => fn(s));
  }

  private buildLayer() {
    const layer = document.createElement('div');
    layer.className = 'swarm-layer';
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);
    this.layer = layer;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const count = vw < 640 ? 4 : vw < 1024 ? 5 : 6;

    this.agents = CREW.slice(0, count).map((c, i) => {
      const box = document.createElement('div');
      box.className = 'swarm-box';
      box.style.setProperty('--c', c.color);
      const size = document.createElement('div');
      size.className = 'swarm-size';
      size.style.setProperty('--c', c.color);
      const node = document.createElement('div');
      node.className = 'swarm-cursor';
      node.style.setProperty('--c', c.color);
      node.innerHTML = `${CURSOR_SVG}<span class="swarm-name">${c.name}</span>`;
      layer.append(box, size, node);

      // Masuk dari tepi kiri/kanan layar secara bergantian.
      const fromRight = i % 2 === 1;
      const agent: Agent = {
        name: c.name,
        color: c.color,
        x: fromRight ? vw + 40 : -40,
        y: vh * (0.25 + 0.55 * ((i * 0.37) % 1)),
        node,
        box,
        size,
        job: null,
        phase: 'idle',
        t0: 0,
        dur: 0,
        fx: 0,
        fy: 0,
        bend: 0,
        lines: 1,
        lh: 0,
        revealed: false,
        idleAt: 0,
        wx: NaN,
        wy: NaN,
      };
      this.place(agent);
      return agent;
    });
  }

  private onIntersect = (entries: IntersectionObserverEntry[]) => {
    const now = performance.now();
    let changed = false;
    for (const e of entries) {
      const el = e.target as HTMLElement;
      if (el.classList.contains('is-built')) continue;
      const r = e.boundingClientRect;
      const job = this.queue.find((j) => j.el === el);

      if (e.isIntersecting) {
        if (!job) {
          const kind = (el.dataset.build as BuildKind) || 'box';
          this.queue.push({ el, kind, queuedAt: now, taken: false });
          changed = true;
        }
      } else if ((r.width === 0 && r.height === 0) || r.bottom < 0) {
        // Tersembunyi (display:none) atau sudah lewat ke atas: langsung tampilkan.
        if (!job || !job.taken) {
          if (job) this.queue.splice(this.queue.indexOf(job), 1);
          this.reveal(el);
        }
      }
    }
    if (changed) {
      this.queue.sort((a, b) =>
        a.el.compareDocumentPosition(b.el) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
      );
    }
  };

  private reveal(el: HTMLElement) {
    if (el.classList.contains('is-built')) return;
    el.style.clipPath = '';
    el.classList.remove('is-building');
    el.classList.add('is-built');
    this.emit();
  }

  private tick = (now: number) => {
    if (!this.running) return;
    this.raf = requestAnimationFrame(this.tick);
    this.dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;

    // Failsafe: jangan biarkan konten kosong terlalu lama kalau antrean menumpuk.
    const stale = this.queue.filter((j) => !j.taken && now - j.queuedAt > FAILSAFE_MS);
    stale.forEach((j) => {
      this.queue.splice(this.queue.indexOf(j), 1);
      this.reveal(j.el);
    });

    const pending = this.queue.reduce((n, j) => n + (j.taken ? 0 : 1), 0);
    const speed = 1 + Math.min(pending, 10) * 0.14;

    let busy = pending > 0;
    for (const a of this.agents) {
      this.step(a, now, speed);
      if (a.phase !== 'idle') busy = true;
    }
    this.updateMeasures(now);

    if (busy) this.lastBusy = now;
    const asleep = now - this.lastBusy > SLEEP_AFTER_MS;
    if (asleep !== this.asleep) {
      this.asleep = asleep;
      this.layer?.classList.toggle('is-asleep', asleep);
    }
  };

  private step(a: Agent, now: number, speed: number) {
    switch (a.phase) {
      case 'idle': {
        const job = this.queue.find((j) => !j.taken);
        if (job) this.assign(a, job, now, speed);
        else this.wander(a, now);
        break;
      }
      case 'fly': {
        const job = a.job!;
        const r = job.el.getBoundingClientRect();
        const [tx, ty] = this.entryPoint(job.kind, r);
        const t = clamp((now - a.t0) / a.dur, 0, 1);
        const e = easeInOut(t);
        const dx = tx - a.fx;
        const dy = ty - a.fy;
        const len = Math.hypot(dx, dy) || 1;
        const cx = (a.fx + tx) / 2 - (dy / len) * a.bend;
        const cy = (a.fy + ty) / 2 + (dx / len) * a.bend;
        const u = 1 - e;
        a.x = u * u * a.fx + 2 * u * e * cx + e * e * tx;
        a.y = u * u * a.fy + 2 * u * e * cy + e * e * ty;
        if (t >= 1) this.beginWork(a, now, r, speed);
        break;
      }
      case 'work':
        this.work(a, now);
        break;
      case 'rest':
        if (now - a.t0 >= a.dur) {
          a.phase = 'idle';
          a.idleAt = now;
          a.wx = NaN;
          a.node.classList.remove('is-active');
        }
        break;
    }
    this.place(a);
  }

  private entryPoint(kind: BuildKind, r: DOMRect): [number, number] {
    if (kind === 'pop') return [r.left + r.width / 2, r.top + r.height / 2];
    if (kind === 'text') return [r.left, r.top + Math.min(r.height / 2, 16)];
    return [r.left, r.top];
  }

  private assign(a: Agent, job: Job, now: number, speed: number) {
    job.taken = true;
    a.job = job;
    a.phase = 'fly';
    a.t0 = now;
    a.fx = a.x;
    a.fy = a.y;
    const r = job.el.getBoundingClientRect();
    const [tx, ty] = this.entryPoint(job.kind, r);
    const dist = Math.hypot(tx - a.x, ty - a.y);
    a.dur = clamp(dist * 0.9, 220, 760) / speed;
    a.bend = (Math.random() - 0.5) * Math.min(dist * 0.5, 160);
    a.node.classList.add('is-active');
  }

  private beginWork(a: Agent, now: number, r: DOMRect, speed: number) {
    const job = a.job!;
    a.phase = 'work';
    a.t0 = now;
    a.revealed = false;

    if (job.kind === 'box') {
      a.dur = clamp(260 + (r.width + r.height) * 0.3, 320, 850) / speed;
      a.box.style.width = '0px';
      a.box.style.height = '0px';
      a.box.style.transform = `translate3d(${r.left}px, ${r.top}px, 0)`;
      a.box.className = 'swarm-box is-on';
      a.size.className = 'swarm-size is-on';
    } else if (job.kind === 'text') {
      const cs = getComputedStyle(job.el);
      let lh = parseFloat(cs.lineHeight);
      if (Number.isNaN(lh)) lh = parseFloat(cs.fontSize) * 1.25;
      a.lines = Math.max(1, Math.round(r.height / lh));
      a.lh = r.height / a.lines;
      const len = (job.el.textContent || '').trim().length;
      a.dur = clamp(len * 16, 280, 1300) / speed;
      job.el.style.clipPath = 'inset(0 100% 100% 0)';
      job.el.classList.add('is-building');
      a.box.style.width = '3px';
      a.box.style.height = `${a.lh * 0.76}px`;
      a.box.style.transform = `translate3d(${r.left}px, ${r.top}px, 0)`;
      a.box.className = 'swarm-caret is-on';
    } else {
      a.dur = 320 / speed;
      a.node.classList.add('is-click');
      this.ripple(r.left + r.width / 2, r.top + r.height / 2, a.color);
    }
  }

  private work(a: Agent, now: number) {
    const job = a.job!;
    const r = job.el.getBoundingClientRect();
    const t = clamp((now - a.t0) / a.dur, 0, 1);

    if (job.kind === 'box') {
      const e = easeInOut(t);
      a.x = r.left + r.width * e;
      a.y = r.top + r.height * e;
      const w = Math.max(0, a.x - r.left);
      const h = Math.max(0, a.y - r.top);
      a.box.style.transform = `translate3d(${r.left}px, ${r.top}px, 0)`;
      a.box.style.width = `${w}px`;
      a.box.style.height = `${h}px`;
      a.size.textContent = `${Math.round(w)} × ${Math.round(h)}`;
      a.size.style.transform = `translate3d(${a.x + 14}px, ${a.y + 16}px, 0)`;
    } else if (job.kind === 'text') {
      const total = t * a.lines;
      const li = Math.min(a.lines - 1, Math.floor(total));
      const frac = t >= 1 ? 1 : total - li;
      const X = frac * r.width;
      const top = li * a.lh;
      const bottom = top + a.lh;
      job.el.style.clipPath =
        `polygon(0 0, ${r.width}px 0, ${r.width}px ${top}px, ${X}px ${top}px, ` +
        `${X}px ${bottom}px, 0 ${bottom}px)`;
      a.x = r.left + X;
      a.y = r.top + top + a.lh * 0.55;
      a.box.style.transform = `translate3d(${r.left + X}px, ${r.top + top + a.lh * 0.12}px, 0)`;
      a.box.style.height = `${a.lh * 0.76}px`;
    } else {
      a.x = r.left + r.width / 2;
      a.y = r.top + r.height / 2;
      if (t > 0.4 && !a.revealed) {
        a.revealed = true;
        a.node.classList.remove('is-click');
        this.reveal(job.el);
      }
    }

    if (t >= 1) this.finish(a, now);
  }

  private finish(a: Agent, now: number) {
    const job = a.job!;
    this.reveal(job.el);
    const i = this.queue.indexOf(job);
    if (i >= 0) this.queue.splice(i, 1);

    if (job.kind === 'box') {
      a.box.className = 'swarm-box is-fade';
      a.size.className = 'swarm-size';
      if (Math.random() < 0.7) this.measure(job.el, now);
    } else {
      a.box.className = 'swarm-box';
    }
    a.node.classList.remove('is-click');
    a.job = null;
    a.phase = 'rest';
    a.t0 = now;
    a.dur = 90;
  }

  private wander(a: Agent, now: number) {
    if (now - a.idleAt < 450) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (Number.isNaN(a.wx) || Math.hypot(a.wx - a.x, a.wy - a.y) < 6) {
      a.wx = clamp(a.x + (Math.random() - 0.5) * 280, 24, vw - 80);
      a.wy = clamp(a.y + (Math.random() - 0.5) * 220, 90, vh - 50);
    }
    const k = 1 - Math.exp(-this.dt * 1.4);
    a.x += (a.wx - a.x) * k;
    a.y += (a.wy - a.y) * k;
  }

  private place(a: Agent) {
    a.node.style.transform = `translate3d(${a.x}px, ${a.y}px, 0)`;
  }

  private ripple(x: number, y: number, color: string) {
    if (!this.layer) return;
    const d = document.createElement('div');
    d.className = 'swarm-ripple';
    d.style.setProperty('--c', color);
    d.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    this.layer.appendChild(d);
    window.setTimeout(() => d.remove(), 600);
  }

  /** Garis ukur merah antara elemen ini dan saudara sebelumnya (ala tool desain). */
  private measure(el: HTMLElement, now: number) {
    if (!this.layer) return;
    let prev = el.previousElementSibling as HTMLElement | null;
    while (prev && !prev.hasAttribute('data-build')) prev = prev.previousElementSibling as HTMLElement | null;
    if (!prev || !prev.classList.contains('is-built')) return;
    const node = document.createElement('div');
    node.className = 'swarm-measure';
    const label = document.createElement('span');
    node.appendChild(label);
    this.layer.appendChild(node);
    this.measures.push({ a: prev, b: el, node, label, until: now + 1100 });
  }

  private updateMeasures(now: number) {
    this.measures = this.measures.filter((m) => {
      if (now > m.until) {
        m.node.remove();
        return false;
      }
      if (m.until - now < 260) m.node.classList.add('is-fade');
      const ra = m.a.getBoundingClientRect();
      const rb = m.b.getBoundingClientRect();
      const s = m.node.style;
      if (ra.bottom <= rb.top + 2) {
        const gap = rb.top - ra.bottom;
        const l = Math.max(ra.left, rb.left);
        const rr = Math.min(ra.right, rb.right);
        const x = rr > l ? (l + rr) / 2 : rb.left + 24;
        m.node.className = 'swarm-measure is-v' + (m.until - now < 260 ? ' is-fade' : '');
        s.transform = `translate3d(${x}px, ${ra.bottom}px, 0)`;
        s.width = '0px';
        s.height = `${Math.max(0, gap)}px`;
        m.label.textContent = String(Math.round(gap));
        if (gap < 4) s.display = 'none';
      } else if (ra.right <= rb.left + 2) {
        const gap = rb.left - ra.right;
        const t = Math.max(ra.top, rb.top);
        const bb = Math.min(ra.bottom, rb.bottom);
        const y = bb > t ? (t + bb) / 2 : rb.top + 24;
        m.node.className = 'swarm-measure is-h' + (m.until - now < 260 ? ' is-fade' : '');
        s.transform = `translate3d(${ra.right}px, ${y}px, 0)`;
        s.height = '0px';
        s.width = `${Math.max(0, gap)}px`;
        m.label.textContent = String(Math.round(gap));
        if (gap < 4) s.display = 'none';
      } else {
        s.display = 'none';
      }
      return true;
    });
  }
}
