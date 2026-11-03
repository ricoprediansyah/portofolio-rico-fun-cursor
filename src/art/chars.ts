// Karakter Rico versi gambar (PNG transparan → WebP), dibungkus jadi <symbol>
// dengan id yang sama seperti sprite lama, jadi semua <use href="#..."> tetap jalan.
import drone from '../assets/char/drone.webp';
import head from '../assets/char/head.webp';
import helmetB from '../assets/char/helmet-b.webp';
import helmet from '../assets/char/helmet.webp';
import ideaB from '../assets/char/idea-b.webp';
import idea from '../assets/char/idea.webp';
import laptopB from '../assets/char/laptop-b.webp';
import laptop from '../assets/char/laptop.webp';
import micB from '../assets/char/mic-b.webp';
import mic from '../assets/char/mic.webp';
import pilotBBody from '../assets/char/pilot-b-body.webp';
import pilotBDrone from '../assets/char/pilot-b-drone.webp';
import pilotBody from '../assets/char/pilot-body.webp';
import pilotDrone from '../assets/char/pilot-drone.webp';
import point from '../assets/char/point.webp';
import sceneImg from '../assets/char/scene.webp';
import sit from '../assets/char/sit.webp';
import togaB from '../assets/char/toga-b.webp';
import toga from '../assets/char/toga.webp';
import waveB from '../assets/char/wave-b.webp';
import wave from '../assets/char/wave.webp';
import yeayB from '../assets/char/yeay-b.webp';
import yeay from '../assets/char/yeay.webp';

/** Gambar latar prolog (pegunungan, bank, tambak, greenhouse) beserta ukuran aslinya. */
export const scene = { src: sceneImg, w: 2014, h: 766 };

// id simbol -> [url, lebar, tinggi]
const list: Record<string, [string, number, number]> = {
  head: [head, 247, 260],
  'head-happy': [head, 247, 260],
  minidrone: [drone, 520, 224],
  'rk-p-sit': [sit, 385, 560],
  'rk-p-point': [point, 391, 560],
  'rk-p-wave': [waveB, 329, 560],
  'pose-wave': [wave, 293, 560],
  'pose-toga': [toga, 313, 560],
  'pose-toga-b': [togaB, 351, 560],
  'pose-mic': [mic, 314, 560],
  'pose-mic-b': [micB, 362, 560],
  'pose-helmet': [helmet, 302, 560],
  'pose-helmet-b': [helmetB, 299, 560],
  'pose-laptop': [laptop, 270, 560],
  'pose-laptop-b': [laptopB, 280, 560],
  'pose-idea': [idea, 329, 560],
  'pose-idea-b': [ideaB, 319, 560],
  'pose-yeay': [yeay, 364, 560],
  'pose-yeay-b': [yeayB, 338, 560],
};

const single = Object.entries(list).map(
  ([id, [url, w, h]]) =>
    `<symbol id="${id}" viewBox="0 0 ${w} ${h}"><image href="${url}" width="${w}" height="${h}"></image></symbol>`,
);

// Pilot drone: karakter & drone dipisah, drone terbang sendiri (.a-fly).
// Koordinat = posisi masing-masing potongan di gambar aslinya.
type Part = [string, number, number, number, number];
const pilotSym = (id: string, w: number, h: number, body: Part, drone: Part) => {
  const img = ([url, x, y, pw, ph]: Part) =>
    `<image href="${url}" x="${x}" y="${y}" width="${pw}" height="${ph}"></image>`;
  return `<symbol id="${id}" viewBox="0 0 ${w} ${h}" overflow="visible">${img(body)}<g class="a-fly">${img(drone)}</g></symbol>`;
};

const chars = [
  ...single,
  pilotSym('rk-p-lookup', 521, 700, [pilotBBody, 2, 26, 311, 672], [pilotBDrone, 225, 2, 294, 178]),
  pilotSym('pose-drone', 473, 704, [pilotBody, 1, 13, 297, 689], [pilotDrone, 211, 2, 260, 178]),
].join('\n');

export default chars;
