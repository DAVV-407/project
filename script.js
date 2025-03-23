// Tentukan tanggal target hari raya
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 8); // 8 hari dari sekarang
targetDate.setHours(targetDate.getHours() + 18); // Tambahkan 18 jam

// Fungsi untuk memperbarui hitungan mundur
function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    document.getElementById("countdown").innerHTML = "<h2>Hari Raya Telah Tiba! 🎉🎊</h2>";
    return;
  }

  // Hitung hari, jam, menit, dan detik
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update elemen HTML
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

// Perbarui hitungan mundur setiap detik
setInterval(updateCountdown, 1000);

// Panggil fungsi pertama kali saat halaman dimuat
updateCountdown();