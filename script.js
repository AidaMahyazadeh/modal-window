"use strict";
const openIran = document.querySelector(".modal1");
const openTehran = document.querySelector(".modal2");
const closeIran = document.querySelector(".close1");
const closeTehran = document.querySelector(".close2");
const iran = document.querySelector(".iran");
const tehran = document.querySelector(".tehran");
const overlay = document.querySelector(".overlay");
const btnCloseIran = function () {
  iran.classList.add("hidden");
  overlay.classList.add("hidden");
};
const btnCloseTehran = function () {
  tehran.classList.add("hidden");
  overlay.classList.add("hidden");
};

openIran.addEventListener("click", function () {
  iran.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
closeIran.addEventListener("click", btnCloseIran);
overlay.addEventListener("click", btnCloseIran);
closeTehran.addEventListener("click", btnCloseTehran);
overlay.addEventListener("click", btnCloseTehran);
openTehran.addEventListener("click", function () {
  tehran.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
closeTehran.addEventListener("click", btnCloseTehran);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !iran.classList.contains("hidden")) {
    iran.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !tehran.classList.contains("hidden")) {
    tehran.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
