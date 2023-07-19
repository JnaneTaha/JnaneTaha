// Gallery 1
const next1El = document.querySelector(".RIGHT1");
const prev1El = document.querySelector(".LEFT1");
const imageContainer1El = document.querySelector(".image-container1");
const imgs1El = document.getElementsByClassName("IMG1");
let currentImg1 = 1;
let timeout1;

next1El.addEventListener("click", () => {
  currentImg1++;
  clearTimeout(timeout1);
  updateImg1();
});

prev1El.addEventListener("click", () => {
  currentImg1--;
  clearTimeout(timeout1);
  updateImg1();
});

// Gallery 2
const next2El = document.querySelector(".RIGHT2");
const prev2El = document.querySelector(".LEFT2");
const imageContainer2El = document.querySelector(".image-container2");
const imgs2El = document.getElementsByClassName("IMG2");
let currentImg2 = 1;
let timeout2;

next2El.addEventListener("click", () => {
  currentImg2++;
  clearTimeout(timeout2);
  updateImg2();
});

prev2El.addEventListener("click", () => {
  currentImg2--;
  clearTimeout(timeout2);
  updateImg2();
});

// Gallery 3
const next3El = document.querySelector(".RIGHT3");
const prev3El = document.querySelector(".LEFT3");
const imageContainer3El = document.querySelector(".image-container3");
const imgs3El = document.getElementsByClassName("IMG3");
let currentImg3 = 1;
let timeout3;

next3El.addEventListener("click", () => {
  currentImg3++;
  clearTimeout(timeout3);
  updateImg3();
});

prev3El.addEventListener("click", () => {
  currentImg3--;
  clearTimeout(timeout3);
  updateImg3();
});

// Initial function calls
updateImg1();
updateImg2();
updateImg3();

function updateImg1() {
  if (currentImg1 > imgs1El.length) {
    currentImg1 = 1;
  } else if (currentImg1 < 1) {
    currentImg1 = imgs1El.length;
  }

  const imageWidth = imageContainer1El.offsetWidth; // Get the width of the image container
  imageContainer1El.style.transform = `translateX(-${(currentImg1 - 1) * imageWidth}px)`;
  timeout1 = setTimeout(() => {
    currentImg1++;
    updateImg1();
  }, 3000);
}

function updateImg2() {
  if (currentImg2 > imgs2El.length) {
    currentImg2 = 1;
  } else if (currentImg2 < 1) {
    currentImg2 = imgs2El.length;
  }

  const imageWidth = imageContainer2El.offsetWidth; // Get the width of the image container
  imageContainer2El.style.transform = `translateX(-${(currentImg2 - 1) * imageWidth}px)`;
  timeout2 = setTimeout(() => {
    currentImg2++;
    updateImg2();
  }, 3000);
}

function updateImg3() {
  if (currentImg3 > imgs3El.length) {
    currentImg3 = 1;
  } else if (currentImg3 < 1) {
    currentImg3 = imgs3El.length;
  }

  const imageWidth = imageContainer3El.offsetWidth; // Get the width of the image container
  imageContainer3El.style.transform = `translateX(-${(currentImg3 - 1) * imageWidth}px)`;
  timeout3 = setTimeout(() => {
    currentImg3++;
    updateImg3();
  }, 3000);
}

function toggle(sectionId) {
  const blur = document.getElementById('blur');
  blur.classList.toggle('active');

  const popup = document.getElementById('pop-up-' + sectionId);
  popup.classList.toggle('active');
}