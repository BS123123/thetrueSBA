/* ============================================================
   0. SUPABASE CONFIG
   Fill these in with your own project's values
   (Project Settings -> API in the Supabase dashboard).
   The site still works with the fallback data below even if
   these are left blank / wrong — it just won't be dynamic.
   ============================================================ */
const SUPABASE_URL = "YOUR_SUPABASE_URL"; // e.g. "https://xxxxx.supabase.co"
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

let db = null;
try {
    if (window.supabase && SUPABASE_URL.startsWith("http")) {
        db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
} catch (err) {
    console.warn("Supabase client not initialized:", err);
}

/* ============================================================
   1. FALLBACK DATA
   Mirrors the original hard-coded content. Used automatically
   whenever Supabase isn't configured, a table is empty, or a
   fetch fails, so the portfolio never breaks.
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
    // milestones grouped by year in display order (newest first)
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
   2. DATA FETCHING (Supabase, with fallback)
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
    // supabase rows use link_url / category directly; derive a display tag
    return rows.map(r => ({ ...r, tag: r.tag || `.${r.category}` }));
}

async function loadMilestones() {
    const rows = await fetchTable("milestones", "year");
    if (!rows) return FALLBACK.milestones;
    // group consecutive rows sharing the same year into one timeline card
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
   3. RENDER FUNCTIONS
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

/* ============================================================
   4. BOOTSTRAP: load data, render, then wire up interactions
   ============================================================ */
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
    setupSwiper();
    setupParallax();
    setupAsciiCanvas();
    setupGalleryFilters();
    setupModal();
    setupTimelineHint();
    setupContactForm();
}
document.addEventListener("DOMContentLoaded", init);

/* --- 0. MOBILE MENU --- */
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

/* --- 1. HERO CURSOR SHADE (lag + fade) --- */
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

/* --- 2. SCROLL OBSERVER --- */
function setupScrollObserver() {
    const scrollObs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("appear"); });
    }, { threshold: 0.1 });
    document.querySelectorAll(".fade-in").forEach(el => scrollObs.observe(el));
}

/* --- 3. SWIPER CONFIG --- */
function setupSwiper() {
    new Swiper(".mySwiper", {
        effect: "coverflow", grabCursor: true, centeredSlides: true,
        slidesPerView: "auto", loop: true,
        coverflowEffect: { rotate: 15, stretch: 0, depth: 150, modifier: 1, slideShadows: false },
        autoplay: { delay: 3500 }
    });
}

/* --- 4. PARALLAX TECH RINGS (desktop only) --- */
function setupParallax() {
    document.addEventListener("mousemove", e => {
        const obj = document.getElementById("parallax-obj");
        if (!obj) return;
        const x = (window.innerWidth - e.pageX * 2) / 60;
        const y = (window.innerHeight - e.pageY * 2) / 60;
        obj.style.transform = `translate(${x}px, ${y}px)`;
    });
}

/* --- 5. LERP CANVAS ENGINE (dot to dynamic binary) --- */
function setupAsciiCanvas() {
    const canvas = document.getElementById("ascii-bg");
    const ctx = canvas.getContext("2d");
    const heroSection = document.getElementById("home");

    let width, height, cols, rows;
    const spacing = 18;

    function initCanvas() {
        if (!heroSection || !canvas) return;
        width = canvas.width = heroSection.offsetWidth;
        height = canvas.height = heroSection.offsetHeight;
        cols = Math.ceil(width / spacing);
        rows = Math.ceil(height / spacing);
    }
    window.addEventListener("resize", initCanvas);
    initCanvas();

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
    }
    renderCanvasLoop();
}

/* --- 6. GALLERY FILTERS --- */
function setupGalleryFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const filterValue = button.getAttribute("data-filter");
            const galleryCards = document.querySelectorAll(".gallery-card");

            galleryCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                card.classList.remove("show");
                card.classList.add("hide");

                setTimeout(() => {
                    if (filterValue === "all" || filterValue === cardCategory) {
                        card.classList.remove("hide");
                        card.classList.add("show");
                    }
                }, 50);
            });
        });
    });
}

/* --- 7. MODAL --- */
function setupModal() {
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".close-btn");
    const gridContainer = document.getElementById("gallery-grid");

    // event delegation so dynamically-added cards still work
    gridContainer.addEventListener("click", e => {
        const card = e.target.closest(".gallery-card");
        if (!card) return;

        document.getElementById("modal-img").src = card.querySelector("img").src;
        document.getElementById("modal-title").innerText = card.querySelector("h3").innerText;
        document.getElementById("modal-desc").innerText = card.querySelector("p").innerText;
        document.getElementById("modal-tag").innerText = card.querySelector(".tag").innerText;

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

    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    window.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("active"); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") modal.classList.remove("active"); });
}

/* --- TIMELINE HINT --- */
function setupTimelineHint() {
    const firstMilestone = document.getElementById("first-milestone");
    if (firstMilestone) {
        firstMilestone.addEventListener("mouseenter", () => {
            firstMilestone.classList.remove("force-open");
        }, { once: true });
    }
}

/* --- CONTACT FORM -> supabase contact_messages --- */
function setupContactForm() {
    const form = document.getElementById("supabase-form");
    const status = document.getElementById("form-status");
    const sendBtn = document.getElementById("send-btn");

    form.addEventListener("submit", async e => {
        e.preventDefault();

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
