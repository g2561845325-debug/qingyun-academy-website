const detailChapterLinks = [...document.querySelectorAll(".detail-chapter-nav a")];
const detailChapters = detailChapterLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const detailObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      detailChapterLinks.forEach((link) => {
        link.classList.toggle("is-current", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-28% 0px -58%", threshold: 0.05 },
);

detailChapters.forEach((chapter) => detailObserver.observe(chapter));

detailChapterLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    const header = document.querySelector(".site-header");
    const top = target.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight || 0) - 18;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", link.getAttribute("href"));
  });
});
