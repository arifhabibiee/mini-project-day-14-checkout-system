function hitungCheckout(harga, jumlah, isMember) {
  // Validasi harga
  if (typeof harga !== "number" || !Number.isFinite(harga) || harga <= 0) {
    return "Input tidak valid";
  }

  // Validasi jumlah barang
  if (!Number.isInteger(jumlah) || jumlah <= 0) {
    return "Input tidak valid";
  }

  // Menghitung subtotal
  const subtotal = harga * jumlah;

  // Menentukan diskon member
  let diskon;

  if (isMember === true) {
    diskon = subtotal * 0.1;
  } else {
    diskon = 0;
  }

  // Menghitung total setelah diskon
  const totalSetelahDiskon = subtotal - diskon;

  // Menentukan ongkos kirim
  let ongkir;

  if (totalSetelahDiskon >= 250000) {
    ongkir = 0;
  } else {
    ongkir = 15000;
  }

  // Menghitung total pembayaran
  const totalBayar = totalSetelahDiskon + ongkir;

  // Mengembalikan hasil checkout
  return {
    subtotal,
    diskon,
    totalSetelahDiskon,
    ongkir,
    totalBayar,
  };
}

// Test
console.log("=== TEST CASES ===");

console.log("T01:", hitungCheckout(100000, 1, false));
console.log("T02:", hitungCheckout(200000, 1, true));
console.log("T03:", hitungCheckout(250000, 1, false));
console.log("T04:", hitungCheckout(250000, 1, true));
console.log("T05:", hitungCheckout(300000, 1, true));
console.log("T06:", hitungCheckout(100000, 3, false));
console.log("T07:", hitungCheckout(0, 1, false));
console.log("T08:", hitungCheckout(-5000, 1, true));
console.log("T09:", hitungCheckout(100000, 0, true));
console.log("T10:", hitungCheckout(100000, 1.5, false));
console.log("T11:", hitungCheckout("100000", 1, true));
console.log("T12:", hitungCheckout(12500.5, 2, false));
