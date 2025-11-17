
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Miss Universe Indonesia — Demo</title>
  <meta name="description" content="Demo website elegan dan user-friendly ala Miss Universe Indonesia. Deploy ke GitHub Pages." />
  <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
  <style>
    :root{
      --bg:#0b1020;--card:#0f1724;--muted:#9aa4b2;--accent:#caa93a;--glass: rgba(255,255,255,0.04);
    }
    [data-theme="light"]{ --bg:#fafafa; --card:#ffffff; --muted:#6b7280; --accent:#b37a05; --glass: rgba(10,10,10,0.04); }
    *{box-sizing:border-box}
    html,body{height:100%;margin:0;font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;color:#e6eef6;background:linear-gradient(180deg,var(--bg),#071026);}
    .container{max-width:1200px;margin:0 auto;padding:24px}
    header{display:flex;align-items:center;justify-content:space-between;gap:16px}
    .brand{display:flex;align-items:center;gap:12px}
    .logo{width:44px;height:44px;border-radius:8px;background:linear-gradient(135deg,var(--accent),#ffd66b);display:flex;align-items:center;justify-content:center;font-weight:700;color:#072033}
    nav ul{display:flex;gap:18px;list-style:none;padding:0;margin:0}
    nav a{color:var(--muted);text-decoration:none;font-weight:600}
    .hero{position:relative;margin-top:18px;border-radius:14px;overflow:hidden}
    .slides{display:flex;transition:transform .6s ease}
    .slide{min-width:100%;height:420px;display:grid;grid-template-columns:1fr;align-items:end;padding:36px;background-size:cover;background-position:center}
    .hero-caption{background:linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(3,6,15,0.7) 60%);padding:30px;border-radius:8px;color:#fff}
    .big-title{font-size:56px;letter-spacing:4px;margin:0;color:var(--accent)}
    .sub{font-size:20px;color:rgba(255,255,255,0.9)}
    .controls{position:absolute;left:50%;transform:translateX(-50%);bottom:18px;display:flex;gap:10px}
    .dot{width:12px;height:12px;border-radius:50%;background:rgba(255,255,255,0.3);border:2px solid rgba(0,0,0,0.2)}
    .dot.active{background:var(--accent)}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:28px}
    .card{background:var(--card);padding:18px;border-radius:12px;box-shadow:0 8px 20px rgba(2,6,23,0.5)}
    h2{margin:0 0 12px 0}
    .muted{color:var(--muted)}
    .finalis-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px}
    .person{background:linear-gradient(180deg,var(--glass),transparent);padding:10px;border-radius:10px;text-align:center}
    .person img{width:100%;height:200px;object-fit:cover;border-radius:8px}
    .actions{display:flex;gap:8px;justify-content:flex-end;margin-top:12px}
    button{background:transparent;border:1px solid rgba(255,255,255,0.08);padding:8px 12px;border-radius:10px;color:var(--muted);cursor:pointer}
    .btn-primary{background:var(--accent);color:#072033;border:none}
    footer{margin-top:36px;padding:24px;text-align:center;color:var(--muted)}
    .topbar{display:flex;gap:12px;align-items:center}
    input[type=search]{padding:8px 12px;border-radius:999px;border:1px solid rgba(255,255,255,0.06);background:transparent;color:inherit}
    .admin{position:fixed;right:18px;bottom:18px}
    /* responsive */
    @media (max-width:900px){.grid{grid-template-columns:1fr}.big-title{font-size:36px}.slide{height:340px}}
    @media (max-width:520px){header{flex-direction:column;align-items:flex-start}.topbar{width:100%;justify-content:space-between}}
  </style>
</head>
<body data-theme="dark">
  <div class="container">
    <header>
      <div class="brand">
        <div class="logo">MU</div>
        <div>
          <div style="font-weight:800">Miss Universe</div>
          <div class="muted">Indonesia — Official Demo</div>
        </div>
      </div>

      <div class="topbar">
        <nav aria-label="Main nav">
          <ul>
            <li><a href="#berita">Berita</a></li>
            <li><a href="#finalis">Finalis</a></li>
            <li><a href="#pemenang">Pemenang</a></li>
            <li><a href="#sponsor">Sponsor</a></li>
          </ul>
        </nav>

        <input id="search" type="search" placeholder="Cari berita, finalis..." aria-label="Search" />
        <button id="themeToggle" title="Toggle dark/light">🌗</button>
        <button id="openAdmin">Admin</button>
      </div>

    </header>

    <!-- HERO -->
    <section class="hero" aria-label="Hero">
      <div class="slides" id="slides">
        <div class="slide" style="background-image:url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=60')">
          <div class="hero-caption">
            <h1 class="big-title">TOP 16<br>MISS • UNIVERSE</h1>
            <p class="sub">Indonesia — Keanggunan, Keberagaman, dan Partisipasi</p>
          </div>
        </div>
        <div class="slide" style="background-image:url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=60')">
          <div class="hero-caption">
            <h1 class="big-title">Gala Night</h1>
            <p class="sub">Saksikan momen terbaik malam puncak</p>
          </div>
        </div>
        <div class="slide" style="background-image:url('https://images.unsplash.com/photo-1520975721493-8b8d7f6e1a4f?auto=format&fit=crop&w=1600&q=60')">
          <div class="hero-caption">
            <h1 class="big-title">Inspirasi &amp; Aksi</h1>
            <p class="sub">Program komunitas dan advokasi</p>
          </div>
        </div>
      </div>
      <div class="controls" id="dots"></div>
    </section>

    <!-- CONTENT GRID -->
    <main class="grid" style="align-items:start">
      <section id="berita" class="card">
        <h2>Berita</h2>
        <div id="newsList"></div>
      </section>

      <section id="finalis" class="card">
        <h2>Finalis</h2>
        <div class="finalis-grid" id="finalisList"></div>
      </section>

      <section id="pemenang" class="card">
        <h2>Pemenang</h2>
        <div id="winners"></div>
      </section>

    </main>

    <section class="grid" style="margin-top:18px">
      <div id="sponsor" class="card">
        <h2>Sponsor</h2>
        <div id="sponsorList" style="display:flex;gap:8px;flex-wrap:wrap"></div>
      </div>

      <div id="gallery" class="card">
        <h2>Galeri</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px" id="galleryList"></div>
      </div>

      <div id="contact" class="card">
        <h2>Kontak</h2>
        <form id="contactForm">
          <div><input required placeholder="Nama" style="width:100%;padding:8px;margin-bottom:8px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit"/></div>
          <div><input required type="email" placeholder="Email" style="width:100%;padding:8px;margin-bottom:8px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit"/></div>
          <div><textarea required placeholder="Pesan" style="width:100%;padding:8px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit"></textarea></div>
          <div style="text-align:right"><button class="btn-primary" type="submit">Kirim</button></div>
        </form>
      </div>
    </section>

    <footer>
      © Miss Universe Indonesia — Demo • Dibuat untuk GitHub Pages
    </footer>

    <!-- ADMIN PANEL MODAL -->
    <div id="adminModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.6);align-items:center;justify-content:center;padding:18px">
      <div style="background:var(--card);padding:20px;border-radius:12px;max-width:760px;width:100%">
        <h3>Admin (demo)</h3>
        <p class="muted">Password demo: <strong>admin123</strong></p>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button id="addNews">Tambah Berita</button>
          <button id="addFinalist">Tambah Finalis</button>
          <button id="closeAdmin">Tutup</button>
        </div>
        <hr />
        <div id="adminForm"></div>
      </div>
    </div>

  </div>

  <script>
    // -- Data store (localStorage demo)
    const DEFAULT = {
      news:[{id:1,title:'Finalis Diumumkan',excerpt:'Top 16 finalis yang mewakili keberagaman Indonesia telah diumumkan.'}],
      finalists:[{id:1,name:'Alyssa',bio:'Finalis dari Jakarta',img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60'},{id:2,name:'Sari',bio:'Finalis dari Bali',img:'https://images.unsplash.com/photo-1545996124-18b6200b1d3d?auto=format&fit=crop&w=800&q=60'}],
      winners:[{id:1,name:'Alyssa',title:'Miss Universe Indonesia 2025'}],
      sponsors:[{id:1,name:'Sponsor A'},{id:2,name:'Sponsor B'}],
      gallery:[
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1505577058444-a3dab1b6a2f1?auto=format&fit=crop&w=800&q=60'
      ]
    }

    function load(){
      const json = localStorage.getItem('mu_demo');
      if(!json){localStorage.setItem('mu_demo',JSON.stringify(DEFAULT));return DEFAULT}
      try{return JSON.parse(json)}catch(e){localStorage.setItem('mu_demo',JSON.stringify(DEFAULT));return DEFAULT}
    }
    function save(data){localStorage.setItem('mu_demo',JSON.stringify(data))}

    let state = load();

    // -- Renderers
    function renderNews(){
      const el = document.getElementById('newsList');el.innerHTML='';
      state.news.forEach(n=>{
        const d = document.createElement('div');d.style.marginBottom='12px';
        d.innerHTML = `<strong>${escapeHtml(n.title)}</strong><div class='muted'>${escapeHtml(n.excerpt)}</div>`;
        el.appendChild(d);
      })
    }
    function renderFinalists(){
      const el = document.getElementById('finalisList');el.innerHTML='';
      state.finalists.forEach(p=>{
        const d = document.createElement('div');d.className='person';
        d.innerHTML = `<img src="${p.img}" alt="${escapeHtml(p.name)}" /><div style="padding-top:8px"><strong>${escapeHtml(p.name)}</strong><div class='muted'>${escapeHtml(p.bio)}</div></div>`;
        el.appendChild(d);
      })
    }
    function renderWinners(){
      const el = document.getElementById('winners');el.innerHTML='';
      state.winners.forEach(w=>{const d=document.createElement('div');d.innerHTML=`<strong>${escapeHtml(w.name)}</strong> — ${escapeHtml(w.title)}`;el.appendChild(d)})
    }
    function renderSponsors(){
      const el = document.getElementById('sponsorList');el.innerHTML='';
      state.sponsors.forEach(s=>{const d=document.createElement('div');d.style.padding='8px 10px';d.style.border='1px solid rgba(255,255,255,0.04)';d.style.borderRadius='8px';d.textContent=s.name;el.appendChild(d)})
    }
    function renderGallery(){
      const el=document.getElementById('galleryList');el.innerHTML='';state.gallery.forEach(u=>{const i=document.createElement('img');i.src=u;i.style.width='100%';i.style.height='120px';i.style.objectFit='cover';i.style.borderRadius='8px';el.appendChild(i)})
    }

    function renderAll(){renderNews();renderFinalists();renderWinners();renderSponsors();renderGallery();}
    renderAll();

    // -- Hero slider logic
    const slides = document.getElementById('slides');const dots = document.getElementById('dots');const total = slides.children.length;let idx=0;let interval;
    function makeDots(){dots.innerHTML='';for(let i=0;i<total;i++){const d=document.createElement('div');d.className='dot'+(i===0?' active':'');d.addEventListener('click',()=>goTo(i));dots.appendChild(d)}}
    function goTo(i){idx=i;slides.style.transform=`translateX(-${i*100}%)`;updateDots();}
    function updateDots(){Array.from(dots.children).forEach((d,ii)=>d.classList.toggle('active',ii===idx))}
    function start(){interval=setInterval(()=>{idx=(idx+1)%total;goTo(idx)},4000)}
    function stop(){clearInterval(interval)}
    makeDots();start();slides.addEventListener('mouseenter',stop);slides.addEventListener('mouseleave',start);

    // -- Search
    document.getElementById('search').addEventListener('input',e=>{
      const q=e.target.value.toLowerCase().trim();
      document.querySelectorAll('#newsList > div').forEach(div=>{div.style.display = q? (div.textContent.toLowerCase().includes(q)?'block':'none') : 'block'});
    })

    // -- Dark mode toggle and remember
    const themeToggle = document.getElementById('themeToggle');
    function applyTheme(t){document.body.setAttribute('data-theme',t);localStorage.setItem('mu_theme',t)}
    const saved = localStorage.getItem('mu_theme')||'dark';applyTheme(saved);
    themeToggle.addEventListener('click',()=>{applyTheme(document.body.getAttribute('data-theme')==='dark'?'light':'dark')})

    // -- Admin demo
    const adminModal = document.getElementById('adminModal');
    document.getElementById('openAdmin').addEventListener('click',()=>{
      const pass = prompt('Masukkan password admin:');
      if(pass==='admin123'){adminModal.style.display='flex';}else{alert('Password salah')}
    })
    document.getElementById('closeAdmin').addEventListener('click',()=>{adminModal.style.display='none';document.getElementById('adminForm').innerHTML=''});

    document.getElementById('addNews').addEventListener('click',()=>{
      const f = renderAdminForm('news',{title:'',excerpt:''},(val)=>{state.news.unshift({id:Date.now(),...val});save(state);renderAll();alert('Berita ditambahkan')});
      document.getElementById('adminForm').innerHTML='';document.getElementById('adminForm').appendChild(f);
    })
    document.getElementById('addFinalist').addEventListener('click',()=>{
      const f = renderAdminForm('finalists',{name:'',bio:'',img:''},(val)=>{state.finalists.unshift({id:Date.now(),...val});save(state);renderAll();alert('Finalis ditambahkan')});
      document.getElementById('adminForm').innerHTML='';document.getElementById('adminForm').appendChild(f);
    })

    function renderAdminForm(collection,defaults,onSubmit){
      const wrap=document.createElement('div');
      const form=document.createElement('form');form.style.display='grid';form.style.gap='8px';
      const keys=Object.keys(defaults);
      keys.forEach(k=>{const ip=document.createElement('input');ip.placeholder=k;ip.name=k;ip.value=defaults[k];ip.style.padding='8px';form.appendChild(ip)})
      const submit=document.createElement('button');submit.type='submit';submit.textContent='Simpan';submit.className='btn-primary';form.appendChild(submit);
      form.addEventListener('submit',e=>{e.preventDefault();const data={};keys.forEach(k=>data[k]=form.elements[k].value.trim());onSubmit(data);document.getElementById('adminForm').innerHTML=''});
      wrap.appendChild(form);return wrap
    }

    // contact form simple handler
    document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();alert('Terima kasih, pesan Anda terkirim (demo)');e.target.reset();})

    // utilities
    function escapeHtml(str){if(!str) return '';return String(str).replace(/[&<>\"]/g,tag=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[tag]||tag))}

    // small accessibility: focus first hero when loaded
    window.addEventListener('load',()=>{document.querySelector('.hero')?.setAttribute('tabindex','-1')})
  </script>
</body>
</html>

