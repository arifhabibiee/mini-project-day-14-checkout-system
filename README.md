# Mini Project - Sistem Checkout Produk Sederhana

## 1. Identitas

- **Nama:** Abdul Arif Habibi
- **Bootcamp:** Full Stack Web Development - Batch 13
- **Mini Project:** Case Study Flowchart, Pseudocode & JavaScript
- **Case Study:** Sistem Checkout Produk Sederhana

## 2. Deskripsi Case Study

Mini project Sistem Checkout Produk Sederhana merupakan studi kasus penerapan Computational Thinking untuk menyelesaikan masalah perhitungan belanja menggunakan JavaScript.

Tujuan mini project ini adalah menerapkan proses pemecahan masalah secara sistematis melalui empat komponen Computational Thinking, yaitu Problem Decomposition untuk membagi masalah menjadi langkah-langkah kecil, Pattern Recognition untuk mengenali pola dan aturan keputusan, Abstraction untuk menentukan informasi yang relevan, serta Algorithmic Thinking untuk menyusun urutan penyelesaian masalah.

Program menerima tiga input utama, yaitu harga produk, jumlah barang, dan status member. Berdasarkan input tersebut, program menghitung subtotal, diskon member, total setelah diskon, ongkos kirim, dan total pembayaran.

Hasil analisis kemudian digunakan sebagai dasar penyusunan Flowchart dan Pseudocode, sebelum diterjemahkan menjadi program JavaScript. Implementasi program diuji menggunakan Node.js untuk memastikan hasil perhitungan sesuai dengan aturan checkout.

### Input Program

Fungsi utama yang digunakan adalah:

```javascript
hitungCheckout(harga, jumlah, isMember);
```

Program menggunakan tiga input:

| Input      | Tipe Data | Keterangan                                               |
| ---------- | --------- | -------------------------------------------------------- |
| `harga`    | Number    | Harga satu produk, harus berupa angka valid lebih dari 0 |
| `jumlah`   | Number    | Jumlah barang, harus berupa bilangan bulat positif       |
| `isMember` | Boolean   | Status member, menggunakan `true` atau `false`           |

Status member diasumsikan menggunakan tipe data Boolean.

### Fitur Program

1. Memvalidasi input harga dan jumlah barang.
2. Menghitung subtotal berdasarkan harga dan jumlah barang.
3. Memberikan diskon 10% untuk pembeli yang merupakan member.
4. Menghitung total belanja setelah diskon.
5. Menentukan ongkos kirim berdasarkan total setelah diskon.
6. Menghitung total pembayaran akhir.
7. Menghasilkan pesan kesalahan jika input tidak valid.

### Aturan Perhitungan

**1. Subtotal**

Subtotal dihitung dengan mengalikan harga produk dan jumlah barang.

```text
subtotal = harga * jumlah
```

**2. Diskon Member**

- Jika `isMember = true`, diskon sebesar 10% dari subtotal.
- Jika `isMember = false`, diskon sebesar 0.

**3. Total Setelah Diskon**

```text
totalSetelahDiskon = subtotal - diskon
```

**4. Ongkos Kirim**

- Jika total setelah diskon >= Rp250.000, ongkir = Rp0.
- Jika total setelah diskon < Rp250.000, ongkir = Rp15.000.

**5. Total Pembayaran**

```text
totalBayar = totalSetelahDiskon + ongkir
```

### Output Program

Jika input valid, fungsi menghasilkan lima informasi:

- `subtotal`
- `diskon`
- `totalSetelahDiskon`
- `ongkir`
- `totalBayar`

Jika harga atau jumlah barang tidak valid, fungsi menghasilkan pesan:

```text
Input tidak valid
```

Program hanya berfokus pada logika checkout dan tidak menggunakan tampilan website maupun database.

## 3. Struktur Folder

```text
mini-project-day-14/
├── analysis.md
├── checkout.js
├── flowchart.drawio
├── flowchart.drawio.png
├── pseudocode.md
├── README.md
└── testing.md
```

Keterangan:

| File                   | Deskripsi                                                    |
| ---------------------- | ------------------------------------------------------------ |
| `analysis.md`          | Analisis masalah menggunakan Computational Thinking dan IPO  |
| `checkout.js`          | Implementasi sistem checkout menggunakan JavaScript          |
| `flowchart.drawio`     | Flowchart dalam format yang dapat diedit menggunakan draw.io |
| `flowchart.drawio.png` | Gambar Flowchart Sistem Checkout Produk Sederhana            |
| `pseudocode.md`        | Algoritma checkout dalam bentuk Pseudocode                   |
| `README.md`            | Dokumentasi utama mini project                               |
| `testing.md`           | Dokumentasi test cases dan hasil pengujian                   |

## 4. Cara Menjalankan dan Pengujian Program

### Persyaratan

Program dijalankan menggunakan Node.js.

Pastikan Node.js telah terpasang dengan menjalankan perintah berikut pada terminal:

```powershell
node --version
```

Jika Node.js sudah terpasang, terminal akan menampilkan versi Node.js yang digunakan.

### Cara Menjalankan Program

1. Buka folder project menggunakan Visual Studio Code.
2. Buka terminal melalui menu **Terminal > New Terminal**.
3. Pastikan terminal berada pada folder yang berisi file `checkout.js`.
4. Jalankan perintah berikut:

   ```powershell
   node .\checkout.js
   ```

5. Program akan menampilkan hasil pengujian T01 sampai T12 pada terminal.

### Metode Pengujian

Pengujian dilakukan dengan memanggil fungsi `hitungCheckout()` menggunakan beberapa kombinasi harga, jumlah barang, dan status member.

Pengujian mencakup:

1. Checkout member dan nonmember.
2. Perhitungan diskon member sebesar 10%.
3. Penentuan ongkir berdasarkan batas gratis ongkir.
4. Pembelian lebih dari satu barang.
5. Penanganan harga dan jumlah barang yang tidak valid.
6. Perhitungan menggunakan harga desimal yang valid.

Setiap hasil pengujian dibandingkan menggunakan:

- **Expected Output:** Hasil yang diharapkan berdasarkan aturan perhitungan.
- **Actual Output:** Hasil yang diperoleh setelah program dijalankan.

Test case dinyatakan PASS apabila Actual Output sesuai dengan Expected Output.

### Hasil Pengujian

Berdasarkan pengujian menggunakan Node.js, diperoleh:

| Keterangan       | Hasil |
| ---------------- | ----: |
| Total Test Cases |    12 |
| PASS             |    12 |
| FAIL             |     0 |

Seluruh 12 test case menghasilkan output sesuai dengan hasil yang diharapkan.

## 5. Penggunaan AI

AI digunakan sebagai alat bantu diskusi, pembelajaran, dan review selama proses pengerjaan mini project, meliputi:

1. Membantu meninjau atau memeriksa pengerjaan alur Flowchart

2. AI digunakan sebagai partner diskusi dan reviewer dalam memahami cara menerjemahkan Pseudocode menjadi kode JavaScript dikarenakan masih dalam tahap awal pembelajaran JavaScript sehingga butuh penjelasan terkait penggunaan syntax.

3. Review terkait implementasi test case atau pengujian program agar sesuai agar sesuai dengan Pseudocode dan Flowchart.

4. Berdiskusi mengenai struktur README yang sesuai, pembagian informasi antardokumen, dan penyusunan penjelasan agar lebih ringkas, jelas, serta mudah dipahami.
