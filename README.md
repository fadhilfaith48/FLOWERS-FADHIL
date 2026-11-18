# 💐 Flowers for Someone — FLOWERS-FADHIL

Website hadiah kecil untuk seseorang: sebuah taman bunga yang mekar, surat yang diketik perlahan di dalam amplop, lagu yang bisa diputar, dan galeri kenangan berbentuk polaroid. Semuanya dibangun dengan HTML, CSS/SCSS, dan JavaScript vanilla — tanpa framework, tanpa proses build, dan bisa langsung dibuka di browser.

## Highlights

- **Alur cerita lima halaman** — `index → flower → surat → musik → kenangan`, dengan tombol navigasi yang saling terhubung.
- **Taman bunga yang mekar** — bunga, daun, dan rumput tumbuh dengan animasi CSS bertahap, lengkap dengan kupu-kupu yang terbang dan kelopak yang berjatuhan (`flower.html`, `css/style.css`).
- **Judul animasi** — huruf "I Have Something" muncul satu per satu di landing page, lalu dilanjutkan judul "I ♥ U" di halaman bunga.
- **Amplop & surat interaktif** — amplop bisa diklik (atau dibuka dengan Enter/Spasi), lalu isi surat diketik huruf demi huruf dan disertai confetti (`js/surat.js`, `js/confetti.js`).
- **Music player** — tombol putar/jeda, progress bar yang bisa diklik untuk melompat ke bagian lagu, durasi berjalan, dan not-not yang berjatuhan (`js/musik.js`).
- **Galeri polaroid** — kartu foto miring yang muncul satu per satu saat di-scroll menggunakan `IntersectionObserver` (`js/kenangan.js`).
- **Hujan kelopak & bintang** — partikel latar dibuat secara acak di setiap halaman (`js/petals.js`).
- **Hati saat diklik** — klik di mana saja akan memunculkan hati kecil ❤️ yang memudar (`js/hearts.js`).
- **Tanpa dependensi** — cukup file statis; tidak perlu `npm install` atau build step.

## Tech Stack

| Layer | Teknologi |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 + SCSS (Sass) |
| Interaksi | JavaScript vanilla (ES5/ES6, tanpa library) |
| Animasi | CSS keyframes, transition, `IntersectionObserver` |
| Font | Google Fonts — Great Vibes & Poppins |
| Deploy | GitHub Pages (GitHub Actions) |

## Getting Started

### Prasyarat

- Browser modern (Chrome, Edge, Firefox, atau Safari).
- Opsional, untuk menjalankan lewat server lokal: Python 3, Node.js, atau ekstensi Live Server di VS Code.

### Instalasi

```bash
git clone https://github.com/fadhilfaith48/FLOWERS-FADHIL.git
cd FLOWERS-FADHIL
```

Karena ini situs statis, tidak ada dependency yang perlu dipasang. Pilih salah satu cara menjalankan:

1. **Langsung** — buka `index.html` di browser.
2. **Server lokal (Python)**:

   ```bash
   python -m http.server 8000
   ```

   Lalu buka <http://localhost:8000>.

3. **Server lokal (Node)**:

   ```bash
   npx serve .
   ```

4. **VS Code** — klik kanan `index.html` → *Open with Live Server*.

> Disarankan memakai server lokal agar pemutaran audio dan pemuatan gambar berjalan konsisten di semua browser.

## Halaman

| Halaman | Isi |
| --- | --- |
| `index.html` | Landing page "sebuah kejutan kecil untukmu ♥" dengan tombol **Open**, judul animasi, bintang, dan kelopak. |
| `flower.html` | Taman bunga yang mekar, kupu-kupu, judul "I ♥ U", dan tautan menuju surat. |
| `surat.html` | Amplop bersegel hati yang terbuka menjadi surat ketikan mesin tik + confetti. |
| `musik.html` | Pemutar lagu `media/lagu.mp3` dengan progress bar dan not berjatuhan. |
| `kenangan.html` | Empat kartu polaroid yang muncul saat di-scroll. |

## Struktur Proyek

```text
├── index.html                  # Landing page + judul animasi
├── flower.html                 # Taman bunga, kupu-kupu, judul "I ♥ U"
├── surat.html                  # Amplop dan surat
├── musik.html                  # Music player
├── kenangan.html               # Galeri polaroid
├── css/
│   ├── style.css               # Style taman bunga (hasil kompilasi SCSS)
│   ├── style.css.map           # Source map untuk SCSS
│   ├── index.css               # Style landing page
│   ├── surat.css               # Style amplop & surat
│   ├── musik.css               # Style player & not
│   ├── kenangan.css            # Style polaroid
│   └── effects.css             # Efek global: kelopak, bintang, hati, confetti
├── scss/
│   └── style.scss              # Sumber SCSS untuk css/style.css
├── js/
│   ├── index.js                # Judul huruf-per-huruf di landing page
│   ├── main.js                 # Animasi judul "I ♥ U" di halaman bunga
│   ├── surat.js                # Buka amplop + efek ketik surat
│   ├── musik.js                # Player, progress bar, falling notes
│   ├── kenangan.js             # Reveal polaroid saat scroll
│   ├── petals.js               # Kelopak, bintang, dan kupu-kupu acak
│   ├── confetti.js             # spawnConfetti() untuk perayaan
│   └── hearts.js               # Hati saat halaman diklik
├── img/                        # Foto kenangan (kenangan-1.jpg dst.)
├── media/                      # Lagu (lagu.mp3)
├── images/
│   └── gift.png                # Favicon halaman bunga
└── .github/workflows/static.yml # Deploy otomatis ke GitHub Pages
```

## Kustomisasi

### Mengganti isi surat

Semua teks surat ada di array `message` pada `js/surat.js`:

```js
var message = [
  'Untuk kamu,',
  '',
  'Aku cuma mau bilang, terima kasih sudah hadir ...',
  '',
  '— Dari aku, untuk kamu'
].join('\n');
```

Setiap `\n` diubah menjadi baris baru, dan kecepatan ketik diatur lewat `setTimeout(step, 26)` (satuan milidetik).

### Menambahkan lagu

1. Siapkan file MP3 dan simpan sebagai **`media/lagu.mp3`**.
2. Buka `musik.html` — tombol ▶ akan memutar lagu, progress bar dan durasi terisi otomatis.
3. Kalau file belum ada atau gagal dimuat, halaman menampilkan petunjuk agar tetap rapi.

Judul lagu yang tampil di bawah player bisa diganti pada `<p class="song-name">` di `musik.html`.

### Menambahkan foto kenangan

1. Simpan foto di folder **`img/`** dengan nama `kenangan-1.jpg`, `kenangan-2.jpg`, `kenangan-3.jpg`, `kenangan-4.jpg`.
2. Di **`kenangan.html`**, ganti `src="data:image/svg+xml,..."` pada setiap kartu menjadi `src="img/kenangan-1.jpg"` (dst.).
3. Sesuaikan `<figcaption>` dan atribut `alt` untuk tiap kartu.

Selama foto belum ada, kartu menampilkan placeholder SVG berwarna rose tanpa error. Untuk menambah kartu baru, duplikat blok `<figure class="polaroid">` di `kenangan.html`; animasi reveal akan otomatis berlaku karena `js/kenangan.js` memilih semua elemen `.polaroid`.

### Mengubah warna dan tema

- Token warna utama ada di `:root` pada `css/effects.css` (`--rose`, `--rose-soft`, `--gold`, `--blush`) dan `css/index.css`.
- Tampilan taman bunga diatur di `scss/style.scss`. Setelah diubah, kompilasi ulang ke `css/style.css`, misalnya:

  ```bash
  npx sass scss/style.scss css/style.css --source-map
  ```

- Warna hati, kelopak, dan confetti juga ditulis langsung sebagai array di `js/petals.js`, `js/hearts.js`, dan `js/confetti.js`.

### Durasi dan intensitas animasi

- Kecepatan pertumbuhan bunga diatur lewat variabel `--fl-speed` dan `--d` pada `flower.html` / `scss/style.scss`.
- Jumlah kelopak, bintang, dan kupu-kupu diatur pada perulangan di `js/petals.js` (misalnya `for (i = 0; i < 12; i++)`).
- Jumlah confetti bisa diatur saat pemanggilan `window.spawnConfetti(120)` di `js/surat.js`.

## Deployment

Repo ini sudah dilengkapi workflow GitHub Pages di `.github/workflows/static.yml`:

- Berjalan otomatis setiap push ke branch `main`, atau manual lewat tab **Actions → Deploy static content to Pages**.
- Seluruh isi repo diunggah sebagai artifact, jadi tidak ada langkah build.
- Aktifkan **Settings → Pages → Source: GitHub Actions** pada repo GitHub jika belum.

Karena situs hanya berisi file statis, hosting lain seperti Netlify, Vercel, atau server web apa pun juga bisa dipakai — cukup arahkan ke folder root proyek.

## Catatan

- Folder `img/` dan `media/` sengaja dibiarkan kosong. Halaman `kenangan.html` memakai placeholder SVG dan `musik.html` menampilkan petunjuk sampai `media/lagu.mp3` ditambahkan.
- Semua path bersifat relatif, jadi situs tetap berjalan di subpath GitHub Pages (misalnya `https://username.github.io/FLOWERS-FADHIL/`).
- Font dimuat dari Google Fonts; tanpa koneksi internet, tampilan akan memakai font cadangan (cursive/Arial).
