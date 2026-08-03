import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = resolve(root, "public");

const images = {
  campus: "./assets/images/p01-01.jpg",
  community: "./assets/images/p02-02.jpg",
  learning: "./assets/images/p03-01.jpg",
  seminar: "./assets/images/p04-01.jpg",
  science: "./assets/images/p06-01.jpg",
  discussion: "./assets/images/p12-01.jpg",
  project: "./assets/images/p13-02.jpg",
  arts: "./assets/images/p14-01.jpg",
  sports: "./assets/images/p17-01.jpg",
  clubs: "./assets/images/p18-01.jpg",
  outdoors: "./assets/images/p19-03.jpg",
  portrait: "./assets/images/p25-01.jpg",
  visit: "./assets/images/p28-04.jpg",
  students: "./assets/images/p29-01.jpg",
  studio: "./assets/images/p29-02.jpg",
  collaboration: "./assets/images/p30-03.jpg",
  library: "./assets/images/p30-04.jpg",
  city: "./assets/images/p33-01.jpg",
};

const sections = {
  about: {
    label: "关于我们",
    english: "About Qingyun",
    home: "./about.html",
  },
  academics: {
    label: "课程设置",
    english: "Academics",
    home: "./curriculum.html",
  },
  admissions: {
    label: "招生入学",
    english: "Admissions",
    home: "./admissions.html",
  },
  life: {
    label: "校园生活",
    english: "Campus Life",
    home: "./life.html",
  },
};

const pages = [
  {
    file: "about-overview.html",
    section: "about",
    eyebrow: "Who We Are",
    title: "一所把成长放在真实关系中的学校。",
    lede: "青云书院初中部面向 G7-G8 学生，在扎实学术、双语表达、导师陪伴与真实项目之间建立稳定的学习节奏。",
    image: images.community,
    imageAlt: "青云书院学生在校园中交流",
    chapters: ["学校定位", "成长路径", "深圳连接"],
    copy: [
      "我们不把初中阶段理解为简单的课程过渡，而是把它视为学习方式、判断能力和人格内核逐渐成形的重要时期。",
      "青云书院初中部、凌云书院 G9X/G10X 与 One of School 构成连续而有弹性的成长路径，让学生在不同阶段获得适合自己的挑战与支持。",
      "学校位于深圳。科技、城市、文化与真实社会议题进入课堂，让学习与学生正在生活的世界保持连接。",
    ],
    quote: "真正的国际化，不是把学生带离本土，而是帮助他们从深圳出发理解世界。",
    related: ["mission.html", "values.html", "principal-message.html"],
  },
  {
    file: "mission.html",
    section: "about",
    eyebrow: "Mission",
    title: "让学生有能力提出问题，也有勇气承担答案。",
    lede: "知识不断更新，学校更需要帮助学生形成可迁移的思考方法、清晰表达与负责任的行动。",
    image: images.seminar,
    imageAlt: "学生围绕真实问题展开研讨",
    chapters: ["学习使命", "世界眼光", "行动责任"],
    copy: [
      "课堂从值得追问的问题出发，学生阅读、讨论、验证、建构观点，并用作品呈现理解。",
      "中英双语不是两套分离的课程，而是理解不同语境、组织复杂信息和参与跨文化交流的工具。",
      "我们重视结果，也重视结果如何产生。学生需要说明证据、反思过程，并理解自己的选择如何影响他人。",
    ],
    quote: "学习的终点不是得出一个标准答案，而是形成面对未知时仍能继续前进的方法。",
    related: ["about-overview.html", "values.html", "whole-person.html"],
  },
  {
    file: "values.html",
    section: "about",
    eyebrow: "Values",
    title: "尊重、诚实、好奇与担当，发生在每天的小事里。",
    lede: "价值观不是墙上的口号，而是课堂讨论、团队合作、反馈方式和校园关系共同形成的日常。",
    image: images.students,
    imageAlt: "青云书院学生共同学习",
    chapters: ["彼此尊重", "求真诚实", "主动担当"],
    copy: [
      "学生的观点会被认真倾听，同时也被要求清楚表达、理解差异并回应他人的证据。",
      "面对 AI 与海量信息，求真意味着核查来源、区分事实与判断，并诚实呈现自己的思考过程。",
      "从管理自己的时间，到完成团队中的角色，再到回应真实社区议题，担当在持续行动中形成。",
    ],
    quote: "被看见、被信任，也被认真要求，是青少年建立稳定内核的重要起点。",
    related: ["mission.html", "student-support.html", "parent-community.html"],
  },
  {
    file: "principal-message.html",
    section: "about",
    eyebrow: "Principal's Message",
    title: "让每一位学生在快速变化的时代里，找到自己的坐标。",
    lede: "学校要给予学生的不只是知识，更是安全感、方向感，以及把想法转化为行动的能力。",
    image: images.portrait,
    imageAlt: "青云书院校长与学生交流",
    chapters: ["写给学生", "写给家长", "共同成长"],
    copy: [
      "愿你保持好奇，不急着成为别人期待的样子；愿你敢于提问，也愿意为自己的判断寻找证据。",
      "我们理解每个家庭对成长节奏的关切。学校会用持续、具体、诚实的沟通，让家长看见学生真实的变化。",
      "教育不是单向塑造。教师、学生与家庭都在关系中学习，并在共同解决问题的过程中建立信任。",
    ],
    quote: "学校不是替学生规划一条唯一的路，而是让他们逐渐拥有选择道路的能力。",
    related: ["about-overview.html", "faculty.html", "parent-community.html"],
  },
  {
    file: "facilities.html",
    section: "about",
    eyebrow: "Campus",
    title: "空间不只是容器，它会告诉学生学习可以怎样发生。",
    lede: "教室、实验空间、图书馆、艺术与运动场域彼此连接，为独立学习、团队协作和公开展示提供支持。",
    image: images.campus,
    imageAlt: "青云书院校园空间",
    chapters: ["学习空间", "项目空间", "开放校园"],
    copy: [
      "灵活的教室布局支持讲授、研讨、小组合作和一对一反馈，让空间随学习任务变化。",
      "科学实验、设计制作和艺术创作拥有可持续使用的场域，作品能够经历构想、原型、测试与迭代。",
      "开放日将带领家庭走进真实课堂与学生作品，而不只是参观建筑。空间的价值，要从正在发生的学习中被理解。",
    ],
    quote: "好的校园设计让学生更愿意停留、讨论、尝试，也更自然地对自己的学习负责。",
    related: ["visit.html", "learning-areas.html", "arts-sports.html"],
  },
  {
    file: "whole-person.html",
    section: "about",
    eyebrow: "Whole-Person Education",
    title: "学术成长、关系能力与身心健康，本来就是同一件事。",
    lede: "初中阶段的自我意识、同伴关系与学习习惯快速变化，我们用课程、导师和校园共同体回应完整的学生。",
    image: images.outdoors,
    imageAlt: "学生在户外活动中合作",
    chapters: ["稳定内核", "关系能力", "身心节奏"],
    copy: [
      "学生通过目标设定、学习复盘和导师对话，逐渐认识自己的优势、困难与可行的下一步。",
      "团队项目、学生论坛和社团活动让沟通、协作与冲突解决成为可练习、可反馈的能力。",
      "体育、艺术、睡眠与压力管理进入日常支持体系，帮助学生理解高表现与可持续成长之间的关系。",
    ],
    quote: "我们希望学生既有向前冲的能力，也有照顾自己、理解他人和重新出发的能力。",
    related: ["student-support.html", "arts-sports.html", "clubs.html"],
  },
  {
    file: "student-support.html",
    section: "about",
    eyebrow: "Student Support",
    title: "支持不是等问题发生，而是让每个学生始终有人可以对话。",
    lede: "导师、学科教师与学生发展团队共同关注学习状态、同伴关系、情绪变化和长期目标。",
    image: images.discussion,
    imageAlt: "导师与学生开展小组讨论",
    chapters: ["导师对话", "学习支持", "成长协同"],
    copy: [
      "固定导师对话帮助学生梳理一周状态、设定阶段目标，并把模糊的压力转化为可以处理的问题。",
      "学科支持从具体学习证据出发，通过小组辅导、反馈面谈和学习策略调整回应真实需要。",
      "当学生需要更多帮助时，导师、家庭与相关教师形成清晰的协同方案，并持续追踪变化。",
    ],
    quote: "真正有效的支持，既让学生感到安全，也帮助他们逐渐学会支持自己。",
    related: ["advisory.html", "parent-community.html", "faculty.html"],
  },
  {
    file: "parent-community.html",
    section: "about",
    eyebrow: "Family Partnership",
    title: "家校沟通不只汇报结果，更共同理解成长。",
    lede: "我们用清晰、稳定、基于证据的沟通，帮助家庭看见学生的学习过程与下一阶段重点。",
    image: images.seminar,
    imageAlt: "学校与家庭共同交流学生成长",
    chapters: ["学习报告", "家长交流", "共同边界"],
    copy: [
      "阶段报告结合任务表现、作品、反馈和学生反思，呈现成绩之外的学习变化。",
      "家长会、主题工作坊与个别沟通围绕真实问题展开，让讨论落到可执行的支持方式。",
      "学校与家庭保持一致的成长期待，同时尊重青少年逐步建立独立性的需要。",
    ],
    quote: "当学校和家庭使用同一种诚实而尊重的语言，学生会获得更稳定的成长空间。",
    related: ["student-support.html", "admissions-faq.html", "contact-admissions.html"],
  },
  {
    file: "middle-school.html",
    section: "academics",
    eyebrow: "Grades 7-8",
    title: "初中不是过渡站，而是学习方式真正成形的阶段。",
    lede: "G7-G8 课程兼顾学术基础、双语表达、项目实践与自我管理，为后续国际课程与更复杂的学习建立底层能力。",
    image: images.learning,
    imageAlt: "青云书院初中部课堂",
    chapters: ["课程结构", "学习节奏", "成长证据"],
    copy: [
      "数学、科学、语言、人文、艺术与体育形成完整课程结构，核心学科保持足够深度，也彼此产生连接。",
      "每周学习在课堂理解、独立练习、项目协作、导师复盘和公开表达之间循环，让学生逐渐形成自己的方法。",
      "评价结合测验、作品、演示、过程记录与反思，帮助教师和家庭看见学生如何学习，而不仅是一次结果。",
    ],
    quote: "基础不是重复更多题目，而是能够迁移知识、解释方法并在新情境中继续思考。",
    related: ["learning-areas.html", "bilingual-learning.html", "ai-school.html"],
  },
  {
    file: "learning-areas.html",
    section: "academics",
    eyebrow: "Learning Areas",
    title: "学科保持各自的严谨，也在真实问题中彼此相遇。",
    lede: "我们以清晰的学科进阶保障基础，以跨学科任务帮助学生理解知识如何共同作用。",
    image: images.library,
    imageAlt: "学生在图书馆开展学科学习",
    chapters: ["数学与科学", "语言与人文", "艺术与健康"],
    copy: [
      "数学强调结构、推理与建模；科学强调观察、实验与证据，让学生能够解释现象并检验判断。",
      "中文、英文与人文课程共同发展阅读、论证、叙事和跨文化理解，让表达建立在充分理解之上。",
      "艺术与体育帮助学生发展感知、创造、身体能力与团队意识，使学习保持完整的人的尺度。",
    ],
    quote: "跨学科不是淡化学科，而是让扎实的学科能力在更复杂的世界里真正发挥作用。",
    related: ["math-science.html", "languages-humanities.html", "arts-wellbeing.html"],
  },
  {
    file: "math-science.html",
    section: "academics",
    eyebrow: "Mathematics & Science",
    title: "从规律、证据与模型中，建立解释世界的能力。",
    lede: "数学与科学课程把概念理解、方法练习、实验探究和真实建模放在同一条学习路径上。",
    image: images.science,
    imageAlt: "学生开展科学实验",
    chapters: ["概念理解", "实验探究", "真实建模"],
    copy: [
      "学生需要说明为什么，而不只是写出答案。图示、语言、公式和数据成为表达同一理解的不同方式。",
      "实验从提出可检验问题开始，经历变量设计、数据采集、误差分析与基于证据的结论。",
      "城市交通、环境数据和校园能耗等真实议题进入任务，让数学与科学成为作出判断的工具。",
    ],
    quote: "当学生能够解释方法、质疑数据并改进模型，知识才开始成为自己的能力。",
    related: ["learning-areas.html", "project-learning.html", "steam.html"],
  },
  {
    file: "languages-humanities.html",
    section: "academics",
    eyebrow: "Languages & Humanities",
    title: "阅读不同的世界，也清楚地表达自己的位置。",
    lede: "中文、英文与人文课程共同培养深度阅读、证据论证、叙事表达和跨文化理解。",
    image: images.library,
    imageAlt: "学生在阅读与讨论中学习",
    chapters: ["深度阅读", "双语表达", "公共议题"],
    copy: [
      "学生在文学、非虚构文本与多模态材料中辨认观点、语境、结构和隐含假设。",
      "双语写作与口头表达关注真实受众，让语言选择服务于思考、沟通和影响。",
      "历史、地理与社会议题通过资料分析、辩论和研究写作进入课堂，帮助学生形成有依据的公共判断。",
    ],
    quote: "国际化表达不是更快说出答案，而是先听懂差异，再让自己的观点清楚而有根据。",
    related: ["bilingual-learning.html", "learning-areas.html", "student-stories.html"],
  },
  {
    file: "arts-wellbeing.html",
    section: "academics",
    eyebrow: "Arts & Wellbeing",
    title: "创造力与身体感知，让学习保持完整和有生命力。",
    lede: "视觉艺术、表演、体育与健康课程给予学生表达、训练、合作和理解自我的不同路径。",
    image: images.arts,
    imageAlt: "学生在艺术空间创作",
    chapters: ["艺术表达", "运动表现", "身心健康"],
    copy: [
      "艺术课程从观察、材料与主题出发，让作品经历实验、选择、修改和公开呈现。",
      "体育课程发展体能、技能与团队协作，也帮助学生理解训练、恢复和长期表现之间的关系。",
      "健康教育关注睡眠、压力、饮食、数字使用和同伴关系，让学生形成可持续的生活判断。",
    ],
    quote: "好的表现不是短暂透支，而是理解身体、管理节奏并保持长期热情。",
    related: ["arts-sports.html", "whole-person.html", "creative-clubs.html"],
  },
  {
    file: "bilingual-learning.html",
    section: "academics",
    eyebrow: "Bilingual Learning",
    title: "双语不是标签，而是理解、表达与切换视角的能力。",
    lede: "不同学科依据学习目标使用适切的语言支持，让学生既能掌握概念，也能逐步参与更复杂的英文学习。",
    image: images.discussion,
    imageAlt: "学生在双语课堂中讨论",
    chapters: ["语言支架", "学科表达", "逐步独立"],
    copy: [
      "教师通过关键词、图示、句型与示范降低无关语言负担，同时保持学科任务应有的认知挑战。",
      "学生在解释概念、撰写报告、参与讨论和公开演示中积累各学科真正需要的语言。",
      "支持会随着能力提升逐步撤除，目标不是依赖翻译，而是能够直接用不同语言理解和表达。",
    ],
    quote: "语言支持的价值，是让学生进入更深的思考，而不是替他们绕开思考。",
    related: ["middle-school.html", "languages-humanities.html", "lingyun.html"],
  },
  {
    file: "ai-school.html",
    section: "academics",
    eyebrow: "Qingyun AI School",
    title: "会使用 AI，更要知道何时相信、如何核查、为什么负责。",
    lede: "AI School 将工具使用、信息判断、学科探究、创意制作与数字伦理嵌入真实学习任务。",
    image: images.project,
    imageAlt: "学生在项目中使用数字工具",
    chapters: ["AI 素养", "人机协作", "数字责任"],
    copy: [
      "学生理解生成式 AI 的基本能力与局限，学习提出清晰问题、比较结果并检查来源。",
      "AI 可以帮助整理信息、生成原型和获得反馈，但核心判断、作品立意与最终责任始终属于学生。",
      "课程讨论偏见、隐私、版权、学术诚信与技术影响，让效率与责任被放在同一个决策中。",
    ],
    quote: "我们不是把答案交给 AI，而是借助 AI 把问题问得更深、把判断做得更扎实。",
    related: ["ai-literacy.html", "digital-citizenship.html", "project-learning.html"],
  },
  {
    file: "ai-literacy.html",
    section: "academics",
    eyebrow: "AI Fluency",
    title: "从会操作工具，走向能判断工具。",
    lede: "AI 素养关注问题定义、提示设计、结果核验、过程记录与反思，而不只是获得更快的输出。",
    image: images.project,
    imageAlt: "学生设计和验证 AI 项目",
    chapters: ["提出问题", "核验结果", "记录过程"],
    copy: [
      "学生先厘清目标、受众与限制，再决定是否需要 AI，以及需要什么类型的协助。",
      "结果需要与原始资料、权威来源和现实观察相互验证，识别幻觉、偏见和不完整信息。",
      "学生保留关键提示、修改过程与使用说明，使作品的来源和个人贡献可以被理解。",
    ],
    quote: "真正的 AI 素养，体现在学生能清楚说明自己为什么这样使用，而不是只展示生成结果。",
    related: ["ai-school.html", "digital-citizenship.html", "project-learning.html"],
  },
  {
    file: "digital-citizenship.html",
    section: "academics",
    eyebrow: "Digital Citizenship",
    title: "技术能力越强，越需要清晰的边界与责任。",
    lede: "数字公民教育进入日常任务，帮助学生理解隐私、版权、偏见、社交影响和学术诚信。",
    image: images.collaboration,
    imageAlt: "学生共同讨论数字伦理议题",
    chapters: ["隐私边界", "版权诚信", "技术影响"],
    copy: [
      "学生学习判断哪些数据可以分享、如何管理账号与权限，以及何时需要征得他人同意。",
      "引用、授权、原创贡献和 AI 使用声明成为作品提交的一部分，让过程保持透明。",
      "课程讨论推荐算法、信息茧房和技术公平，理解产品设计如何影响个人与社会。",
    ],
    quote: "数字世界里的自由，来自理解后果并愿意为自己的选择负责。",
    related: ["ai-school.html", "ai-literacy.html", "values.html"],
  },
  {
    file: "project-learning.html",
    section: "academics",
    eyebrow: "Project Learning",
    title: "从真实问题出发，让作品成为学习证据。",
    lede: "项目不是课程结束后的装饰，而是整合知识、协作、制作、反馈与表达的学习过程。",
    image: images.collaboration,
    imageAlt: "学生围绕项目原型协作",
    chapters: ["问题定义", "原型迭代", "公开表达"],
    copy: [
      "学生先理解受众、情境与限制，把宽泛主题转化为可以研究和行动的问题。",
      "草图、模型、实验和用户反馈帮助作品不断修正，失败被转化为下一轮迭代的信息。",
      "项目通过展览、演示、答辩或真实交付面向受众，学生需要解释证据、选择与影响。",
    ],
    quote: "当作品需要面对真实受众，学生会自然地对质量、表达和责任提出更高要求。",
    related: ["steam.html", "ai-school.html", "events.html"],
  },
  {
    file: "steam.html",
    section: "academics",
    eyebrow: "STEAM",
    title: "让科学、工程、艺术与技术，在一件真实作品中相遇。",
    lede: "STEAM 学习以设计挑战、科学探究和工程制作连接学科知识，并通过赛事与展览延伸课堂。",
    image: images.science,
    imageAlt: "学生参与 STEAM 制作",
    chapters: ["设计挑战", "工程制作", "赛事展览"],
    copy: [
      "任务从真实需求或现象出发，学生需要定义指标、比较方案并作出有依据的设计选择。",
      "制作过程强调安全、精度、测试和记录，让创意能够被实现、复现与改进。",
      "校内项目展和适合的外部赛事提供更广阔受众，但评价首先关注学习深度与团队成长。",
    ],
    quote: "赛事不是学习的唯一终点，能持续改进作品和方法，才是更重要的能力。",
    related: ["project-learning.html", "math-science.html", "academic-clubs.html"],
  },
  {
    file: "lingyun.html",
    section: "academics",
    eyebrow: "Lingyun Academy",
    title: "G9X 与 G10X：在更高挑战中完成国际课程衔接。",
    lede: "凌云书院面向准备进入国际高中课程的学生，通过学术强化、英文学习、导师支持与升学探索建立连续路径。",
    image: images.learning,
    imageAlt: "凌云书院学生开展进阶学习",
    chapters: ["G9X 基础", "G10X 进阶", "衔接规划"],
    copy: [
      "G9X 聚焦学科基础、学术英语与学习方法，让学生适应更高强度、更强调自主性的课程要求。",
      "G10X 增加进阶学科任务、研究表达和路径选择，为后续课程组合与升学方向做好准备。",
      "导师与升学规划从学生兴趣、能力证据和长期目标出发，帮助家庭做出清晰而适合的选择。",
    ],
    quote: "衔接不是提前赶完更多课程，而是让学生具备进入下一阶段后持续成长的能力。",
    related: ["advisory.html", "bilingual-learning.html", "one-of-school.html"],
  },
  {
    file: "one-of-school.html",
    section: "academics",
    eyebrow: "One of School",
    title: "不是一套课程适合所有人，而是一人一案建立成长路径。",
    lede: "One of School 面向需要更个性化节奏与组合的学生，以目标、课程、导师和项目共同形成个人方案。",
    image: images.portrait,
    imageAlt: "学生在个性化导师支持中学习",
    chapters: ["个人画像", "课程组合", "阶段复盘"],
    copy: [
      "方案从兴趣、能力、学习状态、家庭期待与长期方向出发，形成清晰而可调整的个人画像。",
      "学生在核心学习要求之上组合项目、支持与进阶任务，保持挑战度与可持续性。",
      "阶段复盘使用具体作品、成绩、习惯与状态证据，决定继续、调整或增加新的目标。",
    ],
    quote: "个性化不是降低标准，而是找到学生愿意投入、能够坚持并真正产生进步的路径。",
    related: ["advisory.html", "lingyun.html", "student-support.html"],
  },
  {
    file: "advisory.html",
    section: "academics",
    eyebrow: "Advisory",
    title: "导师把课程、状态与长期方向连接成一条线。",
    lede: "导师制度帮助学生理解自己的学习证据、管理节奏、处理困难，并逐步形成对未来选择的判断。",
    image: images.discussion,
    imageAlt: "导师与学生开展成长对话",
    chapters: ["目标设定", "过程反馈", "路径选择"],
    copy: [
      "目标从具体而可观察的行为开始，避免只留下“更努力”这样的模糊期待。",
      "导师结合教师反馈、作品、成绩与学生自评，帮助学生理解进步和困难真正发生在哪里。",
      "升学与生涯探索不从单一排名开始，而从兴趣、能力、价值观和真实体验逐渐收敛方向。",
    ],
    quote: "导师不会替学生做选择，但会帮助他们看清选择背后的依据与代价。",
    related: ["student-support.html", "lingyun.html", "one-of-school.html"],
  },
  {
    file: "admissions-process.html",
    section: "admissions",
    eyebrow: "How to Apply",
    title: "把每一步说明白，让家庭把注意力留给真正重要的选择。",
    lede: "从初次了解、探校、评估到录取确认，招生流程保持清晰、直接，并为家庭预留充分沟通空间。",
    image: images.visit,
    imageAlt: "家庭到访青云书院校园",
    chapters: ["了解学校", "参加评估", "确认入学"],
    copy: [
      "通过官网、咨询和开放日了解课程、校园生活与书院路径，先判断教育理念是否适合孩子。",
      "评估结合学习基础、英文沟通、思考方式与学生状态，帮助学校和家庭共同判断匹配度。",
      "收到录取结果后，家庭完成费用确认、材料提交和入学准备，并与导师团队建立首次联系。",
    ],
    quote: "招生不是筛选一个看起来完美的学生，而是判断学校能否真正支持他的下一阶段。",
    related: ["visit.html", "assessment.html", "enrollment.html"],
  },
  {
    file: "visit.html",
    section: "admissions",
    eyebrow: "Visit Qingyun",
    title: "走进真实课堂，比任何宣传语更接近学校本身。",
    lede: "探校将带领家庭理解课程节奏、空间使用、学生作品与支持体系，并预留充分问答时间。",
    image: images.campus,
    imageAlt: "青云书院校园开放日",
    chapters: ["参观校园", "课程说明", "个别咨询"],
    copy: [
      "参观路线覆盖主要学习、项目、艺术和运动空间，并说明它们如何在日常课程中使用。",
      "课程说明聚焦 G7-G8 学习结构、AI School、凌云书院和 One of School 的真实差异。",
      "家庭可围绕孩子当前状态、课程选择、评估与费用进行个别咨询，获得下一步建议。",
    ],
    quote: "一次好的探校，不是让家庭听到更多形容词，而是看见学习如何真实发生。",
    related: ["contact-admissions.html", "assessment.html", "facilities.html"],
  },
  {
    file: "assessment.html",
    section: "admissions",
    eyebrow: "Assessment",
    title: "评估不是寻找标准答案，而是理解学生如何学习。",
    lede: "入学评估关注基础能力、英文沟通、问题解决、学习习惯与当前状态，为匹配课程提供依据。",
    image: images.seminar,
    imageAlt: "学生参加入学交流与评估",
    chapters: ["基础评估", "英文交流", "综合面谈"],
    copy: [
      "学术评估用于了解数学、阅读与相关基础，不以超前学习作为唯一优势。",
      "英文交流关注理解、表达与互动意愿，并结合申请年级判断后续支持需要。",
      "学生与家庭面谈帮助学校理解成长经历、兴趣、期待与当前挑战，形成更完整的判断。",
    ],
    quote: "评估的意义，是让学校知道从哪里开始支持，而不是只给学生贴上一个标签。",
    related: ["admissions-process.html", "visit.html", "admissions-faq.html"],
  },
  {
    file: "scholarships.html",
    section: "admissions",
    eyebrow: "Scholarships",
    title: "奖励持续的投入、真实的潜力与对共同体的贡献。",
    lede: "奖学金政策以当年度正式发布信息为准，评审将结合学术表现、作品、特长与综合面谈。",
    image: images.students,
    imageAlt: "青云书院学生展示学习成果",
    chapters: ["申请资格", "评审材料", "年度复核"],
    copy: [
      "家庭在完成入学申请后，根据当年度奖学金通知确认资格与申请时间。",
      "评审材料可包含成绩、作品、赛事或活动经历，以及能够说明持续投入的真实证据。",
      "部分奖学金需要年度复核，关注学生进入学校后的学习表现、成长状态与共同体参与。",
    ],
    quote: "奖学金不是对单一成绩的奖励，而是对长期投入和未来可能性的支持。",
    related: ["fees.html", "assessment.html", "contact-admissions.html"],
  },
  {
    file: "enrollment.html",
    section: "admissions",
    eyebrow: "Enrollment",
    title: "从确认录取到开学，让学生提前建立熟悉感。",
    lede: "入学准备涵盖材料、费用、课程信息、设备与新生连接，帮助家庭有序进入新的学习阶段。",
    image: images.students,
    imageAlt: "新生在青云书院校园交流",
    chapters: ["确认录取", "材料准备", "新生连接"],
    copy: [
      "家庭根据录取通知完成确认、缴费与学籍相关材料提交，招生团队会说明关键时间节点。",
      "开学前获得课程、设备、校服、交通与校园生活等准备清单，减少信息遗漏。",
      "新生说明会和导师联系帮助学生提前认识同伴、理解规则并提出自己的问题。",
    ],
    quote: "好的入学准备让学生在第一天到来之前，就已经知道自己可以向谁求助、如何开始。",
    related: ["admissions-process.html", "fees.html", "student-support.html"],
  },
  {
    file: "admissions-faq.html",
    section: "admissions",
    eyebrow: "Admissions FAQ",
    title: "家长最常问的问题，我们尽量直接回答。",
    lede: "关于年级、课程、英文基础、评估、费用和书院路径的常见问题集中呈现，具体政策以当年度招生说明为准。",
    image: images.visit,
    imageAlt: "招生老师与家庭进行咨询",
    chapters: ["适合谁", "如何评估", "如何选择"],
    copy: [
      "学校重点面向希望在扎实学术基础上发展双语表达、自主学习和项目能力的学生。",
      "评估并不要求学生提前完成超纲课程，会结合申请年级理解当前基础与后续支持需要。",
      "初中部、凌云书院与 One of School 的选择需要综合年龄、基础、目标、节奏与家庭期待。",
    ],
    quote: "没有一个网页能替代对具体学生的理解，关键问题建议在探校或咨询中进一步讨论。",
    related: ["contact-admissions.html", "visit.html", "assessment.html"],
  },
  {
    file: "contact-admissions.html",
    section: "admissions",
    eyebrow: "Contact Admissions",
    title: "带着孩子的真实情况来，我们一起把问题问清楚。",
    lede: "招生咨询可以从课程、年级、评估、费用或书院路径开始，团队会根据家庭关注点提供下一步建议。",
    image: images.visit,
    imageAlt: "青云书院招生咨询",
    chapters: ["在线咨询", "预约探校", "准备问题"],
    copy: [
      "提交学生年级、当前课程与主要关注点，帮助招生团队在首次沟通前做好准备。",
      "预约探校时可选择重点了解课程、书院路径、校园生活或个性化支持。",
      "建议家庭提前列出最关心的三到五个问题，并鼓励学生带着自己的问题参与交流。",
    ],
    quote: "好的咨询不是更快做决定，而是让家庭拥有足够信息做出适合自己的决定。",
    related: ["visit.html", "admissions-process.html", "admissions-faq.html"],
  },
  {
    file: "clubs.html",
    section: "life",
    eyebrow: "Club Life",
    title: "兴趣不是课余点缀，它可以成长为长期投入。",
    lede: "学术、科创、艺术、体育与公益社团为学生提供选择、组织、合作和持续改进的真实场域。",
    image: images.clubs,
    imageAlt: "青云书院社团活动",
    chapters: ["学生选择", "长期投入", "公开成果"],
    copy: [
      "学生根据兴趣与时间选择社团，也可以在教师支持下提出新的社团方向。",
      "稳定的活动周期让兴趣经历入门、练习、协作与提升，而不只是一次性体验。",
      "展演、赛事、分享会和校园服务让社团成果面对真实受众，并产生新的责任。",
    ],
    quote: "社团最珍贵的部分，不是数量，而是学生愿意为一件事持续投入并和别人一起把它做好。",
    related: ["academic-clubs.html", "creative-clubs.html", "sports-clubs.html"],
  },
  {
    file: "academic-clubs.html",
    section: "life",
    eyebrow: "Academic Clubs",
    title: "把课堂中的好奇，带到更远的探索里。",
    lede: "数学、科学、阅读、辩论、商业与科技社团为学生提供更开放的专题、赛事和自主研究机会。",
    image: images.science,
    imageAlt: "学生参加学术与科创社团",
    chapters: ["专题探索", "赛事准备", "学生研究"],
    copy: [
      "社团主题可以来自课堂延伸，也可以来自学生正在关注的现实问题。",
      "赛事训练强调方法、协作和复盘，让结果服务于更长期的能力发展。",
      "学生在教师或导师支持下设计小型研究、调查或作品，并向同伴分享过程。",
    ],
    quote: "真正有价值的学术社团，会让学生在没有标准答案的地方继续保持严谨。",
    related: ["clubs.html", "steam.html", "project-learning.html"],
  },
  {
    file: "creative-clubs.html",
    section: "life",
    eyebrow: "Creative Clubs",
    title: "让想法通过声音、影像、舞台与材料被看见。",
    lede: "视觉艺术、音乐、戏剧、设计、摄影与媒体社团支持学生发展个人表达，也学习共同完成作品。",
    image: images.studio,
    imageAlt: "学生在创意社团中创作",
    chapters: ["个人表达", "共同创作", "校园展演"],
    copy: [
      "学生在不同媒介中寻找适合自己的表达方式，并学习接受反馈、修改作品。",
      "大型作品需要分工、排练、制作和时间管理，创意因此成为真实的团队实践。",
      "校园展览、音乐会、戏剧和媒体发布让作品进入共同体，也让学生理解受众。",
    ],
    quote: "创造力不是突然出现的灵感，而是在持续观察、练习和修改中变得清晰。",
    related: ["clubs.html", "arts-sports.html", "student-stories.html"],
  },
  {
    file: "sports-clubs.html",
    section: "life",
    eyebrow: "Sports Clubs",
    title: "训练身体，也训练团队、节奏与韧性。",
    lede: "球类、体能与户外运动社团在安全、技术和持续训练的基础上，让学生体验竞争与合作。",
    image: images.sports,
    imageAlt: "学生参加体育社团",
    chapters: ["技术训练", "团队协作", "恢复健康"],
    copy: [
      "训练根据学生基础设定合理进阶，在重复中建立技术、体能与动作理解。",
      "队伍中的沟通、角色和共同目标，让学生学习在压力下支持同伴并承担责任。",
      "热身、恢复、营养和睡眠教育帮助学生理解长期表现，而不是追求短期透支。",
    ],
    quote: "体育给学生的，不只是一次胜负，而是面对困难时仍能保持节奏、继续行动。",
    related: ["clubs.html", "arts-sports.html", "whole-person.html"],
  },
  {
    file: "events.html",
    section: "life",
    eyebrow: "School Events",
    title: "校园活动把不同年级、学科与兴趣连接起来。",
    lede: "项目展、主题周、学生论坛、艺术展演与体育赛事构成共同体的重要节奏。",
    image: images.students,
    imageAlt: "学生参加校园主题活动",
    chapters: ["项目展示", "主题活动", "学生参与"],
    copy: [
      "项目展让学生向家庭、同伴和真实受众解释问题、证据与作品迭代。",
      "主题周围绕科学、文化、阅读、艺术或社会议题集中展开，创造跨课程连接。",
      "学生参与策划、主持、传播与现场执行，让活动本身成为组织与领导力学习。",
    ],
    quote: "一场成熟的校园活动，不只让学生参与，更让他们拥有真实的角色和责任。",
    related: ["calendar.html", "student-stories.html", "project-learning.html"],
  },
  {
    file: "calendar.html",
    section: "life",
    eyebrow: "School Calendar",
    title: "清晰的校园节奏，让学习、活动与家庭安排彼此协调。",
    lede: "年度日历呈现学期节点、项目展示、主题活动、家长交流与开放日，具体日期以学校最新通知为准。",
    image: images.city,
    imageAlt: "深圳城市与青云书院校园生活",
    chapters: ["学期节奏", "展示活动", "家庭连接"],
    copy: [
      "开学、阶段反馈、假期与学期结束等关键节点帮助学生规划长期任务。",
      "项目展、艺术展演、体育赛事与主题周构成每学期可期待的公共时刻。",
      "家长会、工作坊与开放日提前进入日历，便于家庭参与并保持稳定沟通。",
    ],
    quote: "节奏感让忙碌变得可理解，也让学生有机会提前规划、完成和复盘。",
    related: ["events.html", "visit.html", "parent-community.html"],
  },
  {
    file: "student-stories.html",
    section: "life",
    eyebrow: "Student Voices",
    title: "用学生自己的语言，讲述学习真正发生的时刻。",
    lede: "学生故事关注一次改变、一个作品、一段关系或一个仍在继续的问题，让校园呈现更真实的质感。",
    image: images.students,
    imageAlt: "青云书院学生分享自己的故事",
    chapters: ["学习转变", "作品背后", "共同体关系"],
    copy: [
      "有些变化来自掌握新的学习方法，有些来自第一次敢于在公开场合表达自己的观点。",
      "作品故事记录构思、失败、反馈和修改，让最终成果背后的学习过程被看见。",
      "同伴、教师和导师关系常常成为学生愿意继续尝试的重要支点。",
    ],
    quote: "最有说服力的学校故事，不是完美结果，而是学生能够清楚说出自己如何发生变化。",
    related: ["events.html", "clubs.html", "principal-message.html"],
  },
  {
    file: "arts-sports.html",
    section: "life",
    eyebrow: "Arts & Sports",
    title: "舞台与赛场，让表达、纪律和团队精神同时发生。",
    lede: "艺术展演与体育活动为学生提供不同的高投入体验，也让校园拥有共同记忆。",
    image: images.arts,
    imageAlt: "学生参加艺术与体育活动",
    chapters: ["艺术舞台", "体育赛场", "共同成长"],
    copy: [
      "音乐、戏剧、视觉艺术和媒体作品通过校内外舞台进入真实交流。",
      "体育课程与赛事强调技术、策略、合作和尊重规则，让竞争保持教育意义。",
      "排练与训练中的坚持、反馈和团队责任，常常迁移到学生的学习与生活中。",
    ],
    quote: "舞台和赛场让学生发现，表现力来自长期准备，也来自对团队的信任。",
    related: ["creative-clubs.html", "sports-clubs.html", "arts-wellbeing.html"],
  },
  {
    file: "world-classroom.html",
    section: "life",
    eyebrow: "World Classroom",
    title: "让城市、自然与文化现场成为课程的一部分。",
    lede: "行走课堂围绕明确的学习问题展开，通过观察、访谈、数据、记录与作品连接真实世界。",
    image: images.outdoors,
    imageAlt: "学生参与户外研学与城市探索",
    chapters: ["城市学习", "自然探索", "跨文化体验"],
    copy: [
      "深圳的科技企业、公共空间、社区与城市议题为学生提供丰富的研究现场。",
      "自然观察、生态调查和户外挑战帮助学生理解环境，也发展身体与团队能力。",
      "跨文化体验强调准备、尊重、交流和回到课堂后的反思，而不只是到此一游。",
    ],
    quote: "当学生带着问题走进世界，旅行才会真正转化为学习。",
    related: ["project-learning.html", "events.html", "whole-person.html"],
  },
  {
    file: "teaching-practice.html",
    section: "about",
    eyebrow: "Teaching Practice",
    title: "课堂的专业感，来自教师对学习过程的细致设计。",
    lede: "教师以清晰目标、真实问题、及时反馈和学生作品组织课堂，让理解能够被观察、被讨论、被继续推进。",
    image: images.seminar,
    imageAlt: "教师与学生在课堂中共同研讨",
    chapters: ["问题设计", "课堂反馈", "作品证据"],
    copy: [
      "问题既连接学科核心概念，也为不同基础的学生保留进入和继续深入的空间。",
      "教师通过提问、观察、短任务与个别对话获得学习证据，并及时调整节奏与支持。",
      "作品、解释和修改记录共同呈现学生如何理解，让评价真正服务于下一步学习。",
    ],
    quote: "好的课堂不是教师说得更多，而是学生的思考被更清楚地看见和推进。",
    related: ["faculty.html", "faculty-development.html", "project-learning.html"],
  },
  {
    file: "faculty-development.html",
    section: "about",
    eyebrow: "Faculty Development",
    title: "教师也在共同学习，课堂才能持续更新。",
    lede: "共同备课、课堂观察、案例讨论与专业培训构成教师发展的日常机制。",
    image: images.discussion,
    imageAlt: "青云书院教师团队开展专业研讨",
    chapters: ["共同备课", "课堂观察", "专业研究"],
    copy: [
      "教师围绕目标、任务、学生证据与常见困难共同设计课程，而不是只共享课件。",
      "课堂观察聚焦具体学习行为，并通过建设性反馈改进提问、节奏和支持方式。",
      "专业研究连接学科前沿、青少年发展与 AI 时代的新议题，让课程保持开放和严谨。",
    ],
    quote: "一所学习型学校，首先需要拥有一群持续学习并愿意公开讨论实践的教师。",
    related: ["faculty.html", "teaching-practice.html", "mission.html"],
  },
  {
    file: "fees-inclusions.html",
    section: "admissions",
    eyebrow: "Fee Details",
    title: "把费用包含与不包含的部分说明清楚。",
    lede: "正式费用以当年度合同与通知为准，本页帮助家庭理解学费、评估费及可能发生的第三方费用类别。",
    image: images.visit,
    imageAlt: "招生团队向家庭说明费用信息",
    chapters: ["学费包含", "第三方费用", "正式依据"],
    copy: [
      "学费主要对应当学年课程教学、常规学习支持与学校安排的基础校园活动。",
      "校车、住宿、餐费、国际考试、外出实践、游学和签证等通常根据实际选择另行发生。",
      "最终金额、退费与缴费约定以正式合同、录取通知及当年度学校文件为准。",
    ],
    quote: "费用信息越透明，家庭越能把注意力放在课程匹配与孩子成长上。",
    related: ["fees.html", "payment-timeline.html", "scholarships.html"],
  },
  {
    file: "payment-timeline.html",
    section: "admissions",
    eyebrow: "Payment Timeline",
    title: "从评估到注册，每个费用节点都有明确对应事项。",
    lede: "家庭会在评估、录取确认与学籍注册等阶段收到正式说明，避免因信息分散影响安排。",
    image: images.visit,
    imageAlt: "招生团队与家庭确认入学安排",
    chapters: ["评估阶段", "录取确认", "注册入学"],
    copy: [
      "报名后根据当年度招生说明完成评估相关费用，并确认测试或面谈安排。",
      "收到录取结果后，在规定时间内完成学位确认及相关缴费手续。",
      "注册阶段提交所需材料并完成剩余手续，学校随后发送开学准备信息。",
    ],
    quote: "所有关键节点都应有正式文件作为依据，家庭不需要依赖零散口头信息。",
    related: ["fees.html", "enrollment.html", "admissions-process.html"],
  },
  {
    file: "g9x.html",
    section: "academics",
    eyebrow: "Lingyun G9X",
    title: "G9X：稳住基础，也开始适应更高强度的国际课程学习。",
    lede: "G9X 聚焦学科进阶、学术英语、研究表达与自我管理，为进入后续课程建立可靠起点。",
    image: images.learning,
    imageAlt: "凌云书院 G9X 学生学习",
    chapters: ["学科进阶", "英文衔接", "学习管理"],
    copy: [
      "课程在已有基础上增加概念深度、综合任务和解释要求，帮助学生完成学习方式转换。",
      "学术英语进入阅读、讨论、报告和展示，让语言能力与学科学习同步发展。",
      "导师帮助学生管理任务、复盘反馈并建立长期计划，逐渐提高学习自主性。",
    ],
    quote: "G9X 的关键不是更快，而是建立能够支持下一阶段持续进步的节奏。",
    related: ["lingyun.html", "g10x.html", "bilingual-learning.html"],
  },
  {
    file: "g10x.html",
    section: "academics",
    eyebrow: "Lingyun G10X",
    title: "G10X：在更清晰的方向中，提升深度与选择能力。",
    lede: "G10X 通过进阶学科、研究任务与路径咨询，帮助学生为国际高中课程组合和长期方向做好准备。",
    image: images.project,
    imageAlt: "凌云书院 G10X 学生开展进阶项目",
    chapters: ["进阶学科", "研究表达", "路径选择"],
    copy: [
      "学生在关键学科中进入更复杂的概念、数据和问题情境，形成能够迁移的理解。",
      "研究、写作和答辩任务要求学生组织来源、论证观点并回应质询。",
      "课程选择结合兴趣、能力证据与长期方向，避免只根据短期热门作出决定。",
    ],
    quote: "选择越重要，越需要建立在对自己和课程真实要求的理解之上。",
    related: ["lingyun.html", "g9x.html", "advisory.html"],
  },
  {
    file: "academic-pathway.html",
    section: "academics",
    eyebrow: "Academic Pathway",
    title: "把课程、导师与长期目标连接成可调整的成长路径。",
    lede: "成长路径不是一次决定，而是在学习证据、真实体验与阶段反思中不断变得清晰。",
    image: images.city,
    imageAlt: "学生从深圳出发规划国际化成长路径",
    chapters: ["认识自己", "理解选择", "阶段调整"],
    copy: [
      "学生通过课程表现、作品、活动与导师对话逐渐形成对兴趣和优势的可靠认识。",
      "学校帮助学生理解不同课程和方向的真实要求，而不是只关注名称与结果。",
      "阶段复盘允许路径调整，让新的证据和成长变化进入下一步规划。",
    ],
    quote: "好的规划不是提前锁定唯一答案，而是让学生越来越有能力作出下一次选择。",
    related: ["advisory.html", "lingyun.html", "one-of-school.html"],
  },
];

const pageByFile = new Map(pages.map((page) => [page.file, page]));

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function relatedTitle(file) {
  if (file === "faculty.html") return "师资团队";
  if (file === "fees.html") return "费用标准";
  return pageByFile.get(file)?.title || "继续探索";
}

function renderPage(page) {
  const section = sections[page.section];
  const related = page.related
    .map((file, index) => {
      const relatedPage = pageByFile.get(file);
      const image = relatedPage?.image || page.image;
      return `
        <a class="detail-related-link" href="./${file}">
          <span>0${index + 1}</span>
          <img loading="lazy" decoding="async" src="${image}" alt="" />
          <strong>${escapeHtml(relatedTitle(file))}</strong>
          <small>继续阅读</small>
        </a>`;
    })
    .join("");

  const chapters = page.chapters
    .map(
      (chapter, index) => `
        <a href="#chapter-${index + 1}">
          <span>0${index + 1}</span>
          <strong>${escapeHtml(chapter)}</strong>
        </a>`,
    )
    .join("");

  const content = page.copy
    .map(
      (copy, index) => `
        <section class="detail-chapter" id="chapter-${index + 1}">
          <div class="detail-chapter-index">0${index + 1}</div>
          <div class="detail-chapter-copy">
            <p class="detail-eyebrow">${escapeHtml(page.chapters[index])}</p>
            <h2>${escapeHtml(page.chapters[index])}，从真实学习中发生。</h2>
            <p>${escapeHtml(copy)}</p>
          </div>
          ${
            index === 1
              ? `<figure class="detail-inline-visual"><img loading="lazy" decoding="async" src="${page.image}" alt="${escapeHtml(page.imageAlt)}" /></figure>`
              : ""
          }
        </section>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(page.title)} | 青云书院</title>
    <meta name="description" content="${escapeHtml(page.lede)}" />
    <link rel="icon" href="./assets/cca-mark-29.png" />
    <link rel="stylesheet" href="./styles.css?v=20260731" />
    <link rel="stylesheet" href="./editorial.css?v=20260731" />
    <link rel="stylesheet" href="./navigation-v2.css?v=20260803" />
    <link rel="stylesheet" href="./detail-pages.css?v=20260731" />
  </head>
  <body class="subpage detail-page" data-section="${page.section}">
    <header class="site-header subpage-header qy-header">
      <a class="brand" href="./index.html#top" aria-label="青云书院首页">
        <img loading="eager" decoding="async" class="brand-logo" src="./assets/cca-logo-29.png" alt="Cyan Clouds Academy CCA 青云书院" />
      </a>
      <nav class="desktop-nav" aria-label="主导航"></nav>
      <button class="menu-button" id="menuButton" type="button" aria-label="打开网站导航" aria-expanded="false">
        <span></span><span></span>
      </button>
    </header>

    <section class="detail-hero">
      <img loading="eager" decoding="async" fetchpriority="high" src="${page.image}" alt="${escapeHtml(page.imageAlt)}" />
      <div class="detail-hero-shade"></div>
      <div class="detail-hero-copy">
        <p>${escapeHtml(page.eyebrow)} · ${escapeHtml(section.english)}</p>
        <h1>${escapeHtml(page.title)}</h1>
        <div class="detail-hero-lede">${escapeHtml(page.lede)}</div>
      </div>
    </section>

    <main>
      <nav class="detail-breadcrumb" aria-label="面包屑">
        <a href="./index.html">首页</a>
        <span>/</span>
        <a href="${section.home}">${escapeHtml(section.label)}</a>
        <span>/</span>
        <strong>${escapeHtml(page.eyebrow)}</strong>
      </nav>

      <nav class="detail-chapter-nav" aria-label="本页导航">
        ${chapters}
      </nav>

      <section class="detail-intro">
        <p class="detail-eyebrow">${escapeHtml(page.eyebrow)}</p>
        <h2>${escapeHtml(page.lede)}</h2>
        <p>本页从三个层面展开，帮助家庭和学生快速理解这一主题如何进入课程、关系与日常校园生活。</p>
      </section>

      <div class="detail-content">
        ${content}
      </div>

      <blockquote class="detail-quote">
        <p>“${escapeHtml(page.quote)}”</p>
        <cite>Qingyun Academy · Shenzhen</cite>
      </blockquote>

      <section class="detail-related">
        <div class="detail-related-heading">
          <p class="detail-eyebrow">Continue Exploring</p>
          <h2>沿着这条路径，继续了解青云。</h2>
        </div>
        <div class="detail-related-grid">${related}</div>
      </section>

      <section class="detail-cta">
        <img loading="lazy" decoding="async" src="${images.visit}" alt="预约探访青云书院" />
        <div>
          <p class="detail-eyebrow">Visit Qingyun</p>
          <h2>真正理解一所学校，最好从一次面对面的到访开始。</h2>
          <a href="./visit.html">预约探校</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-brand">
        <img loading="lazy" decoding="async" src="./assets/cca-logo-29-footer.png" alt="Cyan Clouds Academy CCA 青云书院" />
        <p>深圳 · 国际化初中与书院体系</p>
      </div>
      <div class="footer-links">
        <a href="./about.html">关于我们</a>
        <a href="./curriculum.html">课程设置</a>
        <a href="./admissions.html">招生入学</a>
        <a href="./life.html">校园生活</a>
        <a href="./fees.html">费用标准</a>
        <a href="./visit.html">预约探校</a>
      </div>
      <div class="footer-meta">
        <span>中国 · 深圳</span>
        <a href="https://cyancloudsacademy.com">cyancloudsacademy.com</a>
        <span>© 2026 Cyan Clouds Academy</span>
      </div>
    </footer>

    <script src="./unified-nav.js?v=20260803"></script>
    <script src="./detail-pages.js?v=20260731"></script>
  </body>
</html>
`;
}

await mkdir(publicDir, { recursive: true });
await Promise.all(
  pages.map((page) =>
    writeFile(resolve(publicDir, page.file), renderPage(page), "utf8"),
  ),
);

console.log(`Generated ${pages.length} Qingyun detail pages.`);
