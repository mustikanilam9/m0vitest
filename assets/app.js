const LANGS = {
  en:{movies:"Movies",tv:"TV Shows",genres:"Genres",people:"Popular People",signIn:"Sign In",register:"Register",heroEyebrow:"YOUR NEXT FAVORITE STARTS HERE",heroTitle:"Stream Free Movies & TV Shows",heroCopy:"Browse and discover your favorite movies and series.",explore:"Explore Movies",popularMovies:"Popular Movies",nowPlaying:"Now Playing Movies",topRated:"Top Rated Movies",upcoming:"Upcoming Movies",popularTV:"Popular TV Shows",browseGenres:"Browse by Genre",searchLabel:"YOUR SEARCH",searchResults:"Search results",noResults:"No results found.",loading:"Loading movies…",back:"← Back to home",overview:"Overview",watch:"Watch Now",watchUnavailable:"Watch link is not configured yet. Add your authorized streaming URL in assets/app.js.",footerNote:"Discover movies and TV shows from TMDB.",searchPlaceholder:"Search...",rating:"Rating",languageName:"English"},
  id:{movies:"Film",tv:"Serial TV",genres:"Genre",people:"Tokoh Populer",signIn:"Masuk",register:"Daftar",heroEyebrow:"TONTONAN FAVORIT ANDA DIMULAI DI SINI",heroTitle:"Temukan Film & Serial TV",heroCopy:"Jelajahi dan temukan film serta serial favorit Anda.",explore:"Jelajahi Film",popularMovies:"Film Populer",nowPlaying:"Sedang Tayang",topRated:"Rating Tertinggi",upcoming:"Segera Hadir",popularTV:"Serial TV Populer",browseGenres:"Jelajahi Genre",searchLabel:"PENCARIAN ANDA",searchResults:"Hasil pencarian",noResults:"Hasil tidak ditemukan.",loading:"Memuat film…",back:"← Kembali ke beranda",overview:"Sinopsis",watch:"Tonton Sekarang",watchUnavailable:"Tautan tontonan belum diatur. Tambahkan URL streaming yang Anda miliki di assets/app.js.",footerNote:"Temukan film dan serial TV dari TMDB.",searchPlaceholder:"Cari...",rating:"Rating",languageName:"Indonesia"},
  es:{movies:"Películas",tv:"Series",genres:"Géneros",people:"Personas populares",signIn:"Iniciar sesión",register:"Registrarse",heroEyebrow:"TU PRÓXIMA FAVORITA EMPIEZA AQUÍ",heroTitle:"Descubre películas y series",heroCopy:"Explora tus películas y series favoritas.",explore:"Explorar películas",popularMovies:"Películas populares",nowPlaying:"En cartelera",topRated:"Mejor valoradas",upcoming:"Próximamente",popularTV:"Series populares",browseGenres:"Explorar géneros",searchLabel:"TU BÚSQUEDA",searchResults:"Resultados",noResults:"No se encontraron resultados.",loading:"Cargando películas…",back:"← Volver al inicio",overview:"Sinopsis",watch:"Ver ahora",watchUnavailable:"El enlace de reproducción aún no está configurado.",footerNote:"Descubre películas y series de TMDB.",searchPlaceholder:"Buscar...",rating:"Nota",languageName:"Español"},
  th:{movies:"ภาพยนตร์",tv:"ซีรีส์",genres:"ประเภท",people:"บุคคลยอดนิยม",signIn:"เข้าสู่ระบบ",register:"สมัครสมาชิก",heroEyebrow:"เรื่องโปรดเรื่องต่อไปเริ่มที่นี่",heroTitle:"ค้นพบภาพยนตร์และซีรีส์",heroCopy:"สำรวจภาพยนตร์และซีรีส์เรื่องโปรดของคุณ",explore:"สำรวจภาพยนตร์",popularMovies:"ภาพยนตร์ยอดนิยม",nowPlaying:"กำลังฉาย",topRated:"คะแนนสูงสุด",upcoming:"เร็ว ๆ นี้",popularTV:"ซีรีส์ยอดนิยม",browseGenres:"เลือกตามประเภท",searchLabel:"ผลการค้นหา",searchResults:"ผลการค้นหา",noResults:"ไม่พบผลลัพธ์",loading:"กำลังโหลดภาพยนตร์…",back:"← กลับหน้าแรก",overview:"เรื่องย่อ",watch:"รับชมตอนนี้",watchUnavailable:"ยังไม่ได้ตั้งค่าลิงก์รับชม",footerNote:"ค้นพบภาพยนตร์และซีรีส์จาก TMDB",searchPlaceholder:"ค้นหา...",rating:"คะแนน",languageName:"ไทย"},
  pt:{movies:"Filmes",tv:"Séries",genres:"Géneros",people:"Pessoas populares",signIn:"Entrar",register:"Registar",heroEyebrow:"O SEU PRÓXIMO FAVORITO COMEÇA AQUI",heroTitle:"Descubra filmes e séries",heroCopy:"Explore os seus filmes e séries favoritos.",explore:"Explorar filmes",popularMovies:"Filmes populares",nowPlaying:"Em exibição",topRated:"Mais bem classificados",upcoming:"Em breve",popularTV:"Séries populares",browseGenres:"Explorar géneros",searchLabel:"A SUA PESQUISA",searchResults:"Resultados",noResults:"Não foram encontrados resultados.",loading:"A carregar filmes…",back:"← Voltar ao início",overview:"Sinopse",watch:"Ver agora",watchUnavailable:"O link de reprodução ainda não está configurado.",footerNote:"Descubra filmes e séries da TMDB.",searchPlaceholder:"Pesquisar...",rating:"Classificação",languageName:"Português"},
  fr:{movies:"Films",tv:"Séries TV",genres:"Genres",people:"Personnalités",signIn:"Connexion",register:"S’inscrire",heroEyebrow:"VOTRE PROCHAIN COUP DE CŒUR COMMENCE ICI",heroTitle:"Découvrez films et séries",heroCopy:"Explorez vos films et séries préférés.",explore:"Explorer les films",popularMovies:"Films populaires",nowPlaying:"À l’affiche",topRated:"Les mieux notés",upcoming:"Prochainement",popularTV:"Séries populaires",browseGenres:"Explorer les genres",searchLabel:"VOTRE RECHERCHE",searchResults:"Résultats",noResults:"Aucun résultat trouvé.",loading:"Chargement des films…",back:"← Retour à l’accueil",overview:"Synopsis",watch:"Regarder",watchUnavailable:"Le lien de lecture n’est pas encore configuré.",footerNote:"Découvrez les films et séries de TMDB.",searchPlaceholder:"Rechercher...",rating:"Note",languageName:"Français"},
  vi:{movies:"Phim",tv:"Phim truyền hình",genres:"Thể loại",people:"Người nổi tiếng",signIn:"Đăng nhập",register:"Đăng ký",heroEyebrow:"BỘ PHIM YÊU THÍCH TIẾP THEO BẮT ĐẦU TẠI ĐÂY",heroTitle:"Khám phá phim và chương trình TV",heroCopy:"Tìm và khám phá phim cùng loạt phim yêu thích.",explore:"Khám phá phim",popularMovies:"Phim phổ biến",nowPlaying:"Đang chiếu",topRated:"Đánh giá cao",upcoming:"Sắp ra mắt",popularTV:"Phim truyền hình phổ biến",browseGenres:"Khám phá thể loại",searchLabel:"TÌM KIẾM",searchResults:"Kết quả tìm kiếm",noResults:"Không tìm thấy kết quả.",loading:"Đang tải phim…",back:"← Về trang chủ",overview:"Tóm tắt",watch:"Xem ngay",watchUnavailable:"Chưa cấu hình liên kết xem phim.",footerNote:"Khám phá phim và chương trình TV từ TMDB.",searchPlaceholder:"Tìm kiếm...",rating:"Đánh giá",languageName:"Tiếng Việt"},
  bg:{movies:"Филми",tv:"ТВ сериали",genres:"Жанрове",people:"Популярни личности",signIn:"Вход",register:"Регистрация",heroEyebrow:"СЛЕДВАЩИЯТ ВИ ЛЮБИМ ФИЛМ ЗАПОЧВА ТУК",heroTitle:"Открийте филми и сериали",heroCopy:"Разгледайте любимите си филми и сериали.",explore:"Разгледай филми",popularMovies:"Популярни филми",nowPlaying:"По кината",topRated:"Най-високо оценени",upcoming:"Предстоящи",popularTV:"Популярни сериали",browseGenres:"Разгледай жанрове",searchLabel:"ВАШЕТО ТЪРСЕНЕ",searchResults:"Резултати",noResults:"Няма намерени резултати.",loading:"Филмите се зареждат…",back:"← Към началото",overview:"Резюме",watch:"Гледай сега",watchUnavailable:"Връзката за гледане още не е настроена.",footerNote:"Открийте филми и сериали от TMDB.",searchPlaceholder:"Търсене...",rating:"Оценка",languageName:"Български"}
};
const TMDB_LANG = {en:"en-US",id:"id-ID",es:"es-ES",th:"th-TH",pt:"pt-PT",fr:"fr-FR",vi:"vi-VN",bg:"bg-BG"};
const API = "/api/tmdb";
const IMG = "https://image.tmdb.org/t/p/";
const WATCH_URL_TEMPLATE = ""; // Set a lawful streaming URL template if you have one; e.g. "https://your-service.example/watch/{id}"
let currentLang = "en";
let genreCache = [];
const $ = (s, root=document) => root.querySelector(s);
const escapeHTML = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function t(key){return (LANGS[currentLang] && LANGS[currentLang][key]) || LANGS.en[key] || key;}
function currentPath(){return location.pathname.split("/").filter(Boolean);}
function getLang(){const p=currentPath();return LANGS[p[0]]?p[0]:"en";}
function titleOf(m){return m.title || m.name || "Untitled";}
function yearOf(m){const d=m.release_date || m.first_air_date || "";return d?d.slice(0,4):"";}
function img(path,size="w342"){return path?IMG+size+path:"";}
async function api(path, params={}) {
  const url = new URL(API + "/" + path.replace(/^\/+/,""), location.origin);
  Object.entries({language:TMDB_LANG[currentLang]||"en-US",...params}).forEach(([k,v])=>{if(v!==undefined&&v!==null&&v!=="")url.searchParams.set(k,v)});
  const res=await fetch(url);
  if(!res.ok) throw new Error("TMDB request failed ("+res.status+")");
  return res.json();
}
function toast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),3500);}
function movieCard(m, type="movie"){
  const id=m.id, media=m.media_type||type, title=titleOf(m), poster=img(m.poster_path);
  return `<article class="movie-card"><a href="/${currentLang}/${media}/${id}" aria-label="${escapeHTML(title)}"><div class="poster-wrap">${poster?`<img class="poster" loading="lazy" src="${poster}" alt="${escapeHTML(title)} poster" onerror="this.style.display='none'">`:`<div class="poster"></div>`}<div class="poster-overlay"><span class="play-icon">▶</span></div>${m.vote_average?`<span class="rating"><span>★</span> ${Number(m.vote_average).toFixed(1)}</span>`:""}</div><p class="movie-title">${escapeHTML(title)}</p><p class="movie-year">${escapeHTML(yearOf(m))}</p></a></article>`;
}
function sectionHTML(id,titleKey){return `<section class="catalog-section"><div class="section-heading"><div><p class="section-kicker">MOVIEHUB COLLECTION</p><h2 data-i18n="${titleKey}">${t(titleKey)}</h2></div><div class="row-controls"><button data-scroll="${id}" aria-label="Scroll left">‹</button><button data-scroll-right="${id}" aria-label="Scroll right">›</button></div></div><div class="poster-track" id="${id}"><div class="loading-card">${t("loading")}</div></div></section>`;}
async function loadRow(path,id,type="movie"){
  const track=$("#"+id);if(!track)return;
  try{const data=await api(path,{page:1});const items=(data.results||[]).slice(0,20);track.innerHTML=items.map(m=>movieCard(m,type)).join("")||`<p class="loading-card">${t("noResults")}</p>`;}
  catch(e){track.innerHTML=`<p class="loading-card">Unable to load titles. Check your TMDB_API_KEY setting in Cloudflare Pages.</p>`;}
}
function showHomeSections(){
  $("#home-sections").innerHTML=sectionHTML("now-track","nowPlaying")+sectionHTML("top-track","topRated")+sectionHTML("upcoming-track","upcoming")+sectionHTML("tv-track","popularTV");
  loadRow("movie/now_playing","now-track");loadRow("movie/top_rated","top-track");loadRow("movie/upcoming","upcoming-track");loadRow("tv/popular","tv-track","tv");
}
async function loadGenres(){
  try{const data=await api("genre/movie/list");genreCache=data.genres||[];$("#genre-list").innerHTML=genreCache.slice(0,18).map(g=>`<button class="genre-chip" data-genre="${g.id}">${escapeHTML(g.name)}</button>`).join("");}
  catch(e){$("#genre-list").innerHTML='<span class="loading-card">Genres are unavailable until TMDB is configured.</span>';}
}
function setSEO(title,description){
  document.title=title;
  let meta=$('meta[name="description"]');if(!meta){meta=document.createElement("meta");meta.name="description";document.head.appendChild(meta);}meta.content=description;
}
async function renderDetail(lang,type,id){
  const app=$("#app");app.innerHTML='<div class="catalog loading-card">Loading title details…</div>';
  try{
    const m=await api(`${type}/${encodeURIComponent(id)}`,{append_to_response:"credits,videos"});
    const title=titleOf(m),year=yearOf(m),overview=m.overview||"";
    setSEO(`${t("watch")} ${title}${year?` (${year})`:""} | MovieHub`,overview.slice(0,155)||`${title} — ${t("overview")} on MovieHub.`);
    const backdrop=img(m.backdrop_path,"w1280"),poster=img(m.poster_path,"w500");
    const genres=(m.genres||[]).map(g=>escapeHTML(g.name)).join(" · ");
    const runtime=m.runtime?`${m.runtime} min`:"";
    const rating=m.vote_average?`★ ${Number(m.vote_average).toFixed(1)}/10`:"";
    const watchUrl=getWatchUrl(m);
    app.innerHTML=`<div class="detail-backdrop" style="background-image:url('${backdrop}')"></div><section class="catalog detail-layout"><div>${poster?`<img class="detail-poster" src="${poster}" alt="${escapeHTML(title)} poster">`:""}</div><div class="detail-content"><a class="back-link" href="/${lang}">${t("back")}</a><h1 class="detail-title">${escapeHTML(title)} ${year?`<span>(${year})</span>`:""}</h1><div class="detail-meta"><span class="detail-rating">${rating}</span><span>${escapeHTML(year)}</span><span>${escapeHTML(runtime)}</span><span>${genres}</span></div><h2>${t("overview")}</h2><p class="detail-overview">${escapeHTML(overview||"No synopsis is available in this language.")}</p><div class="detail-actions"><button class="watch-button" id="watch-button">${t("watch")} ▶</button><button class="secondary-button" id="share-button">↗ Share</button></div><p class="movie-year">TMDB ID: ${m.id}</p></div></section>`;
    $("#watch-button").addEventListener("click",()=>{if(watchUrl){window.open(watchUrl,"_blank","noopener,noreferrer");}else{toast(t("watchUnavailable"));}});
    $("#share-button").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href);toast("Link copied.");}catch(e){toast(location.href);}});
  }catch(e){setSEO("Movie details | MovieHub","Explore movie details on MovieHub.");app.innerHTML=`<section class="catalog"><a class="back-link" href="/${lang}">${t("back")}</a><h1>Unable to load this title</h1><p class="detail-overview">Check that the TMDB API key is configured in Cloudflare Pages, then reload this page.</p></section>`;}
}
function getWatchUrl(movie){if(!WATCH_URL_TEMPLATE)return "";return WATCH_URL_TEMPLATE.replaceAll("{id}",encodeURIComponent(movie.id)).replaceAll("{title}",encodeURIComponent(titleOf(movie)));}
async function searchMovies(query){
  if(!query.trim())return;
  $("#search-results").classList.remove("hidden");$("#search-title").textContent=`${t("searchResults")}: “${query}”`;
  $("#results-grid").innerHTML=`<p class="loading-card">${t("loading")}</p>`;
  $("#search-results").scrollIntoView({behavior:"smooth",block:"start"});
  try{const data=await api("search/multi",{query,include_adult:false,page:1});const items=(data.results||[]).filter(m=>["movie","tv"].includes(m.media_type)&&m.poster_path);$("#results-grid").innerHTML=items.map(m=>movieCard(m,m.media_type)).join("")||`<p class="loading-card">${t("noResults")}</p>`;}
  catch(e){$("#results-grid").innerHTML='<p class="loading-card">Search is unavailable. Check the TMDB API configuration.</p>';}
}
function applyLanguage(lang){
  currentLang=LANGS[lang]?lang:"en";document.documentElement.lang=currentLang;
  $("#language-select").value=currentLang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(LANGS[currentLang][key])el.textContent=LANGS[currentLang][key];});
  $("#search-input").placeholder=t("searchPlaceholder");
  const p=currentPath();if(p.length===0||!LANGS[p[0]])history.replaceState({},"",`/${currentLang}`);
  else if(p.length===1)history.replaceState({},"",`/${currentLang}`);
  setSEO("MovieHub — "+t("heroTitle"),t("heroCopy"));
}
async function renderHome(){
  const app=$("#app");
  app.innerHTML=`<section class="hero"><div class="hero-inner"><p class="eyebrow" data-i18n="heroEyebrow">${t("heroEyebrow")}</p><h1 data-i18n="heroTitle">${t("heroTitle")}</h1><p class="hero-copy" data-i18n="heroCopy">${t("heroCopy")}</p><a class="hero-cta" href="#movies">${t("explore")} <span>→</span></a></div></section><section class="catalog" id="movies"><div class="section-heading"><div><p class="section-kicker">MOVIEHUB COLLECTION</p><h2>${t("popularMovies")}</h2></div><div class="row-controls"><button data-scroll="popular-track" aria-label="Scroll left">‹</button><button data-scroll-right="popular-track" aria-label="Scroll right">›</button></div></div><div class="poster-track" id="popular-track"><div class="loading-card">${t("loading")}</div></div><div id="home-sections"></div><section class="genre-strip" id="genres"><div><p class="section-kicker">FIND YOUR MOOD</p><h2>${t("browseGenres")}</h2></div><div class="genre-list" id="genre-list"></div></section><section class="results-section hidden" id="search-results"><div class="section-heading"><div><p class="section-kicker">${t("searchLabel")}</p><h2 id="search-title">${t("searchResults")}</h2></div></div><div class="results-grid" id="results-grid"></div></section></section>`;
  await loadRow("movie/popular","popular-track");showHomeSections();loadGenres();
}
async function boot(){
  currentLang=getLang();$("#language-select").value=currentLang;applyLanguage(currentLang);
  const p=currentPath();
  if(p.length>=3 && LANGS[p[0]] && ["movie","tv"].includes(p[1])){await renderDetail(p[0],p[1],p[2]);}
  else {await renderHome();}
}
document.addEventListener("click",e=>{
  const left=e.target.closest("[data-scroll]");if(left){const el=$("#"+left.dataset.scroll);if(el)el.scrollBy({left:-el.clientWidth*.8,behavior:"smooth"});}
  const right=e.target.closest("[data-scroll-right]");if(right){const el=$("#"+right.dataset.scrollRight);if(el)el.scrollBy({left:el.clientWidth*.8,behavior:"smooth"});}
  const genre=e.target.closest("[data-genre]");if(genre){searchGenre(Number(genre.dataset.genre),genre.textContent);}
});
async function searchGenre(id,name){
  $("#search-results").classList.remove("hidden");$("#search-title").textContent=name;$("#results-grid").innerHTML=`<p class="loading-card">${t("loading")}</p>`;$("#search-results").scrollIntoView({behavior:"smooth"});
  try{const d=await api("discover/movie",{with_genres:id,sort_by:"popularity.desc",page:1});$("#results-grid").innerHTML=(d.results||[]).map(m=>movieCard(m)).join("")||`<p class="loading-card">${t("noResults")}</p>`;}
  catch(e){$("#results-grid").innerHTML='<p class="loading-card">Genres unavailable. Check TMDB settings.</p>';}
}
$("#search-form").addEventListener("submit",e=>{e.preventDefault();searchMovies($("#search-input").value);});
$("#language-select").addEventListener("change",e=>{const lang=e.target.value;const p=currentPath();if(p.length>=3&&["movie","tv"].includes(p[1]))location.href=`/${lang}/${p[1]}/${p[2]}`;else location.href=`/${lang}`;});
$("#mobile-menu").addEventListener("click",()=>$(".main-nav").classList.toggle("open"));
window.addEventListener("popstate",boot);
boot();
