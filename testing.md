# Testing - Sistem Checkout Produk Sederhana

## 1. Test Cases

Pengujian menggunakan beberapa kombinasi harga, jumlah barang, dan status member.

Format Expected Output dan Actual Output pada tabel adalah:

`subtotal · diskon · totalBayar`

Nilai `totalBayar` merupakan total pembayaran akhir setelah diskon dan penambahan ongkos kirim.

| ID  |      Harga | Qty | Member  | Expected Output         | Actual Output           | Status |
| --- | ---------: | --: | :-----: | ----------------------- | ----------------------- | :----: |
| T01 |     100000 |   1 | `false` | 100000 · 0 · 115000     | 100000 · 0 · 115000     |  PASS  |
| T02 |     200000 |   1 | `true`  | 200000 · 20000 · 195000 | 200000 · 20000 · 195000 |  PASS  |
| T03 |     250000 |   1 | `false` | 250000 · 0 · 250000     | 250000 · 0 · 250000     |  PASS  |
| T04 |     250000 |   1 | `true`  | 250000 · 25000 · 240000 | 250000 · 25000 · 240000 |  PASS  |
| T05 |     300000 |   1 | `true`  | 300000 · 30000 · 270000 | 300000 · 30000 · 270000 |  PASS  |
| T06 |     100000 |   3 | `false` | 300000 · 0 · 300000     | 300000 · 0 · 300000     |  PASS  |
| T07 |          0 |   1 | `false` | Input tidak valid       | Input tidak valid       |  PASS  |
| T08 |      -5000 |   1 | `true`  | Input tidak valid       | Input tidak valid       |  PASS  |
| T09 |     100000 |   0 | `true`  | Input tidak valid       | Input tidak valid       |  PASS  |
| T10 |     100000 | 1.5 | `false` | Input tidak valid       | Input tidak valid       |  PASS  |
| T11 | `"100000"` |   1 | `true`  | Input tidak valid       | Input tidak valid       |  PASS  |
| T12 |    12500.5 |   2 | `false` | 25001 · 0 · 40001       | 25001 · 0 · 40001       |  PASS  |

Keterangan:

- **Expected Output:** Hasil yang diharapkan berdasarkan aturan perhitungan.
- **Actual Output:** Hasil yang diperoleh setelah program dijalankan menggunakan Node.js.
- **PASS:** Actual Output sesuai dengan Expected Output.
- **FAIL:** Actual Output tidak sesuai dengan Expected Output.

## 2. Hasil Pengujian

Berdasarkan hasil pengujian menggunakan Node.js, diperoleh:

- Total test case: 12
- PASS: 12
- FAIL: 0

Seluruh test case menghasilkan output sesuai dengan hasil yang diharapkan.

## 3. Kesimpulan

Berdasarkan 12 test case yang telah dijalankan, program berhasil menghitung subtotal, diskon member, total setelah diskon, ongkos kirim, dan total pembayaran sesuai dengan aturan checkout.

Program juga berhasil menghasilkan pesan "Input tidak valid" ketika harga atau jumlah barang tidak memenuhi ketentuan.

Dengan demikian, seluruh test case yang diuji telah berhasil dan tidak ditemukan perbedaan antara Expected Output dan Actual Output.
