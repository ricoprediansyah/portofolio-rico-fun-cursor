// Sprite SVG (karakter Rico, pose, ornamen). Dipakai via <use href="#id">.
const sprites = `
<symbol id="coin" viewBox="0 0 40 40"><circle cx="20" cy="21.5" r="16.5" fill="#1B1B1B"></circle><circle cx="20" cy="19.5" r="16.5" fill="#F4C430" stroke="#1B1B1B" stroke-width="3"></circle><circle cx="20" cy="19.5" r="11.5" fill="#FFD95A" stroke="#C8901A" stroke-width="2"></circle><text x="20" y="24.5" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="13" fill="#1B1B1B">Rp</text><path d="M9.5 13 Q12 8.5 17 7.5" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.9"></path></symbol>
<symbol id="coins-stack" viewBox="0 0 64 64"><g stroke="#1B1B1B" stroke-width="3"><path d="M8 50 V56 Q32 66 56 56 V50" fill="#E0A825"></path><ellipse cx="32" cy="50" rx="24" ry="8" fill="#F4C430"></ellipse><path d="M8 40 V46 Q32 56 56 46 V40" fill="#E0A825"></path><ellipse cx="32" cy="40" rx="24" ry="8" fill="#F4C430"></ellipse><path d="M8 30 V36 Q32 46 56 36 V30" fill="#E0A825"></path><ellipse cx="32" cy="30" rx="24" ry="8" fill="#F4C430"></ellipse><path d="M8 20 V26 Q32 36 56 26 V20" fill="#E0A825"></path><ellipse cx="32" cy="20" rx="24" ry="8" fill="#FFD95A"></ellipse></g><text x="32" y="24" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="10" fill="#1B1B1B">Rp</text><path d="M14 18 Q20 14 28 14" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"></path></symbol>
<symbol id="banknote" viewBox="0 0 84 48"><rect x="3" y="6" width="78" height="40" rx="7" fill="#1B1B1B"></rect><rect x="3" y="3" width="78" height="40" rx="7" fill="#9BE07A" stroke="#1B1B1B" stroke-width="3"></rect><rect x="10" y="9" width="64" height="28" rx="4" fill="none" stroke="#3E9A4E" stroke-width="2" stroke-dasharray="4 3"></rect><circle cx="42" cy="23" r="10" fill="#E4F7E8" stroke="#1B1B1B" stroke-width="2.5"></circle><text x="42" y="27.5" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="11" fill="#1B1B1B">Rp</text><text x="16" y="21" font-family="Lilita One, sans-serif" font-size="9" fill="#1F6B3A">100</text><text x="56" y="33" font-family="Lilita One, sans-serif" font-size="9" fill="#1F6B3A">100</text></symbol>
<symbol id="moneybag" viewBox="0 0 64 70"><path d="M24 14 L20 4 Q32 9 44 4 L40 14 Z" fill="#E0B566" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path><path d="M24 14 Q4 30 6 50 Q8 66 32 66 Q56 66 58 50 Q60 30 40 14 Z" fill="#F2CF7E" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path><path d="M22 15 H42" stroke="#C8473E" stroke-width="5" stroke-linecap="round"></path><circle cx="32" cy="44" r="12" fill="#F4C430" stroke="#1B1B1B" stroke-width="2.5"></circle><text x="32" y="48.5" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="11" fill="#1B1B1B">Rp</text><path d="M14 36 Q15 28 21 24" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.8"></path></symbol>
<symbol id="head" viewBox="0 0 160 170"><use href="#rk-face-art" x="0" y="6" width="160" height="157"></use></symbol>
<symbol id="head-happy" viewBox="0 0 160 170"><use href="#rk-wink-art" x="0" y="6" width="160" height="157"></use></symbol>
<symbol id="body" viewBox="0 0 220 300">
<rect x="99" y="140" width="22" height="26" rx="8" fill="#E3A57E" stroke="#1B1B1B" stroke-width="4"></rect>
<rect x="84" y="244" width="22" height="40" rx="9" fill="#34437A" stroke="#1B1B1B" stroke-width="4"></rect>
<rect x="114" y="244" width="22" height="40" rx="9" fill="#34437A" stroke="#1B1B1B" stroke-width="4"></rect>
<path d="M95 254 V278 M125 254 V278" stroke="#2A3563" stroke-width="2.5" stroke-linecap="round"></path>
<ellipse cx="92" cy="288" rx="19" ry="8.5" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="4"></ellipse>
<ellipse cx="128" cy="288" rx="19" ry="8.5" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="4"></ellipse>
<path d="M70 168 Q110 152 150 168 L156 252 L64 252 Z" fill="#3B82D9" stroke="#1B1B1B" stroke-width="4" stroke-linejoin="round"></path>
<path d="M134 162 Q150 168 153 250 L140 250 Q140 200 134 162 Z" fill="#2F6DBE"></path>
<path d="M110 176 V242" stroke="#1B1B1B" stroke-width="2.5"></path>
<circle cx="110" cy="196" r="3" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="1.5"></circle><circle cx="110" cy="218" r="3" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="1.5"></circle>
<path d="M120 188 H138 V204 H120 Z" fill="none" stroke="#1B1B1B" stroke-width="2.5" stroke-linejoin="round"></path>
<path d="M90 156 L110 176 L100 186 L84 164 Z M130 156 L110 176 L120 186 L136 164 Z" fill="#5B9BE8" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<rect x="63" y="238" width="94" height="13" rx="3" fill="#2A2B33" stroke="#1B1B1B" stroke-width="3"></rect>
<rect x="102" y="238" width="16" height="13" rx="2" fill="#EEF15A" stroke="#1B1B1B" stroke-width="2.5"></rect>
</symbol>
<symbol id="star" viewBox="0 0 40 40"><path d="M20 2 L25 15 L38 20 L25 25 L20 38 L15 25 L2 20 L15 15 Z" fill="#EEF15A" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path></symbol>
<symbol id="bolt" viewBox="0 0 40 60"><path d="M24 2 L4 34 L18 34 L12 58 L36 22 L22 22 Z" fill="#F4A73E" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path></symbol>

<symbol id="pose-wave" viewBox="0 -10 220 310">
<use href="#body" x="0" y="0" width="220" height="300"></use>
<path d="M76 174 Q46 214 68 230" fill="none" stroke="#1B1B1B" stroke-width="17" stroke-linecap="round"></path>
<path d="M76 174 Q46 214 68 230" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path><circle cx="68" cy="230" r="10" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="4"></circle>
<path d="M144 174 Q192 160 190 112" fill="none" stroke="#1B1B1B" stroke-width="17" stroke-linecap="round"></path>
<path d="M144 174 Q192 160 190 112" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<circle cx="190" cy="104" r="12" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="4"></circle>
<path d="M206 84 Q216 96 212 110" fill="none" stroke="#1B1B1B" stroke-width="4" stroke-linecap="round"></path>
<path d="M172 82 Q164 92 168 102" fill="none" stroke="#1B1B1B" stroke-width="4" stroke-linecap="round"></path>
<use href="#head" x="30" y="-4" width="160" height="170"></use>
</symbol>

<symbol id="pose-toga" viewBox="0 -14 220 314">
<use href="#body" x="0" y="0" width="220" height="300"></use>
<path d="M76 174 Q42 212 70 228" fill="none" stroke="#1B1B1B" stroke-width="17" stroke-linecap="round"></path>
<path d="M76 174 Q42 212 70 228" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path><circle cx="70" cy="228" r="10" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="4"></circle>
<path d="M144 174 Q188 170 186 138" fill="none" stroke="#1B1B1B" stroke-width="17" stroke-linecap="round"></path>
<path d="M144 174 Q188 170 186 138" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<rect x="166" y="108" width="48" height="16" rx="8" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="4" transform="rotate(-30 190 116)"></rect>
<circle cx="186" cy="132" r="11" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="4"></circle>
<use href="#head-happy" x="30" y="-2" width="160" height="170"></use>
<path d="M78 34 L78 48 Q110 60 142 48 L142 34 Z" fill="#1B1B1B"></path>
<path d="M44 26 L110 2 L176 26 L110 50 Z" fill="#1B1B1B" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<path d="M110 26 L164 34 L166 60" fill="none" stroke="#F4A73E" stroke-width="4" stroke-linecap="round"></path>
<circle cx="166" cy="62" r="5" fill="#F4A73E" stroke="#1B1B1B" stroke-width="2"></circle>
</symbol>

<symbol id="pose-drone" viewBox="0 -110 220 410">
<use href="#body" x="0" y="0" width="220" height="300"></use>
<path d="M50 -66 L170 -66" stroke="#1B1B1B" stroke-width="6" stroke-linecap="round"></path>
<ellipse cx="50" cy="-74" rx="26" ry="6" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="4"></ellipse>
<ellipse cx="170" cy="-74" rx="26" ry="6" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="4"></ellipse>
<rect x="80" y="-78" width="60" height="26" rx="12" fill="#EEF15A" stroke="#1B1B1B" stroke-width="4"></rect>
<circle cx="110" cy="-44" r="8" fill="#1B1B1B"></circle>
<path d="M22 -92 L4 -92 M30 -102 L12 -102 M198 -92 L216 -92 M190 -102 L208 -102" stroke="#1B1B1B" stroke-width="4" stroke-linecap="round"></path>
<path d="M96 -26 Q110 -18 124 -26 M88 -14 Q110 0 132 -14" fill="none" stroke="#1B1B1B" stroke-width="4" stroke-linecap="round"></path>
<path d="M76 174 Q70 224 96 214" fill="none" stroke="#1B1B1B" stroke-width="17" stroke-linecap="round"></path>
<path d="M76 174 Q70 224 96 214" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<path d="M144 174 Q150 224 124 214" fill="none" stroke="#1B1B1B" stroke-width="17" stroke-linecap="round"></path>
<path d="M144 174 Q150 224 124 214" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<rect x="82" y="200" width="56" height="28" rx="12" fill="#4A4F5A" stroke="#1B1B1B" stroke-width="4"></rect>
<circle cx="98" cy="214" r="5" fill="#8FE0D8"></circle><circle cx="122" cy="214" r="5" fill="#F4A73E"></circle>
<path d="M110 200 L110 184" stroke="#1B1B1B" stroke-width="4" stroke-linecap="round"></path>
<use href="#head-happy" x="30" y="-4" width="160" height="170"></use>
</symbol>

<symbol id="pose-mic" viewBox="0 -10 220 310">
<use href="#body" x="0" y="0" width="220" height="300"></use>
<path d="M76 174 Q34 150 40 104" fill="none" stroke="#1B1B1B" stroke-width="17" stroke-linecap="round"></path>
<path d="M76 174 Q34 150 40 104" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<circle cx="40" cy="98" r="11" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="4"></circle>
<path d="M40 86 L40 66" stroke="#1B1B1B" stroke-width="7" stroke-linecap="round"></path>
<path d="M40 66 L40 66" stroke="#F5C9A0" stroke-width="3" stroke-linecap="round"></path>
<use href="#head-happy" x="30" y="-4" width="160" height="170"></use>
<path d="M144 174 Q184 166 150 160" fill="none" stroke="#1B1B1B" stroke-width="17" stroke-linecap="round"></path>
<path d="M144 174 Q184 166 150 160" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<rect x="128" y="146" width="13" height="36" rx="6" fill="#4A4F5A" stroke="#1B1B1B" stroke-width="3" transform="rotate(35 134 164)"></rect>
<circle cx="128" cy="146" r="12" fill="#B9C2CC" stroke="#1B1B1B" stroke-width="4"></circle>
<circle cx="148" cy="162" r="10" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="4"></circle>
<path d="M190 60 L204 50 M194 76 L212 74 M186 46 L192 30" stroke="#1B1B1B" stroke-width="4" stroke-linecap="round"></path>
</symbol>

<symbol id="pose-laptop" viewBox="0 -10 220 310">
<use href="#body" x="0" y="0" width="220" height="300"></use>
<use href="#head" x="30" y="-4" width="160" height="170"></use>
<rect x="64" y="194" width="92" height="58" rx="8" fill="#DDE3EA" stroke="#1B1B1B" stroke-width="4"></rect>
<circle cx="110" cy="223" r="7" fill="#F4A73E" stroke="#1B1B1B" stroke-width="3"></circle>
<path d="M76 174 Q50 220 72 230" fill="none" stroke="#1B1B1B" stroke-width="17" stroke-linecap="round"></path>
<path d="M76 174 Q50 220 72 230" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<path d="M144 174 Q170 220 148 230" fill="none" stroke="#1B1B1B" stroke-width="17" stroke-linecap="round"></path>
<path d="M144 174 Q170 220 148 230" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<circle cx="72" cy="230" r="10" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="4"></circle><circle cx="148" cy="230" r="10" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="4"></circle>
</symbol>

<symbol id="pose-helmet" viewBox="0 -24 220 324">
<use href="#body" x="0" y="0" width="220" height="300"></use>
<path d="M76 174 Q44 214 68 230" fill="none" stroke="#1B1B1B" stroke-width="17" stroke-linecap="round"></path>
<path d="M76 174 Q44 214 68 230" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path><circle cx="68" cy="230" r="10" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="4"></circle>
<path d="M144 174 Q194 172 192 132" fill="none" stroke="#1B1B1B" stroke-width="17" stroke-linecap="round"></path>
<path d="M144 174 Q194 172 192 132" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<path d="M192 126 L206 86" stroke="#1B1B1B" stroke-width="10" stroke-linecap="round"></path>
<path d="M198 74 Q206 64 216 72 L208 82 Z" fill="#B9C2CC" stroke="#1B1B1B" stroke-width="4" stroke-linejoin="round"></path>
<circle cx="192" cy="128" r="11" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="4"></circle>
<use href="#head" x="30" y="-4" width="160" height="170"></use>
<path d="M40 56 Q40 -14 110 -14 Q180 -14 180 56 Z" fill="#F4C430" stroke="#1B1B1B" stroke-width="4" stroke-linejoin="round"></path>
<path d="M110 -14 L110 56" stroke="#1B1B1B" stroke-width="4"></path>
<rect x="26" y="50" width="168" height="14" rx="7" fill="#F4C430" stroke="#1B1B1B" stroke-width="4"></rect>
</symbol>

<symbol id="pose-idea" viewBox="0 -40 240 340">
<use href="#body" x="0" y="0" width="220" height="300"></use>
<path d="M76 174 Q36 150 44 108" fill="none" stroke="#1B1B1B" stroke-width="17" stroke-linecap="round"></path>
<path d="M76 174 Q36 150 44 108" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<circle cx="44" cy="102" r="11" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="4"></circle>
<path d="M44 90 L46 72" stroke="#1B1B1B" stroke-width="7" stroke-linecap="round"></path>
<use href="#head" x="30" y="-4" width="160" height="170"></use>
<path d="M144 174 Q176 168 146 158" fill="none" stroke="#1B1B1B" stroke-width="17" stroke-linecap="round"></path>
<path d="M144 174 Q176 168 146 158" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<circle cx="144" cy="156" r="10" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="4"></circle>
<circle cx="206" cy="10" r="24" fill="#EEF15A" stroke="#1B1B1B" stroke-width="4"></circle>
<rect x="196" y="32" width="20" height="14" rx="3" fill="#B9C2CC" stroke="#1B1B1B" stroke-width="4"></rect>
<path d="M200 12 L206 20 L212 12" fill="none" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
<path d="M206 -24 L206 -34 M176 -10 L168 -16 M236 -10 L240 -14 M232 22 L240 26" stroke="#1B1B1B" stroke-width="4" stroke-linecap="round"></path>
</symbol>

<symbol id="pose-yeay" viewBox="0 -10 220 310">
<use href="#body" x="0" y="0" width="220" height="300"></use>
<path d="M76 174 Q28 150 34 100" fill="none" stroke="#1B1B1B" stroke-width="17" stroke-linecap="round"></path>
<path d="M76 174 Q28 150 34 100" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<path d="M144 174 Q192 150 186 100" fill="none" stroke="#1B1B1B" stroke-width="17" stroke-linecap="round"></path>
<path d="M144 174 Q192 150 186 100" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<circle cx="34" cy="94" r="12" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="4"></circle>
<circle cx="186" cy="94" r="12" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="4"></circle>
<rect x="10" y="40" width="10" height="16" fill="#F4A73E" stroke="#1B1B1B" stroke-width="2" transform="rotate(20 15 48)"></rect>
<rect x="196" y="36" width="10" height="16" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="2" transform="rotate(-25 201 44)"></rect>
<rect x="60" y="10" width="10" height="16" fill="#8FE0D8" stroke="#1B1B1B" stroke-width="2" transform="rotate(40 65 18)"></rect>
<rect x="158" y="6" width="10" height="16" fill="#F29A8A" stroke="#1B1B1B" stroke-width="2" transform="rotate(-10 163 14)"></rect>
<use href="#head-happy" x="30" y="-4" width="160" height="170"></use>
</symbol>
<symbol id="cloud" viewBox="0 0 120 60"><path d="M20 50 Q4 50 6 36 Q8 24 22 26 Q26 8 46 10 Q60 0 74 14 Q94 8 98 26 Q116 26 114 42 Q112 52 98 50 Z" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path></symbol>
<symbol id="bush" viewBox="0 0 120 60"><path d="M6 58 Q0 36 18 32 Q20 12 42 16 Q54 0 72 12 Q92 6 96 26 Q118 28 114 58 Z" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path></symbol>
<symbol id="spark" viewBox="0 0 40 40"><path d="M20 4 V13 M20 27 V36 M4 20 H13 M27 20 H36 M9 9 L14 14 M26 26 L31 31 M31 9 L26 14 M9 31 L14 26" stroke="#F4C430" stroke-width="4" stroke-linecap="round"></path></symbol>
<symbol id="gear" viewBox="0 0 40 40"><circle cx="20" cy="20" r="13" fill="#B9C2CC" stroke="#1B1B1B" stroke-width="5" stroke-dasharray="6 4"></circle><circle cx="20" cy="20" r="11" fill="#B9C2CC"></circle><circle cx="20" cy="20" r="5" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></circle></symbol>
<symbol id="minidrone" viewBox="0 0 80 40"><path d="M10 14 H70" stroke="#1B1B1B" stroke-width="4" stroke-linecap="round"></path><ellipse cx="10" cy="10" rx="10" ry="3" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="2"></ellipse><ellipse cx="70" cy="10" rx="10" ry="3" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="2"></ellipse><rect x="26" y="12" width="28" height="14" rx="6" fill="#B9C2CC" stroke="#1B1B1B" stroke-width="3"></rect><circle cx="40" cy="30" r="5" fill="#1B1B1B"></circle></symbol>
<symbol id="leaf" viewBox="0 0 40 40"><path d="M6 34 Q6 6 34 6 Q34 34 6 34 Z" fill="#7DDB8A" stroke="#1B1B1B" stroke-width="3"></path><path d="M8 32 L26 14" stroke="#1B1B1B" stroke-width="2"></path></symbol>
<symbol id="wifi" viewBox="0 0 40 36"><path d="M4 14 Q20 0 36 14 M10 21 Q20 12 30 21 M15 28 Q20 24 25 28" fill="none" stroke="#1B1B1B" stroke-width="4" stroke-linecap="round"></path><circle cx="20" cy="33" r="3" fill="#1B1B1B"></circle></symbol>
<symbol id="chip" viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" rx="3" fill="#4A4F5A" stroke="#1B1B1B" stroke-width="3"></rect><path d="M15 4 V10 M25 4 V10 M15 30 V36 M25 30 V36 M4 15 H10 M4 25 H10 M30 15 H36 M30 25 H36" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path></symbol>
<symbol id="cube" viewBox="0 0 60 60"><path d="M30 6 L54 18 L30 30 L6 18 Z" fill="currentColor" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path><path d="M6 18 L30 30 L30 56 L6 44 Z" fill="currentColor" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path><path d="M6 18 L30 30 L30 56 L6 44 Z" fill="#1B1B1B" opacity="0.12"></path><path d="M54 18 L30 30 L30 56 L54 44 Z" fill="currentColor" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path><path d="M54 18 L30 30 L30 56 L54 44 Z" fill="#1B1B1B" opacity="0.25"></path></symbol>
<symbol id="arc" viewBox="0 0 60 60"><path d="M14 46 A20 20 0 1 1 46 46" fill="none" stroke="#1B1B1B" stroke-width="16" stroke-linecap="round"></path><path d="M14 46 A20 20 0 1 1 46 46" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"></path></symbol>
<symbol id="loop" viewBox="0 0 120 40"><path d="M4 30 C20 0 30 40 44 20 C58 0 64 40 80 20 C94 4 104 30 116 18" fill="none" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path></symbol>
<symbol id="flower" viewBox="0 0 40 40"><circle cx="20" cy="9" r="8" fill="#F7CDB6" stroke="#1B1B1B" stroke-width="2.5"></circle><circle cx="31" cy="20" r="8" fill="#F7CDB6" stroke="#1B1B1B" stroke-width="2.5"></circle><circle cx="20" cy="31" r="8" fill="#F7CDB6" stroke="#1B1B1B" stroke-width="2.5"></circle><circle cx="9" cy="20" r="8" fill="#F7CDB6" stroke="#1B1B1B" stroke-width="2.5"></circle><circle cx="20" cy="20" r="6" fill="#EEF15A" stroke="#1B1B1B" stroke-width="2.5"></circle></symbol>
<symbol id="butterfly" viewBox="0 0 40 30"><ellipse cx="12" cy="12" rx="10" ry="8" fill="#F7CDB6" stroke="#1B1B1B" stroke-width="2.5" transform="rotate(-20 12 12)"></ellipse><ellipse cx="28" cy="12" rx="10" ry="8" fill="#F7CDB6" stroke="#1B1B1B" stroke-width="2.5" transform="rotate(20 28 12)"></ellipse><ellipse cx="13" cy="22" rx="6" ry="5" fill="#F4A73E" stroke="#1B1B1B" stroke-width="2.5"></ellipse><ellipse cx="27" cy="22" rx="6" ry="5" fill="#F4A73E" stroke="#1B1B1B" stroke-width="2.5"></ellipse><path d="M20 6 V28" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path></symbol>
<symbol id="palm" viewBox="0 0 80 110">
<path d="M36 40 Q34 80 38 108 L46 108 Q44 80 44 40 Z" fill="#A0703C" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<path d="M40 40 Q14 22 2 42 M40 40 Q22 8 34 2 M40 40 Q58 6 50 2 M40 40 Q66 22 78 40" fill="none" stroke="#1B1B1B" stroke-width="14" stroke-linecap="round"></path>
<path d="M40 40 Q14 22 2 42 M40 40 Q22 8 34 2 M40 40 Q58 6 50 2 M40 40 Q66 22 78 40" fill="none" stroke="#7DDB8A" stroke-width="8" stroke-linecap="round"></path>
<circle cx="40" cy="44" r="7" fill="#F4A73E" stroke="#1B1B1B" stroke-width="3"></circle>
</symbol>
<symbol id="rk-face-base" viewBox="0 0 96 94">
<ellipse cx="13" cy="58" rx="8" ry="10" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="3"></ellipse>
<ellipse cx="83" cy="58" rx="8" ry="10" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="3"></ellipse>
<path d="M12 55 Q9 59 13 62 M84 55 Q87 59 83 62" fill="none" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round"></path>
<path d="M16 46 Q15 84 48 90 Q81 84 80 46 Q80 22 48 22 Q16 22 16 46 Z" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<path d="M12 54 C2 42 6 26 17 23 C13 10 29 1 40 8 C46 -1 63 -1 67 8 C79 3 92 14 87 26 C97 33 93 48 85 54 C83 44 79 37 72 35 C70 41 62 43 57 37 C51 43 42 43 38 35 C32 41 25 41 22 35 C18 41 15 47 12 54 Z" fill="#22232A" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<path d="M27 18 Q33 13 40 17 M52 11 Q58 7 65 11 M73 21 Q79 19 83 25 M18 32 Q22 28 27 30" fill="none" stroke="#5A606B" stroke-width="2.5" stroke-linecap="round"></path>
<path d="M48 59 Q45 66 50 67" fill="none" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round"></path>
<path d="M39 70 Q48 67 57 70" fill="none" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round"></path>
<circle cx="38" cy="74" r="0.9" fill="#1B1B1B"></circle><circle cx="58" cy="74" r="0.9" fill="#1B1B1B"></circle><circle cx="44" cy="86" r="0.9" fill="#1B1B1B"></circle><circle cx="52" cy="86" r="0.9" fill="#1B1B1B"></circle>
<circle cx="27" cy="68" r="4.5" fill="#F29A8A" opacity="0.5"></circle><circle cx="69" cy="68" r="4.5" fill="#F29A8A" opacity="0.5"></circle>
<path d="M64 84 Q75 78 79 60 Q81 80 58 89 Z" fill="#E3A57E" opacity="0.75"></path>
<path d="M21 44 Q34 49 48 43 Q62 49 78 44" fill="none" stroke="#E3A57E" stroke-width="3" stroke-linecap="round" opacity="0.8"></path>
<path d="M15 48 Q16 58 20 63 L23 50 Z M81 48 Q80 58 76 63 L73 50 Z" fill="#22232A" stroke="#1B1B1B" stroke-width="2" stroke-linejoin="round"></path>
<path d="M30 30 Q36 24 43 29 M47 22 Q55 17 61 24 M64 29 Q71 25 77 32 M22 40 Q26 34 32 36" fill="none" stroke="#0E0F12" stroke-width="2.2" stroke-linecap="round"></path>
<path d="M10 60 Q13 64 17 62 M86 60 Q83 64 79 62" fill="none" stroke="#C98B6A" stroke-width="1.6" stroke-linecap="round"></path>
<path d="M49 66 Q52 67 53 65" fill="none" stroke="#C98B6A" stroke-width="1.6" stroke-linecap="round"></path>
</symbol>
<symbol id="rk-face-art" viewBox="0 0 96 94">
<use href="#rk-face-base" x="0" y="0" width="96" height="94"></use>
<path d="M28 46 Q35 40 43 44 M53 44 Q61 40 68 46" fill="none" stroke="#1B1B1B" stroke-width="4.5" stroke-linecap="round"></path>
<ellipse cx="36" cy="56" rx="5.5" ry="7" fill="#1B1B1B"></ellipse><ellipse cx="60" cy="56" rx="5.5" ry="7" fill="#1B1B1B"></ellipse>
<circle cx="37.8" cy="53.5" r="2.1" fill="#FFFFFF"></circle><circle cx="61.8" cy="53.5" r="2.1" fill="#FFFFFF"></circle>
<circle cx="34.5" cy="59" r="1" fill="#FFFFFF"></circle><circle cx="58.5" cy="59" r="1" fill="#FFFFFF"></circle>
<path d="M29 52 L27 50 M67 52 L69 50" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round"></path>
<path d="M37 73 Q48 87 59 73 Z" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="2.5" stroke-linejoin="round"></path>
<path d="M42 80 Q48 85 54 80 Q48 77 42 80 Z" fill="#F29A8A"></path>
<path d="M39 75.5 Q48 78 57 75.5" fill="none" stroke="#B9C2CC" stroke-width="1.4"></path>
</symbol>
<symbol id="rk-wink-art" viewBox="0 0 96 94">
<use href="#rk-face-base" x="0" y="0" width="96" height="94"></use>
<path d="M28 46 Q35 40 43 44 M53 42 Q61 37 68 43" fill="none" stroke="#1B1B1B" stroke-width="4.5" stroke-linecap="round"></path>
<ellipse cx="36" cy="56" rx="5.5" ry="7" fill="#1B1B1B"></ellipse>
<circle cx="37.8" cy="53.5" r="2.1" fill="#FFFFFF"></circle>
<path d="M54 57 Q60 51 67 56" fill="none" stroke="#1B1B1B" stroke-width="3.5" stroke-linecap="round"></path>
<circle cx="34.5" cy="59" r="1" fill="#FFFFFF"></circle>
<path d="M29 52 L27 50 M67 55 L70 53" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round"></path>
<path d="M36 72 Q50 90 62 71 Z" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="2.5" stroke-linejoin="round"></path>
<path d="M42 80 Q49 86 56 79 Q49 77 42 80 Z" fill="#F29A8A"></path>
<path d="M38 74.5 Q49 77.5 60 73.5" fill="none" stroke="#B9C2CC" stroke-width="1.4"></path>
</symbol>
<symbol id="rk-face" viewBox="0 0 96 94"><use href="#rk-face-art" x="0" y="0" width="96" height="94"></use></symbol>
<symbol id="rk-face-flip" viewBox="0 0 96 94"><g transform="translate(96 0) scale(-1 1)"><use href="#rk-face-art" x="0" y="0" width="96" height="94"></use></g></symbol>
<symbol id="rk-face-wink" viewBox="0 0 96 94"><use href="#rk-wink-art" x="0" y="0" width="96" height="94"></use></symbol>
<symbol id="rk-face-wink-flip" viewBox="0 0 96 94"><g transform="translate(96 0) scale(-1 1)"><use href="#rk-wink-art" x="0" y="0" width="96" height="94"></use></g></symbol>
<symbol id="rk-torso" viewBox="0 0 120 200"><path d="M24 98 Q60 84 96 98 L100 154 L20 154 Z" fill="#3B82D9" stroke="#1B1B1B" stroke-width="3" stroke-linejoin="round"></path>
<path d="M82 96 Q95 99 99 152 L86 152 Q86 120 82 96 Z" fill="#2F6DBE"></path>
<path d="M60 104 V150" stroke="#1B1B1B" stroke-width="2"></path>
<circle cx="60" cy="116" r="2.2" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="1"></circle><circle cx="60" cy="130" r="2.2" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="1"></circle>
<path d="M68 112 H82 V124 H68 Z" fill="none" stroke="#1B1B1B" stroke-width="2" stroke-linejoin="round"></path>
<path d="M44 90 L60 104 L52 110 L40 96 Z M76 90 L60 104 L68 110 L80 96 Z" fill="#5B9BE8" stroke="#1B1B1B" stroke-width="2.5" stroke-linejoin="round"></path>
<rect x="21" y="144" width="78" height="9" rx="2" fill="#2A2B33" stroke="#1B1B1B" stroke-width="2"></rect>
<rect x="55" y="144" width="10" height="9" rx="1.5" fill="#EEF15A" stroke="#1B1B1B" stroke-width="1.5"></rect>
<path d="M30 120 Q34 124 32 132 M90 118 Q86 124 88 132" fill="none" stroke="#2F6DBE" stroke-width="2" stroke-linecap="round"></path>
</symbol>
<symbol id="rk-legs-stand" viewBox="0 0 120 200"><rect x="36" y="146" width="20" height="42" rx="8" fill="#34437A" stroke="#1B1B1B" stroke-width="3"></rect><rect x="64" y="146" width="20" height="42" rx="8" fill="#34437A" stroke="#1B1B1B" stroke-width="3"></rect><ellipse cx="44" cy="190" rx="16" ry="7" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></ellipse><ellipse cx="76" cy="190" rx="16" ry="7" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></ellipse>
<path d="M46 154 V182 M74 154 V182" stroke="#2A3563" stroke-width="2" stroke-linecap="round"></path>
<path d="M29 193 Q44 198 59 193 M61 193 Q76 198 91 193" fill="none" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round"></path>
<path d="M40 186 L46 188 M72 186 L78 188" stroke="#F4A73E" stroke-width="2" stroke-linecap="round"></path>
</symbol>
<symbol id="rk-legs-walk" viewBox="0 0 120 200"><path d="M50 150 L32 184 M70 150 L90 182" fill="none" stroke="#1B1B1B" stroke-width="25" stroke-linecap="round"></path><path d="M50 150 L32 184 M70 150 L90 182" fill="none" stroke="#34437A" stroke-width="18" stroke-linecap="round"></path><ellipse cx="26" cy="190" rx="16" ry="7" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></ellipse><ellipse cx="98" cy="188" rx="16" ry="7" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3" transform="rotate(10 98 188)"></ellipse></symbol>
<symbol id="rk-legs-sit" viewBox="0 0 120 200"><path d="M40 150 Q30 168 18 178" fill="none" stroke="#1B1B1B" stroke-width="22" stroke-linecap="round"></path><path d="M80 150 Q90 168 102 178" fill="none" stroke="#1B1B1B" stroke-width="22" stroke-linecap="round"></path><path d="M40 150 Q30 168 18 178" fill="none" stroke="#34437A" stroke-width="16" stroke-linecap="round"></path><path d="M80 150 Q90 168 102 178" fill="none" stroke="#34437A" stroke-width="16" stroke-linecap="round"></path><path d="M30 182 Q60 172 90 182" fill="none" stroke="#34437A" stroke-width="16" stroke-linecap="round"></path><ellipse cx="20" cy="186" rx="14" ry="7" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></ellipse><ellipse cx="100" cy="186" rx="14" ry="7" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></ellipse><rect x="22" y="146" width="76" height="12" rx="6" fill="#34437A" stroke="#1B1B1B" stroke-width="3"></rect></symbol>

<symbol id="rk-p-lookup" viewBox="0 0 120 200">
<use href="#rk-legs-stand" x="0" y="0" width="120" height="200"></use>
<use href="#rk-torso" x="0" y="0" width="120" height="200"></use>
<use href="#rk-face" x="12" y="0" width="96" height="94"></use>
<path d="M30 104 Q12 124 44 120 M90 104 Q108 124 76 120" fill="none" stroke="#1B1B1B" stroke-width="15" stroke-linecap="round"></path>
<path d="M30 104 Q12 124 44 120 M90 104 Q108 124 76 120" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<path d="M46 104 L40 86 M74 104 L80 86" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
<rect x="36" y="102" width="48" height="24" rx="8" fill="#4A4F5A" stroke="#1B1B1B" stroke-width="3"></rect>
<circle cx="50" cy="112" r="3.5" fill="#8FE0D8"></circle><circle cx="70" cy="112" r="3.5" fill="#F4A73E"></circle>
<circle cx="42" cy="122" r="7" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="3"></circle><circle cx="78" cy="122" r="7" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="3"></circle>
</symbol>

<symbol id="rk-p-point" viewBox="0 0 120 200">
<use href="#rk-legs-walk" x="0" y="0" width="120" height="200"></use>
<use href="#rk-torso" x="0" y="0" width="120" height="200"></use>
<use href="#rk-face-wink-flip" x="12" y="0" width="96" height="94" transform="rotate(-6 60 90)"></use>
<path d="M30 104 Q16 128 24 150 M90 104 Q112 84 112 52" fill="none" stroke="#1B1B1B" stroke-width="15" stroke-linecap="round"></path>
<path d="M30 104 Q16 128 24 150 M90 104 Q112 84 112 52" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<rect x="12" y="144" width="26" height="16" rx="5" fill="#4A4F5A" stroke="#1B1B1B" stroke-width="3"></rect>
<circle cx="24" cy="152" r="7" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="3"></circle>
<circle cx="112" cy="48" r="7" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="3"></circle>
<path d="M112 41 L113 30" stroke="#1B1B1B" stroke-width="8" stroke-linecap="round"></path><path d="M112 41 L113 30" stroke="#F5C9A0" stroke-width="3" stroke-linecap="round"></path>
</symbol>

<symbol id="rk-p-sit" viewBox="0 0 120 200">
<use href="#rk-legs-sit" x="0" y="0" width="120" height="200"></use>
<use href="#rk-torso" x="0" y="0" width="120" height="200"></use>
<use href="#rk-face-flip" x="12" y="0" width="96" height="94" transform="rotate(-8 60 90)"></use>
<path d="M30 104 Q14 140 44 142 M90 104 Q106 140 76 142" fill="none" stroke="#1B1B1B" stroke-width="15" stroke-linecap="round"></path>
<path d="M30 104 Q14 140 44 142 M90 104 Q106 140 76 142" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<rect x="36" y="118" width="48" height="32" rx="5" fill="#1B1B1B"></rect>
<rect x="40" y="122" width="40" height="24" rx="3" fill="#8FE0D8"></rect>
<path d="M45 140 L53 132 L60 137 L74 126" fill="none" stroke="#1B1B1B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
<circle cx="42" cy="144" r="7" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="3"></circle><circle cx="78" cy="144" r="7" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="3"></circle>
</symbol>

<symbol id="rk-p-wave" viewBox="0 0 120 200">
<use href="#rk-legs-stand" x="0" y="0" width="120" height="200"></use>
<use href="#rk-torso" x="0" y="0" width="120" height="200"></use>
<use href="#rk-face-wink" x="12" y="0" width="96" height="94"></use>
<path d="M30 104 Q14 132 26 150 M90 104 Q116 90 110 58" fill="none" stroke="#1B1B1B" stroke-width="15" stroke-linecap="round"></path>
<path d="M30 104 Q14 132 26 150 M90 104 Q116 90 110 58" fill="none" stroke="#3B82D9" stroke-width="9" stroke-linecap="round"></path>
<rect x="6" y="132" width="26" height="34" rx="4" fill="#1B1B1B" transform="rotate(-12 19 149)"></rect>
<circle cx="26" cy="152" r="7" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="3"></circle>
<circle cx="110" cy="52" r="9" fill="#F5C9A0" stroke="#1B1B1B" stroke-width="3"></circle>
<path d="M96 38 Q92 48 96 58 M122 36 Q128 48 122 60" fill="none" stroke="#1B1B1B" stroke-width="2.5" stroke-linecap="round"></path>
</symbol>
<symbol id="lf" viewBox="0 0 40 24"><path d="M2 12 Q18 -6 38 12 Q18 30 2 12 Z" fill="currentColor" stroke="#1B1B1B" stroke-width="2.5" stroke-linejoin="round"></path><path d="M5 12 H32" stroke="#1B1B1B" stroke-width="1.8" stroke-linecap="round"></path></symbol>
<symbol id="branch" viewBox="-20 -30 460 240" overflow="visible">
<path d="M110 40 C118 80 106 110 116 150 M290 36 C284 70 294 96 286 124 M200 40 C206 60 198 76 204 92" fill="none" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path>
<path d="M366 32 Q392 30 414 16" fill="none" stroke="#1B1B1B" stroke-width="13" stroke-linecap="round"></path>
<path d="M366 32 Q392 30 414 16" fill="none" stroke="#A0703C" stroke-width="6" stroke-linecap="round"></path>
<path d="M-20 30 C80 18 160 42 240 30 C290 22 330 36 370 32" fill="none" stroke="#1B1B1B" stroke-width="24" stroke-linecap="round"></path>
<path d="M-20 30 C80 18 160 42 240 30 C290 22 330 36 370 32" fill="none" stroke="#A0703C" stroke-width="16" stroke-linecap="round"></path>
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(406 2) rotate(-30)" style="color: #7DDB8A"></use>
<path d="M30 26 Q50 22 66 28 M260 28 Q280 24 300 30" fill="none" stroke="#7A5230" stroke-width="3" stroke-linecap="round"></path>
<g style="color: #7DDB8A">
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(10 4) rotate(-20)"></use>
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(52 36) rotate(30)"></use>
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(140 2) rotate(-35)"></use>
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(222 40) rotate(40)"></use>
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(318 6) rotate(-25)"></use>
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(372 40) rotate(35)"></use>
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(116 92) rotate(60)"></use>
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(290 82) rotate(110)"></use>
</g>
<g style="color: #5FBF6A">
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(84 6) rotate(-50)"></use>
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(170 38) rotate(25)"></use>
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(250 -2) rotate(-15)"></use>
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(340 44) rotate(50)"></use>
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(124 134) rotate(80)"></use>
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(102 64) rotate(120)"></use>
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(298 110) rotate(70)"></use>
<use href="#lf" x="0" y="0" width="40" height="24" transform="translate(212 76) rotate(75)"></use>
</g>
<circle cx="194" cy="50" r="7" fill="#F4A73E" stroke="#1B1B1B" stroke-width="2.5"></circle><circle cx="206" cy="54" r="7" fill="#F4A73E" stroke="#1B1B1B" stroke-width="2.5"></circle><circle cx="200" cy="64" r="7" fill="#F4A73E" stroke="#1B1B1B" stroke-width="2.5"></circle>
</symbol>
<symbol id="briefcase" viewBox="0 0 120 100"><path d="M42 22 V12 Q42 6 48 6 H72 Q78 6 78 12 V22" fill="none" stroke="#1B1B1B" stroke-width="7" stroke-linecap="round"></path><rect x="6" y="22" width="108" height="72" rx="14" fill="#1B1B1B"></rect><rect x="6" y="18" width="108" height="72" rx="14" fill="#F4A73E" stroke="#1B1B1B" stroke-width="4"></rect><path d="M6 46 H114" stroke="#1B1B1B" stroke-width="4"></path><rect x="50" y="38" width="20" height="18" rx="4" fill="#EEF15A" stroke="#1B1B1B" stroke-width="4"></rect><path d="M18 28 H34" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.7"></path></symbol>
<symbol id="idcard" viewBox="0 0 100 130"><path d="M30 0 L50 40 L70 0" fill="none" stroke="#3B82D9" stroke-width="8" stroke-linejoin="round"></path><rect x="12" y="42" width="76" height="86" rx="12" fill="#1B1B1B"></rect><rect x="12" y="38" width="76" height="86" rx="12" fill="#8FE0D8" stroke="#1B1B1B" stroke-width="4"></rect><rect x="40" y="34" width="20" height="10" rx="3" fill="#B9C2CC" stroke="#1B1B1B" stroke-width="3"></rect><circle cx="50" cy="70" r="16" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="3"></circle><use href="#rk-face-art" x="36" y="56" width="28" height="28"></use><path d="M28 100 H72 M34 110 H66" stroke="#1B1B1B" stroke-width="4" stroke-linecap="round"></path></symbol>
<symbol id="trophy" viewBox="0 0 120 130"><path d="M30 16 H12 Q8 46 34 50 M90 16 H108 Q112 46 86 50" fill="none" stroke="#1B1B1B" stroke-width="7" stroke-linecap="round"></path><path d="M28 8 H92 V40 Q92 72 60 74 Q28 72 28 40 Z" fill="#EEF15A" stroke="#1B1B1B" stroke-width="4" stroke-linejoin="round"></path><path d="M40 18 V40 Q40 52 50 58" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.8"></path><rect x="52" y="72" width="16" height="22" fill="#F4A73E" stroke="#1B1B1B" stroke-width="4"></rect><rect x="30" y="98" width="60" height="26" rx="6" fill="#1B1B1B"></rect><rect x="30" y="94" width="60" height="26" rx="6" fill="#F4A73E" stroke="#1B1B1B" stroke-width="4"></rect><text x="60" y="113" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="14" fill="#1B1B1B">#1</text><path d="M60 26 L64 35 L73 36 L66 42 L68 51 L60 46 L52 51 L54 42 L47 36 L56 35 Z" fill="#FFFFFF" stroke="#1B1B1B" stroke-width="2.5" stroke-linejoin="round"></path></symbol>
<symbol id="sun" viewBox="0 0 60 60"><circle cx="30" cy="30" r="14" fill="#F4C430" stroke="#1B1B1B" stroke-width="3"></circle><path d="M30 4 V10 M30 50 V56 M4 30 H10 M50 30 H56 M12 12 L16 16 M44 44 L48 48 M48 12 L44 16 M12 48 L16 44" stroke="#1B1B1B" stroke-width="3" stroke-linecap="round"></path></symbol>
`;

export default sprites;
