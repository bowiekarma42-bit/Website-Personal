<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Portofolio — Nama Kamu</title>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg:#ffffff; --muted:#6b6b6b; --accent:#bfa06a; --dark:#111111; --card:#fbfbfb;
      --radius:18px; --glass: rgba(255,255,255,0.6);
    }
    *{box-sizing:border-box}
    html,body{height:100%;margin:0;font-family:Inter,system-ui,Segoe UI,Roboto,"Helvetica Neue",Arial;color:var(--dark);background:linear-gradient(180deg,#ffffff 0%, #fbfbfb 100%)}
    a{color:inherit;text-decoration:none}
    header{position:sticky;top:0;backdrop-filter: blur(6px);background:linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.4));border-bottom:1px solid rgba(16,16,16,0.04);z-index:60}
    .container{max-width:1100px;margin:0 auto;padding:32px}

    /* NAV */
    .nav{display:flex;align-items:center;justify-content:space-between}
    .brand{display:flex;align-items:center;gap:14px;font-weight:600}
    .brand .logo{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,var(--accent),#f0e5c7);display:flex;align-items:center;justify-content:center;font-family:Playfair Display,serif;font-size:18px}
    nav ul{display:flex;gap:18px;align-items:center;margin:0;padding:0;list-style:none}
    .btn{padding:10px 16px;border-radius:12px;background:transparent;border:1px solid rgba(16,16,16,0.06);cursor:pointer}
    .btn-accent{background:linear-gradient(90deg,var(--accent),#f3e8c9);border:none}

    /* HERO */
    .hero{display:grid;grid-template-columns:1fr 420px;gap:40px;align-items:center;padding:60px 0}
    .hero-left{max-width:680px}
    h1{font-family:Playfair Display,serif;font-size:44px;margin:0 0 12px}
    p.lead{color:var(--muted);font-size:18px;margin:0 0 22px}
    .cta-row{display:flex;gap:12px}
    .profile-card{background:var(--card);border-radius:20px;padding:20px;box-shadow:0 8px 24px rgba(16,16,16,0.06);display:flex;flex-direction:column;align-items:center}
    .avatar{width:180px;height:180px;border-radius:14px;background:linear-gradient(135deg,#eee,#fff);display:flex;align-items:center;justify-content:center;font-size:22px;color:var(--muted);font-weight:600}
    .meta{margin-top:16px;text-align:center}

    /* SECTIONS */
    section{padding:48px 0}
    h2{font-family:Playfair Display,serif;margin:0 0 18px;font-size:28px}
    .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .card{background:linear-gradient(180deg,#fff,var(--glass));padding:20px;border-radius:14px;box-shadow:0 8px 20px rgba(16,16,16,0.04)}

    /* PORTFOLIO */
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
    .project{height:200px;border-radius:12px;overflow:hidden;position:relative;cursor:pointer;background-size:cover;background-position:center;display:flex;align-items:flex-end;padding:14px;color:#fff}
    .project::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent, rgba(0,0,0,0.45));}
    .project .title{position:relative;z-index:2;font-weight:600}

    /* SERVICES */
    .services{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .service{padding:20px;border-radius:12px}

    /* TESTIMONIALS */
    .testi{display:flex;gap:14px;align-items:center}
    .testi .avatar-small{width:56px;height:56px;border-radius:12px;background:#fff;display:flex;align-items:center;justify-content:center}

    /* CONTACT */
    .contact{display:grid;grid-template-columns:1fr 360px;gap:24px}
    form{display:flex;flex-direction:column;gap:12px}
    input,textarea{padding:12px;border-radius:10px;border:1px solid rgba(0,0,0,0.06);font-size:14px}
    textarea{min-height:140px}

    footer{padding:28px 0;border-top:1px solid rgba(16,16,16,0.04);text-align:center;color:var(--muted)}

    /* modal */
    .modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(3,3,3,0.5);z-index:120}
    .modal.open{display:flex}
    .modal-body{background:#fff;padding:22px;border-radius:14px;max-width:880px;width:92%;box-shadow:0 20px 60px rgba(10,10,10,0.3)}

    /* Responsive */
    @media (max-width:960px){
      .hero{grid-template-columns:1fr;}
      .grid{grid-template-columns:repeat(2,1fr)}
      .cards,.services{grid-template-columns:repeat(2,1fr)}
      .contact{grid-template-columns:1fr}
    }
    @media (max-width:520px){
      nav ul{display:none}
      .grid{grid-template-columns:1fr}
      h1{font-size:32px}
    }
    /* micro interactions */
    .project{transition:transform .28s ease, box-shadow .28s}
    .project:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(16,16,16,0.12)}
  </style>
</head>
<body>
  <header>
    <div class="container nav">
      <div class="brand">
        <div class="logo">NP</div>
        <div>
          <div style="font-size:14px">Nama Kamu</div>
          <div style="font-size:12px;color:var(--muted)">Desainer • Fotografer • Pembuat Konten</div>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div style="display:flex;gap:10px;align-items:center">
        <button class="btn" onclick="toggleTheme()">Mode</button>
        <button class="btn btn-accent" id="dlCV">Download CV</button>
      </div>
    </div>
  </header>

  <main class="container">
    <section class="hero">
      <div class="hero-left">
        <h1>Halo, saya <span style="color:var(--accent)">Nama Kamu</span></h1>
        <p class="lead">Saya membuat pengalaman visual yang elegan dan bermakna — dari brand identity, fotografi hingga produk digital. Saya membantu klien bercerita melalui desain yang sederhana namun berkesan.</p>
        <div class="cta-row">
          <a href="#contact" class="btn btn-accent">Hire Me</a>
          <a class="btn" href="#portfolio">Lihat Portofolio</a>
        </div>
        <div style="margin-top:28px;display:flex;gap:12px">
          <div class="card" style="flex:1">
            <div style="font-size:12px;color:var(--muted)">Years</div>
            <div style="font-weight:700;font-size:20px">6+</div>
          </div>
          <div class="card" style="flex:1">
            <div style="font-size:12px;color:var(--muted)">Clients</div>
            <div style="font-weight:700;font-size:20px">40+</div>
          </div>
          <div class="card" style="flex:1">
            <div style="font-size:12px;color:var(--muted)">Awards</div>
            <div style="font-weight:700;font-size:20px">3</div>
          </div>
        </div>
      </div>

      <aside>
        <div class="profile-card">
          <div class="avatar">Foto</div>
          <div class="meta">
            <div style="font-weight:700">Nama Kamu</div>
            <div style="color:var(--muted);font-size:13px">UI/UX Designer & Photographer</div>
          </div>
        </div>
      </aside>
    </section>

    <section id="about">
      <h2>Tentang Saya</h2>
      <p style="color:var(--muted);max-width:820px">Saya fokus pada desain yang bersih, narasi visual, dan pengalaman pengguna yang intuitif. Dalam setiap proyek, saya prioritaskan kesederhanaan dan detail—mulai dari riset awal hingga produk akhir.</p>
    </section>

    <section id="portfolio">
      <h2>Portofolio</h2>
      <div class="grid">
        <div class="project" style="background-image:url('https://picsum.photos/seed/p1/800/600')" data-title="Project A" data-desc="Detail singkat project A"> <div class="title">Project A</div></div>
        <div class="project" style="background-image:url('https://picsum.photos/seed/p2/800/600')" data-title="Project B" data-desc="Detail singkat project B"> <div class="title">Project B</div></div>
        <div class="project" style="background-image:url('https://picsum.photos/seed/p3/800/600')" data-title="Project C" data-desc="Detail singkat project C"> <div class="title">Project C</div></div>
        <div class="project" style="background-image:url('https://picsum.photos/seed/p4/800/600')" data-title="Project D" data-desc="Detail singkat project D"> <div class="title">Project D</div></div>
        <div class="project" style="background-image:url('https://picsum.photos/seed/p5/800/600')" data-title="Project E" data-desc="Detail singkat project E"> <div class="title">Project E</div></div>
        <div class="project" style="background-image:url('https://picsum.photos/seed/p6/800/600')" data-title="Project F" data-desc="Detail singkat project F"> <div class="title">Project F</div></div>
      </div>
    </section>

    <section id="services">
      <h2>Services</h2>
      <div class="services">
        <div class="service card">
          <div style="font-weight:700">Brand Identity</div>
          <div style="color:var(--muted);font-size:13px;margin-top:8px">Konsep, logo, guideline</div>
        </div>
        <div class="service card">
          <div style="font-weight:700">Fotografi</div>
          <div style="color:var(--muted);font-size:13px;margin-top:8px">Editorial & produk</div>
        </div>
        <div class="service card">
          <div style="font-weight:700">UI / UX</div>
          <div style="color:var(--muted);font-size:13px;margin-top:8px">Aplikasi & website</div>
        </div>
      </div>
    </section>

    <section id="testimonials">
      <h2>Testimonials</h2>
      <div class="card" style="display:flex;align-items:center;gap:18px">
        <div class="testi">
          <div class="avatar-small">CL</div>
          <div>
            <div style="font-weight:700">Client Name</div>
            <div style="color:var(--muted);font-size:13px">"Kerja sama profesional, hasil melebihi ekspektasi."</div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <div class="contact">
        <form onsubmit="event.preventDefault();alert('Terima kasih! Saya akan menghubungi Anda.')">
          <input placeholder="Nama" required />
          <input placeholder="Email" type="email" required />
          <textarea placeholder="Pesan" required></textarea>
          <button class="btn btn-accent" type="submit">Kirim Pesan</button>
        </form>
        <aside>
          <div class="card" style="padding:18px">
            <div style="font-weight:700">Let's collaborate</div>
            <div style="color:var(--muted);margin-top:8px">Alamat email: nama@domain.com</div>
            <div style="color:var(--muted);margin-top:8px">Instagram · LinkedIn · YouTube</div>
          </div>
        </aside>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">© <span id="year"></span> Nama Kamu — All rights reserved</div>
  </footer>

  <!-- Modal -->
  <div id="modal" class="modal" role="dialog" aria-hidden="true">
    <div class="modal-body">
      <button onclick="closeModal()" style="float:right" class="btn">Close</button>
      <h3 id="mTitle"></h3>
      <p id="mDesc" style="color:var(--muted)"></p>
    </div>
  </div>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();

    // portfolio modal
    const projects = document.querySelectorAll('.project');
    const modal = document.getElementById('modal');
    const mTitle = document.getElementById('mTitle');
    const mDesc = document.getElementById('mDesc');
    projects.forEach(p=>p.addEventListener('click',()=>{
      mTitle.textContent = p.dataset.title;
      mDesc.textContent = p.dataset.desc;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden','false');
    }));
    function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
    modal.addEventListener('click',(e)=>{if(e.target===modal)closeModal()});

    // simple theme toggle (light/dark)
    function toggleTheme(){
      if(document.documentElement.style.getPropertyValue('--bg') === ''){
        document.documentElement.style.setProperty('--bg','#0f1720');
      }
      // quick accent toggle (placeholder) — implement as you like
      alert('Toggle mode: contoh sederhana. Untuk implementasi penuh, beri tahu saya.');
    }

    // Download CV (simple text file generator)
    document.getElementById('dlCV').addEventListener('click',()=>{
      const content = `Nama Kamu\nUI/UX Designer & Photographer\n\nRingkasan:\n- 6+ tahun pengalaman\n- Klien: 40+\n- Email: nama@domain.com\n\nPortofolio: lihat website ini.`;
      const blob = new Blob([content],{type:'text/plain'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'CV-NamaKamu.txt';
      document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    });

  </script>
</body>
</html>
