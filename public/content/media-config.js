/*
 * 青云书院网站媒体配置
 *
 * 1. 把新图片放进 assets/images。
 * 2. 把新视频放进 assets/videos。
 * 3. 只修改下方 src / poster / position，不需要改页面结构。
 *
 * position 使用 CSS object-position 写法：
 * "center center"、"50% 30%"、"left center" 等。
 */
window.QINGYUN_MEDIA = {
  version: "2026-07-29",

  heroSlides: [
    {
      src: "./assets/images/p01-01.jpg",
      position: "center 38%",
    },
    {
      src: "./assets/images/p03-01.jpg",
      position: "center 42%",
    },
    {
      src: "./assets/images/p18-01.jpg",
      position: "center 42%",
    },
    {
      src: "./assets/images/p28-04.jpg",
      position: "center 50%",
    },
  ],

  images: {
    "home.principal": {
      src: "./assets/images/p06-01.jpg",
      alt: "青云书院初中部校长寄语",
      position: "center 34%",
    },
    "home.learningInquiry": {
      src: "./assets/images/p03-01.jpg",
      alt: "启发式项目学习课堂",
      position: "center center",
    },
    "home.learningWorld": {
      src: "./assets/images/p33-01.jpg",
      alt: "学生在多元环境中合作表达",
      position: "center 42%",
    },
    "home.videoPoster": {
      src: "./assets/images/p28-04.jpg",
      alt: "青云书院校园视频封面",
      position: "center 48%",
    },
    "home.videoGalleryMain": {
      src: "./assets/images/p28-04.jpg",
      alt: "青云书院深圳校园",
      position: "center 48%",
    },
    "home.videoGalleryLearning": {
      src: "./assets/images/p03-01.jpg",
      alt: "课堂项目学习",
      position: "center center",
    },
    "home.videoGalleryLife": {
      src: "./assets/images/p18-01.jpg",
      alt: "社团艺术活动",
      position: "center center",
    },
    "about.hero": {
      src: "./assets/images/p02-02.jpg",
      alt: "青云书院校园与学生",
      position: "center 45%",
    },
    "faculty.hero": {
      src: "./assets/images/p17-01.jpg",
      alt: "青云书院教师教研与协作",
      position: "center 44%",
    },
    "curriculum.hero": {
      src: "./assets/images/p03-01.jpg",
      alt: "青云书院项目学习课堂",
      position: "center 42%",
    },
    "academies.hero": {
      src: "./assets/images/p06-01.jpg",
      alt: "青云书院书院学习空间",
      position: "center 38%",
    },
    "admissions.hero": {
      src: "./assets/images/p28-04.jpg",
      alt: "青云书院预约探校",
      position: "center 50%",
    },
    "fees.hero": {
      src: "./assets/images/p29-01.jpg",
      alt: "青云书院学习空间",
      position: "center 46%",
    },
    "life.hero": {
      src: "./assets/images/p18-01.jpg",
      alt: "青云书院学生展示与活动",
      position: "center 42%",
    },
  },

  campusVideo: {
    /*
     * mode 可选：
     * "gallery"：继续使用当前校园影像图集。
     * "file"：播放 assets/videos 中的 MP4。
     * "embed"：播放腾讯视频、Bilibili、YouTube 等平台的嵌入地址。
     */
    mode: "gallery",
    src: "",
    type: "video/mp4",
    poster: "./assets/images/p28-04.jpg",
    embedUrl: "",
    title: "青云书院校园影像",
  },
};
