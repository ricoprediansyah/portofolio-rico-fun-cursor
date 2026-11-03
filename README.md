# Portofolio Rico — Story

Portofolio bergaya buku cerita (Prolog → Bab 1–6 → Epilog), dibuat dengan **React + Vite + TypeScript**.
Saat halaman di-scroll, sekumpulan kursor ("swarm") menyusun tiap elemen: kotak seleksi, teks yang diketik,
dan garis ukur merah.

## Menjalankan

Butuh [Node.js](https://nodejs.org) versi LTS.

```bash
npm install
npm run dev       # buka http://localhost:5173
npm run build     # hasil siap upload ada di folder dist/
npm run preview   # cek hasil build
```

## Mengubah isi

| Mau ganti apa | File |
|---|---|
| Teks, pengalaman, proyek, link, skill | `src/data.ts` |
| Tata letak tiap bab | `src/components/Sections.tsx` |
| Warna, ukuran, responsif, animasi | `src/styles.css` |
| Ilustrasi SVG (karakter, adegan) | `src/art/` |
| Perilaku kursor swarm | `src/swarm/engine.ts` |

### Animasi swarm

Tambahkan atribut `data-build` ke elemen mana pun:

- `data-build="box"` — kursor menarik kotak seleksi, lalu elemen muncul
- `data-build="text"` — kursor mengetik teks baris demi baris
- `data-build="pop"` — kursor mengklik, elemen muncul memantul

Pengunjung bisa menekan **Lewati animasi** / **Ulangi animasi** di pojok kiri bawah.
Kalau perangkat pengunjung diset "kurangi gerakan", animasi otomatis dimatikan.

## Yang masih perlu diisi

- Proyek tanpa web punya `link: ''` di `projects` (`src/data.ts`). Isi URL + `cta` kalau nanti sudah online.
- Deskripsi **Cassava Circular Economy** dan **Reminder** masih sementara (ditandai `TODO`).
