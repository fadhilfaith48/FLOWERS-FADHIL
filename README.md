💐Resource flowers gift website for someone

# Flowers for Someone 🌸

Welcome to Flowers for Someone! 🌼 This repository hosts the codebase for a charming website dedicated to the art of gifting flowers to your loved ones. Express your sentiments with the beauty of nature!

## Table of Contents
- [Introduction](#introduction)
- [Pages](#pages)
- [Adding Music](#adding-music)
- [Adding Photos](#adding-photos)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## Introduction

Flowers for Someone is your ultimate destination for heartfelt floral gifting. Whether it's a special occasion or just to brighten someone's day, our website offers a delightful of flower arrangements, bouquets, and personalized messages.

## Pages

The site flows like a little story:

1. **index.html** – the surprise landing page ("sebuah kejutan kecil untukmu ♥").
2. **flower.html** – blooming flowers, butterflies, and the "I ♥ U" title.
3. **surat.html** – a sealed envelope that opens into a typed love letter (with confetti 🎊).
4. **musik.html** – a custom music player with falling notes.
5. **kenangan.html** – photo memories as tilted polaroid cards that fade in on scroll.

Extra touches: click anywhere on any page and little hearts pop out (❤️), powered by `js/hearts.js`.

## Adding Music

1. Create/taruh file lagu bernama **`lagu.mp3`** di folder **`media/`**.
2. Buka `musik.html` – tombol ▶ akan memutar lagu, bar progres & durasi tampil otomatis.

Jika file belum ada, halaman musik menampilkan petunjuk agar tetap rapi.

## Adding Photos

1. Taruh foto di folder **`img/`** dengan nama `kenangan-1.jpg`, `kenangan-2.jpg`, `kenangan-3.jpg`, `kenangan-4.jpg`.
2. Di **`kenangan.html`**, ganti `src="data:image/svg+xml,..."` setiap kartu menjadi `src="img/kenangan-1.jpg"` (dst), lalu sesuaikan `<figcaption>`.

Sampai fotonya ada, kartu menampilkan placeholder SVG warna rose tanpa error. Untuk menambah kartu baru:
- duplikat blok `<figure class="polaroid">` di `kenangan.html`,
- ganti nama file gambar dan `<figcaption>`,
- judul/tombol di halaman `surat.html`.

## Technologies Used

This project utilizes the following programming languages and technologies:
- HTML
- CSS
- SCSS (Sass)
- JavaScript

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine: