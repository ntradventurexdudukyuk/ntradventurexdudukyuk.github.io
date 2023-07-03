// Mendengarkan pengiriman form
const form = document.getElementById("order-form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman form
  const package = document.getElementById("package").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const bookingDate = document.getElementById("booking-date").value;
  const payment = document.querySelector('input[name="payment"]:checked').value;

  // Kirim data pemesanan ke WhatsApp
  const whatsappURL = `https://wa.me/62895377022605?text=Pemesanan%20Paket%20ntr_adventureXduduk.yuk_%0A%0ANama%20:%20${name}%0ANomor%20HP%20:%20${phone}%0AEmail%20:%20${email}%0ATanggal%20Booking/Pemesanan:%20${bookingDate}%0AAlamat%20:%20${address}%0APaket%20:%20${package}%0AMetode%20Pembayaran:%20${payment}%0AApakah%20Barang%20Ready,%20kak?`;
  window.open(whatsappURL, "_blank");

  // Reset form setelah pengiriman
  form.reset();
});
