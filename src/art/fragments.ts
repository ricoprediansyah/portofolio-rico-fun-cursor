// Ilustrasi SVG diambil dari desain "Portofolio Rico - Story.html".
// Isinya fragment (tanpa tag <svg>), dirender lewat komponen <Art />.

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

<path d="M0 600 L140 480 L300 560 L470 455 L640 560 L800 470 L980 560 L1150 455 L1300 540 L1440 480 L1440 900 L0 900 Z" fill="#A8D5B4" stroke="#1B1B1B" stroke-width="4" stroke-linejoin="round"></path>
<path d="M120 498 L140 480 L162 500 L150 510 L140 498 L128 510 Z M450 473 L470 455 L492 475 L480 485 L470 473 L458 485 Z M780 488 L800 470 L822 490 L810 500 L800 488 L788 500 Z M1130 473 L1150 455 L1172 475 L1160 485 L1150 473 L1138 485 Z" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>

<g transform="translate(1320 400)" stroke="#1B1B1B" stroke-width="4" fill="none" stroke-linecap="round">
<path d="M40 0 L4 260 M40 0 L76 260 M14 190 L66 190 M20 130 L60 130 M28 70 L52 70 M14 190 L60 130 M66 190 L20 130 M20 130 L52 70 M60 130 L28 70"></path>
<circle cx="40" cy="-8" r="9" fill="#F06A4A"></circle>
<path class="a-pulse" d="M64 -24 Q82 -8 64 8 M76 -36 Q104 -8 76 20 M16 -24 Q-2 -8 16 8 M4 -36 Q-24 -8 4 20"></path>
</g>

<path d="M0 690 Q300 610 620 670 Q900 720 1180 650 Q1320 620 1440 650 L1440 900 L0 900 Z" fill="#6CC57C" stroke="#1B1B1B" stroke-width="4" stroke-linejoin="round"></path>

<g transform="translate(835 562)">
<rect x="0" y="54" width="190" height="96" fill="#FFF6D8" stroke="#1B1B1B" stroke-width="4"></rect>
<path d="M-14 56 L95 6 L204 56 Z" fill="#F7CDB6" stroke="#1B1B1B" stroke-width="4" stroke-linejoin="round"></path>
<rect x="-10" y="48" width="210" height="12" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="4"></rect>
<rect x="18" y="64" width="18" height="76" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></rect>
<rect x="58" y="64" width="18" height="76" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></rect>
<rect x="114" y="64" width="18" height="76" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></rect>
<rect x="154" y="64" width="18" height="76" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></rect>
<rect x="82" y="96" width="26" height="54" rx="4" fill="#3B82D9" stroke="#1B1B1B" stroke-width="3"></rect>
<rect x="-14" y="146" width="218" height="14" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="4"></rect>
<circle cx="95" cy="34" r="12" fill="#EEF15A" stroke="#1B1B1B" stroke-width="3"></circle>
<text x="95" y="40" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="16" fill="#1B1B1B">$</text>
<rect x="56" y="-22" width="78" height="24" rx="6" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></rect>
<text x="95" y="-4" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="17" fill="#1B1B1B">BANK</text>
</g>

<g transform="translate(1078 574)">
<rect x="0" y="50" width="210" height="100" fill="#DFF6F2" stroke="#1B1B1B" stroke-width="4"></rect>
<path d="M-12 54 L105 0 L222 54 Z" fill="#BDEBE4" stroke="#1B1B1B" stroke-width="4" stroke-linejoin="round"></path>
<path d="M52 50 V150 M105 22 V150 M158 50 V150 M0 98 H210" stroke="#1B1B1B" stroke-width="3"></path>
<path d="M18 150 Q18 120 30 120 Q42 120 42 150 M66 150 Q66 112 80 112 Q94 112 94 150 M120 150 Q120 118 132 118 Q144 118 144 150 M168 150 Q168 114 180 114 Q192 114 192 150" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="3"></path>
<circle cx="30" cy="132" r="4" fill="#F06A4A"></circle><circle cx="132" cy="128" r="4" fill="#F06A4A"></circle>
<path d="M232 150 L232 112 L300 88 L300 126 Z" fill="#3B82D9" stroke="#1B1B1B" stroke-width="4" stroke-linejoin="round"></path>
<path d="M255 104 L255 142 M278 96 L278 134 M232 128 L300 106" stroke="#BFE8FF" stroke-width="2"></path>
<path d="M90 -14 Q105 -26 120 -14 M80 -26 Q105 -46 130 -26" fill="none" stroke="#1B1B1B" stroke-width="4" stroke-linecap="round"></path>
</g>

<ellipse cx="330" cy="760" rx="240" ry="52" fill="#8FE0D8" stroke="#1B1B1B" stroke-width="4"></ellipse>
<path d="M160 760 Q180 750 200 760 M420 770 Q440 760 460 770 M300 790 Q316 782 332 790" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"></path>
<ellipse cx="200" cy="778" rx="20" ry="8" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="3"></ellipse>
<ellipse cx="480" cy="752" rx="16" ry="7" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="3"></ellipse>
<g transform="translate(330 660)">
<rect x="-5" y="20" width="10" height="84" fill="#B9C2CC" stroke="#1B1B1B" stroke-width="3"></rect>
<path d="M-38 22 L38 22 L30 0 L-30 0 Z" fill="#3B82D9" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<rect x="6" y="46" width="30" height="24" rx="4" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></rect>
<circle cx="14" cy="62" r="3" fill="#7DDB8A"></circle><circle cx="22" cy="62" r="3" fill="#EEF15A"></circle><circle cx="30" cy="62" r="3" fill="#F06A4A"></circle>
<path d="M-26 98 Q0 84 26 98 L22 108 L-22 108 Z" fill="#F4A73E" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<path d="M34 -12 Q46 0 34 12 M44 -22 Q62 0 44 22" fill="none" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
</g>

<g stroke="#1B1B1B" stroke-width="4" stroke-linejoin="round">
<rect x="604" y="620" width="12" height="70" fill="#A0703C"></rect>
<path d="M610 622 Q570 600 550 622 M610 622 Q580 580 594 566 M610 622 Q636 576 628 564 M610 622 Q650 600 668 620" fill="none" stroke="#1F6B3A" stroke-width="12" stroke-linecap="round"></path>
<circle cx="610" cy="626" r="7" fill="#F06A4A"></circle>
<rect x="714" y="640" width="11" height="60" fill="#A0703C"></rect>
<path d="M720 642 Q686 624 670 642 M720 642 Q696 606 708 594 M720 642 Q744 604 736 592 M720 642 Q754 624 770 640" fill="none" stroke="#1F6B3A" stroke-width="11" stroke-linecap="round"></path>
<rect x="44" y="650" width="10" height="56" fill="#A0703C"></rect>
<path d="M49 652 Q20 636 6 652 M49 652 Q30 622 40 612 M49 652 Q70 620 64 610 M49 652 Q78 636 92 650" fill="none" stroke="#1F6B3A" stroke-width="10" stroke-linecap="round"></path>
</g>

<path d="M0 820 Q360 780 720 810 Q1080 840 1440 800 L1440 900 L0 900 Z" fill="#9BE07A" stroke="#1B1B1B" stroke-width="4" stroke-linejoin="round"></path>
<path d="M0 852 Q360 816 720 846 Q1080 874 1440 836 M0 886 Q360 852 720 882 Q1080 908 1440 872" fill="none" stroke="#5FAE55" stroke-width="5" stroke-linecap="round"></path>
<path d="M660 900 C700 860 760 850 800 820 C840 790 900 780 930 742" fill="none" stroke="#1B1B1B" stroke-width="50" stroke-linecap="round"></path>
<path d="M660 900 C700 860 760 850 800 820 C840 790 900 780 930 742" fill="none" stroke="#FFF6D8" stroke-width="42" stroke-linecap="round"></path>
<g stroke="#1B1B1B" stroke-width="3">
<rect x="996" y="790" width="6" height="40" fill="#B9C2CC"></rect><rect x="986" y="780" width="26" height="16" rx="4" fill="#FFFFFF"></rect><circle cx="999" cy="788" r="3" fill="#7DDB8A"></circle>
<rect x="566" y="800" width="6" height="40" fill="#B9C2CC"></rect><rect x="556" y="790" width="26" height="16" rx="4" fill="#FFFFFF"></rect><circle cx="569" cy="798" r="3" fill="#7DDB8A"></circle>
</g>
<path d="M1014 770 Q1022 778 1014 786 M560 780 Q552 788 560 796" fill="none" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
<g class="a-hover a-d2"><use href="#minidrone" x="470" y="580" width="90" height="45" transform="rotate(-8 515 602)"></use>
<path class="a-scan" d="M500 630 L470 690 L560 690 L530 630 Z" fill="#FFFFFF" opacity="0.45" stroke="#1B1B1B" stroke-width="2" stroke-dasharray="6 5"></path></g>
<use href="#flower" x="420" y="830" width="30" height="30"></use>
<use href="#flower" x="1080" y="850" width="28" height="28"></use>
<use href="#flower" x="860" y="860" width="24" height="24"></use>
<use href="#flower" x="240" y="850" width="26" height="26"></use>
<g class="a-flutter"><use href="#butterfly" x="250" y="530" width="36" height="27"></use></g>
<g class="a-bob"><g class="a-coin"><use href="#coin" x="1046" y="506" width="36" height="36"></use></g></g>
<g class="a-bob a-d2"><g class="a-coin a-d2"><use href="#coin" x="782" y="508" width="30" height="30"></use></g></g>
<g class="a-bob a-d3"><g class="a-coin a-d3"><use href="#coin" x="984" y="500" width="24" height="24"></use></g></g>
<g class="a-float"><use href="#banknote" x="1050" y="176" width="74" height="42" transform="rotate(-12 1087 197)"></use></g>
<use href="#coins-stack" x="774" y="684" width="46" height="46"></use>
<use href="#moneybag" x="1038" y="712" width="40" height="44"></use>
<g class="a-bob"><g class="a-coin"><use href="#coin" x="368" y="430" width="32" height="32"></use></g></g>
<g class="a-bob a-d2"><g class="a-coin a-d3"><use href="#coin" x="226" y="410" width="26" height="26"></use></g></g>
<use href="#bush" x="-40" y="790" width="280" height="140"></use>
<use href="#bush" x="1200" y="780" width="300" height="150"></use>
`;

export const droneHero = `
<use href="#cloud" x="20" y="30" width="80" height="40"></use>
<use href="#cloud" x="290" y="130" width="70" height="35"></use>
<use href="#star" x="200" y="20" width="24" height="24"></use>
<path d="M0 212 Q200 182 400 210 L400 240 L0 240 Z" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<use href="#bush" x="300" y="196" width="100" height="50"></use>
<use href="#rk-p-lookup" x="70" y="36" width="120" height="200"></use>
<g class="a-hover"><use href="#minidrone" x="250" y="50" width="120" height="60"></use></g>
<path class="a-pulse" d="M212 104 A12 12 0 0 1 224 116 M212 92 A24 24 0 0 1 236 116" fill="none" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
`;

export const dronila = `
<path d="M0 178 Q150 160 300 176 L300 200 L0 200 Z" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<path d="M208 46 L164 166 L276 166 L232 46 Z" fill="#FFFFFF" opacity="0.45" stroke="#1B1B1B" stroke-width="2" stroke-dasharray="6 5" stroke-linejoin="round"></path>
<use href="#palm" x="166" y="92" width="62" height="86"></use>
<use href="#palm" x="224" y="106" width="52" height="72"></use>
<g class="a-hover"><use href="#minidrone" x="180" y="12" width="80" height="40"></use></g>
<use href="#rk-p-point" x="26" y="36" width="96" height="160"></use>
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
<use href="#rk-p-sit" x="80" y="34" width="96" height="160"></use>
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
<use href="#rk-p-wave" x="24" y="36" width="96" height="160"></use>
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

