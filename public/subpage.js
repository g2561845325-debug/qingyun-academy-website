const configuredImages = window.QINGYUN_MEDIA?.images || {};
const configuredImage = (key, fallback) => configuredImages[key]?.src || fallback;
const configuredAlt = (key, fallback) => configuredImages[key]?.alt || fallback;

const globalSections = {
  about: {
    eyebrow: "About Qingyun",
    title: "关于我们",
    copy: "从书院定位、校园空间到教师与全人教育，理解青云如何陪伴初中阶段的成长。",
    page: "./about.html",
    image: configuredImage("about.hero", "./assets/images/p02-02.jpg"),
    imageAlt: configuredAlt("about.hero", "青云书院校园与学生"),
    links: [
      ["书院简介", "初中部、凌云书院与 One of School", "./about.html#overview"],
      ["校园设施", "学习、项目、运动与艺术空间", "./about.html#facilities"],
      ["师资团队", "教师构成、课堂方式与导师支持", "./faculty.html"],
      ["全人教育", "学术、品格、表达与身心发展", "./about.html#whole-person"],
    ],
  },
  curriculum: {
    eyebrow: "Academics",
    title: "课程设置",
    copy: "从 G7-G8 学习基础与 AI School，到凌云书院、个性化路径与 STEAM，形成连续而清晰的课程地图。",
    page: "./curriculum.html",
    image: configuredImage("curriculum.hero", "./assets/images/p03-01.jpg"),
    imageAlt: configuredAlt("curriculum.hero", "青云书院项目学习课堂"),
    links: [
      ["青云书院初中部", "G7-G8 双语学术与导师支持", "./curriculum.html#sipc-middle"],
      ["AI School", "AI 素养、独立判断与真实项目", "./curriculum.html#ai-school"],
      ["凌云书院", "G9X / G10X 国际课程衔接", "./curriculum.html#lingyun"],
      ["个性化路径", "One of School 一人一案", "./curriculum.html#qingyun"],
      ["STEAM", "科学探究、工程项目与作品展示", "./curriculum.html#stem"],
    ],
  },
  admissions: {
    eyebrow: "Admissions",
    title: "招生入学",
    copy: "从第一次到校，到评估、费用与确认入学，每一步都应当清晰、可信、便于家庭行动。",
    page: "./admissions.html",
    image: configuredImage("admissions.hero", "./assets/images/p28-04.jpg"),
    imageAlt: configuredAlt("admissions.hero", "青云书院预约探校"),
    links: [
      ["预约探校", "开放日、校园参观与咨询预约", "./admissions.html#visit"],
      ["入学评估", "MAP 机考与全英文面试", "./admissions.html#assessment"],
      ["费用标准", "学费、考试费与其他费用说明", "./fees.html"],
      ["常见问题", "年级、评估、反馈与探校安排", "./admissions.html#faq"],
    ],
  },
  life: {
    eyebrow: "Campus Life",
    title: "校园生活",
    copy: "社团、主题活动、行走课堂与学生舞台，让校园生活成为成长真正发生的地方。",
    page: "./life.html",
    image: configuredImage("life.hero", "./assets/images/p18-01.jpg"),
    imageAlt: configuredAlt("life.hero", "青云书院学生校园生活"),
    links: [
      ["多元社团 Club", "50+ 学术、艺术、体育与科创社团", "./life.html#clubs"],
      ["月度主题日历", "项目展、学生论坛与校园活动", "./life.html#monthly"],
      ["行走的世界课堂", "研学、城市学习与跨文化体验", "./life.html#world-classroom"],
      ["艺术与体育舞台", "表达、体能、团队与自信", "./life.html#stage"],
    ],
  },
};

const pageKeyByFile = {
  "about.html": "about",
  "faculty.html": "about",
  "curriculum.html": "curriculum",
  "academies.html": "curriculum",
  "admissions.html": "admissions",
  "fees.html": "admissions",
  "life.html": "life",
};

const currentFile = window.location.pathname.split("/").pop() || "index.html";
const currentPageKey = pageKeyByFile[currentFile] || "about";
const subpageHeader = document.querySelector(".subpage-header");
const desktopTriggers = [...document.querySelectorAll(".subpage-header .nav-trigger")];
let menuCloseTimer = 0;
let activeMenuKey = "";

function syncHeaderOffset() {
  if (!subpageHeader) return;
  document.documentElement.style.setProperty("--subpage-header-height", `${subpageHeader.offsetHeight}px`);
}

function keyFromHref(href = "") {
  const file = href.split("#")[0].split("/").pop();
  return pageKeyByFile[file] || "";
}

function renderGlobalNavigation() {
  if (!subpageHeader) return;

  desktopTriggers.forEach((trigger) => {
    const key = keyFromHref(trigger.getAttribute("href"));
    trigger.dataset.menu = key;
    trigger.setAttribute("aria-haspopup", "true");
    trigger.setAttribute("aria-expanded", "false");
  });

  const megaMenu = document.createElement("section");
  megaMenu.className = "subpage-mega";
  megaMenu.id = "subpageMega";
  megaMenu.setAttribute("aria-hidden", "true");
  subpageHeader.after(megaMenu);

  const mobileButton = document.createElement("button");
  mobileButton.className = "subpage-menu-button";
  mobileButton.type = "button";
  mobileButton.setAttribute("aria-label", "打开网站导航");
  mobileButton.setAttribute("aria-expanded", "false");
  mobileButton.setAttribute("aria-controls", "subpageMobilePanel");
  mobileButton.innerHTML = "<span></span><span></span>";
  subpageHeader.appendChild(mobileButton);

  const mobilePanel = document.createElement("aside");
  mobilePanel.className = "subpage-mobile-panel";
  mobilePanel.id = "subpageMobilePanel";
  mobilePanel.setAttribute("aria-hidden", "true");
  mobilePanel.innerHTML = `
    <div class="subpage-mobile-intro">
      <span>Explore Qingyun</span>
      <strong>从课程、校园到招生，快速找到家庭关心的信息。</strong>
    </div>
    <nav aria-label="移动端网站导航">
      ${Object.entries(globalSections)
        .map(
          ([key, section]) => `
            <details${key === currentPageKey ? " open" : ""}>
              <summary>
                <span>${section.eyebrow}</span>
                <strong>${section.title}</strong>
              </summary>
              <div>
                <a class="mobile-section-home" href="${section.page}">进入${section.title}</a>
                ${section.links
                  .map(([title, desc, href]) => `<a href="${href}"><strong>${title}</strong><small>${desc}</small></a>`)
                  .join("")}
              </div>
            </details>
          `
        )
        .join("")}
    </nav>
    <div class="subpage-mobile-actions">
      <a href="./admissions.html#visit">预约探校</a>
      <a class="is-primary" href="./index.html#apply">申请入学</a>
    </div>
  `;
  megaMenu.after(mobilePanel);
  syncHeaderOffset();

  function renderMega(key) {
    const section = globalSections[key];
    if (!section) return;
    activeMenuKey = key;
    megaMenu.innerHTML = `
      <div class="subpage-mega-inner">
        <figure>
          <img src="${section.image}" alt="${section.imageAlt}" />
          <figcaption>${section.eyebrow}</figcaption>
        </figure>
        <div class="subpage-mega-lead">
          <span>${section.eyebrow}</span>
          <h2>${section.title}</h2>
          <p>${section.copy}</p>
          <a href="${section.page}">进入栏目</a>
        </div>
        <nav class="subpage-mega-links" aria-label="${section.title}二级导航">
          ${section.links
            .map(
              ([title, desc, href], index) => `
                <a href="${href}">
                  <span>0${index + 1}</span>
                  <strong>${title}</strong>
                  <small>${desc}</small>
                </a>
              `
            )
            .join("")}
        </nav>
      </div>
    `;
  }

  function openMega(key) {
    if (!globalSections[key] || window.innerWidth <= 980) return;
    window.clearTimeout(menuCloseTimer);
    if (activeMenuKey !== key) renderMega(key);
    megaMenu.classList.add("is-open");
    megaMenu.setAttribute("aria-hidden", "false");
    subpageHeader.classList.add("has-open-menu");
    desktopTriggers.forEach((trigger) => {
      const isOpen = trigger.dataset.menu === key;
      trigger.setAttribute("aria-expanded", String(isOpen));
      trigger.classList.toggle("is-menu-open", isOpen);
    });
  }

  function closeMega() {
    megaMenu.classList.remove("is-open");
    megaMenu.setAttribute("aria-hidden", "true");
    subpageHeader.classList.remove("has-open-menu");
    desktopTriggers.forEach((trigger) => {
      trigger.setAttribute("aria-expanded", "false");
      trigger.classList.remove("is-menu-open");
    });
  }

  function scheduleMegaClose() {
    window.clearTimeout(menuCloseTimer);
    menuCloseTimer = window.setTimeout(closeMega, 150);
  }

  desktopTriggers.forEach((trigger) => {
    trigger.addEventListener("mouseenter", () => openMega(trigger.dataset.menu));
    trigger.addEventListener("focus", () => openMega(trigger.dataset.menu));
  });
  subpageHeader.addEventListener("mouseleave", scheduleMegaClose);
  megaMenu.addEventListener("mouseenter", () => window.clearTimeout(menuCloseTimer));
  megaMenu.addEventListener("mouseleave", scheduleMegaClose);
  megaMenu.addEventListener("focusout", (event) => {
    if (!megaMenu.contains(event.relatedTarget) && !subpageHeader.contains(event.relatedTarget)) scheduleMegaClose();
  });

  function closeMobile(restoreButtonFocus = false) {
    const wasOpen = mobilePanel.classList.contains("is-open");
    mobileButton.classList.remove("is-open");
    mobileButton.setAttribute("aria-expanded", "false");
    mobileButton.setAttribute("aria-label", "打开网站导航");
    mobilePanel.classList.remove("is-open");
    mobilePanel.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-subpage-menu-open");
    if (restoreButtonFocus && wasOpen) mobileButton.focus();
  }

  mobileButton.addEventListener("click", () => {
    const willOpen = !mobilePanel.classList.contains("is-open");
    mobileButton.classList.toggle("is-open", willOpen);
    mobileButton.setAttribute("aria-expanded", String(willOpen));
    mobileButton.setAttribute("aria-label", willOpen ? "关闭网站导航" : "打开网站导航");
    mobilePanel.classList.toggle("is-open", willOpen);
    mobilePanel.setAttribute("aria-hidden", String(!willOpen));
    document.body.classList.toggle("is-subpage-menu-open", willOpen);
    if (willOpen) mobilePanel.querySelector("summary")?.focus();
  });

  mobilePanel.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => closeMobile()));
  mobilePanel.querySelectorAll("details").forEach((details) => {
    details.addEventListener("toggle", () => {
      if (!details.open) return;
      mobilePanel.querySelectorAll("details").forEach((item) => {
        if (item !== details) item.open = false;
      });
    });
  });

  document.addEventListener("pointerdown", (event) => {
    if (!megaMenu.contains(event.target) && !subpageHeader.contains(event.target)) closeMega();
    if (
      mobilePanel.classList.contains("is-open") &&
      !mobilePanel.contains(event.target) &&
      !mobileButton.contains(event.target)
    ) {
      closeMobile();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeMega();
    closeMobile(true);
  });
  window.addEventListener("scroll", closeMega, { passive: true });

  renderMega(currentPageKey);
}

renderGlobalNavigation();
window.addEventListener("resize", syncHeaderOffset);
window.addEventListener("load", syncHeaderOffset);

const tertiaryLinks = [...document.querySelectorAll(".tertiary-nav a[href^='#']")];
const tertiaryTargets = tertiaryLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
let manualSelectionUntil = 0;
const tertiaryNav = document.querySelector(".tertiary-nav");
const tertiaryPlaceholder = tertiaryNav ? document.createElement("div") : null;
let tertiaryStart = 0;

if (tertiaryNav && tertiaryPlaceholder) {
  tertiaryPlaceholder.className = "tertiary-nav-placeholder";
  tertiaryNav.before(tertiaryPlaceholder);
}

function syncPinnedNavigation() {
  if (!tertiaryNav || !tertiaryPlaceholder) return;
  if (!tertiaryStart || !tertiaryNav.classList.contains("is-pinned")) {
    tertiaryStart = tertiaryPlaceholder.getBoundingClientRect().top + window.scrollY;
  }
  const headerHeight = subpageHeader?.getBoundingClientRect().height || 0;
  const shouldPin = window.scrollY + headerHeight >= tertiaryStart;
  tertiaryPlaceholder.style.setProperty("--tertiary-height", `${tertiaryNav.offsetHeight}px`);
  tertiaryNav.classList.toggle("is-pinned", shouldPin);
  tertiaryPlaceholder.classList.toggle("is-active", shouldPin);
}

function markCurrentSection(id) {
  tertiaryLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-current", isCurrent);
    if (isCurrent) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

function alignHashTarget() {
  if (!window.location.hash) {
    if (tertiaryTargets[0]) markCurrentSection(tertiaryTargets[0].id);
    return;
  }

  const id = decodeURIComponent(window.location.hash.slice(1));
  const target = document.getElementById(id);
  if (!target) return;
  const headerHeight = subpageHeader?.getBoundingClientRect().height || 0;
  const navHeight = tertiaryNav?.getBoundingClientRect().height || 0;
  const targetTop =
    target.getBoundingClientRect().top + window.scrollY - headerHeight - Math.min(navHeight, 110) - 20;
  window.scrollTo({ top: Math.max(0, targetTop), behavior: "auto" });
  manualSelectionUntil = Date.now() + 700;
  markCurrentSection(id);
}

tertiaryLinks.forEach((link) => {
  link.addEventListener("click", () => {
    manualSelectionUntil = Date.now() + 700;
    markCurrentSection(link.getAttribute("href").slice(1));
  });
});

if ("IntersectionObserver" in window && tertiaryTargets.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      if (Date.now() < manualSelectionUntil) return;
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) markCurrentSection(visible.target.id);
    },
    { rootMargin: "-22% 0px -56%", threshold: [0.05, 0.25, 0.6] }
  );
  tertiaryTargets.forEach((target) => sectionObserver.observe(target));
}

window.addEventListener("hashchange", () => window.setTimeout(alignHashTarget, 20));
window.addEventListener("load", () => {
  syncPinnedNavigation();
  alignHashTarget();
  window.setTimeout(() => {
    syncPinnedNavigation();
    alignHashTarget();
  }, 180);
});
window.addEventListener("scroll", syncPinnedNavigation, { passive: true });
window.addEventListener("resize", () => {
  tertiaryStart = 0;
  syncPinnedNavigation();
});
