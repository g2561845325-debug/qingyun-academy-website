const state = {
  lang: "zh",
  activeMenu: "programmes",
  activeCourse: "academic",
  activeSlide: 0,
};

const schoolMedia = window.QINGYUN_MEDIA || {};
const configuredHeroSlides = schoolMedia.heroSlides || [];

const heroSlides = [
  {
    image: "./assets/images/p01-01.jpg",
    eyebrow: {
      zh: "Qingyun AI School · Shenzhen",
      en: "Qingyun AI School · Shenzhen",
    },
    title: {
      zh: "在 AI 时代，学会提出更好的问题。",
      en: "In the age of AI, learn to ask better questions.",
    },
    copy: {
      zh: "让技术成为拓展思考的工具，让判断力、创造力与责任感始终属于学生自己。",
      en: "Technology extends thinking. Judgement, creativity and responsibility remain deeply human.",
    },
    cta: { zh: "探索 AI School", en: "Explore AI School" },
    href: "./curriculum.html#ai-school",
  },
  {
    image: "./assets/images/p03-01.jpg",
    eyebrow: { zh: "Curriculum and Inquiry", en: "Curriculum and Inquiry" },
    title: { zh: "把问题变成作品，把作品带向真实世界。", en: "Turn questions into work for the real world." },
    copy: {
      zh: "在阅读、实验、代码、项目与公开表达中，让每一次学习都有过程，也有证据。",
      en: "Reading, experiments, code, projects and public voice make both process and progress visible.",
    },
    cta: { zh: "查看课程体系", en: "View Curriculum" },
    href: "./curriculum.html",
  },
  {
    image: "./assets/images/p18-01.jpg",
    eyebrow: { zh: "Student Life", en: "Student Life" },
    title: { zh: "真实校园生活", en: "A Real Campus Life" },
    copy: {
      zh: "社团、艺术、体育、学生论坛和项目展，让学生在真实场景中练习表达、合作与领导力。",
      en: "Clubs, arts, sports, forums and showcases help students practise voice, collaboration and leadership.",
    },
    cta: { zh: "探索校园生活", en: "Explore Campus Life" },
    href: "./life.html",
  },
  {
    image: "./assets/images/p28-04.jpg",
    eyebrow: { zh: "Admissions 2026", en: "Admissions 2026" },
    title: { zh: "申请入学开放中", en: "Admissions Now Open" },
    copy: {
      zh: "预约开放日，与招生团队一起了解青云书院初中部、凌云书院与 One of School 个性化路径。",
      en: "Book a visit and explore Qingyun Academy Middle School, Lingyun Academy and Qingyun One of School with our admissions team.",
    },
    cta: { zh: "预约开放日", en: "Book a Visit" },
    href: "./admissions.html",
  },
].map((slide, index) => ({
  ...slide,
  image: configuredHeroSlides[index]?.src || slide.image,
  imagePosition: configuredHeroSlides[index]?.position || "center center",
}));

const menuData = {
  zh: {
    programmes: {
      eyebrow: "Qingyun Pathways",
      title: "项目体系",
      copy: "以青云书院初中部为基础，连接凌云书院与 One of School 个性化路径，形成更清晰的连续成长路径。",
      items: [
        {
          title: "青云书院初中部",
          desc: "双语学术基础、项目学习、导师制与学生发展支持。",
          previewTitle: "G7-G8 是能力形成的关键期",
          previewCopy: "青云书院初中部强调双语学术、概念理解、项目证据、导师支持和真实校园生活。",
          links: ["课程内容", "学生支持", "申请入学"],
        },
        {
          title: "凌云书院",
          desc: "G9X / G10X 进阶衔接项目。",
          previewTitle: "G9X 与 G10X",
          previewCopy: "为国际高中阶段做更高强度的学术、语言、竞赛和升学准备。",
          links: ["G9X", "G10X", "升学路径"],
        },
        {
          title: "One of School 个性化路径",
          desc: "One of School 个性化成长路径。",
          previewTitle: "一个学生，一套成长方案",
          previewCopy: "通过导师、项目、资源组合和个性化学习计划，让学生逐步建立自己的优势方向。",
          links: ["个人学校", "导师计划", "学生作品"],
        },
      ],
    },
    middle: {
      eyebrow: "Middle School",
      title: "青云书院初中部",
      copy: "从语言、学术、活动与品格四个维度，搭建能够承接未来国际课程的初中教育体验。",
      items: [
        {
          title: "核心课程",
          desc: "中英双语、人文、数学、科学、艺术与体育。",
          previewTitle: "扎实，但不把学习做窄",
          previewCopy: "课程强调问题意识、阅读深度、概念迁移和跨学科表达，让学生知道知识如何被使用。",
          links: ["课程介绍", "学术标准", "学习成果"],
        },
        {
          title: "师资介绍",
          desc: "双语教师、外教与导师团队共同支持。",
          previewTitle: "教师是学校气质的核心",
          previewCopy: "学科教师、国际课程教师与导师共同备课、观察和反馈，把专业支持落实到学生每天的学习中。",
          links: ["教师团队", "导师制度", "课堂观察"],
        },
        {
          title: "学生发展",
          desc: "社团、活动、公益、竞赛与领导力。",
          previewTitle: "让成长有真实证据",
          previewCopy: "学生评价、照片、项目成果和活动时间线，会比口号更直接地呈现学校气质。",
          links: ["社团活动", "学校活动", "学生评价"],
        },
      ],
    },
    academies: {
      eyebrow: "Academies",
      title: "凌云书院与青云书院",
      copy: "在初中部之外，为不同年龄与目标的学生提供更聚焦的成长路径。",
      items: [
        {
          title: "凌云书院 G9X",
          desc: "面向国际高中衔接的学术强化。",
          previewTitle: "G9X",
          previewCopy: "强化英语学术写作、数学科学、项目研究与国际课程学习习惯。",
          links: ["课程表", "入读要求", "学生成果"],
        },
        {
          title: "凌云书院 G10X",
          desc: "更接近国际高中标准的进阶项目。",
          previewTitle: "G10X",
          previewCopy: "为高阶课程、竞赛方向、作品集和升学准备建立更清晰的节奏。",
          links: ["课程方向", "竞赛支持", "升学规划"],
        },
        {
          title: "青云书院",
          desc: "One of School 个性化学习。",
          previewTitle: "青云书院",
          previewCopy: "把个人兴趣、学术优势、导师资源和长期目标放在同一张成长地图中。",
          links: ["个性化方案", "导师资源", "项目案例"],
        },
      ],
    },
    community: {
      eyebrow: "Community",
      title: "校园故事",
      copy: "课堂、社团、项目与同伴关系，共同组成青云书院真实而充实的校园日常。",
      items: [
        {
          title: "学生评价",
          desc: "来自学生视角的学习体验。",
          previewTitle: "从学生的声音理解学校",
          previewCopy: "学生从自己的视角讲述课程、项目和导师支持，家长能更直接地理解校园里的成长变化。",
          links: ["学生访谈", "成长故事", "毕业去向"],
        },
        {
          title: "社团活动",
          desc: "运动、艺术、辩论、科技与公益。",
          previewTitle: "兴趣在社群中持续生长",
          previewCopy: "用活动照片、视频、时间线和学生作品，把国际化氛围展示出来。",
          links: ["社团列表", "活动日历", "作品展示"],
        },
        {
          title: "视频看校",
          desc: "用视频建立第一印象。",
          previewTitle: "主页视频入口",
          previewCopy: "通过校园影片、课堂片段与开放日回放，家庭可以更快感受青云书院的学习氛围。",
          links: ["校园视频", "开放日", "预约参观"],
        },
      ],
    },
    admissions: {
      eyebrow: "Admissions",
      title: "申请入学",
      copy: "从咨询、探校到评估与入学，每一步都提供清晰的信息与招生团队支持。",
      items: [
        {
          title: "申请流程",
          desc: "咨询、评估、面谈、录取与入学准备。",
          previewTitle: "清晰流程降低犹豫",
          previewCopy: "家长可以从咨询、探校、评估到录取逐步了解流程，清楚知道每一步需要准备什么。",
          links: ["立即申请", "预约看校", "招生咨询"],
        },
        {
          title: "费用标准",
          desc: "学费、餐费、校服、活动与其他费用说明。",
          previewTitle: "费用标准",
          previewCopy: "学费、考试费、第三方费用与缴费安排集中说明，具体标准以学校正式文件为准。",
          links: ["费用说明", "奖学金", "常见问题"],
        },
        {
          title: "资料下载",
          desc: "简章、课程手册、开放日资料。",
          previewTitle: "招生资料集中查阅",
          previewCopy: "招生简章、课程说明和申请材料集中呈现，方便家庭在探校前完成初步了解。",
          links: ["招生简章", "课程手册", "联系招生办"],
        },
      ],
    },
  },
  en: {
    programmes: {
      eyebrow: "Qingyun Pathways",
      title: "Programmes",
      copy: "A connected pathway led by Qingyun Academy Middle School, with Lingyun Academy and Qingyun Academy extending student growth.",
      items: [
        {
          title: "Qingyun Academy Middle School",
          desc: "Bilingual academics, project learning, advisory and student support.",
          previewTitle: "Middle School first",
          previewCopy: "For G7-G8 learners, the programme builds academic English, STEM literacy, communication, research habits and wellbeing.",
          links: ["Curriculum", "Support", "Apply"],
        },
        {
          title: "Lingyun Academy",
          desc: "G9X / G10X advanced preparation.",
          previewTitle: "G9X and G10X",
          previewCopy: "A stronger academic, language, competition and counselling bridge into international high school.",
          links: ["G9X", "G10X", "Pathway"],
        },
        {
          title: "Qingyun Academy",
          desc: "One of School personalised pathway.",
          previewTitle: "One learner, one pathway",
          previewCopy: "Mentors, projects and personalised plans help students shape a distinctive direction.",
          links: ["One of School", "Advisory", "Portfolio"],
        },
      ],
    },
    middle: {
      eyebrow: "Middle School",
      title: "Qingyun Academy Middle School",
      copy: "A middle school experience built across language, academics, activities and character.",
      items: [
        {
          title: "Core Curriculum",
          desc: "Bilingual learning across humanities, maths, science, arts and PE.",
          previewTitle: "Rigorous without feeling rigid",
          previewCopy: "Learning focuses on inquiry, expression, reading depth and interdisciplinary connections.",
          links: ["Courses", "Standards", "Outcomes"],
        },
        {
          title: "Faculty",
          desc: "Bilingual teachers, international teachers and advisors.",
          previewTitle: "Teachers shape the school experience",
          previewCopy: "Subject teachers, international curriculum specialists and advisors work together around classroom evidence, student wellbeing and purposeful feedback.",
          links: ["Faculty", "Advisory", "Classroom"],
        },
        {
          title: "Student Life",
          desc: "Clubs, events, service, competitions and leadership.",
          previewTitle: "Stories over slogans",
          previewCopy: "Student voices, photos, projects and activities make the school feel real.",
          links: ["Clubs", "Events", "Student Voices"],
        },
      ],
    },
    academies: {
      eyebrow: "Academies",
      title: "Lingyun and Qingyun",
      copy: "Focused pathways beyond the middle school core for different ages, goals and learning profiles.",
      items: [
        {
          title: "Lingyun G9X",
          desc: "Academic strengthening for international high school transition.",
          previewTitle: "G9X",
          previewCopy: "Academic writing, STEM, research projects and international course habits.",
          links: ["Timetable", "Entry", "Outcomes"],
        },
        {
          title: "Lingyun G10X",
          desc: "Advanced preparation closer to high school standards.",
          previewTitle: "G10X",
          previewCopy: "A clearer rhythm for advanced courses, competitions, portfolio work and counselling.",
          links: ["Courses", "Competitions", "Counselling"],
        },
        {
          title: "Qingyun Academy",
          desc: "One of School personalised learning.",
          previewTitle: "Qingyun Academy",
          previewCopy: "Personal interests, academic strengths, mentor resources and long-term goals in one growth map.",
          links: ["Personal Plan", "Mentors", "Projects"],
        },
      ],
    },
    community: {
      eyebrow: "Community",
      title: "Campus Stories",
      copy: "Real students, classrooms and activities show how the school feels every day.",
      items: [
        {
          title: "Student Voices",
          desc: "Learning experiences from students.",
          previewTitle: "Real voices matter",
          previewCopy: "The homepage now includes student photo cards and quotes that can be replaced with real interviews.",
          links: ["Interviews", "Stories", "Destinations"],
        },
        {
          title: "Clubs and Activities",
          desc: "Sport, arts, debate, technology and service.",
          previewTitle: "Campus life should be visible",
          previewCopy: "Photos, videos, timelines and student work make the international atmosphere tangible.",
          links: ["Clubs", "Calendar", "Showcase"],
        },
        {
          title: "Video Tour",
          desc: "A stronger first impression through video.",
          previewTitle: "Video entry on homepage",
          previewCopy: "The modal is ready for a school film, principal message or open day replay.",
          links: ["Campus Film", "Open Day", "Visit"],
        },
      ],
    },
    admissions: {
      eyebrow: "Admissions",
      title: "Apply to Qingyun",
      copy: "Consultation, campus visit booking, downloads and application entry points are visible on the homepage.",
      items: [
        {
          title: "Application Process",
          desc: "Inquiry, assessment, interview, offer and onboarding.",
          previewTitle: "A clear process reduces friction",
          previewCopy: "Application entries are placed in the hero and bottom section, ready for forms or WeCom integration.",
          links: ["Apply Now", "Book a Visit", "Consult"],
        },
        {
          title: "Tuition and Fees",
          desc: "Tuition, meals, uniform, activities and other fees.",
          previewTitle: "Fee Standards",
          previewCopy: "A fee table, scholarship policy and payment notes can be added from the prospectus.",
          links: ["Fees", "Scholarship", "FAQ"],
        },
        {
          title: "Downloads",
          desc: "Prospectus, course guide and open day materials.",
          previewTitle: "Useful takeaways",
          previewCopy: "PDF prospectus, course introductions and application documents can be hosted here.",
          links: ["Prospectus", "Course Guide", "Contact"],
        },
      ],
    },
  },
};

const courseData = {
  zh: {
    academic: {
      title: "学术核心",
      copy: "G7-G8 课程覆盖英语语言文学、中文语言文学、数学、基础科学/综合科学、社会学与国际视野，帮助学生建立进入国际课程体系所需的阅读、写作、逻辑和探究能力。",
      points: ["英语语言文学与学术英文", "中文语言文学", "数学与科学", "社会学与国际视野"],
      image: "./assets/innovation-lab.png",
    },
    language: {
      title: "双语表达",
      copy: "以中英双语为桥梁，学生在阅读研讨、写作、演讲、辩论和展示中训练高阶思维与跨文化表达能力。",
      points: ["中英文阅读与写作", "Public Speaking", "Debate and Presentation", "跨文化沟通"],
      image: "./assets/arts-seminar.png",
    },
    project: {
      title: "STEAM 与项目学习",
      copy: "学生在项目式环境中整合 AI 工具、微控制器和创客技术，从教师设定的真实情境任务，逐步走向自主研究、制作原型与赛事展示。",
      points: ["AI + Technology 解决方案", "创客与编程", "跨学科研究", "以赛促学"],
      image: "./assets/campus-hero.png",
    },
    advisory: {
      title: "导师课与 SEL",
      copy: "导师课融合时间管理、个性化升学规划、学术精进与全人素养；SEL 帮助学生发展自我意识、情绪管理、同理心、冲突解决和健康关系。",
      points: ["专属导师 Adviser", "时间管理与升学规划", "社会情感学习 SEL", "家校长期沟通"],
      image: "./assets/shenzhen-hero.png",
    },
  },
  en: {
    academic: {
      title: "Academic Core",
      copy: "Grades 7-8 courses include English Language Arts, Chinese Language Arts, mathematics, science, sociology and global perspectives, building the literacy, logic and inquiry skills required by international curricula.",
      points: ["English Language Arts and Academic English", "Chinese Language Arts", "Maths and science", "Sociology and global perspectives"],
      image: "./assets/innovation-lab.png",
    },
    language: {
      title: "Bilingual Voice",
      copy: "Bilingual learning becomes a bridge for higher-order thinking and intercultural expression through seminars, writing, public speaking, debate and presentations.",
      points: ["Chinese and English literacy", "Public speaking", "Debate and presentation", "Intercultural communication"],
      image: "./assets/arts-seminar.png",
    },
    project: {
      title: "STEAM and Projects",
      copy: "Students integrate AI tools, microcontrollers and maker technologies in project-based learning, moving from teacher-designed scenarios to independent research, prototypes and competition showcases.",
      points: ["AI + Technology solutions", "Maker and coding", "Interdisciplinary research", "Learning through competition"],
      image: "./assets/campus-hero.png",
    },
    advisory: {
      title: "Advisory and Growth",
      copy: "Advisory combines time management, individual pathway planning, academic development and whole-person growth, while SEL supports self-awareness, emotional regulation, empathy and healthy relationships.",
      points: ["Dedicated advisor", "Time management and pathway planning", "Social-emotional learning", "Long-term family communication"],
      image: "./assets/shenzhen-hero.png",
    },
  },
};

const linkTargets = {
  "课程内容": "#curriculum",
  "学生支持": "./faculty.html",
  "申请入学": "#apply",
  "G9X": "#academies",
  "G10X": "#academies",
  "升学路径": "#academies",
  "个人学校": "#academies",
  "导师计划": "./faculty.html",
  "学生作品": "#community-life",
  "课程介绍": "#curriculum",
  "学术标准": "#curriculum",
  "学习成果": "#student-voices",
  "教师团队": "./faculty.html",
  "导师制度": "./faculty.html#advisory",
  "课堂观察": "./faculty.html#development",
  "社团活动": "#community-life",
  "学校活动": "#community-life",
  "学生评价": "#student-voices",
  "课程表": "#curriculum",
  "入读要求": "#admissions-process",
  "学生成果": "#student-voices",
  "课程方向": "#academies",
  "竞赛支持": "#community-life",
  "升学规划": "#academies",
  "个性化方案": "#academies",
  "导师资源": "./faculty.html#advisory",
  "项目案例": "#community-life",
  "学生访谈": "#student-voices",
  "成长故事": "#student-voices",
  "毕业去向": "#student-voices",
  "社团列表": "#community-life",
  "活动日历": "#community-life",
  "作品展示": "#community-life",
  "校园视频": "#video",
  "开放日": "#community-life",
  "预约参观": "#admissions-process",
  "立即申请": "#apply",
  "预约看校": "#admissions-process",
  "招生咨询": "#apply",
  "费用说明": "./fees.html",
  "奖学金": "./fees.html#faq",
  "常见问题": "#faq",
  "招生简章": "#admissions-process",
  "课程手册": "#curriculum",
  "联系招生办": "#apply",
  Curriculum: "#curriculum",
  Support: "./faculty.html",
  Apply: "#apply",
  Pathway: "#academies",
  "One of School": "#academies",
  Advisory: "./faculty.html#advisory",
  Portfolio: "#community-life",
  Courses: "#curriculum",
  Standards: "#curriculum",
  Outcomes: "#student-voices",
  Faculty: "./faculty.html",
  Classroom: "./faculty.html#classroom",
  Clubs: "#community-life",
  Events: "#community-life",
  "Student Voices": "#student-voices",
  Timetable: "#curriculum",
  Entry: "#admissions-process",
  Competitions: "#community-life",
  Counselling: "#academies",
  "Personal Plan": "#academies",
  Mentors: "./faculty.html#advisory",
  Projects: "#community-life",
  Interviews: "#student-voices",
  Stories: "#student-voices",
  Destinations: "#student-voices",
  Calendar: "#community-life",
  Showcase: "#community-life",
  "Campus Film": "#video",
  "Open Day": "#community-life",
  Visit: "#admissions-process",
  "Apply Now": "#apply",
  "Book a Visit": "#admissions-process",
  Consult: "#apply",
  Fees: "./fees.html",
  Scholarship: "./fees.html#faq",
  FAQ: "#faq",
  Prospectus: "#admissions-process",
  "Course Guide": "#curriculum",
  Contact: "#apply",
};

const itemTargets = {
  "青云书院初中部": "#middle-school",
  "凌云书院": "#academies",
  "青云书院": "#academies",
  "核心课程": "#curriculum",
  "师资介绍": "./faculty.html",
  "学生发展": "#community-life",
  "凌云书院 G9X": "#academies",
  "凌云书院 G10X": "#academies",
  "学生评价": "#student-voices",
  "社团活动": "#community-life",
  "视频看校": "#video",
  "申请流程": "#admissions-process",
  "费用标准": "./fees.html",
  "资料下载": "#admissions-process",
  "Qingyun Academy Middle School": "#middle-school",
  "Lingyun Academy": "#academies",
  "Qingyun Academy": "#academies",
  "Core Curriculum": "#curriculum",
  Faculty: "./faculty.html",
  "Student Life": "#community-life",
  "Lingyun G9X": "#academies",
  "Lingyun G10X": "#academies",
  "Student Voices": "#student-voices",
  "Clubs and Activities": "#community-life",
  "Video Tour": "#video",
  "Application Process": "#admissions-process",
  "Tuition and Fees": "./fees.html",
  Downloads: "#admissions-process",
};

function targetFor(label, fallback = "#programmes") {
  return linkTargets[label] || itemTargets[label] || fallback;
}

function navigateToTarget(target) {
  if (!target || target === "#") return;
  window.location.href = target;
}

const menuPageTargets = {
  programmes: "./about.html",
  middle: "./curriculum.html",
  admissions: "./admissions.html",
  community: "./life.html",
  academies: "./curriculum.html",
};

Object.assign(menuData.zh, {
  programmes: {
    eyebrow: "About Us",
    title: "关于我们",
    copy: "从书院简介、校园设施、师资力量到全人教育，让家庭先理解青云书院是一所怎样的国际化初中与书院共同体。",
    items: [
      {
        title: "书院简介",
        desc: "青云书院初中部、凌云书院与青云书院共同构成连续成长路径。",
        previewTitle: "先看清学校的整体结构",
        previewCopy: "青云书院初中部夯实 G7-G8 学习基础，凌云书院承接进阶阶段，One of School 提供个性化成长路径。",
        links: ["青云书院初中部", "凌云书院", "青云书院", "使命愿景"],
      },
      {
        title: "校园设施",
        desc: "学习空间、项目空间、运动与艺术空间共同支持学生每天的真实体验。",
        previewTitle: "校园设施不只是照片",
        previewCopy: "学习空间服务于探究、展示与合作，运动和艺术空间则让学生在课堂之外继续建立能力与关系。",
        links: ["学习空间", "项目空间", "运动空间", "艺术空间"],
      },
      {
        title: "师资力量",
        desc: "双语学科教师、国际课程教师与导师团队共同支持学生。",
        previewTitle: "课堂从问题与观察开始",
        previewCopy: "师资介绍不只放履历，也要展示课堂片段、导师制度、教学理念与学生支持方式。",
        links: ["教师团队", "师资数据", "导师制度", "课堂观察"],
      },
      {
        title: "全人教育",
        desc: "学术、品格、表达、身心健康与社会责任一起构成学生成长。",
        previewTitle: "全人教育是学校气质",
        previewCopy: "用项目、社团、公益、运动和学生故事说明学校如何培养完整的人。",
        links: ["学生发展", "品格培养", "身心健康", "全人路径"],
      },
    ],
  },
  middle: {
    eyebrow: "Academics",
    title: "课程设置",
    copy: "青云书院初中部、AI School、凌云书院与 One of School 彼此衔接，形成清晰而连续的学习路径。",
    items: [
      {
        title: "青云书院初中部",
        desc: "G7-G8 双语学术基础、项目学习、表达训练与导师支持。",
        previewTitle: "G7-G8 的学习基础",
        previewCopy: "课程结构、教学理念、学习成果与学生支持共同构成 G7-G8 的完整学习体验。",
        links: ["G7-G8 科目", "课程介绍", "学术标准", "导师支持"],
      },
      {
        title: "AI School",
        desc: "AI 素养、独立判断与真实项目共同进入每一个学科。",
        previewTitle: "会使用工具，更会判断与负责",
        previewCopy: "学生学习提出问题、核验来源、识别偏差、完成作品，并清楚说明 AI 如何参与。",
        links: ["AI 学习方式", "学术诚信", "项目案例", "AI Fluency"],
      },
      {
        title: "凌云书院",
        desc: "G9X / G10X 进阶衔接，强化国际课程准备。",
        previewTitle: "凌云书院承接更高阶学习",
        previewCopy: "G9X、G10X 逐步提高学术挑战，并连接课程选择、竞赛支持与升学准备。",
        links: ["G9X", "G10X", "升学路径", "国际高中衔接"],
      },
      {
        title: "青云书院",
        desc: "One of School 个性化成长路径。",
        previewTitle: "青云书院强调一人一案",
        previewCopy: "通过导师、项目、资源组合和个性化学习计划，帮助学生建立自己的优势方向。",
        links: ["个性化方案", "导师资源", "项目案例", "One of School"],
      },
      {
        title: "STEM",
        desc: "科学探究、工程设计、技术表达与跨学科项目。",
        previewTitle: "STEM 让学习有作品、有证据",
        previewCopy: "把科学、数学、工程、技术和展示表达连接起来，让学生在项目里解决真实问题。",
        links: ["科学探究", "工程项目", "作品展示", "以赛促学"],
      },
    ],
  },
  admissions: {
    eyebrow: "Admissions",
    title: "招生入学",
    copy: "预约探校、费用标准与申请流程清楚衔接，让每个家庭都知道下一步如何推进。",
    items: [
      {
        title: "预约探校",
        desc: "预约开放日、校园参观或一对一招生咨询。",
        previewTitle: "先到校看见真实学习",
        previewCopy: "开放日包含课程说明、校园参观、学生作品交流和一对一招生咨询。",
        links: ["开放日", "校园参观", "招生咨询", "预约测试"],
      },
      {
        title: "费用标准",
        desc: "学费、入学评估费与第三方费用边界。",
        previewTitle: "费用要清楚、克制、可信",
        previewCopy: "学费、考试费与其他费用集中说明，正式金额与缴费安排以学校文件为准。",
        links: ["学费说明", "考试费", "报名材料", "常见问题"],
      },
      {
        title: "申请流程",
        desc: "提交意向、入学评估、面谈、录取与入学准备。",
        previewTitle: "每一步都清楚可预期",
        previewCopy: "流程越清楚，家长越容易开始行动；每一步都围绕课程适配、学生状态与家庭期待展开。",
        links: ["立即申请", "入学评估", "材料提交", "录取入学"],
      },
    ],
  },
  community: {
    eyebrow: "Campus Life",
    title: "校园生活",
    copy: "校园生活栏目先突出社团 Club，再延伸到学校活动、学生故事、视频看校和作品展示。",
    items: [
      {
        title: "社团 Club",
        desc: "科技、辩论、运动、艺术、公益与学生领导力。",
        previewTitle: "社团是学校真实气质",
        previewCopy: "运动、艺术、科技、辩论与公益社群，为学生提供持续参与、共同创造和承担责任的机会。",
        links: ["社团列表", "活动日历", "学生作品", "月度主题"],
      },
      {
        title: "学校活动",
        desc: "开放日、项目展、艺术展演与学生论坛。",
        previewTitle: "共同经历塑造校园文化",
        previewCopy: "校园动态、开放日回顾、项目展示与学生舞台，记录共同经历如何塑造校园文化。",
        links: ["校园动态", "开放日回顾", "项目展", "艺术活动", "行走课堂"],
      },
      {
        title: "学生故事",
        desc: "学生评价、家长反馈与成长故事。",
        previewTitle: "成长由学生亲自讲述",
        previewCopy: "学生和家长从课程、导师、项目与同伴关系出发，讲述真实发生的变化。",
        links: ["学生评价", "成长故事", "家长反馈", "视频看校"],
      },
    ],
  },
});

Object.assign(menuData.en, {
  programmes: {
    eyebrow: "About Us",
    title: "About Us",
    copy: "Overview, facilities, faculty and whole-person education explain what kind of learning community Qingyun is.",
    items: [
      { title: "Overview", desc: "Qingyun Academy Middle School, Lingyun Academy and Qingyun Academy form one connected pathway.", previewTitle: "Understand the structure first", previewCopy: "Middle School is the core, Lingyun extends advanced preparation, and Qingyun provides personalised pathways.", links: ["Qingyun Academy Middle School", "Lingyun Academy", "Qingyun Academy", "Mission"] },
      { title: "Facilities", desc: "Learning, project, sport and arts spaces support daily student experience.", previewTitle: "Spaces designed for learning in action", previewCopy: "Students use these spaces for inquiry, presentation, collaboration, sport, arts and clubs.", links: ["Learning Spaces", "Project Spaces", "Sports Spaces", "Arts Spaces"] },
      { title: "Faculty", desc: "Bilingual teachers, international curriculum teachers and advisors.", previewTitle: "Show how teaching happens", previewCopy: "Faculty content should include teaching beliefs, classroom moments and student support, not only profiles.", links: ["Faculty Team", "Faculty Data", "Advisory", "Classroom"] },
      { title: "Whole-Person Education", desc: "Academics, character, voice, wellbeing and responsibility grow together.", previewTitle: "Whole-person education is the school culture", previewCopy: "Projects, clubs, service, sport and student stories show how Qingyun develops complete learners.", links: ["Student Development", "Character", "Wellbeing", "Whole-Person Pathway"] },
    ],
  },
  middle: {
    eyebrow: "Academics",
    title: "Academics",
    copy: "Academics includes Qingyun Academy Middle School, Lingyun Academy, Qingyun Academy and STEM.",
    items: [
      { title: "Qingyun Academy Middle School", desc: "G7-G8 bilingual academics, projects, voice and advisory.", previewTitle: "Foundations for Grades 7-8", previewCopy: "Curriculum, learning beliefs, outcomes and student support form one complete middle school experience.", links: ["G7-G8 Subjects", "Courses", "Standards", "Advisory Support"] },
      { title: "AI School", desc: "AI fluency, human judgement and authentic work across subjects.", previewTitle: "Use powerful tools with judgement", previewCopy: "Students ask, verify, recognise bias, create visible work and explain how AI contributed.", links: ["AI Learning", "Academic Integrity", "Projects", "AI Fluency"] },
      { title: "Lingyun Academy", desc: "G9X / G10X advanced transition into international study.", previewTitle: "Lingyun extends advanced learning", previewCopy: "Show learning goals, course directions, competitions and pathway preparation.", links: ["G9X", "G10X", "Pathway", "High School Bridge"] },
      { title: "Qingyun Academy", desc: "One of School personalised learning pathway.", previewTitle: "One learner, one pathway", previewCopy: "Mentors, projects and personalised plans help students shape a distinctive direction.", links: ["Personal Plan", "Mentors", "Projects", "One of School"] },
      { title: "STEM", desc: "Scientific inquiry, engineering design, technology and interdisciplinary projects.", previewTitle: "STEM creates visible evidence", previewCopy: "Science, maths, engineering, technology and presentation connect through real problems.", links: ["Inquiry", "Engineering", "Showcase", "Competition Learning"] },
    ],
  },
  admissions: {
    eyebrow: "Admissions",
    title: "Admissions",
    copy: "Book a visit, understand fees and follow a clear application process.",
    items: [
      { title: "Book a Visit", desc: "Open day, campus tour or one-to-one consultation.", previewTitle: "See real learning first", previewCopy: "Open days bring together curriculum briefings, campus tours, student work and admissions consultation.", links: ["Open Day", "Campus Visit", "Consult", "Book Assessment"] },
      { title: "Tuition and Fees", desc: "Tuition, meals, uniform, activities and other fees.", previewTitle: "Clear and credible fee information", previewCopy: "Tuition, assessment and third-party fees are explained together; official school documents remain the final reference.", links: ["Fees", "Assessment Fee", "Documents", "FAQ"] },
      { title: "Application Process", desc: "Inquiry, assessment, interview, offer and onboarding.", previewTitle: "Make the next step obvious", previewCopy: "Each step focuses on programme fit, student readiness and family expectations.", links: ["Apply Now", "Assessment", "Documents", "Offer"] },
    ],
  },
  community: {
    eyebrow: "Campus Life",
    title: "Campus Life",
    copy: "Campus Life starts with Clubs, then extends to events, student stories, video and showcases.",
    items: [
      { title: "Clubs", desc: "Technology, debate, sport, arts, service and leadership.", previewTitle: "Clubs reveal school culture", previewCopy: "Photos, calendars, student work and club introductions show daily participation.", links: ["Club List", "Calendar", "Student Work", "Monthly Themes"] },
      { title: "School Events", desc: "Open days, project fairs, arts showcases and student forums.", previewTitle: "Shared experiences shape culture", previewCopy: "Campus news, open day reflections, project exhibitions and student stages record the life of the community.", links: ["Campus Journal", "Open Day Recap", "Project Fair", "Arts", "World Classroom"] },
      { title: "Student Stories", desc: "Student voices, parent feedback and growth stories.", previewTitle: "Growth told in students' own voices", previewCopy: "Students and families describe change through curriculum, advisory, projects and relationships.", links: ["Voices", "Growth Stories", "Parent Voice", "Video Tour"] },
    ],
  },
});

Object.assign(linkTargets, {
  "书院简介": "./about.html#overview",
  "校园设施": "./about.html#facilities",
  "师资力量": "./faculty.html",
  "全人教育": "./about.html#whole-person",
  "使命愿景": "./about.html#whole-person",
  "课程介绍": "./curriculum.html#sipc-middle",
  "AI School": "./curriculum.html#ai-school",
  "AI 学习方式": "./curriculum.html#ai-school",
  "学术诚信": "./curriculum.html#ai-school",
  "AI Fluency": "./curriculum.html#ai-school",
  "G7-G8 科目": "./curriculum.html#sipc-middle",
  "学术标准": "./curriculum.html#sipc-middle",
  "学生支持": "./faculty.html",
  "导师支持": "./faculty.html",
  "课程方向": "./curriculum.html#lingyun",
  G9X: "./curriculum.html#lingyun",
  G10X: "./curriculum.html#lingyun",
  "One of School": "./curriculum.html#qingyun",
  "竞赛支持": "./curriculum.html#stem",
  "国际高中衔接": "./curriculum.html#lingyun",
  "升学路径": "./curriculum.html#lingyun",
  "个性化方案": "./curriculum.html#qingyun",
  "导师资源": "./faculty.html",
  "项目案例": "./curriculum.html#stem",
  "以赛促学": "./curriculum.html#stem",
  "招生咨询": "./admissions.html",
  "申请流程": "./admissions.html#visit",
  "预约测试": "./admissions.html#visit",
  "立即申请": "./admissions.html#visit",
  "入学评估": "./admissions.html#visit",
  "材料提交": "./admissions.html#documents",
  "录取入学": "./admissions.html#offer",
  "奖学金": "./fees.html#faq",
  "常见问题": "./admissions.html#faq",
  "校园动态": "#campus-journal",
  "开放日回顾": "./life.html#monthly",
  "项目展": "./life.html#monthly",
  "艺术活动": "./life.html#stage",
  "学生评价": "#student-voices",
  "成长故事": "#student-voices",
  "家长反馈": "#student-voices",
  "青云书院初中部": "./curriculum.html#sipc-middle",
  "凌云书院": "./curriculum.html#lingyun",
  "青云书院": "./curriculum.html#qingyun",
  "STEM": "./curriculum.html#stem",
  "预约探校": "./admissions.html#visit",
  "费用标准": "./fees.html",
  "社团 Club": "./life.html#clubs",
  "学校活动": "./life.html#monthly",
  "学生故事": "#student-voices",
  "学习空间": "./about.html#facilities",
  "运动空间": "./about.html#facilities",
  "艺术空间": "./about.html#facilities",
  "教师团队": "./faculty.html",
  "导师制度": "./faculty.html",
  "课堂观察": "./faculty.html",
  "学生发展": "./about.html#whole-person",
  "品格培养": "./about.html#whole-person",
  "身心健康": "./about.html#whole-person",
  "科学探究": "./curriculum.html#stem",
  "工程项目": "./curriculum.html#stem",
  "作品展示": "./life.html#clubs",
  "开放日": "./admissions.html#visit",
  "校园参观": "./admissions.html#visit",
  "学费说明": "./fees.html",
  "考试费": "./fees.html",
  "报名材料": "./admissions.html#documents",
  "社团列表": "./life.html#clubs",
  "活动日历": "./life.html#monthly",
  "学生作品": "./life.html#clubs",
  "月度主题": "./life.html#monthly",
  "行走课堂": "./life.html#world-classroom",
  "视频看校": "#video",
  "项目空间": "./about.html#facilities",
  "师资数据": "./faculty.html",
  "全人路径": "./about.html#whole-person",
  Overview: "./about.html#overview",
  Facilities: "./about.html#facilities",
  Faculty: "./faculty.html",
  "Faculty Team": "./faculty.html",
  "Whole-Person Education": "./about.html#whole-person",
  Mission: "./about.html#whole-person",
  "Learning Spaces": "./about.html#facilities",
  "Project Spaces": "./about.html#facilities",
  "Sports Spaces": "./about.html#facilities",
  "Arts Spaces": "./about.html#facilities",
  "Faculty Data": "./faculty.html",
  Classroom: "./faculty.html",
  Character: "./about.html#whole-person",
  Wellbeing: "./about.html#whole-person",
  "Whole-Person Pathway": "./about.html#whole-person",
  STEM: "./curriculum.html#stem",
  "AI Learning": "./curriculum.html#ai-school",
  "Academic Integrity": "./curriculum.html#ai-school",
  "Qingyun Academy Middle School": "./curriculum.html#sipc-middle",
  "Lingyun Academy": "./curriculum.html#lingyun",
  "Qingyun Academy": "./curriculum.html#qingyun",
  Inquiry: "./curriculum.html#stem",
  Engineering: "./curriculum.html#stem",
  Clubs: "./life.html#clubs",
  "Club List": "./life.html#clubs",
  "Student Work": "./life.html#clubs",
  "School Events": "./life.html#monthly",
  "Student Stories": "#student-voices",
  "G7-G8 Subjects": "./curriculum.html#sipc-middle",
  Courses: "./curriculum.html#sipc-middle",
  Standards: "./curriculum.html#sipc-middle",
  Support: "./faculty.html",
  "Advisory Support": "./faculty.html",
  Pathway: "./curriculum.html#lingyun",
  "G9X": "./curriculum.html#lingyun",
  "G10X": "./curriculum.html#lingyun",
  "High School Bridge": "./curriculum.html#lingyun",
  "Personal Plan": "./curriculum.html#qingyun",
  Mentors: "./faculty.html",
  Projects: "./curriculum.html#stem",
  "Competition Learning": "./curriculum.html#stem",
  "Book Assessment": "./admissions.html#visit",
  "Book a Visit": "./admissions.html#visit",
  "Application Process": "./admissions.html#visit",
  "Tuition and Fees": "./fees.html",
  "Assessment Fee": "./fees.html",
  Documents: "./admissions.html#documents",
  Assessment: "./admissions.html#visit",
  Offer: "./admissions.html#offer",
  "Monthly Themes": "./life.html#monthly",
  "World Classroom": "./life.html#world-classroom",
  "Campus Journal": "#campus-journal",
  "Video Tour": "#video",
  Voices: "#student-voices",
  "Growth Stories": "#student-voices",
  "Parent Voice": "#student-voices",
});

const header = document.querySelector(".site-header");
const scrollProgress = document.querySelector("#scrollProgress");
const megaMenu = document.querySelector("#megaMenu");
const megaEyebrow = document.querySelector("#megaEyebrow");
const megaTitle = document.querySelector("#megaTitle");
const megaCopy = document.querySelector("#megaCopy");
const megaList = document.querySelector("#megaList");
const megaPreview = document.querySelector("#megaPreview");
const navTriggers = [...document.querySelectorAll(".nav-trigger")];
const hero = document.querySelector(".hero");
const heroBg = document.querySelector(".hero-bg");
const heroEyebrow = document.querySelector(".hero .eyebrow");
const heroTitle = document.querySelector(".hero h1");
const heroCopy = document.querySelector(".hero-lede");
const heroMore = document.querySelector(".hero-more");
const heroDots = [...document.querySelectorAll(".hero-dots button")];
const heroPrev = document.querySelector(".hero-arrow-prev");
const heroNext = document.querySelector(".hero-arrow-next");
const languageToggle = document.querySelector("#languageToggle");
const menuButton = document.querySelector("#menuButton");
const mobilePanel = document.querySelector("#mobilePanel");
const courseDetail = document.querySelector("#courseDetail");
const courseTabs = [...document.querySelectorAll(".course-tab")];
const videoButton = document.querySelector("#videoButton");
const videoModal = document.querySelector("#videoModal");
const modalClose = document.querySelector("#modalClose");
const applyForm = document.querySelector(".apply-form");
const quickPanel = document.querySelector("#quickPanel");
const quickClose = document.querySelector("#quickClose");
const searchLink = document.querySelector(".search-link");
const siteFinder = document.querySelector("#siteFinder");
const finderClose = document.querySelector("#finderClose");
const siteFooter = document.querySelector(".site-footer");
const videoDialog = videoModal?.querySelector(".video-dialog");
const configuredVideo = document.querySelector("#configuredVideo");
const campusReelGallery = document.querySelector("#campusReelGallery");
const applyNote = document.querySelector("#applyNote");
const programmesSection = document.querySelector("#programmes");
const learningPreviewImage = document.querySelector("#learningPreviewImage");
const learningPreviewCaption = document.querySelector("#learningPreviewCaption");
const learningSteps = [...document.querySelectorAll(".learning-system-flow article")];
const aiSchoolImage = document.querySelector("#aiSchoolImage");
const aiSchoolCaption = document.querySelector("#aiSchoolCaption");
const aiSchoolSteps = [...document.querySelectorAll(".ai-school-step")];
let heroTimer = null;
let lastFocusedElement = null;

function syncOverlayState() {
  const hasBlockingOverlay =
    siteFinder?.classList.contains("is-open") ||
    videoModal?.classList.contains("is-open") ||
    mobilePanel?.classList.contains("is-open");
  document.body.classList.toggle("is-overlay-open", Boolean(hasBlockingOverlay));
  syncQuickPanel();
}

function rememberFocus() {
  lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
}

function restoreFocus() {
  if (lastFocusedElement?.isConnected) lastFocusedElement.focus();
  lastFocusedElement = null;
}

function updateScrollState() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  const heroThreshold = Math.max(460, hero.offsetHeight - header.offsetHeight - 120);
  const isBeforeContent = window.scrollY < heroThreshold;
  const isAtFooter = Boolean(siteFooter && siteFooter.getBoundingClientRect().top < window.innerHeight - 24);
  scrollProgress.style.width = `${Math.min(progress, 100)}%`;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
  quickPanel?.classList.toggle("is-before-content", isBeforeContent);
  quickPanel?.classList.toggle("is-footer-reached", isAtFooter);
  if (!quickPanel?.classList.contains("is-hidden")) {
    quickPanel?.setAttribute("aria-hidden", String(isBeforeContent || isAtFooter));
  }
}

function renderHeroSlide(index) {
  const slideIndex = (index + heroSlides.length) % heroSlides.length;
  const slide = heroSlides[slideIndex];
  state.activeSlide = slideIndex;

  hero.classList.add("is-slide-changing");
  heroBg.src = slide.image;
  heroBg.alt = slide.title[state.lang];
  heroBg.style.objectPosition = slide.imagePosition;
  heroEyebrow.textContent = slide.eyebrow[state.lang];
  heroTitle.textContent = slide.title[state.lang];
  heroCopy.textContent = slide.copy[state.lang];
  heroMore.textContent = slide.cta[state.lang];
  heroMore.href = slide.href;
  window.setTimeout(() => hero.classList.remove("is-slide-changing"), 460);

  heroDots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === slideIndex;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-current", String(isActive));
  });
}

function goToHeroSlide(index) {
  renderHeroSlide(index);
  startHeroCarousel();
}

function startHeroCarousel() {
  window.clearInterval(heroTimer);
  heroTimer = window.setInterval(() => {
    renderHeroSlide(state.activeSlide + 1);
  }, 5200);
}

function stopHeroCarousel() {
  window.clearInterval(heroTimer);
}

function activateAISchoolStep(step) {
  if (!step || !aiSchoolImage || !aiSchoolCaption) return;
  aiSchoolSteps.forEach((item) => item.classList.toggle("is-active", item === step));
  aiSchoolImage.classList.add("is-changing");
  aiSchoolImage.src = step.dataset.image;
  aiSchoolCaption.textContent = step.dataset[`caption${state.lang === "zh" ? "Zh" : "En"}`];
  const index = aiSchoolSteps.indexOf(step) + 1;
  const label = aiSchoolCaption.previousElementSibling;
  if (label) label.textContent = `AI School · ${String(index).padStart(2, "0")}`;
  window.setTimeout(() => aiSchoolImage.classList.remove("is-changing"), 260);
}

function renderPreview(item) {
  const itemTarget = targetFor(item.title, menuPageTargets[state.activeMenu] || targetFor(item.links[0]));
  megaPreview.innerHTML = `
    <h3>${item.previewTitle}</h3>
    <p>${item.previewCopy}</p>
    <a class="mega-primary-link" href="${itemTarget}">${state.lang === "zh" ? "进入栏目" : "Open Section"}</a>
    <div>${item.links.map((link) => `<a href="${targetFor(link)}">${link}</a>`).join("")}</div>
  `;
  megaPreview.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMega);
  });
}

function renderMega(menuKey = state.activeMenu) {
  state.activeMenu = menuKey;
  const data = menuData[state.lang][menuKey];

  megaEyebrow.textContent = data.eyebrow;
  megaTitle.textContent = data.title;
  megaCopy.textContent = data.copy;
  megaList.innerHTML = "";

  data.items.forEach((item, index) => {
    const itemNode = document.createElement("article");
    itemNode.className = `mega-item${index === 0 ? " is-active" : ""}`;
    itemNode.innerHTML = `
      <button type="button">
        <strong>${item.title}</strong>
        <span>${item.desc}</span>
      </button>
      <div class="mega-mini-links">
        ${item.links.map((link) => `<a href="${targetFor(link)}">${link}</a>`).join("")}
      </div>
    `;
    const button = itemNode.querySelector("button");
    const setActive = () => {
      megaList.querySelectorAll(".mega-item").forEach((el) => el.classList.remove("is-active"));
      itemNode.classList.add("is-active");
      renderPreview(item);
    };
    itemNode.addEventListener("mouseenter", setActive);
    button.addEventListener("focus", setActive);
    button.addEventListener("click", () => {
      navigateToTarget(targetFor(item.title, targetFor(item.links[0])));
      closeMega();
    });
    itemNode.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.stopPropagation();
        closeMega();
      });
    });
    megaList.appendChild(itemNode);
  });

  renderPreview(data.items[0]);
}

function openMega(menuKey) {
  renderMega(menuKey);
  navTriggers.forEach((trigger) => {
    trigger.classList.toggle("is-active", trigger.dataset.menu === menuKey);
  });
  megaMenu.classList.add("is-open");
  megaMenu.setAttribute("aria-hidden", "false");
  syncQuickPanel();
}

function closeMega() {
  megaMenu.classList.remove("is-open");
  megaMenu.setAttribute("aria-hidden", "true");
  navTriggers.forEach((trigger) => trigger.classList.remove("is-active"));
  syncQuickPanel();
}

function openFinder() {
  rememberFocus();
  siteFinder?.classList.add("is-open");
  siteFinder?.setAttribute("aria-hidden", "false");
  syncOverlayState();
  window.setTimeout(() => finderClose?.focus(), 0);
}

function closeFinder() {
  const wasOpen = siteFinder?.classList.contains("is-open");
  siteFinder?.classList.remove("is-open");
  siteFinder?.setAttribute("aria-hidden", "true");
  syncOverlayState();
  if (wasOpen) restoreFocus();
}

function syncQuickPanel() {
  const isCovered =
    megaMenu?.classList.contains("is-open") ||
    siteFinder?.classList.contains("is-open") ||
    videoModal?.classList.contains("is-open") ||
    mobilePanel?.classList.contains("is-open");
  quickPanel?.classList.toggle("is-muted", Boolean(isCovered));
  const isUnavailable =
    isCovered ||
    quickPanel?.classList.contains("is-before-content") ||
    quickPanel?.classList.contains("is-footer-reached") ||
    quickPanel?.classList.contains("is-hidden");
  quickPanel?.setAttribute("aria-hidden", String(Boolean(isUnavailable)));
}

function renderCourse(courseKey = state.activeCourse) {
  state.activeCourse = courseKey;
  const data = courseData[state.lang][courseKey];
  courseDetail.innerHTML = `
    <div class="course-copy">
      <h3>${data.title}</h3>
      <p>${data.copy}</p>
    </div>
    <div class="course-stack">
      <img class="course-image" src="${data.image}" alt="${data.title}" />
      <ul>${data.points.map((point) => `<li>${point}</li>`).join("")}</ul>
    </div>
  `;
  courseTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.course === courseKey);
  });
}

function setLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-zh][data-en]").forEach((node) => {
    node.textContent = node.dataset[lang];
  });
  document.querySelectorAll("[data-placeholder-zh][data-placeholder-en]").forEach((node) => {
    node.placeholder = node.dataset[`placeholder${lang === "zh" ? "Zh" : "En"}`];
  });
  languageToggle.textContent = lang === "zh" ? "EN" : "中";
  renderMega(state.activeMenu);
  renderCourse(state.activeCourse);
  renderHeroSlide(state.activeSlide);
  const activeLearningStep = learningSteps.find((step) => step.classList.contains("is-active")) || learningSteps[0];
  if (activeLearningStep && learningPreviewCaption) {
    learningPreviewCaption.textContent = activeLearningStep.dataset[`caption${lang === "zh" ? "Zh" : "En"}`];
  }
  const activeAIStep = aiSchoolSteps.find((step) => step.classList.contains("is-active")) || aiSchoolSteps[0];
  if (activeAIStep) activateAISchoolStep(activeAIStep);
}

navTriggers.forEach((trigger) => {
  trigger.addEventListener("mouseenter", () => openMega(trigger.dataset.menu));
  trigger.addEventListener("focus", () => openMega(trigger.dataset.menu));
  trigger.addEventListener("click", () => openMega(trigger.dataset.menu));
});

megaMenu.addEventListener("mouseleave", closeMega);
document.addEventListener("pointerdown", (event) => {
  const clickedHeader = header.contains(event.target);
  const clickedMega = megaMenu.contains(event.target);
  if (!clickedHeader && !clickedMega) closeMega();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMega();
    closeVideo();
    closeFinder();
    closeMobile();
  }
});

languageToggle.addEventListener("click", () => {
  setLanguage(state.lang === "zh" ? "en" : "zh");
});

heroDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToHeroSlide(index);
  });
});

heroPrev?.addEventListener("click", () => goToHeroSlide(state.activeSlide - 1));
heroNext?.addEventListener("click", () => goToHeroSlide(state.activeSlide + 1));
hero.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    goToHeroSlide(state.activeSlide - 1);
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    goToHeroSlide(state.activeSlide + 1);
  }
});

hero.addEventListener("mouseenter", stopHeroCarousel);
hero.addEventListener("mouseleave", startHeroCarousel);
hero.addEventListener("focusin", stopHeroCarousel);
hero.addEventListener("focusout", startHeroCarousel);

aiSchoolSteps.forEach((step) => {
  step.addEventListener("click", () => activateAISchoolStep(step));
  step.addEventListener("focus", () => activateAISchoolStep(step));
});

function closeMobile(shouldRestoreFocus = true) {
  const wasOpen = mobilePanel.classList.contains("is-open");
  menuButton.classList.remove("is-open");
  mobilePanel.classList.remove("is-open");
  mobilePanel.setAttribute("aria-hidden", "true");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "打开菜单");
  syncOverlayState();
  if (wasOpen && shouldRestoreFocus) restoreFocus();
}

menuButton.addEventListener("click", () => {
  const willOpen = !mobilePanel.classList.contains("is-open");
  if (willOpen) rememberFocus();
  const isOpen = mobilePanel.classList.toggle("is-open");
  menuButton.classList.toggle("is-open", isOpen);
  mobilePanel.setAttribute("aria-hidden", String(!isOpen));
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "关闭菜单" : "打开菜单");
  syncOverlayState();
  if (isOpen) window.setTimeout(() => mobilePanel.querySelector("a")?.focus(), 0);
  else restoreFocus();
});

mobilePanel.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => closeMobile(false));
});

courseTabs.forEach((tab) => {
  tab.addEventListener("click", () => renderCourse(tab.dataset.course));
});

learningSteps.forEach((step) => {
  const updateLearningPreview = () => {
    if (!learningPreviewImage || !learningPreviewCaption) return;
    learningSteps.forEach((item) => item.classList.toggle("is-active", item === step));
    learningPreviewImage.src = step.dataset.image;
    learningPreviewCaption.textContent = step.dataset[`caption${state.lang === "zh" ? "Zh" : "En"}`];
  };
  step.addEventListener("mouseenter", updateLearningPreview);
  step.addEventListener("focusin", updateLearningPreview);
});

function openVideo() {
  rememberFocus();
  prepareVideoSurface();
  videoModal.classList.add("is-open");
  videoModal.setAttribute("aria-hidden", "false");
  syncOverlayState();
  window.setTimeout(() => videoDialog?.focus(), 0);
}

function closeVideo() {
  const wasOpen = videoModal.classList.contains("is-open");
  configuredVideo?.querySelector("video")?.pause();
  configuredVideo?.querySelector("iframe")?.removeAttribute("src");
  videoModal.classList.remove("is-open");
  videoModal.setAttribute("aria-hidden", "true");
  syncOverlayState();
  if (wasOpen) restoreFocus();
}

function prepareVideoSurface() {
  if (!configuredVideo || !campusReelGallery) return;
  const video = schoolMedia.campusVideo || {};
  const useFile = video.mode === "file" && video.src;
  const useEmbed = video.mode === "embed" && video.embedUrl;

  configuredVideo.replaceChildren();
  configuredVideo.hidden = !(useFile || useEmbed);
  campusReelGallery.hidden = Boolean(useFile || useEmbed);
  if (!useFile && !useEmbed) return;

  if (useFile) {
    const player = document.createElement("video");
    player.controls = true;
    player.playsInline = true;
    player.preload = "metadata";
    player.poster = video.poster || "";
    player.setAttribute("aria-label", video.title || "青云书院校园影像");

    const source = document.createElement("source");
    source.src = video.src;
    source.type = video.type || "video/mp4";
    player.appendChild(source);
    configuredVideo.appendChild(player);
    return;
  }

  const frame = document.createElement("iframe");
  frame.src = video.embedUrl;
  frame.title = video.title || "青云书院校园影像";
  frame.loading = "lazy";
  frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  frame.allowFullscreen = true;
  configuredVideo.appendChild(frame);
}

videoButton.addEventListener("click", openVideo);
modalClose.addEventListener("click", closeVideo);
videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) closeVideo();
});

searchLink?.addEventListener("click", (event) => {
  event.preventDefault();
  openFinder();
});

finderClose?.addEventListener("click", closeFinder);
siteFinder?.addEventListener("click", (event) => {
  if (event.target === siteFinder) closeFinder();
});
siteFinder?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeFinder);
});

applyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!applyForm.checkValidity()) {
    applyForm.classList.add("has-errors");
    applyForm.reportValidity();
    applyForm.querySelector(":invalid")?.focus();
    if (applyNote) {
      applyNote.textContent = state.lang === "zh" ? "请先完整填写姓名、申请年级、意向项目与联系方式。" : "Please complete the student name, grade, programme and contact details.";
    }
    return;
  }
  applyForm.classList.remove("has-errors");
  applyForm.classList.add("is-submitted");
  const button = applyForm.querySelector("button[type='submit']");
  button.textContent = state.lang === "zh" ? "信息已完整填写" : "Details Complete";
  if (applyNote) {
    applyNote.textContent = state.lang === "zh" ? "信息已在本页完成校验。正式上线前还需接入招生系统，当前请前往“预约探校”继续联系招生团队。" : "Your details are complete. The admissions system still needs to be connected before launch; please continue via Book a Visit for now.";
  }
});

applyForm.querySelectorAll("input, select").forEach((field) => {
  field.addEventListener("input", () => {
    field.removeAttribute("aria-invalid");
    applyForm.classList.remove("has-errors");
  });
  field.addEventListener("invalid", () => field.setAttribute("aria-invalid", "true"));
});

quickClose?.addEventListener("click", () => {
  quickPanel?.classList.add("is-hidden");
  quickPanel?.setAttribute("aria-hidden", "true");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document
  .querySelectorAll(
      ".ai-school-home, .principal-editorial, .identity-current, .concordia-section, .learning-system, .school-rhythm, .visual-mosaic, .basis-spotlight, .curriculum, .detail-section, .academies-section, .community-section, .student-voices, .video-section, .campus-lens, .campus-journal, .tuition-section, .apply-section, .admissions-detail, .faq-section, .site-footer"
  )
  .forEach((node) => node.classList.add("reveal"));

document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("resize", updateScrollState);

renderMega();
renderCourse();
setLanguage("zh");
renderHeroSlide(0);
startHeroCarousel();
updateScrollState();

