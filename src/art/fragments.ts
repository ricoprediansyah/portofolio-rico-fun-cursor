// Ilustrasi SVG diambil dari desain "Portofolio Rico - Story.html".
// Isinya fragment (tanpa tag <svg>), dirender lewat komponen <Art />.
import { scene } from './chars';

export const prolog = `
<rect x="0" y="0" width="1440" height="900" fill="#86CDF3"></rect>
<g class="a-spin-slow"><path d="M140 132 V114 M140 268 V286 M72 200 H54 M208 200 H226 M92 152 L80 140 M188 248 L200 260 M188 152 L200 140 M92 248 L80 260" stroke="#1B1B1B" stroke-width="5" stroke-linecap="round"></path></g>
<circle cx="140" cy="200" r="48" fill="#FFE36E" stroke="#1B1B1B" stroke-width="4"></circle>
<g class="a-drift"><use href="#cloud" x="30" y="300" width="170" height="85"></use></g>
<g class="a-drift a-d2"><use href="#cloud" x="1210" y="130" width="190" height="95"></use></g>
<g class="a-drift a-d3"><use href="#cloud" x="1180" y="300" width="130" height="65"></use></g>
<g class="a-twinkle"><use href="#star" x="260" y="120" width="34" height="34"></use></g>
<g class="a-twinkle a-d2"><use href="#star" x="1120" y="70" width="30" height="30"></use></g>
<g class="a-twinkle a-d3"><use href="#star" x="1380" y="260" width="28" height="28"></use></g>
<use href="#cube" x="250" y="330" width="46" height="46" style="color: #F7CDB6"></use>
<use href="#arc" x="1100" y="360" width="44" height="44" style="color: #EEF15A"></use>
<g class="a-hover"><use href="#minidrone" x="1230" y="240" width="120" height="60" transform="rotate(8 1290 270)"></use>
<path class="a-pulse" d="M1270 310 Q1290 326 1310 310 M1262 324 Q1290 348 1318 324" fill="none" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path></g>

<image href="${scene.src}" x="-4" y="${900 - Math.round((1448 * scene.h) / scene.w)}" width="1448" height="${Math.round((1448 * scene.h) / scene.w)}" preserveAspectRatio="xMidYMax meet"></image>
<g class="a-flutter"><use href="#butterfly" x="250" y="560" width="36" height="27"></use></g>
<g class="a-float"><use href="#banknote" x="1050" y="176" width="74" height="42" transform="rotate(-12 1087 197)"></use></g>
<g class="a-bob"><g class="a-coin"><use href="#coin" x="1010" y="520" width="34" height="34"></use></g></g>
<g class="a-bob a-d2"><g class="a-coin a-d2"><use href="#coin" x="800" y="540" width="28" height="28"></use></g></g>
<g class="a-bob a-d3"><g class="a-coin a-d3"><use href="#coin" x="1060" y="470" width="22" height="22"></use></g></g>
<g class="a-bob"><g class="a-coin"><use href="#coin" x="368" y="430" width="32" height="32"></use></g></g>
<g class="a-bob a-d2"><g class="a-coin a-d3"><use href="#coin" x="226" y="410" width="26" height="26"></use></g></g>
`;

export const droneHero = `
<use href="#cloud" x="20" y="30" width="80" height="40"></use>
<use href="#cloud" x="290" y="130" width="70" height="35"></use>
<use href="#star" x="200" y="20" width="24" height="24"></use>
<path d="M0 212 Q200 182 400 210 L400 240 L0 240 Z" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<use href="#bush" x="300" y="196" width="100" height="50"></use>
<use href="#rk-p-lookup" x="110" y="14" width="170" height="228"></use>
`;

export const dronila = `
<path d="M0 178 Q150 160 300 176 L300 200 L0 200 Z" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<path d="M208 46 L164 166 L276 166 L232 46 Z" fill="#FFFFFF" opacity="0.45" stroke="#1B1B1B" stroke-width="2" stroke-dasharray="6 5" stroke-linejoin="round"></path>
<use href="#palm" x="166" y="92" width="62" height="86"></use>
<use href="#palm" x="224" y="106" width="52" height="72"></use>
<g class="a-hover"><use href="#minidrone" x="180" y="12" width="80" height="40"></use></g>
<use href="#rk-p-point" x="14" y="26" width="112" height="160"></use>
<g class="a-drive"><use href="#rover" x="108" y="126" width="74" height="46"></use></g>
`;

export const rubus = `
<path d="M0 178 Q150 160 300 176 L300 200 L0 200 Z" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<rect x="196" y="56" width="10" height="118" fill="#B9C2CC" stroke="#1B1B1B" stroke-width="3"></rect>
<path d="M160 50 L250 30 L262 54 L172 74 Z" fill="#3B82D9" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<path d="M190 44 L202 68 M220 37 L232 61 M166 62 L256 42" stroke="#BFE8FF" stroke-width="2"></path>
<rect x="208" y="96" width="58" height="44" rx="8" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></rect>
<text x="237" y="116" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="13" fill="#1B1B1B">RUBUS</text>
<circle cx="225" cy="128" r="3.5" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="1.5"></circle><circle cx="237" cy="128" r="3.5" fill="#EEF15A" stroke="#1B1B1B" stroke-width="1.5"></circle><circle cx="249" cy="128" r="3.5" fill="#F06A4A" stroke="#1B1B1B" stroke-width="1.5"></circle>
<path d="M272 82 Q282 92 272 102 M280 74 Q296 92 280 110" fill="none" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
<use href="#bush" x="240" y="152" width="60" height="30"></use>
<use href="#rk-p-sit" x="70" y="28" width="110" height="160"></use>
`;

export const udang = `
<path d="M0 178 Q150 160 300 176 L300 200 L0 200 Z" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<ellipse cx="214" cy="150" rx="82" ry="30" fill="#8FE0D8" stroke="#1B1B1B" stroke-width="3"></ellipse>
<path d="M160 146 Q170 140 180 146 M232 158 Q242 152 252 158 M196 136 Q204 131 212 136" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"></path>
<path d="M234 98 Q264 88 268 112 Q268 130 248 132 L246 122 Q258 120 258 110 Q254 100 238 106 Z" fill="#F4A73E" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<path d="M248 98 L250 106 M258 100 L254 108 M264 110 L257 112" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round"></path>
<path d="M246 124 L234 118 L236 134 Z" fill="#F4A73E" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<path d="M236 102 Q222 92 212 96 M236 100 Q226 84 216 82" fill="none" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round"></path>
<circle cx="240" cy="101" r="2.5" fill="#1B1B1B"></circle>
<rect x="176" y="60" width="8" height="86" fill="#B9C2CC" stroke="#1B1B1B" stroke-width="3"></rect>
<rect x="160" y="62" width="40" height="28" rx="6" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></rect>
<text x="180" y="81" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="12" fill="#1B1B1B">pH 7.8</text>
<path d="M196 46 Q204 54 196 62 M204 40 Q216 54 204 68" fill="none" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
<use href="#rk-p-wave" x="24" y="28" width="96" height="160"></use>
`;

export const iconGreenhouse = `
<path d="M10 70 L70 70 L70 36 L40 14 L10 36 Z" fill="#E4F7E8" stroke="#1B1B1B" stroke-width="4" stroke-linejoin="round"></path><path d="M30 70 V54 Q30 44 40 44 Q50 44 50 54 V70" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="4"></path><path d="M40 44 Q32 34 40 26 Q48 34 40 44" fill="#1F6B3A" stroke="#1B1B1B" stroke-width="3"></path>
`;

export const iconTsunami = `
<path d="M4 52 Q20 30 36 52 T68 52 T80 50 L80 80 L4 80 Z" fill="#8FE0D8" stroke="#1B1B1B" stroke-width="4" stroke-linejoin="round"></path><rect x="50" y="10" width="8" height="40" fill="#B9C2CC" stroke="#1B1B1B" stroke-width="3"></rect><path d="M40 8 L68 8 L60 22 L48 22 Z" fill="#F4A73E" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
`;

export const toolPhotoshop = `
<path d="M28 4 L15 21" stroke="#1B1B1B" stroke-width="5" stroke-linecap="round"></path><path d="M11 19 Q4 23 6 31 Q15 33 18 24 Z" fill="#F4A73E" stroke="#1B1B1B" stroke-width="2.5" stroke-linejoin="round"></path>
`;

export const toolIllustrator = `
<path d="M18 3 L29 18 L18 33 L7 18 Z" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="2.5" stroke-linejoin="round"></path><path d="M18 3 V15" stroke="#1B1B1B" stroke-width="2.5"></path><circle cx="18" cy="18" r="3" fill="#1B1B1B"></circle>
`;

export const toolPremiere = `
<rect x="4" y="8" width="28" height="20" rx="3" fill="#4A4F5A" stroke="#1B1B1B" stroke-width="2.5"></rect><path d="M15 13 L23 18 L15 23 Z" fill="#FFFFFF"></path><path d="M8 11 V12 M8 24 V25 M28 11 V12 M28 24 V25" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"></path>
`;

export const toolFigma = `
<circle cx="11" cy="11" r="7" fill="#F4A73E" stroke="#1B1B1B" stroke-width="2.5"></circle><rect x="19" y="4" width="13" height="13" rx="2" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="2.5"></rect><path d="M10 21 L17 32 L3 32 Z" fill="#EEF15A" stroke="#1B1B1B" stroke-width="2.5" stroke-linejoin="round"></path><path d="M22 22 L32 32 M32 22 L22 32" stroke="#1B1B1B" stroke-width="2.5" stroke-linecap="round"></path>
`;

export const toolCanva = `
<path d="M18 4 Q33 4 33 17 Q33 24 26 23 Q21 22 22 27 Q23 33 16 32 Q3 30 3 18 Q3 4 18 4 Z" fill="#F7CDB6" stroke="#1B1B1B" stroke-width="2.5"></path><circle cx="11" cy="15" r="3" fill="#3B82D9"></circle><circle cx="18" cy="10" r="3" fill="#7DDB8A"></circle><circle cx="25" cy="14" r="3" fill="#F4A73E"></circle><circle cx="11" cy="23" r="3" fill="#EEF15A"></circle>
`;

export const toolCapcut = `
<circle cx="9" cy="27" r="5" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="2.5"></circle><circle cx="27" cy="27" r="5" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="2.5"></circle><path d="M12 23 L28 4 M24 23 L8 4" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
`;

export const projGreenhouse = `
<rect x="4" y="4" width="92" height="64" rx="12" fill="#EEF15A" stroke="#1B1B1B" stroke-width="3"></rect>
<text x="16" y="34" font-family="Outfit" font-weight="700" font-size="22" fill="#1B1B1B">28°C</text><text x="16" y="56" font-family="Outfit" font-size="12" fill="#1B1B1B">Suhu</text>
<rect x="4" y="80" width="92" height="64" rx="12" fill="#8FE0D8" stroke="#1B1B1B" stroke-width="3"></rect>
<text x="16" y="110" font-family="Outfit" font-weight="700" font-size="22" fill="#1B1B1B">72%</text><text x="16" y="132" font-family="Outfit" font-size="12" fill="#1B1B1B">Kelembapan</text>
<rect x="108" y="4" width="208" height="140" rx="12" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></rect>
<path class="a-draw" pathLength="1" d="M122 120 L156 96 L186 106 L216 66 L246 80 L276 40 L302 52" fill="none" stroke="#1F6B3A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
<circle cx="276" cy="40" r="6" fill="#F4A73E" stroke="#1B1B1B" stroke-width="2"></circle>
<path d="M122 130 H302" stroke="#1B1B1B" stroke-width="2"></path>
`;

export const projSawit = `
<path d="M0 140 H320" stroke="#1B1B1B" stroke-width="3"></path>
<rect x="70" y="80" width="12" height="60" fill="#A0703C" stroke="#1B1B1B" stroke-width="3"></rect>
<path d="M76 82 Q40 60 26 80 M76 82 Q50 40 64 30 M76 82 Q100 40 92 28 M76 82 Q112 60 128 78" fill="none" stroke="#1F6B3A" stroke-width="9" stroke-linecap="round"></path>
<rect class="a-march" x="18" y="18" width="118" height="126" rx="6" fill="none" stroke="#F06A4A" stroke-width="4" stroke-dasharray="10 6"></rect>
<rect x="18" y="0" width="96" height="20" rx="4" fill="#F06A4A"></rect><text x="24" y="15" font-family="Outfit" font-weight="700" font-size="13" fill="#FFFFFF">sehat 0.94</text>
<rect x="210" y="96" width="10" height="44" fill="#A0703C" stroke="#1B1B1B" stroke-width="3"></rect>
<path d="M215 98 Q190 84 180 98 M215 98 Q198 70 206 62 M215 98 Q236 70 230 62 M215 98 Q240 84 252 96" fill="none" stroke="#B5A33A" stroke-width="8" stroke-linecap="round"></path>
<rect class="a-march" x="172" y="52" width="90" height="92" rx="6" fill="none" stroke="#1E4FA0" stroke-width="4" stroke-dasharray="10 6"></rect>
<rect x="172" y="34" width="84" height="20" rx="4" fill="#1E4FA0"></rect><text x="178" y="49" font-family="Outfit" font-weight="700" font-size="13" fill="#FFFFFF">cek 0.71</text>
`;

export const projMoneymi = `
<rect x="10" y="40" width="120" height="90" rx="16" fill="#F4A73E" stroke="#1B1B1B" stroke-width="4"></rect>
<rect x="84" y="68" width="54" height="34" rx="10" fill="#FFF8D6" stroke="#1B1B1B" stroke-width="4"></rect>
<circle cx="104" cy="85" r="6" fill="#1B1B1B"></circle>
<circle cx="56" cy="26" r="16" fill="#EEF15A" stroke="#1B1B1B" stroke-width="3"></circle><text x="50" y="32" font-family="Outfit" font-weight="800" font-size="16" fill="#1B1B1B">Rp</text>
<rect x="156" y="10" width="154" height="130" rx="12" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></rect>
<rect x="172" y="96" width="22" height="30" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="2"></rect>
<rect x="204" y="70" width="22" height="56" fill="#F06A4A" stroke="#1B1B1B" stroke-width="2"></rect>
<rect x="236" y="84" width="22" height="42" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="2"></rect>
<rect x="268" y="50" width="22" height="76" fill="#F06A4A" stroke="#1B1B1B" stroke-width="2"></rect>
<path d="M172 28 H260 M172 44 H230" stroke="#1B1B1B" stroke-width="4" stroke-linecap="round"></path>
`;

export const projEommy = `
<rect x="10" y="10" width="110" height="134" rx="10" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3" transform="rotate(-5 65 77)"></rect>
<text x="24" y="36" font-family="Outfit" font-weight="800" font-size="14" fill="#1B1B1B">TRYOUT SKD</text>
<circle cx="30" cy="60" r="7" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="2"></circle><path d="M44 60 H100" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
<circle cx="30" cy="84" r="7" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="2"></circle><path d="M44 84 H92" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
<circle cx="30" cy="108" r="7" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="2"></circle><path d="M44 108 H96" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
<path d="M140 30 L190 22 L190 130 L140 138 Z" fill="#F4A73E" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<path d="M190 22 L240 30 L240 138 L190 130 Z" fill="#EEF15A" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<text x="146" y="60" font-family="Outfit" font-weight="800" font-size="13" fill="#1B1B1B">e-book</text>
<rect x="250" y="40" width="64" height="86" rx="10" fill="#8FE0D8" stroke="#1B1B1B" stroke-width="3"></rect>
<path d="M262 60 H302 M262 76 H296 M262 92 H302 M262 108 H290" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
`;

export const projCassava = `
<g class="a-spin-slow"><circle cx="160" cy="75" r="62" fill="none" stroke="#1F6B3A" stroke-width="6" stroke-dasharray="90 40"></circle>
<path d="M214 40 L226 52 L210 58" fill="none" stroke="#1F6B3A" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M106 110 L94 98 L110 92" fill="none" stroke="#1F6B3A" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path></g>
<path d="M130 60 Q160 48 196 70 Q170 104 132 92 Q118 76 130 60 Z" fill="#C98B4A" stroke="#1B1B1B" stroke-width="4" stroke-linejoin="round"></path>
<path d="M126 92 Q150 84 186 104 Q162 132 128 118 Q114 104 126 92 Z" fill="#B97A3C" stroke="#1B1B1B" stroke-width="4" stroke-linejoin="round"></path>
<path d="M150 66 Q160 62 172 70 M146 100 Q156 96 168 104" fill="none" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
<path d="M124 64 Q110 40 120 24 Q132 40 124 64 Z" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="3"></path>
<path d="M124 64 Q100 52 92 34 Q114 36 124 64 Z" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="3"></path>
<rect x="246" y="96" width="56" height="40" rx="8" fill="#EEF15A" stroke="#1B1B1B" stroke-width="3"></rect>
<text x="254" y="122" font-family="Outfit" font-weight="800" font-size="13" fill="#1B1B1B">produk</text>
<rect x="18" y="18" width="56" height="40" rx="8" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></rect>
<text x="26" y="44" font-family="Outfit" font-weight="800" font-size="13" fill="#1B1B1B">limbah</text>
`;

export const projReminder = `
<path d="M70 110 L70 70 Q70 34 100 30 Q130 34 130 70 L130 110 Z" fill="#F4C430" stroke="#1B1B1B" stroke-width="4" stroke-linejoin="round"></path>
<rect x="58" y="106" width="84" height="14" rx="7" fill="#F4C430" stroke="#1B1B1B" stroke-width="4"></rect>
<circle cx="100" cy="130" r="9" fill="#1B1B1B"></circle>
<circle cx="100" cy="24" r="7" fill="#F4C430" stroke="#1B1B1B" stroke-width="3"></circle>
<path d="M44 50 Q36 70 44 90 M30 44 Q20 70 30 96 M156 50 Q164 70 156 90 M170 44 Q180 70 170 96" fill="none" stroke="#1B1B1B" stroke-width="4" stroke-linecap="round"></path>
<rect x="196" y="16" width="112" height="120" rx="12" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></rect>
<rect x="208" y="32" width="16" height="16" rx="4" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="3"></rect><path d="M211 40 L215 44 L221 35" fill="none" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path><path d="M232 40 H294" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
<rect x="208" y="62" width="16" height="16" rx="4" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="3"></rect><path d="M211 70 L215 74 L221 65" fill="none" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path><path d="M232 70 H282" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
<rect x="208" y="92" width="16" height="16" rx="4" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></rect><path d="M232 100 H290" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
`;

