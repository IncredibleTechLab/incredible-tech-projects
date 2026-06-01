/* --- CSS VARIABLES --- */
:root {
    --bg-dark: #050914;
    --text-main: #e2e8f0;
    --text-muted: #94a3b8;
    --neon-blue: #00f3ff;
    --neon-blue-glow: rgba(0, 243, 255, 0.4);
    --accent: #0066ff;
    --glass-bg: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(255, 255, 255, 0.08);
    --transition: 0.3s ease;
    
    font-family: 'Inter', sans-serif;
}

/* Light Mode Overrides (Bonus) */
.light-mode {
    --bg-dark: #f0f4f8;
    --text-main: #0f172a;
    --text-muted: #475569;
    --neon-blue: #0055ff;
    --neon-blue-glow: rgba(0, 85, 255, 0.2);
    --glass-bg: rgba(255, 255, 255, 0.7);
    --glass-border: rgba(0, 0, 0, 0.1);
}

/* --- RESET & BASICS --- */
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { background-color: var(--bg-dark); color: var(--text-main); overflow-x: hidden; transition: background-color var(--transition); }
h1, h2, h3, .logo, .neon-text { font-family: 'Orbitron', sans-serif; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }

/* Canvas Background */
#particle-canvas { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -1; pointer-events: none; }

/* Glassmorphism Utility */
.glass {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
}

/* --- SCROLL PROGRESS & LOADER --- */
#scroll-progress { position: fixed; top: 0; left: 0; height: 3px; background: var(--neon-blue); width: 0%; z-index: 9999; box-shadow: 0 0 10px var(--neon-blue); }
#loader { position: fixed; inset: 0; background: var(--bg-dark); display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 10000; transition: opacity 0.5s; }
.loader-logo { font-size: 3rem; font-family: 'Orbitron'; color: var(--neon-blue); margin-bottom: 20px; text-shadow: 0 0 20px var(--neon-blue-glow); animation: pulse 1.5s infinite; }
.loader-spinner { width: 50px; height: 50px; border: 3px solid transparent; border-top-color: var(--neon-blue); border-radius: 50%; animation: spin 1s linear infinite; }

/* --- NAVBAR --- */
#navbar { position: fixed; width: 100%; top: 0; z-index: 1000; padding: 20px 0; transition: var(--transition); }
#navbar.scrolled { padding: 10px 0; background: rgba(5, 9, 20, 0.8); backdrop-filter: blur(15px); border-bottom: 1px solid var(--glass-border); }
.nav-container { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: auto; padding: 0 20px; }
.logo { font-size: 1.5rem; font-weight: 700; letter-spacing: 1px; }
.logo span { color: var(--neon-blue); }
.nav-links { display: flex; gap: 30px; }
.nav-links a { font-weight: 500; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; transition: color var(--transition); }
.nav-links a:hover { color: var(--neon-blue); text-shadow: 0 0 10px var(--neon-blue-glow); }
.nav-actions { display: flex; align-items: center; gap: 20px; font-size: 1.2rem; cursor: pointer; }
.cart-icon { position: relative; }
.cart-count { position: absolute; top: -8px; right: -10px; background: var(--neon-blue); color: #000; font-size: 0.7rem; font-weight: bold; width: 18px; height: 18px; border-radius: 50%; display: flex; justify-content: center; align-items: center; }
.hamburger { display: none; }

/* --- HERO SECTION --- */
.hero { height: 100vh; display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: auto; padding: 0 20px; }
.hero-content { max-width: 600px; }
.hero h1 { font-size: 4rem; line-height: 1.1; margin-bottom: 20px; }
.neon-text { color: var(--neon-blue); text-shadow: 0 0 20px var(--neon-blue-glow); }
.hero p { font-size: 1.2rem; color: var(--text-muted); margin-bottom: 30px; }
.hero-buttons { display: flex; gap: 20px; }
.btn { padding: 12px 30px; border-radius: 8px; font-family: 'Orbitron'; font-weight: 600; cursor: pointer; transition: var(--transition); text-transform: uppercase; font-size: 0.9rem; }
.primary-btn { background: var(--neon-blue); color: #000; box-shadow: 0 0 15px var(--neon-blue-glow); border: none; }
.primary-btn:hover { box-shadow: 0 0 30px var(--neon-blue-glow); transform: translateY(-3px); }
.secondary-btn { background: transparent; color: var(--text-main); border: 1px solid var(--neon-blue); }
.secondary-btn:hover { background: rgba(0, 243, 255, 0.1); transform: translateY(-3px); }

/* 3D Cube Animation */
.cube-container { perspective: 800px; width: 200px; height: 200px; }
.cube { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; animation: rotateCube 15s infinite linear; }
.face { position: absolute; width: 200px; height: 200px; background: rgba(0, 243, 255, 0.05); border: 2px solid var(--neon-blue); box-shadow: 0 0 20px var(--neon-blue-glow) inset; display: flex; justify-content: center; align-items: center; font-size: 4rem; color: var(--neon-blue); }
.front  { transform: translateZ(100px); }
.back   { transform: rotateY(180deg) translateZ(100px); }
.right  { transform: rotateY(90deg) translateZ(100px); }
.left   { transform: rotateY(-90deg) translateZ(100px); }
.top    { transform: rotateX(90deg) translateZ(100px); }
.bottom { transform: rotateX(-90deg) translateZ(100px); }

/* --- SECTIONS --- */
.section { padding: 100px 20px; max-width: 1200px; margin: auto; }
.section-title { text-align: center; margin-bottom: 50px; }
.section-title h2 { font-size: 2.5rem; margin-bottom: 10px; color: var(--text-main); }
.section-title p { color: var(--text-muted); }

/* --- FEATURE GRID --- */
.feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }
.feature-card { padding: 30px; text-align: center; transition: transform 0.4s; }
.feature-card:hover { transform: translateY(-10px); }
.feature-card i { font-size: 2.5rem; color: var(--neon-blue); margin-bottom: 20px; }

/* --- SHOP & PRODUCTS --- */
.shop-controls { display: flex; flex-direction: column; gap: 20px; align-items: center; margin-bottom: 40px; }
.search-bar { display: flex; align-items: center; padding: 10px 20px; width: 100%; max-width: 500px; border-radius: 30px; }
.search-bar input { background: transparent; border: none; color: var(--text-main); padding-left: 10px; width: 100%; outline: none; font-family: 'Inter'; }
.filters { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
.filter-btn { background: transparent; border: 1px solid var(--glass-border); color: var(--text-main); padding: 8px 16px; border-radius: 20px; cursor: pointer; transition: var(--transition); }
.filter-btn:hover, .filter-btn.active { background: var(--neon-blue); color: #000; box-shadow: 0 0 10px var(--neon-blue-glow); border-color: var(--neon-blue); }

.product-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; perspective: 1000px; }
.product-card { padding: 20px; display: flex; flex-direction: column; transition: transform 0.5s ease, box-shadow 0.5s ease; transform-style: preserve-3d; }
.product-card:hover { transform: translateY(-10px) rotateX(2deg) rotateY(-2deg); box-shadow: 0 15px 35px var(--neon-blue-glow); }
.product-img { width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px; border: 1px solid var(--glass-border); }
.product-category { font-size: 0.75rem; color: var(--neon-blue); text-transform: uppercase; letter-spacing: 1px; font-weight: bold; }
.product-title { font-size: 1.2rem; margin: 5px 0 15px; font-family: 'Orbitron'; }
.product-price { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; font-weight: 600; }
.lkr-price { font-size: 1.2rem; color: var(--text-main); }
.usd-price { font-size: 0.9rem; color: var(--text-muted); }
.product-meta { display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 20px; }
.rating i { color: #ffd700; }
.product-actions { display: flex; gap: 10px; margin-top: auto; }
.product-actions button, .product-actions a { flex: 1; text-align: center; }
.btn-sm { padding: 10px; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer; border: none; transition: var(--transition); }
.buy-btn { background: var(--neon-blue); color: #000; }
.buy-btn:hover { box-shadow: 0 0 15px var(--neon-blue-glow); }
.details-btn { background: transparent; border: 1px solid var(--glass-border); color: var(--text-main); }
.details-btn:hover { background: rgba(255,255,255,0.1); }

/* --- FAQ --- */
.faq-container { max-width: 800px; margin: auto; display: flex; flex-direction: column; gap: 15px; }
.faq-item { padding: 20px; cursor: pointer; transition: var(--transition); }
.faq-question { font-weight: 600; display: flex; justify-content: space-between; align-items: center; font-family: 'Orbitron'; }
.faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; color: var(--text-muted); margin-top: 0; opacity: 0; }
.faq-item.active .faq-answer { max-height: 200px; margin-top: 15px; opacity: 1; }
.faq-item.active .fa-chevron-down { transform: rotate(180deg); }

/* --- MODAL --- */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(5px); z-index: 10000; display: flex; justify-content: center; align-items: center; opacity: 0; pointer-events: none; transition: opacity 0.3s; padding: 20px; }
.modal-overlay.active { opacity: 1; pointer-events: all; }
.modal-content { width: 100%; max-width: 800px; max-height: 90vh; overflow-y: auto; padding: 30px; position: relative; transform: translateY(50px); transition: transform 0.3s; }
.modal-overlay.active .modal-content { transform: translateY(0); }
.close-modal { position: absolute; top: 20px; right: 20px; background: transparent; border: none; color: var(--text-main); font-size: 1.5rem; cursor: pointer; }
.modal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
.modal-img { width: 100%; border-radius: 10px; border: 1px solid var(--neon-blue); box-shadow: 0 0 20px var(--neon-blue-glow); }
.modal-info h2 { font-family: 'Orbitron'; margin-bottom: 10px; }
.modal-tags { display: flex; gap: 10px; flex-wrap: wrap; margin: 15px 0; }
.tag { background: rgba(0, 243, 255, 0.1); color: var(--neon-blue); padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; border: 1px solid var(--neon-blue-glow); }
.modal-includes { margin: 20px 0; }
.modal-includes li { margin-bottom: 8px; font-size: 0.9rem; color: var(--text-muted); }
.modal-includes i { color: #00ff88; margin-right: 10px; }

/* --- FOOTER --- */
footer { padding: 50px 20px 20px; margin-top: 100px; border-bottom-left-radius: 0; border-bottom-right-radius: 0; }
.footer-content { max-width: 1200px; margin: auto; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 30px; }
.footer-brand p { color: var(--text-muted); margin: 15px 0; }
.social-links a { font-size: 1.5rem; margin-right: 15px; transition: color var(--transition); }
.social-links a:hover { color: var(--neon-blue); }
.footer-links { display: flex; flex-direction: column; gap: 10px; }
.footer-bottom { text-align: center; padding-top: 30px; margin-top: 30px; border-top: 1px solid var(--glass-border); color: var(--text-muted); font-size: 0.85rem; }

/* --- UTILS & ANIMATIONS --- */
#back-to-top { position: fixed; bottom: 30px; right: 30px; background: var(--neon-blue); color: #000; width: 40px; height: 40px; border-radius: 50%; border: none; cursor: pointer; display: none; justify-content: center; align-items: center; z-index: 999; box-shadow: 0 0 15px var(--neon-blue-glow); }
.reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
.reveal.active { opacity: 1; transform: translateY(0); }

@keyframes spin { 100% { transform: rotate(360deg); } }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
@keyframes rotateCube { 0% { transform: rotateX(0) rotateY(0); } 100% { transform: rotateX(360deg) rotateY(360deg); } }

/* Responsive */
@media (max-width: 768px) {
    .nav-links { display: none; } /* Add JS mobile menu logic for production */
    .hamburger { display: block; }
    .hero { flex-direction: column; justify-content: center; text-align: center; gap: 50px; }
    .hero h1 { font-size: 2.5rem; }
    .hero-buttons { justify-content: center; }
    .modal-grid { grid-template-columns: 1fr; }
}