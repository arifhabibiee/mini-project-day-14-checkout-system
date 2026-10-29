# Pseudocode - Sistem Checkout Produk Sederhana

```text
START

INPUT harga, jumlah, isMember

IF harga bukan angka yang valid OR harga <= 0 THEN
    OUTPUT "Input tidak valid"
    STOP
ENDIF

IF jumlah bukan bilangan bulat OR jumlah <= 0 THEN
    OUTPUT "Input tidak valid"
    STOP
ENDIF

subtotal <- harga * jumlah

IF isMember = TRUE THEN
    diskon <- subtotal * 0.10
ELSE
    diskon <- 0
ENDIF

totalSetelahDiskon <- subtotal - diskon

IF totalSetelahDiskon >= 250000 THEN
    ongkir <- 0
ELSE
    ongkir <- 15000
ENDIF

totalBayar <- totalSetelahDiskon + ongkir

OUTPUT subtotal, diskon, totalSetelahDiskon, ongkir, totalBayar

END
```
