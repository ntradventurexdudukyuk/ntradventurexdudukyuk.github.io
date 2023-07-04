document.getElementById("search-icon").addEventListener("click", function (e) {
  e.preventDefault();
  var searchTerm = prompt("Masukkan kata kunci pencarian:");
  if (searchTerm !== null && searchTerm.trim() !== "") {
    // Lakukan logika pencarian atau redirect ke halaman pencarian
    console.log("Kata kunci pencarian:", searchTerm);
    // Ganti baris di atas dengan logika atau kode pencarian yang sesuai
  }
});
