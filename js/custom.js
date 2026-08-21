// 站点自定义交互（阅读进度条 + 移动端目录折叠）

// 阅读进度条
(() => {
  var bar = document.createElement("div");
  bar.className = "reading-progress";
  document.body.appendChild(bar);

  var update = () => {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    bar.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + "%";
  };

  document.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

// 移动端目录折叠
(() => {
  var toc = document.querySelector(".toc-nav");
  if (!toc) return;

  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = "toc-toggle";
  btn.textContent = "目录";
  toc.parentNode.insertBefore(btn, toc);

  btn.addEventListener("click", () => {
    toc.classList.toggle("open");
    btn.classList.toggle("open");
  });
})();
