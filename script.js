let sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.left = "0";
}

function closeMenu() {
  sideMenu.style.left = "-200px";
}

// --------------------------ACTIVE CLASS SCRITP----------------

let activeProduct = document.getElementsByClassName("previewImg");
let productImg = document.getElementById("productImg");
let activeCovers = document.getElementsByClassName("coverImg");

function activeBorder() {
  for (const activePrdt of activeProduct) {
    activePrdt.classList.remove("active");
  }
  event.currentTarget.classList.add("active");
}

function overLayering() {
  for (const activeLayer of activeCovers) {
    activeLayer.classList.remove("activeCover");
  }
  event.currentTarget.classList.add("activeCover");
}

activeProduct[0].onclick = function () {
  productImg.src = "./images/image-product-1.jpg";
  overLayering();
  activeBorder();
};

activeProduct[1].onclick = function () {
  productImg.src = "./images/image-product-2.jpg";
  overLayering();
  activeBorder();
};

activeProduct[2].onclick = function () {
  productImg.src = "./images/image-product-3.jpg";
  overLayering();
  activeBorder();
};

activeProduct[3].onclick = function () {
  productImg.src = "./images/image-product-4.jpg";
  overLayering();
  activeBorder();
};

// Cart Toggle

let cartHeight = document.querySelector(".cartNotification-page");

function cartNewHeight() {
  cartHeight.classList.toggle("newHeight");
}
