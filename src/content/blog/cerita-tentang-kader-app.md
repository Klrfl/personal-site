---
title: "Menyelesaikan masalah maba lewat aplikasi sendiri"
pubDate: 2026-01-01T07:25:42.000Z
description: Perjalanan membuat Kader App
is_archived: false
lang: id
tags:
  - blog
---

Sejak saya pertama kali masuk ke perguruan tinggi dari sekolah kejuruan, saya selalu memiliki suatu keinginan untuk menerapkan apa yang sudah saya ketahui dan membuat sesuatu, entah itu program, aplikasi, atau proyek apa pun yang bisa saya kerjakan. Saya ingin menunjukkan kepada dunia bahwa saya mampu mengerjakan proyek perangkat lunak yang bukan hanya teori saja.

Sebagai mahasiswa baru jurusan Informatika, saya harus mengikuti program bernama “kaderisasi”, di mana tujuannya adalah untuk mempersatukan seluruh angkatan Informatika 2025 dan saling mengenal satu sama lain lebih baik.

Sebagai bagian dari program ini, kami dibagi menjadi banyak kelompok, dan setiap kelompok harus melaksanakan “bonding” dengan kelompok lain, yaitu bertemu dengan kelompok lain dan mengambil selfie dengan setiap siswa. Foto-foto tersebut kemudian dicetak, dipotong, dan dimasukkan ke dalam sebuah “buku biru”. Buku ini berisi banyak hal yang tidak perlu saya sebutkan, tetapi bagian paling menarik adalah sebuah daftar yang harus diisi oleh dengan biodata setiap setiap mahasiswa di dalam jurusan Informatika. Setiap item daftar juga disertai foto selfie yang saya sebutkan tadi.

Selayaknya programmer yang baik, saya memikirkan proses mengisi buku biru ini:

- setelah mengambil foto dengan setiap anggota kelompok, saya harus menyusunnya **dalam sebuah grid** agar mudah dipotong.
- Foto-foto tersebut juga harus **berurutan** sehingga, setelah memotong foto, saya dapat dengan mudah menghubungkan setiap foto dengan entri yang sesuai di buku biru.

Awalnya saya mencoba memasukkan gambar secara langsung dan membuat grid di dalam MS Word, tetapi segera menemui masalah:

- Memperbesar atau memperkecil ukuran setiap gambar setelah dimasukkan ke dalam halaman terlalu merepotkan. Setahu saya, tidak ada bingkai atau template untuk memasukkan gambar seperti di Canva.
- Sulit untuk melacak mana siswa yang sudah dicetak. Terkadang saya ingin mencetak hanya hingga jumlah gambar tertentu sambil menyimpan sisanya di halaman untuk nanti.

Setelah acara kader dan basah kuyup karena hujan saat itu, saya berfikir: “pasti ada cara yang lebih baik”. Sebelum membuat aplikasi ini, saya sudah memberi nama gambar-gambar saya dengan konvensi tertentu, di mana bagian pertama adalah nama kelompok yang siswa tersebut ikuti, diikuti oleh NIM (nomor induk mahasiswa), dan kemudian nama siswa. Dan saya berpikir, “bagaimana jika saya membuat aplikasi sendiri di mana saya bisa menyimpan data mahasiswa, melacak status ikatan, dan mengunggah gambar sehingga aplikasi dapat secara otomatis mengaturnya dalam grid, yang kemudian dapat dicetak? Itu akan sangat nyaman”.

Dan begitu perjalanan dimulai.

Saya mulai dengan prototipe sangat sederhana di ponsel saya - tanpa framework, hanya satu file .js. [Begini tampilannya](https://github.com/Klrfl/kader-app/commit/a25903def6799040157f26dff5c3148f3d40eb69):

```js
import fs from "node:fs";

const files = fs.readdirSync(".");

for (const file of files) {
  if (file.startsWith("simurgh")) {
    console.log(file);
  }
}
```

Jadi, kode JavaScript ini pada dasarnya hanya menampilkan semua gambar siswa di direktori saat ini yang termasuk dalam grup Simurgh. Kode ini bisa diperbagus dengan memasukkan daftar yang dihasilkan ke dalam sebuah halaman HTML sehingga dapat ditampilkan di browser dan kemudian dicetak.

Dari sana, aplikasi ini terus berkembang dan menjadi lebih canggih seiring waktu. Setelah mencoba menggunakan modul `node:http` dari Node.js untuk membuat backend ringan yang dipadukan dengan EJS, saya akhirnya mengintegrasikan sebuah framework karena saya berencana untuk mengintegrasikan hal-hal yang lebih kompleks, seperti database (saya awalnya mempertimbangkan menggunakan SQLite dengan modul `node:sqlite` dari Node.js) dan alat frontend (saya ingin menggunakan Tailwind). Tentu saja, lebih cepat untuk membangun prototipe ketika Anda sudah familiar dengan alat yang digunakan.

Saya memilih Astro, dengan Kysely untuk mengakses database SQLite. Ini adalah framework yang sangat andal untuk membuat aplikasi yang pada dasarnya adalah formulir HTML yang sangat kompleks. Saya juga menyukai filosofi dan paradigma di baliknya, yang sederhana dan tidak mencoba mencampurkan frontend dan backend seperti framework JavaScript lainnya (_uhuk uhuk_ Next.js).

## Pengujian

Setelah menyelesaikan MVP, saya menguji aplikasi dan menghasilkan file PDF agar dapat mencetak foto-foto tersebut. Aplikasi ini berfungsi dengan baik di komputer saya!

Awalnya saya menguji aplikasi ini bersama seorang teman yang juga menggunakan Linux (Debian). Saya berpikir semuanya akan berjalan lancar karena kami sama-sama tidak menggunakan Windows, dan saya mengembangkan aplikasi ini di sistem operasi yang sama dengan si pengguna. Namun, saya segera menyadari bahwa apa yang berfungsi untuk saya tidak selalu berfungsi untuk orang lain. Setup awal aplikasi sangat sulit:

- ada suatu masalah dengan instalasi node.js-nya jadi kami menginstal ulang melalui fnm
- untuk menggungah foto dalam aplikasi, pengguna harus secara eksplisit menentukan dimana lokasi untuk menyimpan gambar melalui environment variable. Hal ini sangat merepotkan, menambah pekerjaan yang tidak perlu, dan unggahan file bahkan tidak berfungsi saat saya mencoba build aplikasinya dalam mode production (meskipun akhirnya saya tidak akan menghostingnya juga).

Dari sini, saya memperbaiki dokumentasi. Meskipun masih berupa satu file README.md, sekarang sudah jadi jauh lebih baik. Saya memastikan setiap langkah kecil yang diperlukan untuk menjalankan aplikasi tercatat dalam dokumentasi.

Untuk mengatasi masalah unggahan file, saya mengikuti Laravel dan membuat direktori `storage` khusus agar aplikasi dapat mengunggah gambar ke sana. Selanjutnya, saya membuat perintah untuk membuat sebuah _symbolic link_ ke gambar yang disimpan di `storage` sehingga Astro dapat menyajikan gambar yang sudah diunggah, baik dalam mode pengembangan maupun _production_.

Ada beberapa hal kecil lain yang saya tambahkan seiring waktu, seperti unggahan gambar asinkron untuk menghindari kehilangan status pengeditan formulir dan mengarahkan pengguna kembali ke halaman sebelumnya dengan status pencarian yang tetap terjaga setelah pengeditan formulir dan mengarahkan pengguna kembali ke halaman sebelumnya dengan status pencarian tetap terjaga setelah mengedit data siswa. Perbaikan kecil ini sangat penting karena meningkatkan UX dan menghemat waktu. Implementasinya juga sangat mudah, saya tambahkan; saya tidak perlu mengelola state karena sudah terenkode dalam URL. Jika Anda ingin membaca lebih lanjut tentang ini, saya sangat merekomendasikan [blog berikut karya Ahmad Alfy](https://alfy.blog/2025/10/31/your-url-is-your-state.html).

## Apa yang saya pelajari

Saya belajar dua hal. Pertama, JavaScript agak kurang bagus dalam menangani tanggal. Jadi, ceritanya, saya sedang formulir input untuk tanggal lahir, dan saya terus bertanya-tanya kenapa bulan terus berkurang satu jika formulir dikirimkan dengan tanggal yang tidak diubah (misal seperti ini: saat dikirim di formulir sudah tertulis Februari, tapi kemudian menjadi Januari dengan sendirinya). Ternyata, saat menggunakan metode `Date.getMonth()`, metode tersebut mengembalikan _indeks_ bulan, bukan nomor bulan itu sendiri.

```js
const month = new Date("1970-01-01").getMonth();
console.log(month); // 0
```

Jadi, yang terjadi adalah saya menetapkan nilai awal input tanggal ke indeks bulan alih-alih bulan secara langsung, dan saat formulir dikirimkan, server mengharapkan formulir tersebut berisi bulan sebagai angka. Misalkan pengguna memilih Februari di formulir. Saat formulir dikirimkan, formulir akan mengirimkan `1`, yang merupakan indeks bulan Februari. Saat formulir dimuat kembali, `1` akan ditetapkan sebagai nilai awal di bidang formulir, yang diinterpretasikan sebagai Januari.

Perbaikannya sangat sederhana: cukup `+1` pada bulan sebelum menampilkannya di formulir.

Hal lain yang saya pelajari adalah bahwa solusi perangkat lunak untuk masalah tidak hanya harus menyelesaikan masalah itu sendiri, tetapi juga lebih mudah daripada dipecahkan secara manual. Salah satu hal terkait hal ini adalah saya hanya mempublikasikan kode sumber Kader App, dan tidak menyediakan versi yang dihosting supaya orang-orang tidak perlu menjalankannya sendiri. Aplikasi ini dapat dengan mudah dihosting, tetapi hal itu tidak kesampaian karena keterbatasan anggaran dan waktu, dan sebagai hasilnya, saya harus memberikan instruksi dan dukungan kepada siapa pun yang berani (wkwkwk) menggunakan aplikasi saya.

Saya belajar banyak dari perjalanan ini: rekayasa perangkat lunak bukan hanya tentang berapa banyak baris kode yang dapat Anda hasilkan atau berapa banyak kerangka kerja yang Anda ketahui, tetapi tentang memahami masalah pengguna dan menyelesaikannya secara efektif menggunakan alat yang tersedia.
