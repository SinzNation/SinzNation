@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: dark; }
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin:0; background:#050505; color:#f5f5f5; font-family: Arial, Helvetica, sans-serif; }
a { color: inherit; text-decoration:none; }
.bg-grid { background-image: linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px); background-size: 44px 44px; }
.card { background: rgba(255,255,255,.055); border:1px solid rgba(255,255,255,.12); border-radius: 28px; box-shadow: 0 24px 80px rgba(0,0,0,.45); }
.btn { display:inline-flex; align-items:center; justify-content:center; border-radius:999px; padding:14px 22px; font-weight:800; transition:.2s ease; }
.btn-primary { background:#f5f5f5; color:#050505; }
.btn-primary:hover { transform: translateY(-2px); background:white; }
.btn-ghost { border:1px solid rgba(255,255,255,.18); background:rgba(255,255,255,.05); }
.btn-ghost:hover { transform: translateY(-2px); background:rgba(255,255,255,.1); }
