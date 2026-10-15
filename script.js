"use strict";

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const navigation = Array.from(document.querySelectorAll(".section-nav a"));
const sections = navigation
  .map((link) => link.getAttribute("href"))
  .filter((href) => href && href.startsWith("#"))
  .map((href) => document.getElementById(href.slice(1)))
  .filter(Boolean);

function markCurrent(id) {
  for (const link of navigation) {
    const current = link.getAttribute("href") === "#" + id;
    link.classList.toggle("active", current);
    if (current) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}

let scheduled = false;
function updateNavigation() {
  scheduled = false;
  const threshold = Math.min(window.innerHeight * 0.35, 240);
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= threshold) current = section;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) current = sections[sections.length - 1];
  if (current) markCurrent(current.id);
}

window.addEventListener("scroll", () => {
  if (!scheduled) {
    scheduled = true;
    window.requestAnimationFrame(updateNavigation);
  }
}, { passive: true });
window.addEventListener("resize", updateNavigation);
window.addEventListener("hashchange", updateNavigation);
updateNavigation();
