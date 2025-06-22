// toggle menu on responsive design
let notVisible = document.querySelector(".notVisible");
let isVisible = document.querySelector("isVisible");

function toggle() {
  isVisible = false;
  if (isVisible) {
  }
}

//active nav-menu
let item = document.querySelectorAll(".nav-list-item");
let currentLocation = location.href;

for (let i = 0; i < item.length; i++) {
  if (item[i].href === currentLocation) {
    item[i].className = "active";
  }
}
