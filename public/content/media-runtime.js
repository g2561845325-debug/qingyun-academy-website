(() => {
  const media = window.QINGYUN_MEDIA;
  if (!media?.images) return;

  document.querySelectorAll("[data-media-key]").forEach((element) => {
    const item = media.images[element.dataset.mediaKey];
    if (!item?.src) return;

    if (element instanceof HTMLImageElement) {
      element.src = item.src;
      if (item.alt) element.alt = item.alt;
      if (item.position) element.style.objectPosition = item.position;
      return;
    }

    element.style.setProperty("--media-image", `url("${item.src}")`);
    if (item.position) element.style.setProperty("--media-position", item.position);
    if (item.alt) element.setAttribute("aria-label", item.alt);
  });
})();
