document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan elemen form
  const form = document.querySelector("form");

  // Menangani pengiriman form
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Mendapatkan nilai input dari form
    const nama = form.querySelector('input[name="Nama"]').value;
    const email = form.querySelector('input[name="Email"]').value;
    const nomorHandphone = form.querySelector('input[name="Nomor_HP"]').value;
    const pesan = form.querySelector('textarea[name="text"]').value;
    const phone = form.querySelector('input[name="phone"]').value;

    // Membuat URL untuk mengirim pesan WhatsApp
    const waURL = `https://wa.me/${phone}?text=Nama%20:%20${encodeURIComponent(
      nama
    )}%20%0AEmail%20:%20${encodeURIComponent(
      email
    )}%20%0ANomor%20:%20${encodeURIComponent(
      nomorHandphone
    )}%20%0APesan%20:%20${encodeURIComponent(pesan)}`;

    // Mengarahkan pengguna ke URL WhatsApp
    window.open(waURL, "_blank");
  });
});
