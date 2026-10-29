# Analisis Mini Project - Sistem Checkout Produk Sederhana

## 1. Problem Decomposition

Masalah checkout dibagi menjadi beberapa langkah:

1. Menerima input harga, jumlah, dan status member.
2. Memvalidasi harga dan jumlah barang.
3. Menghitung subtotal dari harga dikali jumlah.
4. Menghitung diskon sebesar 10% jika pembeli merupakan member.
5. Menghitung total belanja setelah diskon.
6. Menentukan ongkos kirim berdasarkan total setelah diskon.
7. Menghitung total akhir yang harus dibayar.
8. Menghasilkan informasi hasil checkout.

Jika input harga atau jumlah tidak valid, program akan menghasilkan pesan kesalahan dan tidak melanjutkan perhitungan.

## 2. Pattern Recognition

Ada dua keputusan utama dalam perhitungan checkout. Kedua aturan keputusan menggunakan kondisi untuk menentukan hasil perhitungan.

1. Diskon bergantung pada status member. Pembeli yang merupakan member mendapat diskon 10%, sedangkan nonmember tidak mendapat diskon.
2. Ongkos kirim bergantung pada total belanja setelah diskon. Jika nilainya mencapai Rp250.000 atau lebih, ongkir gratis. Jika belum mencapai batas tersebut, ongkir Rp15.000.

## 3. Abstraction

Untuk menghitung checkout, program hanya memerlukan tiga input utama:

- Harga produk
- Jumlah barang
- Status member

Informasi seperti nama produk, warna produk, alamat pembeli, dan metode pembayaran tidak diperlukan karena tidak memengaruhi aturan perhitungan pada kasus ini.

Nilai diskon, batas gratis ongkir, dan biaya ongkir juga sudah ditentukan dalam aturan:

- Diskon member: 10%
- Batas gratis ongkir: Rp250.000
- Ongkir reguler: Rp15.000

## 4. Algorithmic Thinking

1. Mulai.
2. Terima input harga, jumlah, dan status member.
3. Periksa apakah harga valid dan lebih dari 0.
4. Periksa apakah jumlah merupakan bilangan bulat lebih dari 0.
5. Jika ada input tidak valid, hasilkan pesan kesalahan lalu selesai.
6. Hitung subtotal.
7. Periksa status member untuk menentukan diskon.
8. Hitung total setelah diskon.
9. Periksa apakah total setelah diskon mencapai Rp250.000.
10. Tentukan ongkos kirim.
11. Hitung total pembayaran.
12. Hasilkan rincian checkout.
13. Selesai.

## 5. Input, Process, Output (IPO)

### Input (Masukan)

- `harga`: harga satu produk, harus berupa angka lebih dari 0.
- `jumlah`: jumlah barang, harus berupa bilangan bulat lebih dari 0.
- `isMember`: status keanggotaan pembeli, berupa `true` atau `false`.

### Process (Proses)

1. Memeriksa validitas harga dan jumlah.

2. Menghitung subtotal:

   `subtotal = harga * jumlah`

3. Menentukan diskon:
   - Jika member, diskon = 10% dari subtotal.
   - Jika bukan member, diskon = 0.

4. Menghitung total setelah diskon:

   `totalSetelahDiskon = subtotal - diskon`

5. Menentukan ongkos kirim:
   - Jika total setelah diskon >= Rp250.000, ongkir = Rp0.
   - Jika total setelah diskon < Rp250.000, ongkir = Rp15.000.

6. Menghitung total pembayaran:

   `totalBayar = totalSetelahDiskon + ongkir`

### Output (Keluaran)

Jika input valid, program menghasilkan:

- Subtotal
- Diskon
- Total setelah diskon
- Ongkos kirim
- Total pembayaran

Jika input tidak valid, program menghasilkan pesan kesalahan.

## 6. Contoh Perhitungan

Contoh input:

- Harga: Rp250.000
- Jumlah: 1
- isMember: Ya (`true`)

Perhitungan:

- Subtotal = Rp250.000 × 1 = Rp250.000
- Diskon = 10% × Rp250.000 = Rp25.000
- Total setelah diskon = Rp250.000 - Rp25.000 = Rp225.000
- Ongkir = Rp15.000
- Total bayar = Rp225.000 + Rp15.000 = Rp240.000

Pembeli tetap membayar ongkir karena nilai belanja setelah diskon belum mencapai Rp250.000.

## 7. Batasan dan Asumsi

- Harga harus berupa angka yang valid dan lebih dari 0.
- Jumlah harus berupa bilangan bulat positif.
- Status member diasumsikan menggunakan nilai Boolean (`true` atau `false`).
- Harga dapat memiliki nilai desimal karena ketentuan tugas hanya mensyaratkan angka positif.
- Gratis ongkir dihitung berdasarkan total setelah diskon.
- Program hanya berfokus pada logika checkout dan tidak memerlukan tampilan website atau database.
