// js/script.js

// Fungsi untuk greeting berdasarkan waktu
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Selamat Pagi";
  if (hour < 18) return "Selamat Siang";
  return "Selamat Sore";
}

// Fungsi untuk menampilkan greeting di dashboard (dengan nama pengguna dari localStorage)
function displayGreeting() {
  const greetingElement = document.getElementById('greeting');
  if (greetingElement) {
    const timeGreeting = getGreeting();
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    const userName = storedUser ? storedUser.nama : "Pengguna"; // Fallback jika tidak ada
    greetingElement.textContent = timeGreeting + ", " + userName + "! Selamat datang di Sistem Pemesanan Bahan Ajar Universitas Terbuka!";
  }
}

// Panggil saat halaman load
document.addEventListener('DOMContentLoaded', displayGreeting);