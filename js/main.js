const btn = document.querySelector(".btn-main");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

btn.addEventListener("click", () => {
  btn1.classList.toggle("btn-active");
  btn2.classList.toggle("btn-active");
});
