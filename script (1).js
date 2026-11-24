/* ============================================================
  init() 同時向 Supabase 數據庫要 4 組資料：showcase、skills、projects、milestones。
   ============================================================ */
   const SUPABASE_URL = "https://haquucdaoaijdnfaqcfq.supabase.co";
   const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcXV1Y2Rhb2FpamRuZmFxY2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyNTIwMDcsImV4cCI6MjA5MTgyODAwN30.-iUHjkOiYiONQEh0QlqHTbsC8EzhFI1Vks4BrdaCtbwE";
   
   let db = null;
   if (!SUPABASE_URL || SUPABASE_URL.includes("YOUR_SUPABASE_URL")) {
       console.error("Supabase: SUPABASE_URL is missing or still a placeholder.");
   } else if (!SUPABASE_ANON_KEY || SUPABASE_ANON_KEY.includes("PASTE_YOUR") || SUPABASE_ANON_KEY.includes("YOUR_SUPABASE_ANON_KEY")) {
       console.error("Supabase: SUPABASE_ANON_KEY is missing or still a placeholder — paste the full 'anon public' key from Project Settings -> API.");
   } else if (!window.supabase) {
       console.error("Supabase: the supabase-js library didn't load (check the <script> tag order in index.html).");
   } else {
       try {
           db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
           console.log("Supabase client initialized.");
       } catch (err) {
           console.error("Supabase client failed to initialize:", err);
       }
   }
   
   /* ============================================================
     如果數據庫失敗或是空的，就用 FALLBACK（後備資料，寫死在代碼內）。
      ============================================================ */
   const FALLBACK = {
       showcase: [
           { title: "01. Metaverse Spatial Design", description: "Constructing futuristic and culturally rich 3D environments in Blender to connect digital communities.", image_url: "https://i.imgur.com/VUfQffC.png" },
           { title: "02. Community Web Platforms", description: "Developing interactive web experiences that bridge the gap between users and foster digital engagement.", image_url: "https://i.imgur.com/1An53Lm.png" },
           { title: "03. Tangible Tech Integration", description: "Creating hands-on IoT and physical projects that bring digital interaction into the real-world space.", image_url: "https://i.imgur.com/P5xgav3.jpeg" },
           { title: "04. Roblox Community Ecosystem", description: "Transforming traditional gameplay into collaborative learning hubs, empowering peers to create and interact within virtual worlds.", image_url: "https://i.imgur.com/SkDc6qQ.png" },
           { title: "05. AI & Decentralized Narratives", description: "Integrating AI tools and Web3 concepts to pioneer new forms of digital archiving and decentralized user interaction.", image_url: "https://i.imgur.com/IsIPKjg.jpeg" }
       ],
       skills: [
           { icon_label: "[ 3D Rendering & Metaverse ]", title: "Digital Space Sculpting", description: "Designing immersive Roblox games and 3D models that serve as interactive hubs for virtual communities.", level: 80 },
           { icon_label: "[ Web Protocols ]", title: "Interactive UI/UX", description: "Building modern, responsive web layouts that enhance user interaction and seamless community connectivity.", level: 75 },
           { icon_label: "[ Architectural Designed ]", title: "Architectural Engineering", description: "Applying spatial design principles not only in the physical world but also in shaping meaningful virtual environments.", level: 60 },
           { icon_label: "[ Lua Engine & Network Sync ]", title: "Multiplayer Hub Architecture", description: "Engineering real-time state synchronization, player physics, and optimized server-client replication loops to host scalable concurrent player populations.", level: 80 },
           { icon_label: "[ ESP32 & Micro:bit ]", title: "Tangible Tech & Peer Support", description: "Engineering interactive hardware systems using microcontrollers. Beyond building my own projects, I actively assist peers in troubleshooting and solving their technical challenges, fostering a collaborative maker community.", level: 68 }
       ],
       projects: [
           { category: "hardware", title: "Nigeria-life", description: "An empathy-driven narrative game designed to highlight social issues in Africa, utilizing digital storytelling to evoke humanistic care within the player base.", image_url: "https://i.imgur.com/Op90gDv.png", link_url: "https://www.roblox.com/games/14179573129/Nigeria-Life", tag: ".GameDesign" },
           { category: "3d", title: "Racing", description: "Designed a highly engaging multiplayer racing game that successfully cultivated an active virtual community with a great amount of concurrent players.", image_url: "https://i.imgur.com/artR3Py.png", link_url: "https://www.roblox.com/games/16950385738/raceing", tag: ".3D" },
           { category: "hardware", title: "SoundHub", description: "Sound Hub is a 3D-printed, ESP32-powered rotary smart device created for a visually impaired grandfather to easily hear daily news.", image_url: "https://i.imgur.com/ZaQyiJT.png", link_url: "", tag: ".Electronics" },
           { category: "web", title: "aCarrotGame", description: "A web-based 3D farming game utilizing AI camera motion tracking, allowing players to physically harvest, sell, and upgrade virtual crops.", image_url: "https://i.imgur.com/by78XVq.png", link_url: "https://brian3dthing.netlify.app/", tag: ".WebsiteGame" },
           { category: "web", title: "創意書院的逃犯Website", description: "An engaging website for the HKSC Open Day, showcasing our best Roblox games, game descriptions, Instagram link, and fun background.", image_url: "https://i.imgur.com/JAR6zH5.png", link_url: "https://rbs-theprisonerofthecreativehk.netlify.app/", tag: ".WebDesign" },
           { category: "3d", title: "Island", description: "A conceptual 3D floating island in Roblox, featuring modern transparent structures and a central lighthouse tower.", image_url: "https://i.imgur.com/TUo4vLh.png", link_url: "https://www.roblox.com/games/132250526394729/flaotingT", tag: ".3D" },
           { category: "web", title: "X-vectors", description: "Build a website for a company anchoring massive, slow-moving enterprises by turning unstructured paperwork into clean logic for standard internal software systems.", image_url: "https://i.imgur.com/490UKwo.png", link_url: "https://x-vectors.com/", tag: ".WebDesign" }
       ],
    
       milestones: [
           { year: 2026, entries: [
               { title: "逆水暢遊", description: "HKSC open day. We got a immersive Website, 3D roblox Games and so much more", image_url: "https://i.imgur.com/JPufmbU.png" }
           ]},
           { year: 2025, entries: [
               { title: "International Youth Geometry Olympiad", description: "Awarded 4th Place. Deepened my mathematical foundation in geometry, which directly informs my logic for complex 3D world-building and architectural rendering.", image_url: "https://i.imgur.com/wHDSr5W.png" }
           ]},
           { year: 2024, entries: [
               { title: "Discovering Algorithmic Joy", description: "Unlocked the beauty of mathematics, realizing it is the core operating system behind game physics and digital space creation.", image_url: "https://i.imgur.com/1XZejXb.jpeg" },
               { title: "Chinese Culture Conservation Metaverse Competition", description: "Won Best Metaverse Technology Award & Merit Award. Reconstructed historical heritage into digital spaces, fostering community interaction with cultural history.", image_url: "https://i.imgur.com/g7K98g9.png" },
               { title: "Hong Kong Game Development Competition", description: "Won 4th Place & Best Game Design Award. Recognized for innovative gameplay loops that enhance multi-player social engagement and community retention.", image_url: "https://i.imgur.com/8AZgQlW.png" }
           ]},
           { year: 2023, entries: [
               { title: "Hong Kong Cultural Heritage Metaverse Competition", description: "Won Merit Award. Explored how virtual public spaces can serve as interactive platforms for community building and identity conservation.", image_url: "https://i.imgur.com/NUnN30Y.png" }
           ]},
           { year: 2020, entries: [
               { title: "Exploring Tangible Computing", description: "Began experimenting with Micro:bit, ESP32, and Raspberry Pi, bridging the physical-digital gap to explore the concept of hybrid interactive spaces.", image_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500" }
           ]},
           { year: 2017, entries: [
               { title: "Hardware Awakening", description: "Assembled my very first custom PC, taking full control of the hardware foundation needed to fuel my journey into full-stack game development.", image_url: "https://i.imgur.com/lwkNBgW.jpeg" }
           ]},
           { year: 2016, entries: [
               { title: "Origami Structure Art", description: "Constructed an entire wall of complex origami, sparking my lifelong fascination with transforming flat geometry into 3D physical structures.", image_url: "https://i.imgur.com/QnPGpBh.jpeg" }
           ]},
           { year: 2015, entries: [
               { title: "The Sandbox Horizon", description: "Entered the world of Roblox. The shift from a passive user to an active observer ignited my obsession with creating custom, shared digital environments.", image_url: "https://i.imgur.com/nmNPqDD.jpeg" }
           ]},
           { year: 2008, entries: [
               { title: "System Initialized", description: "The baseline configuration of a lifelong creator. The deployment of a journey dedicated to arts, technology, and space.", image_url: "https://i.imgur.com/eGzXTlH.png" }
           ]}
       ]
   };
   
   /* ============================================================
      3. async / await / Promise.all
         async function 表示這個函數會「等待」東西，例如等網絡回應。
         await 的意思是「等這件事完成，才做下一行」。
         Promise.all([...]) 是同時發出 4 個請求，一起等，比一個一個等更快。
        
      4. fetchTable()
      意思：從某個表格取全部欄位，按 order_index 由小到大排序。
         try...catch：出錯時不會當機，而是 return null，然後使用後備資料。
         rows || FALLBACK.xxx：左邊有資料就用左邊，沒有（null）就用右邊。    
      ============================================================ */
   async function fetchTable(table, orderCol = "order_index") {
       if (!db) return null;
       try {
           const { data, error } = await db.from(table).select("*").order(orderCol, { ascending: true });
           if (error) throw error;
           if (!data || data.length === 0) return null;
           return data;
       } catch (err) {
           console.warn(`Supabase fetch failed for "${table}", using fallback data.`, err.message);
           return null;
       }
   }
   
   async function loadShowcase() {
       const rows = await fetchTable("showcase_slides");
       return rows || FALLBACK.showcase;
   }
   
   async function loadSkills() {
       const rows = await fetchTable("skills");
       return rows || FALLBACK.skills;
   }
   
   async function loadProjects() {
       const rows = await fetchTable("projects");
       if (!rows) return FALLBACK.projects;
       return rows.map(r => ({ ...r, tag: r.tag || `.${r.category}` }));
   }
   
   async function loadMilestones() {
       const rows = await fetchTable("milestones", "year");
       if (!rows) return FALLBACK.milestones;
       // rows.forEach 逐行檢查，如果上一組的年份和這行一樣，就加入同一組 entries，否則開新的一組。
       //最後 sort((a,b) => b.year - a.year) 令新的年份排在最前面。 
       const grouped = [];
       rows.forEach(r => {
           const last = grouped[grouped.length - 1];
           if (last && last.year === r.year) {
               last.entries.push(r);
           } else {
               grouped.push({ year: r.year, entries: [r] });
           }
       });
       // newest first, matching original layout
       grouped.sort((a, b) => b.year - a.year);
       return grouped;
   }
   
   /* ============================================================
      escapeHtml()
      先建立一個 div，用 textContent 放入文字，再讀取 innerHTML。
      這樣 < 會變成 &lt;，防止有人把惡意代碼（例如 <script>）寫進數據庫後在網頁執行。
      這叫防止 XSS 攻擊。
      ============================================================ */
   function renderShowcase(slides) {
       const wrapper = document.getElementById("swiper-wrapper");
       wrapper.innerHTML = slides.map(s => `
           <div class="swiper-slide">
               <div class="project-card">
                   <img src="${s.image_url}" class="project-img" alt="${escapeHtml(s.title)}">
                   <div class="project-overlay">
                       <h3>${escapeHtml(s.title)}</h3>
                       <p>${escapeHtml(s.description || "")}</p>
                   </div>
               </div>
           </div>
       `).join("");
   }
   
   function renderSkills(skills) {
       const grid = document.getElementById("skills-grid");
       grid.innerHTML = skills.map(s => `
           <div class="skill-card">
               <span class="skill-icon">${escapeHtml(s.icon_label || "")}</span>
               <h3>${escapeHtml(s.title)}</h3>
               <p>${escapeHtml(s.description || "")}</p>
               <div class="skill-progress-bg"><div class="skill-progress-fill" style="--level: ${Number(s.level) || 0}%;"></div></div>
           </div>
       `).join("");
   }
   
   function renderProjects(projects) {
       const grid = document.getElementById("gallery-grid");
       grid.innerHTML = projects.map(p => `
           <div class="gallery-card show" data-category="${escapeHtml(p.category)}" ${p.link_url ? `data-link="${escapeHtml(p.link_url)}"` : ""}>
               <img src="${p.image_url}" alt="${escapeHtml(p.category)}">
               <div class="gallery-info">
                   <h3>${escapeHtml(p.title)}</h3>
                   <p>${escapeHtml(p.description || "")}</p>
                   <span class="tag">${escapeHtml(p.tag || "")}</span>
               </div>
           </div>
       `).join("");
   }
   
   function renderTimeline(groups) {
       const timeline = document.getElementById("timeline");
       timeline.innerHTML = groups.map((g, i) => {
           const side = i % 2 === 0 ? "left" : "right";
           const forceOpen = i === 0 ? "force-open" : "";
           const forceId = i === 0 ? 'id="first-milestone"' : "";
           const detailsHtml = g.entries.map(e => `
               <div class="award-details">
                   ${e.image_url ? `<img src="${e.image_url}" alt="Milestone" class="award-img">` : ""}
                   <h3>${escapeHtml(e.title)}</h3>
                   <p>${escapeHtml(e.description || "")}</p>
               </div>
           `).join("");
   
           return `
               <div class="timeline-item ${side} fade-in">
                   <div class="timeline-dot"></div>
                   <div class="timeline-content ${forceOpen}" ${forceId}>
                       <div class="year">${g.year}</div>
                       ${detailsHtml}
                   </div>
               </div>
           `;
       }).join("");
   }
   
   function escapeHtml(str) {
       const div = document.createElement("div");
       div.textContent = str ?? "";
       return div.innerHTML;
   }
   
  
   let swiperInstance = null;
   
   async function refreshShowcase() {
       renderShowcase(await loadShowcase());
       if (swiperInstance) swiperInstance.destroy(true, true);
       swiperInstance = setupSwiper();
   }
   async function refreshSkills() {
       renderSkills(await loadSkills());
    
   }
   async function refreshProjects() {
       renderProjects(await loadProjects());
       const activeBtn = document.querySelector(".filter-btn.active") || document.querySelector('.filter-btn[data-filter="all"]');
       applyGalleryFilter(activeBtn.getAttribute("data-filter"));
   }
   async function refreshMilestones() {
       renderTimeline(await loadMilestones());
       document.querySelectorAll("#timeline .fade-in").forEach(el => scrollObserver.observe(el));
       setupTimelineHint();
   }
   
   async function init() {
       const [showcase, skills, projects, milestones] = await Promise.all([
           loadShowcase(), loadSkills(), loadProjects(), loadMilestones()
       ]);
   
       renderShowcase(showcase);
       renderSkills(skills);
       renderProjects(projects);
       renderTimeline(milestones);
   
       setupMobileMenu();
       setupHeroCursor();
       setupScrollObserver();
       swiperInstance = setupSwiper();
       setupParallax();
       setupAsciiCanvas();
       setupGalleryFilters();
       setupModal();
       setupTimelineHint();
       setupContactForm();
       setupRealtime();
   }
   document.addEventListener("DOMContentLoaded", init);
   
   /* Realtime（即時更新）
   db.channel(...).on("postgres_changes", ...) 表示：數據庫的表格一有變動，網頁就自動重新載入該部分，不用刷新頁面。*/
  
   function setupRealtime() {
       if (!db) return;
   
       db.channel("portfolio-content")
           .on("postgres_changes", { event: "*", schema: "public", table: "showcase_slides" }, () => refreshShowcase())
           .on("postgres_changes", { event: "*", schema: "public", table: "skills" }, () => refreshSkills())
           .on("postgres_changes", { event: "*", schema: "public", table: "projects" }, () => refreshProjects())
           .on("postgres_changes", { event: "*", schema: "public", table: "milestones" }, () => refreshMilestones())
           .subscribe(status => {
               if (status === "SUBSCRIBED") console.log("Realtime: listening for content changes.");
           });
   }
   
   /* this is mobile version how to work */
   function setupMobileMenu() {
       const menuToggle = document.getElementById("mobile-menu");
       const navLinks = document.getElementById("nav-links");
       const navBackdrop = document.getElementById("nav-backdrop");
   
       function toggleMenu() {
           navLinks.classList.toggle("active");
           menuToggle.classList.toggle("active");
           navBackdrop.classList.toggle("active");
           document.body.classList.toggle("menu-open");
       }
   
       menuToggle.addEventListener("click", toggleMenu);
       navBackdrop.addEventListener("click", toggleMenu);
   
       navLinks.querySelectorAll("a").forEach(link => {
           link.addEventListener("click", () => {
               navLinks.classList.remove("active");
               menuToggle.classList.remove("active");
               navBackdrop.classList.remove("active");
               document.body.classList.remove("menu-open");
           });
       });
   }
   
   /* FUCK this part this is the crazy cricle */
   
   let mouse = { x: 0, y: 0, active: false };
   let smoothedX = 0, smoothedY = 0;
   let currentRadius = 0, targetRadius = 0;
   let currentOpacity = 0, targetOpacity = 0;
   
   function setupHeroCursor() {
       const cursorShade = document.getElementById("cursor-shade");
       const heroSection = document.getElementById("home");
   
       function trackPointer(e) {
           const rect = heroSection.getBoundingClientRect();
           mouse.x = e.clientX - rect.left;
           mouse.y = e.clientY - rect.top;
           mouse.active = true;
           targetRadius = 160;
           targetOpacity = 1;
       }
   
       heroSection.addEventListener("mousemove", trackPointer);
       heroSection.addEventListener("touchmove", e => {
           if (e.touches.length > 0) trackPointer(e.touches[0]);
       }, { passive: true });
   
       function pointerLeave() {
           mouse.active = false;
           targetRadius = 0;
           targetOpacity = 0;
       }
       heroSection.addEventListener("mouseleave", pointerLeave);
       heroSection.addEventListener("touchend", pointerLeave);
   
       window.__cursorShade = cursorShade;
   }
   

   /* Scroll Observer（捲動出現效果）
    IntersectionObserver 會監察元素有沒有進入畫面，threshold: 0.1 表示出現 10% 就觸發。
    觸發後加上 appear class，CSS 就播放淡入動畫。技能進度條也是靠 .appear 才會填滿。*/
   let scrollObserver = null;
   function setupScrollObserver() {
       scrollObserver = new IntersectionObserver(entries => {
           entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("appear"); });
       }, { threshold: 0.1 });
       document.querySelectorAll(".fade-in").forEach(el => scrollObserver.observe(el));
   }


    /* 使用外部函式庫 Swiper。
    設定：coverflow（立體傾斜效果）
    centeredSlides（中間的是主角）
    loop（無限循環）
    autoplay（3.5 秒自動切換）
    grabCursor（手形游標）。 */

   function setupSwiper() {
       return new Swiper(".mySwiper", {
           effect: "coverflow", grabCursor: true, centeredSlides: true,
           slidesPerView: "auto", loop: true,
           coverflowEffect: { rotate: 15, stretch: 0, depth: 150, modifier: 1, slideShadows: false },
           autoplay: { delay: 3500 }
       });
   }

   
   /* Parallax（視差）
x = (window.innerWidth - e.pageX * 2) / 60
滑鼠在畫面正中間時結果是 0，滑鼠向右，圓環就向左移（方向相反），除以 60 令移動幅度很小。這造成「有深度」的感覺。
手機上這個元素被 CSS 隱藏（display:none）。*/

   function setupParallax() {
       document.addEventListener("mousemove", e => {
           const obj = document.getElementById("parallax-obj");
           if (!obj) return;
           const x = (window.innerWidth - e.pageX * 2) / 60;
           const y = (window.innerHeight - e.pageY * 2) / 60;
           obj.style.transform = `translate(${x}px, ${y}px)`;
       });
   }
   

   /*ASCII Canvas 背景
<canvas> 是畫布，JavaScript 在上面畫字。
 */
   function setupAsciiCanvas() {
       const canvas = document.getElementById("ascii-bg");
       const ctx = canvas.getContext("2d");
       const heroSection = document.getElementById("home");
   
       let width, height, cols, rows;
       const spacing = 18;  //用兩層迴圈（行 rows、列 cols）每隔 18px 放一個字符。//
   
       function initCanvas() {
           if (!heroSection || !canvas) return;
           width = canvas.width = heroSection.offsetWidth;
           height = canvas.height = heroSection.offsetHeight;
           cols = Math.ceil(width / spacing);  //用 Math.ceil 算每個點和滑鼠的距離：在圓形範圍內畫隨機的 1 或 0，範圍外畫細小的 .。
           rows = Math.ceil(height / spacing);
       }
       window.addEventListener("resize", initCanvas); //window resize 時重新計算大小。//
       initCanvas();



       
   /* 滑鼠追蹤效果（Cursor shade）和 Lerp（最難，老師有特別提到）
mousemove 事件取得滑鼠位置，但不是直接用，而是用 Lerp（線性插值）：

smoothedX += (mouse.x - smoothedX) * 0.05

意思：每一幀只移動「距離的 5%」，所以效果有「慢慢跟上」的延遲感，看起來很順滑。


*/
       function renderCanvasLoop() {
           if (mouse.active) {
               smoothedX += (mouse.x - smoothedX) * 0.05;
               smoothedY += (mouse.y - smoothedY) * 0.05;
           } else {
               smoothedX += (mouse.x - smoothedX) * 0.02;
               smoothedY += (mouse.y - smoothedY) * 0.02;
           }
   
           currentRadius += (targetRadius - currentRadius) * 0.03;
           currentOpacity += (targetOpacity - currentOpacity) * 0.03;
   
           if (window.__cursorShade) {
               window.__cursorShade.style.opacity = currentOpacity.toFixed(3);
               if (currentRadius > 1) {
                   window.__cursorShade.style.background = `radial-gradient(circle at ${smoothedX}px ${smoothedY}px, rgba(9, 18, 16, 0.95) 0%, transparent ${currentRadius}px)`;
               }
           }
   
           ctx.clearRect(0, 0, width, height);
           ctx.font = '10px "Space Mono", monospace';
           ctx.textAlign = "center";
           ctx.textBaseline = "middle";
   
           for (let r = 0; r < rows; r++) {
               for (let c = 0; c < cols; c++) {
                   const cx = c * spacing;
                   const cy = r * spacing;
                   const dist = Math.hypot(cx - smoothedX, cy - smoothedY);
   
                   if (dist < currentRadius) {
                       ctx.fillStyle = `rgba(43, 217, 153, ${0.45 * currentOpacity})`;
                       const binaryChar = Math.random() > 0.5 ? "1" : "0";
                       ctx.fillText(binaryChar, cx, cy);
                   } else {
                       ctx.fillStyle = "rgba(43, 217, 153, 0.08)";
                       ctx.fillText(".", cx, cy);
                   }
               }
           }
           requestAnimationFrame(renderCanvasLoop);  

           //currentRadius、currentOpacity 也用同樣方法，所以圓形範圍會慢慢變大和淡入淡出。
           //requestAnimationFrame 是瀏覽器提供的動畫循環，大約每秒 60 次，比 setInterval 更適合做動畫。
       }
       renderCanvasLoop();
   }
   

   /* this is the many cards part ( i mean the project part bro you dumb? ) */ 

   function applyGalleryFilter(filterValue) {
       const galleryCards = document.querySelectorAll(".gallery-card");
       galleryCards.forEach(card => {
           const cardCategory = card.getAttribute("data-category");
           card.classList.remove("show");
           card.classList.add("hide");
   
           /* 每張卡有 data-category。
            filterValue === "all" 表示顯示全部。 */
           setTimeout(() => {
               if (filterValue === "all" || filterValue === cardCategory) {
                   card.classList.remove("hide");
                   card.classList.add("show");
               }
           }, 50);  // 點擊按鈕後，先全部加 hide，50 毫秒後把符合的改成 show，CSS 的 popIn 動畫就會播放。//
       });
   }
   
   function setupGalleryFilters() {
       const filterButtons = document.querySelectorAll(".filter-btn");
       filterButtons.forEach(button => {
           button.addEventListener("click", () => {
               filterButtons.forEach(btn => btn.classList.remove("active"));
               button.classList.add("active");
               applyGalleryFilter(button.getAttribute("data-filter"));
           });
       });
   }
   
 


   function setupModal() {
       const modal = document.querySelector(".modal");
       const closeBtn = document.querySelector(".close-btn");
       const gridContainer = document.getElementById("gallery-grid");
   
       // Event delegation（事件委派）：
       //不是替每張卡加監聽器，而是只在外層 gallery-grid 加一個
       //再用 e.target.closest(".gallery-card") 找出被點的卡。

       gridContainer.addEventListener("click", e => {
           const card = e.target.closest(".gallery-card");
           if (!card) return;
   
           document.getElementById("modal-img").src = card.querySelector("img").src;
           document.getElementById("modal-title").innerText = card.querySelector("h3").innerText;
           document.getElementById("modal-desc").innerText = card.querySelector("p").innerText;
           document.getElementById("modal-tag").innerText = card.querySelector(".tag").innerText;
   
           //沒有連結（data-link 空）時，按鈕會隱藏。//
           const projectLink = card.getAttribute("data-link");  
           const modalLinkBtn = document.getElementById("modal-link");
   
           if (modalLinkBtn) {
               if (projectLink) {
                   modalLinkBtn.href = projectLink;
                   modalLinkBtn.style.display = "inline-block";
               } else {
                   modalLinkBtn.style.display = "none";
               }
           }
   
           modal.classList.add("active");
       });
       //關閉方式有三種：按 ×、按背景、按 Esc 鍵。//
       closeBtn.addEventListener("click", () => modal.classList.remove("active"));
       window.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("active"); });
       document.addEventListener("keydown", e => { if (e.key === "Escape") modal.classList.remove("active"); });
   }
   
 /* this is timeline park */
   function setupTimelineHint() {
       const firstMilestone = document.getElementById("first-milestone");
       if (firstMilestone) {
           firstMilestone.addEventListener("mouseenter", () => {
               firstMilestone.classList.remove("force-open");
               //第一個年份卡預設展開（force-open）
               //提示使用者「可以展開」。 
           }, { once: true }); //滑鼠移上去一次後（{once:true}）就移除這個狀態,交給 CSS :hover 處理。
       }
   }
   
   /* */
   function setupContactForm() {
       const form = document.getElementById("supabase-form");
       const status = document.getElementById("form-status");
       const sendBtn = document.getElementById("send-btn");
   
       form.addEventListener("submit", async e => {
           e.preventDefault(); //e.preventDefault() 阻止表單預設的重新整理。
   

           //先 trim() 去掉空白，再把按鈕設為 disabled 防止重複提交。 //
           const name = document.getElementById("form-name").value.trim();
           const email = document.getElementById("form-email").value.trim();
           const message = document.getElementById("form-message").value.trim();
   
           if (!name || !email || !message) return;
  
           sendBtn.disabled = true;
           status.textContent = "Transmitting...";
           status.className = "form-status";
   
           if (!db) {
               status.textContent = "Backend not connected yet — add your Supabase URL/key in script.js.";
               status.className = "form-status error";
               sendBtn.disabled = false;
               return;
           }


    //成功時用 insert 寫入 Supabase 的 contact_messages 表。
   //try / catch / finally：成功、失敗、最後都會執行（finally 重新啟用按鈕）
           try {
               const { error } = await db.from("contact_messages").insert([{ name, email, message }]);
               if (error) throw error;
               status.textContent = "Message sent. Thanks for reaching out!";
               status.className = "form-status success";
               form.reset();
           } catch (err) {
               console.error(err);
               status.textContent = "Something went wrong sending your message. Please try again.";
               status.className = "form-status error";
           } finally {
               sendBtn.disabled = false;
           }
       });
   }