[code (1).html](https://github.com/user-attachments/files/23560745/code.1.html)
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bow.films - Galeri Foto & Video </title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            overflow-x: hidden;
        }
        header {
            text-align: center;
            padding: 50px 20px;
            animation: fadeIn 2s ease-in;
        }
        h1 {
            font-size: 3em;
            margin: 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        nav {
            background: rgba(0,0,0,0.5);
            padding: 10px;
            text-align: center;
        }
        nav a {
            color: white;
            margin: 0 20px;
            text-decoration: none;
            transition: color 0.3s;
        }
        nav a:hover {
            color: #ffd700;
        }
        section {
            padding: 50px 20px;
            text-align: center;
        }
        .gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
        }
        .item {
            width: 300px;
            height: 200px;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            transition: transform 0.3s;
            animation: slideUp 1s ease-out;
        }
        .item:hover {
            transform: scale(1.05);
        }
        img, video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    </style>
</head>
<body>
    <header>
        <h1>bow.films</h1>
        <p>Galeri Foto & Video </p>
    </header>
    <nav>
        <a href="#photos">Foto</a>
        <a href="#videos">Video</a>
        <a href="#about">Tentang</a>
    </nav>
    <section id="photos">
        <h2>Foto Keren</h2>
        <div class="gallery">
            <div class="item">
                <img src="https://via.placeholder.com/300x200?text=Foto+1" alt="Contoh Foto 1">
            </div>
            <div class="item">
                <img src="https://via.placeholder.com/300x200?text=Foto+2" alt="Contoh Foto 2">
            </div>
            <div class="item">
                <img src="https://via.placeholder.com/300x200?text=Foto+3" alt="Contoh Foto 3">
            </div>
        </div>
    </section>
    <section id="videos">
        <h2>Video Keren</h2>
        <div class="gallery">
            <div class="item">
                <video controls>
                    <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4">
                    Browser Anda tidak mendukung video.
                </video>
            </div>
            <div class="item">
                <video controls>
                    <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4" type="video/mp4">
                    Browser Anda tidak mendukung video.
                </video>
            </div>
        </div>
    </section>
    <section id="about">
        <h2>Tentang bow.films</h2>
        <p>Website ini dibuat untuk menampilkan koleksi foto dan video dari @bow.films. 2025</p>
    </section>
    <script>
        // Animasi sederhana untuk scroll
        window.addEventListener('scroll', () => {
            const items = document.querySelectorAll('.item');
            items.forEach(item => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    item.style.animationPlayState = 'running';
                }
            });
        });
    </script>
</body>
</html>
