let ele = document.querySelector(".click");
let megaMenu = document.querySelector(".mega-menu");
ele.onclick = function (e) {
  e.preventDefault(e);
  megaMenu.classList.toggle("show");
};
document.addEventListener("click", function (e) {
  if (e.target != ele) {
    megaMenu.classList.remove("show");
  }
});
let btn = document.querySelector(".btn-up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
