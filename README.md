# Website-Personal
Web
[code.html](https://github.com/user-attachments/files/23560571/code.html)
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portofolio Fotografer & Videografer</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f8f9fa;
            color: #333;
        }
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 100px 0;
            text-align: center;
        }
        .gallery img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            transition: transform 0.3s ease;
        }
        .gallery img:hover {
            transform: scale(1.05);
        }
        .video-container {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
        }
        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        footer {
            background-color: #343a40;
            color: white;
            padding: 20px 0;
            text-align: center;
        }
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Portofolio Saya</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-menu">
                    <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#photos">Foto</a></li>
                    <li class="nav-item"><a class="nav-link" href="#videos">Video</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Kontak</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <h1>Selamat Datang di Portofolio Saya</h1>
            <p>Fotografer dan Videografer Profesional | Tangkap Momen Indah Anda</p>
            <a href="#photos" class="btn btn-light btn-lg">Lihat Portofolio</a>
        </div>
    </section>

    <!-- Photo Gallery -->
    <section id="photos" class="py-5">
        <div class="container">
            <h2 class="text-center mb-4">Galeri Foto</h2>
            <div class="row gallery">
                <div class="col-md-4 mb-4">
                    <img src="https://source.unsplash.com/random/800x600/?photography" alt="Foto 1">
                </div>
                <div class="col-md-4 mb-4">
                    <img src="https://source.unsplash.com/random/800x600/?portrait" alt="Foto 2">
                </div>
                <div class="col-md-4 mb-4">
                    <img src="https://source.unsplash.com/random/800x600/?landscape" alt="Foto 3">
                </div>
                <!-- Tambahkan lebih banyak gambar di sini -->
            </div>
        </div>
    </section>

    <!-- Video Gallery -->
    <section id="videos" class="py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-4">Galeri Video</h2>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <p class="mt-2">Video Wedding - Contoh Kreatif</p>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <p class="mt-2">Video Dokumenter - Eksplorasi Alam</p>
                </div>
                <!-- Tambahkan lebih banyak video di sini -->
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-5">
        <div class="container">
            <h2 class="text-center mb-4">Hubungi Saya</h2>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Nama</label>
                            <input type="text" class="form-control" id="name">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email">
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Pesan</label>
                            <textarea class="form-control" id="message" rows="4"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Kirim</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>&copy; 2023 Portofolio Fotografer & Videografer. Dibuat dengan <i class="fas fa-heart"></i></p>
            <div>
                <a href="#" class="text-white me-3"><i class="fab fa-instagram"></i></a>
                <a href="#" class="text-white me-3"><i class="fab fa-facebook"></i></a>
                <a href="#" class="text-white"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
