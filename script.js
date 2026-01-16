// Menunggu sampai seluruh dokumen dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // Memilih semua elemen yang memiliki class 'reveal-element'
    const revealElements = document.querySelectorAll('.reveal-element');

    // Fungsi untuk memeriksa apakah elemen masuk ke dalam viewport (layar)
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.85; // Titik pemicu (85% dari tinggi layar)

        revealElements.forEach(element => {
            // Mendapatkan posisi atas elemen relatif terhadap viewport
            const elementTop = element.getBoundingClientRect().top;

            // Jika elemen sudah melewati titik pemicu, tambahkan class 'active'
            if (elementTop < triggerBottom) {
                element.classList.add('active');
            } else {
                // Opsional: Hapus class jika ingin animasi ulang saat scroll ke atas
                // element.classList.remove('active'); 
            }
        });
    }

    // Jalankan fungsi saat halaman discroll
    window.addEventListener('scroll', checkReveal);
    
    // Jalankan sekali saat muat pertama kali (untuk elemen yang sudah terlihat di awal)
    checkReveal();
    
    console.log("Website Portofolio Siap!");
});