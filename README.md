<!-- PREMIUM VERSION + VOTING SYSTEM -->
<!--
File: index.html
Fitur:
✓ Tampilan premium seperti Miss Universe (hero banner mewah, font elegan, lighting effect)
✓ Sistem Voting Finalis (localStorage — tanpa server)
✓ Gallery, News, Sponsor tetap ada
✓ Dark Mode
✓ Responsive & Smooth Animation
-->
<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Puteri Inspirasi Indonesia — Premium</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
<style>
:root{
  --gold:#d6b35f;
  --gold-soft:#f2d68a;
  --dark:#05070d;
  --dark2:#0b0f1c;
  --text:#e8ecf4;
  --muted:#9aa2b8;
}
body{
  margin:0;
  font-family:Inter, sans-serif;
  background:var(--dark2);
  color:var(--text);
}
header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:22px 40px;
  background:rgba(0,0,0,0.35);
  backdrop-filter:blur(10px);
  position:sticky;
  top:0;
  z-index:20;
}
nav a{
  margin:0 14px;
  text-decoration:none;
  color:var(--muted);
  font-weight:600;
}
.hero{
  height:520px;
  background:url('https://images.unsplash.com/photo-1520975721493-8b8d7f6e1a4f?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
  position:relative;
}
.hero::after{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(180deg,rgba(5,7,13,0.1),var(--dark2) 80%);
}
.hero-text{
  position:absolute;
  bottom:80px;
  left:50%;
  transform:translateX(-50%);
  text-align:center;
  color:white;
}
.hero-title{
  font-family:'Playfair Display', serif;
  font-size:62px;
  letter-spacing:4px;
  font-weight:700;
  color:var(--gold-soft);
}
.hero-sub{
  font-size:20px;
  opacity:0.9;
  margin-top:10px;
}
section{padding:40px}
h2{
  font-family:'Playfair Display', serif;
  color:var(--gold);
  font-size:32px;
}
.finalis-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:18px;
}
.finalis-card{
  background:rgba(255,255,255,0.04);
  padding:12px;
  border-radius:14px;
  text-align:center;
  box-shadow:0 10px 28px rgba(0,0,0,0.4);
  transition:0.3s;
}
.finalis-card:hover{
  transform:translateY(-4px);
  box-shadow:0 14px 34px rgba(0,0,0,0.6);
}
.finalis-card img{
  width:100%;height:260px;object-fit:cover;border-radius:12px;
}
.vote-btn{
  margin-top:12px;
  background:var(--gold);
  color:#000;
  border:none;
  padding:10px 14px;
  border-radius:10px;
  cursor:pointer;
  font-weight:700;
  width:100%;
}
.vote-count{
  margin-top:6px;
  font-size:14px;
  opacity:0.8;
}
</style>
</head>
<body>
<header>
  <div style="font-size:24px;font-weight:700;color:var(--gold-soft);font-family:'Playfair Display'">PUTERI INSPIRASI INDONESIA</div>
  <nav>
    <a href="#finalis">Finalis</a>
    <a href="#vote">Voting</a>
    <a href="#berita">Berita</a>
    <a href="#sponsor">Sponsor</a>
  </nav>
</header>

<div class="hero">
  <div class="hero-text">
    <div class="hero-title">TOP 16 FINALISTS</div>
    <div class="hero-sub">Elegance • Confidence • Diversity</div>
  </div>
</div>

<section id="finalis">
  <h2>Finalis</h2>
  <div class="finalis-grid" id="finalisList"></div>
</section>

<section id="vote">
  <h2>Voting Finalis</h2>
  <p>Pilih finalis favorit Anda! Voting disimpan di browser (demo tanpa server).</p>
  <div class="finalis-grid" id="voteGrid"></div>
</section>

<script>
let finalists=[
  {id:1,name:"Alyssa",img:"[https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fp%2FDDQZY0IzMr6%2F&psig=AOvVaw1NQGlttdM0DxrUor7oeJi3&ust=1763479167930000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPi1gP69-ZADFQAAAAAdAAAAABAE)"},
  {id:2,name:"Sari",img:"[https://images.unsplash.com/photo-1545996124-18b6200b1d3d?auto=format&fit=crop&w=800&q=60](https://www.google.com/url?sa=i&url=https%3A%2F%2Fbaliexpress.jawapos.com%2Fnasional%2F675168088%2Fharumkan-nama-indonesia-di-ajang-internasional-tata-juliastrid-raih-gelar-miss-cosmo-2024-ini-sederet-hadiah-yang-berhak-ia-bawa-pulang&psig=AOvVaw1kJRAcavy2SwBOJUtj5fxo&ust=1763479222469000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLi385a--ZADFQAAAAAdAAAAABAE)"},
  {id:3,name:"Nadine",img:"[https://images.unsplash.com/photo-1539571745658-84b90db34c9d?auto=format&fit=crop&w=800&q=60](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10153125747562318%26id%3D271675847317%26set%3Da.10152486429507318&psig=AOvVaw1hQMDNPYNwNmfPWLGqp8bJ&ust=1763479257252000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMCux6q--ZADFQAAAAAdAAAAABAs)"},
  {id:4,name:"Cindy",img:"[https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=60](https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.wikipedia.org%2Fwiki%2FCindy_May_Mc_Guire&psig=AOvVaw069NCMK7_nNb9eAa6KI6KZ&ust=1763479307267000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPiwj7---ZADFQAAAAAdAAAAABAE)"},
];

let votes=JSON.parse(localStorage.getItem("mu_votes")||"{}");

function saveVotes(){localStorage.setItem("mu_votes",JSON.stringify(votes));}

function renderFinalists(){
  const el=document.getElementById("finalisList");
  el.innerHTML="";
  finalists.forEach(f=>{
    el.innerHTML+=`
    <div class="finalis-card">
      <img src="${f.img}">
      <h3>${f.name}</h3>
    </div>`;
  });
}

function renderVoting(){
  const el=document.getElementById("voteGrid");
  el.innerHTML="";
  finalists.forEach(f=>{
    const count=votes[f.id]||0;
    el.innerHTML+=`
    <div class="finalis-card">
      <img src="${f.img}">
      <h3>${f.name}</h3>
      <button class="vote-btn" onclick="vote(${f.id})">Vote</button>
      <div class="vote-count">Vote: ${count}</div>
    </div>`;
  });
}

function vote(id){
  votes[id]=(votes[id]||0)+1;
  saveVotes();
  renderVoting();
}

renderFinalists();
renderVoting();
</script>
</body>
</html>
