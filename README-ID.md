# MovieHub — Starter Website Film

Starter website film baru dengan gaya katalog gelap seperti referensi yang Anda kirim: navbar, hero banner, dan barisan poster horizontal.

## Fitur
- Home dengan Popular Movies, Now Playing, Top Rated, Upcoming, dan Popular TV Shows.
- Pencarian film dan serial.
- Halaman detail berdasarkan ID TMDB.
- 8 bahasa: English, Indonesia, Spanish, Thai, Portuguese, French, Vietnamese, Bulgarian.
- SEO title dan meta description dinamis berdasarkan film dan bahasa.
- Cloudflare Pages Function untuk menyimpan TMDB API key di environment, bukan di JavaScript frontend.
- Layout responsif untuk desktop dan HP.

## 1. Masukkan TMDB API key
1. Buat/ambil API Read Access Token atau API key dari akun TMDB.
2. Untuk proyek Cloudflare Pages, buka **Settings → Variables and Secrets**.
3. Tambahkan variable bernama `TMDB_API_KEY` dan masukkan API key Anda sebagai secret.
4. Jangan menaruh key asli di file `assets/app.js`.

Function di `functions/api/tmdb/[[path]].js` akan menggunakan secret itu sebagai proxy.

## 2. Deploy ke Cloudflare Pages
Karena proyek memakai Pages Functions, cara yang disarankan adalah:
1. Ekstrak ZIP ini ke folder komputer.
2. Upload folder proyek ke repository GitHub baru.
3. Di Cloudflare, buka **Workers & Pages → Create → Pages → Connect to Git**.
4. Pilih repository tersebut.
5. Framework preset: **None**.
6. Build command: kosongkan.
7. Build output directory: `/` (root folder proyek).
8. Deploy, lalu tambahkan `TMDB_API_KEY` pada Settings → Variables and Secrets. Setelah menambahkan secret, lakukan redeploy.

Jika Anda menggunakan Direct Upload/drag-and-drop dan fungsi `/api/tmdb/*` tidak berjalan, gunakan metode Git di atas atau Wrangler karena proyek ini membutuhkan Pages Functions.

## 3. Uji lokal (opsional)
Gunakan Wrangler dari terminal:
```bash
npx wrangler pages dev .
```
Tambahkan secret lokal melalui file `.dev.vars` (jangan unggah file ini ke Git):
```text
TMDB_API_KEY=API_KEY_ANDA
```

## 4. Watch Now
TMDB hanya menyediakan metadata dan gambar, bukan streaming film lengkap. Tombol Watch Now disediakan di halaman detail, tetapi URL tujuan perlu Anda atur di `assets/app.js` pada `WATCH_URL_TEMPLATE`. Default-nya adalah `#watch-unconfigured` agar situs tidak mengarah ke layanan yang belum Anda tentukan.

Contoh template URL milik layanan streaming yang memang Anda berhak gunakan:
```js
const WATCH_URL_TEMPLATE = ""; // kosong = tampilkan pesan belum dikonfigurasi
```
Anda juga bisa mengganti fungsi `getWatchUrl(movie)` untuk membuat pemetaan URL per film. Jangan menganggap TMDB menyediakan URL video film lengkap.

## 5. Catatan SEO
URL detail berbentuk `/{bahasa}/movie/{tmdbId}`. Title dan meta description diperbarui saat halaman detail dibuka. Untuk SEO maksimal, situs statis dengan JavaScript masih memiliki keterbatasan karena crawler bisa berbeda dalam merender JavaScript; tahap lanjutan bisa menambahkan rendering sisi server bila diperlukan.
