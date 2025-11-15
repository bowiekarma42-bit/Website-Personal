
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bow Films - Jasa Foto & Video</title>
    <!-- Memuat Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Memuat Font Inter dari Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
    <style>
        :root {
            /* Warna Dasar untuk Light Mode */
            --bg-primary: #f8f8ff; /* Hampir Putih */
            --bg-secondary: #ffffff; /* Putih */
            --text-primary: #1f2937; /* Dark Grey (Teks utama) */
            --text-secondary: #4b5563; /* Medium Grey (Teks sekunder) */
            --accent-color: #5b21b6; /* Warna Ungu (Aksen) */
            --accent-hover: #6d28d9; /* Ungu Lebih Cerah */
            --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        }

        /* Dark Mode Overrides */
        .dark {
            --bg-primary: #12121e; /* Sangat Gelap (Hampir Hitam Ungu) */
            --bg-secondary: #1a1a2b; /* Kartu/Konten Gelap */
            --text-primary: #e5e7eb; /* Off-White */
            --text-secondary: #9ca3af; /* Light Grey */
            --accent-color: #a855f7; /* Warna Ungu (Aksen) */
            --accent-hover: #c084fc; /* Ungu Lebih Cerah */
            --card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.2);
        }

        /* Mengatur Transisi untuk Perubahan Mode */
        body, .card, button, input, select {
            transition: background-color 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-primary);
            color: var(--text-primary);
        }

        .card {
            background-color: var(--bg-secondary);
            color: var(--text-primary);
            box-shadow: var(--card-shadow);
        }

        .input-field {
            background-color: var(--bg-primary);
            color: var(--text-primary);
            border: 1px solid var(--text-secondary);
        }

        .dark .input-field {
            background-color: #27273d;
            border-color: #4b5563;
        }

        .btn-primary {
            background-color: var(--accent-color);
            color: white;
        }

        .btn-primary:hover {
            background-color: var(--accent-hover);
        }
        
        /* Gaya Khusus untuk Kartu Galeri (Membuatnya tampak seperti video thumbnail) */
        .gallery-item {
            position: relative;
            overflow: hidden;
        }

        .gallery-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.5) 100%);
            pointer-events: none;
        }

        .gallery-item:hover .gallery-badge {
             transform: translateY(-4px);
             box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }

        .gallery-item:hover img {
            transform: scale(1.05);
        }
        
        .gallery-item img {
            transition: transform 0.3s ease-in-out;
        }

        /* Responsive Grid untuk Portofolio */
        .portfolio-grid {
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(2, 1fr); /* Default 2 kolom untuk mobile */
        }
        @media (min-width: 640px) {
            .portfolio-grid {
                grid-template-columns: repeat(3, 1fr); /* 3 kolom untuk tablet */
            }
        }
        @media (min-width: 1024px) {
            .portfolio-grid {
                grid-template-columns: repeat(4, 1fr); /* 4 kolom untuk desktop */
            }
        }
    </style>
</head>
<body class="min-h-screen">
    <div id="app" class="max-w-7xl mx-auto p-4 md:p-8">

        <!-- HEADER & NAVIGASI -->
        <header class="flex justify-between items-center py-4 mb-8">
            <h1 class="text-2xl font-black tracking-wider text-purple-600 dark:text-purple-400">BOW FILMS</h1>
            <nav class="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
                <a href="#portfolio" class="hover:text-purple-600 dark:hover:text-purple-400 transition">Portofolio</a>
                <a href="#kontak" class="hover:text-purple-600 dark:hover:text-purple-400 transition">Kontak</a>
                <a href="#pemesanan" class="hover:text-purple-600 dark:hover:text-purple-400 transition">Pesan Jasa</a>
            </nav>
            <button id="theme-toggle" class="p-2 rounded-full card focus:outline-none ring-2 ring-transparent hover:ring-purple-500 transition duration-300">
                <!-- Icon Bulan untuk Light Mode, Icon Matahari untuk Dark Mode -->
                <svg id="sun-icon" class="h-6 w-6 text-yellow-500 dark:text-gray-400 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg id="moon-icon" class="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </button>
        </header>

        <!-- JUDUL UTAMA -->
        <h2 class="text-4xl font-bold mb-10 text-center md:text-left">Karya Terbaru Kami</h2>

        <!-- BAGIAN PORTOFOLIO -->
        <section id="portfolio" class="mb-16">
            <div class="flex flex-wrap gap-2 mb-6">
                <button class="px-4 py-1 rounded-full text-sm font-medium bg-purple-500 text-white hover:bg-purple-700 transition">Semua</button>
                <button class="px-4 py-1 rounded-full text-sm font-medium card hover:bg-gray-100 dark:hover:bg-[#27273d] text-gray-700 dark:text-gray-300 transition">Wedding</button>
                <button class="px-4 py-1 rounded-full text-sm font-medium card hover:bg-gray-100 dark:hover:bg-[#27273d] text-gray-700 dark:text-gray-300 transition">Prewedding</button>
                <button class="px-4 py-1 rounded-full text-sm font-medium card hover:bg-gray-100 dark:hover:bg-[#27273d] text-gray-700 dark:text-gray-300 transition">Corporate</button>
                <button class="px-4 py-1 rounded-full text-sm font-medium card hover:bg-gray-100 dark:hover:bg-[#27273d] text-gray-700 dark:text-gray-300 transition">Still Life</button>
                <button class="px-4 py-1 rounded-full text-sm font-medium card hover:bg-gray-100 dark:hover:bg-[#27273d] text-gray-700 dark:text-gray-300 transition">Wisuda</button> <!-- Tombol Filter Wisuda -->
            </div>

            <div class="portfolio-grid">
                <!-- Item Galeri Contoh (12 buah) -->
                <div class="gallery-item rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                    <img src="https://placehold.co/400x300/a855f7/ffffff?text=Wedding+01" alt="Wedding Foto" class="w-full h-auto object-cover">
                    <span class="gallery-badge absolute bottom-2 right-2 px-3 py-1 bg-white/80 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-800 transition duration-300">Wedding</span>
                </div>
                <div class="gallery-item rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                    <img src="https://placehold.co/400x300/6d28d9/ffffff?text=Prewedding" alt="Prewedding Video" class="w-full h-auto object-cover">
                    <span class="gallery-badge absolute bottom-2 right-2 px-3 py-1 bg-white/80 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-800 transition duration-300">Video</span>
                </div>
                <div class="gallery-item rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                    <img src="https://placehold.co/400x300/5b21b6/ffffff?text=Corporate+Shoot" alt="Corporate Shoot" class="w-full h-auto object-cover">
                    <span class="gallery-badge absolute bottom-2 right-2 px-3 py-1 bg-white/80 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-800 transition duration-300">Corporate</span>
                </div>
                <div class="gallery-item rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                    <img src="https://placehold.co/400x300/7c3aed/ffffff?text=Still+Life" alt="Still Life Foto" class="w-full h-auto object-cover">
                    <span class="gallery-badge absolute bottom-2 right-2 px-3 py-1 bg-white/80 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-800 transition duration-300">Still Life</span>
                </div>
                <!-- Baris 2 -->
                <div class="gallery-item rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                    <img src="https://placehold.co/400x300/a855f7/ffffff?text=Wedding+02" alt="Wedding Foto" class="w-full h-auto object-cover">
                    <span class="gallery-badge absolute bottom-2 right-2 px-3 py-1 bg-white/80 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-800 transition duration-300">Wedding</span>
                </div>
                <div class="gallery-item rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                    <img src="https://placehold.co/400x300/6d28d9/ffffff?text=Engagement" alt="Engagement Foto" class="w-full h-auto object-cover">
                    <span class="gallery-badge absolute bottom-2 right-2 px-3 py-1 bg-white/80 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-800 transition duration-300">Photo</span>
                </div>
                <div class="gallery-item rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                    <img src="https://placehold.co/400x300/5b21b6/ffffff?text=Product" alt="Product Video" class="w-full h-auto object-cover">
                    <span class="gallery-badge absolute bottom-2 right-2 px-3 py-1 bg-white/80 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-800 transition duration-300">Product</span>
                </div>
                <div class="gallery-item rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                    <img src="https://placehold.co/400x300/7c3aed/ffffff?text=Maternity" alt="Maternity Foto" class="w-full h-auto object-cover">
                    <span class="gallery-badge absolute bottom-2 right-2 px-3 py-1 bg-white/80 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-800 transition duration-300">Maternity</span>
                </div>
                <!-- ITEM BARU: FOTO WISUDA -->
                <div class="gallery-item rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                    <img src="https://placehold.co/400x300/4f46e5/ffffff?text=Wisuda+Foto" alt="Wisuda Foto" class="w-full h-auto object-cover">
                    <span class="gallery-badge absolute bottom-2 right-2 px-3 py-1 bg-white/80 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-800 transition duration-300">Wisuda</span>
                </div>
            </div>
        </section>

        <!-- BAGIAN PEMESANAN JASA (Formulir) -->
        <section id="pemesanan" class="flex justify-center mb-16">
            <div class="card p-6 md:p-8 w-full max-w-lg rounded-xl">
                <h3 class="text-2xl font-bold mb-6 text-center text-purple-600 dark:text-purple-400">Pesan Jasa Foto & Video</h3>

                <form id="booking-form" class="space-y-4">
                    <!-- Nama Lengkap -->
                    <div>
                        <label for="nama_lengkap" class="block text-sm font-medium mb-1 dark:text-gray-300">Nama Lengkap</label>
                        <input type="text" id="nama_lengkap" name="nama_lengkap" required class="input-field w-full p-2 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150">
                    </div>

                    <!-- Nomor WhatsApp -->
                    <div>
                        <label for="nomor_wa" class="block text-sm font-medium mb-1 dark:text-gray-300">Nomor WhatsApp (Aktif)</label>
                        <input type="tel" id="nomor_wa" name="nomor_wa" required class="input-field w-full p-2 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150" placeholder="Contoh: 6281234567890">
                        <p class="text-xs mt-1 text-gray-500 dark:text-gray-400">Masukkan dengan kode negara (misal: 62) tanpa spasi atau tanda hubung.</p>
                    </div>

                    <!-- Jenis Layanan -->
                    <div>
                        <label for="jenis_layanan" class="block text-sm font-medium mb-1 dark:text-gray-300">Jenis Layanan</label>
                        <select id="jenis_layanan" name="jenis_layanan" required class="input-field w-full p-2 rounded-lg appearance-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150">
                            <option value="" disabled selected>Pilih Layanan</option>
                            <option value="Foto: Wedding">Foto: Wedding</option>
                            <option value="Video: Wedding">Video: Wedding</option>
                            <option value="Foto: Prewedding">Foto: Prewedding</option>
                            <option value="Foto: Wisuda">Foto: Wisuda</option>
                            <option value="Video: Corporate">Video: Corporate/Iklan</option>
                            <option value="Foto: Still Life">Foto: Still Life</option>
                            <option value="Custom">Custom (Jelaskan di Catatan)</option>
                        </select>
                    </div>

                    <!-- Pesan Singkat/Catatan (Optional) -->
                    <div>
                        <label for="catatan" class="block text-sm font-medium mb-1 dark:text-gray-300">Catatan Tambahan (Opsional)</label>
                        <textarea id="catatan" name="catatan" rows="3" class="input-field w-full p-2 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150"></textarea>
                    </div>

                    <!-- Tombol Pesan via WhatsApp -->
                    <button type="submit" class="btn-primary w-full py-3 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition duration-300">
                        <!-- Icon WhatsApp (inline SVG) -->
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.04 2C6.54 2 2.05 6.48 2.05 11.98C2.05 13.78 2.51 15.4 3.31 16.9L2.01 22L7.33 20.3C8.83 21.09 10.38 21.5 12.04 21.5C17.54 21.5 22.03 17.02 22.03 11.98C22.03 6.48 17.54 2 12.04 2ZM17.29 16.5C17.06 16.92 14.73 18.06 14.28 18.15C13.82 18.25 13.56 18.25 12.56 17.8C11.56 17.35 10.13 16.03 9.4 15.02C8.67 14.01 8.16 12.63 8.35 12.27C8.54 11.91 8.71 11.83 9.07 11.64C9.43 11.45 9.77 10.98 10.03 10.66C10.29 10.33 10.55 10.28 10.74 10.61C10.93 10.93 11.23 11.4 11.43 11.68C11.63 11.96 11.69 12.04 11.64 12.13C11.59 12.23 11.51 12.42 11.35 12.61C11.19 12.8 11.03 12.97 10.87 13.14C10.7 13.31 10.55 13.46 10.73 13.78C10.91 14.1 11.75 15.54 13.13 16.18C14.51 16.82 14.79 16.69 15.11 16.65C15.43 16.61 16.71 16.05 17.03 15.65C17.35 15.25 17.58 15.08 17.77 15.15C17.97 15.23 18.11 16.05 17.29 16.5Z" />
                        </svg>
                        <span>Pesan Sekarang via WhatsApp</span>
                    </button>
                    <p id="message-box" class="text-center text-sm text-green-600 dark:text-green-400 hidden"></p>
                </form>

                <p class="text-xs mt-6 text-center text-gray-400 dark:text-gray-500">
                    Kami akan segera merespon pesanan Anda. Dibuat dengan cinta oleh Bow Films.
                </p>
            </div>
        </section>

        <!-- FOOTER & SOSIAL MEDIA -->
        <footer class="text-center pt-8 border-t border-gray-200 dark:border-gray-800">
            <div id="kontak" class="flex justify-center space-x-4 mb-4 text-gray-600 dark:text-gray-400">
                <a href="#" class="hover:text-purple-600 dark:hover:text-purple-400 transition" aria-label="Instagram">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.6 1.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>
                </a>
                <a href="#" class="hover:text-purple-600 dark:hover:text-purple-400 transition" aria-label="Facebook">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.041c-5.46 0-9.92 4.46-9.92 9.92s4.46 9.92 9.92 9.92c4.95 0 9.15-3.6 9.77-8.31h-3.32c-.52 2.62-2.94 4.54-5.65 4.54-3.13 0-5.67-2.54-5.67-5.67s2.54-5.67 5.67-5.67c2.62 0 4.88 1.78 5.53 4.2h-3.21v2.73h6.91V2.17c-0.12-0.08-0.25-0.15-0.38-0.21C21.08 2.52 16.89 2.041 12 2.041z"/></svg>
                </a>
                <a href="#" class="hover:text-purple-600 dark:hover:text-purple-400 transition" aria-label="YouTube">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 12.8v-5.6c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v5.6c0 .55.45 1 1 1h8c.55 0 1-.45 1-1zm-6.5-1.9L9 12v-1.1L10.5 9h3L15 10.9V12l-1.5 1.9h-3z"/></svg>
                </a>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-600">&copy; 2025 Bow Films. All rights reserved.</p>
        </footer>
    </div>

    <script>
        const THEME_KEY = 'bowfilms_theme';
        const themeToggle = document.getElementById('theme-toggle');
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');
        const form = document.getElementById('booking-form');
        const messageBox = document.getElementById('message-box');

        // --- Fungsi Pengaturan Dark/Light Mode ---

        function applyTheme(theme) {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            } else {
                document.documentElement.classList.remove('dark');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            }
        }

        function toggleTheme() {
            const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            // Simpan preferensi ke local storage (simulasi)
            try {
                // Di lingkungan nyata, ini akan bekerja.
                // Di sini, kita simpan hanya untuk simulasi perilaku UI.
                localStorage.setItem(THEME_KEY, newTheme);
            } catch (e) {
                console.warn('Local storage tidak tersedia untuk menyimpan tema.');
            }
        }

        // Inisialisasi Tema
        function initializeTheme() {
            let savedTheme;
            try {
                savedTheme = localStorage.getItem(THEME_KEY);
            } catch (e) {
                savedTheme = null;
            }

            if (savedTheme) {
                // Gunakan tema yang tersimpan
                applyTheme(savedTheme);
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                // Atau gunakan preferensi sistem
                applyTheme('dark');
            } else {
                // Default ke light mode
                applyTheme('light');
            }
        }

        // Pasang listener pada tombol
        themeToggle.addEventListener('click', toggleTheme);
        window.addEventListener('load', initializeTheme);

        // --- Fungsi Pemesanan via WhatsApp ---

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Kumpulkan data formulir
            const nama = document.getElementById('nama_lengkap').value;
            const wa = document.getElementById('nomor_wa').value.replace(/[^0-9]/g, ''); // Hapus karakter non-angka
            const layanan = document.getElementById('jenis_layanan').value;
            const catatan = document.getElementById('catatan').value;

            // Logika validasi sederhana
            if (wa.length < 10) {
                 showNotification("Nomor WhatsApp tidak valid. Mohon masukkan minimal 10 digit angka.", 'error');
                 return;
            }

            // Pesan yang akan dikirim
            const message = `Halo Bow Films! Saya ingin melakukan pemesanan jasa.
\n*Detail Pesanan:*
Nama: ${nama}
Nomor WA: ${wa}
Jenis Layanan: ${layanan}
Catatan Tambahan: ${catatan || '(Tidak ada catatan)'}
\nMohon bantuannya untuk info lebih lanjut. Terima kasih!`;

            // Encoding pesan untuk URL
            const encodedMessage = encodeURIComponent(message);

            // Nomor tujuan WhatsApp (Telah diubah sesuai permintaan pengguna)
            const whatsappNumber = '6281910647655'; // 081910647655 diubah ke format internasional 628...
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Buka tautan WhatsApp di tab baru
            window.open(whatsappURL, '_blank');

            // Tampilkan pesan sukses di aplikasi
            showNotification("Pemesanan telah diarahkan ke WhatsApp. Jangan lupa kirim pesannya!", 'success');
            form.reset();
        });

        // Fungsi untuk menampilkan pesan notifikasi kustom
        function showNotification(message, type) {
            messageBox.textContent = message;
            messageBox.classList.remove('hidden', 'text-green-600', 'text-red-600', 'dark:text-green-400', 'dark:text-red-400');

            if (type === 'success') {
                messageBox.classList.add('text-green-600', 'dark:text-green-400');
            } else if (type === 'error') {
                messageBox.classList.add('text-red-600', 'dark:text-red-400');
            }

            setTimeout(() => {
                messageBox.classList.add('hidden');
            }, 5000);
        }

    </script>
</body>
</html>
