const qingyunNavigation = {
  about: {
    label: "关于我们",
    english: "About Qingyun",
    href: "./about.html",
    summary: "从学校定位、师生关系到校园空间，理解青云如何陪伴初中阶段的成长。",
    image: "./assets/images/p02-02.jpg",
    groups: [
      {
        title: "认识青云",
        href: "./about-overview.html",
        copy: "学校定位、使命与价值观",
        links: [
          ["书院简介", "./about-overview.html"],
          ["教育使命", "./mission.html"],
          ["学校价值观", "./values.html"],
        ],
      },
      {
        title: "校园与团队",
        href: "./principal-message.html",
        copy: "校长、教师与学习空间",
        links: [
          ["校长寄语", "./principal-message.html"],
          ["师资团队", "./faculty.html"],
          ["校园设施", "./facilities.html"],
        ],
      },
      {
        title: "学生成长",
        href: "./whole-person.html",
        copy: "全人教育与稳定支持",
        links: [
          ["全人教育", "./whole-person.html"],
          ["学生支持", "./student-support.html"],
          ["家校共育", "./parent-community.html"],
        ],
      },
    ],
  },
  academics: {
    label: "课程设置",
    english: "Academics",
    href: "./curriculum.html",
    summary: "从 G7-G8 学科基础到 AI School、凌云书院与个性化路径，建立连续课程地图。",
    image: "./assets/images/p03-01.jpg",
    groups: [
      {
        title: "青云初中 G7-G8",
        href: "./middle-school.html",
        copy: "学科基础、双语表达与成长证据",
        links: [
          ["课程总览", "./middle-school.html"],
          ["学科课程", "./learning-areas.html"],
          ["双语学习", "./bilingual-learning.html"],
        ],
        topics: [
          ["数学与科学", "./math-science.html"],
          ["语言与人文", "./languages-humanities.html"],
          ["艺术与健康", "./arts-wellbeing.html"],
        ],
      },
      {
        title: "Qingyun AI School",
        href: "./ai-school.html",
        copy: "问题、核验、创作与数字责任",
        links: [
          ["AI School 总览", "./ai-school.html"],
          ["项目制学习", "./project-learning.html"],
          ["STEAM 与赛事", "./steam.html"],
        ],
        topics: [
          ["AI 素养", "./ai-literacy.html"],
          ["数字公民", "./digital-citizenship.html"],
          ["项目实验室", "./project-learning.html"],
        ],
      },
      {
        title: "书院成长路径",
        href: "./lingyun.html",
        copy: "G9X/G10X 与一人一案",
        links: [
          ["凌云书院", "./lingyun.html"],
          ["One of School", "./one-of-school.html"],
          ["导师与规划", "./advisory.html"],
        ],
      },
    ],
  },
  admissions: {
    label: "招生入学",
    english: "Admissions",
    href: "./admissions.html",
    summary: "了解、探校、评估、费用与确认入学，每一步都有清晰而可信的说明。",
    image: "./assets/images/p28-04.jpg",
    groups: [
      {
        title: "了解与申请",
        href: "./admissions-process.html",
        copy: "从第一次了解学校开始",
        links: [
          ["招生流程", "./admissions-process.html"],
          ["预约探校", "./visit.html"],
          ["入学评估", "./assessment.html"],
        ],
      },
      {
        title: "费用与准备",
        href: "./fees.html",
        copy: "费用、支持与开学准备",
        links: [
          ["费用标准", "./fees.html"],
          ["奖学金", "./scholarships.html"],
          ["确认入学", "./enrollment.html"],
        ],
      },
      {
        title: "家长帮助",
        href: "./admissions-faq.html",
        copy: "常见问题与个别咨询",
        links: [
          ["常见问题", "./admissions-faq.html"],
          ["联系招生", "./contact-admissions.html"],
          ["招生总览", "./admissions.html"],
        ],
      },
    ],
  },
  life: {
    label: "校园生活",
    english: "Campus Life",
    href: "./life.html",
    summary: "社团、活动、学生声音与行走课堂，让真实校园成为学生成长发生的地方。",
    image: "./assets/images/p18-01.jpg",
    groups: [
      {
        title: "社团与活动",
        href: "./clubs.html",
        copy: "兴趣、组织与长期投入",
        links: [
          ["社团总览", "./clubs.html"],
          ["学校活动", "./events.html"],
          ["校园日历", "./calendar.html"],
        ],
        topics: [
          ["学术社团", "./academic-clubs.html"],
          ["创意社团", "./creative-clubs.html"],
          ["体育社团", "./sports-clubs.html"],
        ],
      },
      {
        title: "学生体验",
        href: "./student-stories.html",
        copy: "故事、舞台与世界课堂",
        links: [
          ["学生故事", "./student-stories.html"],
          ["艺术与体育", "./arts-sports.html"],
          ["行走课堂", "./world-classroom.html"],
        ],
      },
      {
        title: "社区支持",
        href: "./student-support.html",
        copy: "导师、家庭与校园空间",
        links: [
          ["学生支持", "./student-support.html"],
          ["家校共育", "./parent-community.html"],
          ["校园设施", "./facilities.html"],
        ],
      },
    ],
  },
};

const qingyunSectionFiles = {
  about: [
    "about.html",
    "about-overview.html",
    "mission.html",
    "values.html",
    "principal-message.html",
    "faculty.html",
    "facilities.html",
    "whole-person.html",
    "student-support.html",
    "parent-community.html",
    "teaching-practice.html",
    "faculty-development.html",
  ],
  academics: [
    "curriculum.html",
    "academies.html",
    "middle-school.html",
    "learning-areas.html",
    "math-science.html",
    "languages-humanities.html",
    "arts-wellbeing.html",
    "bilingual-learning.html",
    "ai-school.html",
    "ai-literacy.html",
    "digital-citizenship.html",
    "project-learning.html",
    "steam.html",
    "lingyun.html",
    "one-of-school.html",
    "advisory.html",
    "g9x.html",
    "g10x.html",
    "academic-pathway.html",
  ],
  admissions: [
    "admissions.html",
    "fees.html",
    "admissions-process.html",
    "visit.html",
    "assessment.html",
    "scholarships.html",
    "enrollment.html",
    "admissions-faq.html",
    "contact-admissions.html",
    "fees-inclusions.html",
    "payment-timeline.html",
  ],
  life: [
    "life.html",
    "clubs.html",
    "academic-clubs.html",
    "creative-clubs.html",
    "sports-clubs.html",
    "events.html",
    "calendar.html",
    "student-stories.html",
    "arts-sports.html",
    "world-classroom.html",
  ],
};

const qingyunCurrentFile = window.location.pathname.split("/").pop() || "index.html";
const qingyunCurrentSection =
  Object.entries(qingyunSectionFiles).find(([, files]) => files.includes(qingyunCurrentFile))?.[0] ||
  document.body.dataset.section ||
  "";
const qingyunHeader = document.querySelector(".site-header");
const qingyunDesktopNav = qingyunHeader?.querySelector(".desktop-nav");

function qingyunCloseNav() {
  document.querySelector(".qy-mega")?.classList.remove("is-open");
  document.querySelector(".qy-mega")?.setAttribute("aria-hidden", "true");
  qingyunDesktopNav?.querySelectorAll(".nav-trigger").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.section === qingyunCurrentSection);
    link.setAttribute("aria-expanded", "false");
  });
}

function qingyunRenderMega(sectionKey) {
  const section = qingyunNavigation[sectionKey];
  const mega = document.querySelector(".qy-mega");
  if (!mega || !section) return;

  mega.innerHTML = `
    <div class="qy-mega-inner">
      <div class="qy-mega-intro">
        <p>${section.english}</p>
        <h2>${section.label}</h2>
        <div>${section.summary}</div>
        <a href="${section.href}">进入栏目总览</a>
      </div>
      <div class="qy-mega-groups">
        ${section.groups
          .map(
            (group, groupIndex) => `
              <article class="qy-mega-group${groupIndex === 0 ? " is-current" : ""}" data-group="${groupIndex}">
                <div class="qy-mega-group-heading">
                  <span>0${groupIndex + 1}</span>
                  <a href="${group.href}">${group.title}</a>
                  <p>${group.copy}</p>
                </div>
                <div class="qy-mega-links">
                  ${group.links
                    .map(
                      ([label, href]) =>
                        `<a href="${href}"><strong>${label}</strong><span aria-hidden="true">↗</span></a>`,
                    )
                    .join("")}
                </div>
                ${
                  group.topics?.length
                    ? `<div class="qy-mega-topics">${group.topics
                        .map(([label, href]) => `<a href="${href}">${label}</a>`)
                        .join("")}</div>`
                    : ""
                }
              </article>`,
          )
          .join("")}
      </div>
      <a class="qy-mega-visual" href="${section.groups[0].href}">
        <img src="${section.image}" alt="" />
        <span>${section.english}</span>
        <strong>${section.groups[0].title}</strong>
      </a>
    </div>`;

  const visual = mega.querySelector(".qy-mega-visual");
  mega.querySelectorAll(".qy-mega-group").forEach((groupNode, index) => {
    const group = section.groups[index];
    const activate = () => {
      mega.querySelectorAll(".qy-mega-group").forEach((node) => node.classList.remove("is-current"));
      groupNode.classList.add("is-current");
      if (visual) {
        visual.href = group.href;
        visual.querySelector("strong").textContent = group.title;
      }
    };
    groupNode.addEventListener("mouseenter", activate);
    groupNode.addEventListener("focusin", activate);
  });

  mega.querySelectorAll("a").forEach((link) => link.addEventListener("click", qingyunCloseNav));
}

function qingyunOpenNav(sectionKey) {
  const mega = document.querySelector(".qy-mega");
  if (!mega) return;
  qingyunRenderMega(sectionKey);
  mega.classList.add("is-open");
  mega.setAttribute("aria-hidden", "false");
  qingyunDesktopNav?.querySelectorAll(".nav-trigger").forEach((link) => {
    const active = link.dataset.section === sectionKey;
    link.classList.toggle("is-active", active);
    link.setAttribute("aria-expanded", String(active));
  });
}

function qingyunBuildMobilePanel(panel) {
  panel.innerHTML = `
    <div class="qy-mobile-intro">
      <p>Explore Qingyun</p>
      <strong>从课程到校园生活，找到家庭真正关心的信息。</strong>
    </div>
    <nav class="qy-mobile-nav" aria-label="移动端网站导航">
      ${Object.entries(qingyunNavigation)
        .map(
          ([sectionKey, section]) => `
            <details${sectionKey === qingyunCurrentSection ? " open" : ""}>
              <summary><span>${section.label}</span><small>${section.english}</small></summary>
              <a class="qy-mobile-overview" href="${section.href}">进入栏目总览</a>
              ${section.groups
                .map(
                  (group) => `
                    <div class="qy-mobile-group">
                      <a class="qy-mobile-group-title" href="${group.href}">${group.title}</a>
                      ${group.links.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
                      ${group.topics?.map(([label, href]) => `<a class="is-topic" href="${href}">${label}</a>`).join("") || ""}
                    </div>`,
                )
                .join("")}
            </details>`,
        )
        .join("")}
    </nav>
    <div class="qy-mobile-actions">
      <a href="./visit.html">预约探校</a>
      <a href="./admissions-process.html">申请入学</a>
    </div>`;
}

function qingyunInstallNav() {
  if (!qingyunHeader || !qingyunDesktopNav) return;

  qingyunDesktopNav.innerHTML = Object.entries(qingyunNavigation)
    .map(
      ([sectionKey, section]) =>
        `<a class="nav-trigger${sectionKey === qingyunCurrentSection ? " is-active" : ""}" href="${section.href}" data-section="${sectionKey}" aria-haspopup="true" aria-expanded="false">${section.label}</a>`,
    )
    .join("");

  const oldMega = document.querySelector("#megaMenu, #subpageMega, .qy-mega");
  const mega = oldMega || document.createElement("section");
  mega.id = "qingyunMega";
  mega.className = "qy-mega";
  mega.setAttribute("aria-hidden", "true");
  if (!oldMega) qingyunHeader.after(mega);

  let menuButton = qingyunHeader.querySelector(".menu-button, .subpage-menu-button");
  if (menuButton) {
    const cleanButton = menuButton.cloneNode(true);
    menuButton.replaceWith(cleanButton);
    menuButton = cleanButton;
  } else {
    menuButton = document.createElement("button");
    menuButton.innerHTML = "<span></span><span></span>";
    qingyunHeader.appendChild(menuButton);
  }
  menuButton.className = "menu-button qy-menu-button";
  menuButton.type = "button";
  menuButton.setAttribute("aria-label", "打开网站导航");
  menuButton.setAttribute("aria-expanded", "false");

  const oldPanel = document.querySelector("#mobilePanel, #subpageMobilePanel, .qy-mobile-panel");
  const panel = oldPanel || document.createElement("div");
  panel.id = "qingyunMobilePanel";
  panel.className = "mobile-panel qy-mobile-panel";
  panel.setAttribute("aria-hidden", "true");
  if (!oldPanel) qingyunHeader.after(panel);
  qingyunBuildMobilePanel(panel);

  const closeMobile = () => {
    panel.classList.remove("is-open");
    menuButton.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "打开网站导航");
    document.body.classList.remove("qy-nav-open");
  };

  menuButton.addEventListener("click", () => {
    const opening = !panel.classList.contains("is-open");
    panel.classList.toggle("is-open", opening);
    menuButton.classList.toggle("is-open", opening);
    panel.setAttribute("aria-hidden", String(!opening));
    menuButton.setAttribute("aria-expanded", String(opening));
    menuButton.setAttribute("aria-label", opening ? "关闭网站导航" : "打开网站导航");
    document.body.classList.toggle("qy-nav-open", opening);
  });
  panel.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobile));

  let closeTimer = 0;
  qingyunDesktopNav.querySelectorAll(".nav-trigger").forEach((trigger) => {
    const open = () => {
      window.clearTimeout(closeTimer);
      qingyunOpenNav(trigger.dataset.section);
    };
    trigger.addEventListener("mouseenter", open);
    trigger.addEventListener("focus", open);
  });
  qingyunHeader.addEventListener("mouseleave", () => {
    closeTimer = window.setTimeout(qingyunCloseNav, 180);
  });
  mega.addEventListener("mouseenter", () => window.clearTimeout(closeTimer));
  mega.addEventListener("mouseleave", () => {
    closeTimer = window.setTimeout(qingyunCloseNav, 180);
  });

  document.addEventListener("pointerdown", (event) => {
    if (!qingyunHeader.contains(event.target) && !mega.contains(event.target)) qingyunCloseNav();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      qingyunCloseNav();
      closeMobile();
    }
  });

  qingyunRenderMega(qingyunCurrentSection || "about");
}

qingyunInstallNav();
