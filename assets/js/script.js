"use strict";

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");

};

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {
  const sldierContainer = currentSlider.querySelector(
    "[data-slider-container]"
  );
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  };

  /**
   * NEXT SLIDE
   */

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  };

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */

  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = sldierContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  };

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }
};

for (let i = 0, len = sliders.length; i < len; i++) {
  initSlider(sliders[i]);
}

/**
 * ACCORDION
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {
  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  };

  accordionBtn.addEventListener("click", expandAccordion);
};

for (let i = 0, len = accordions.length; i < len; i++) {
  initAccordion(accordions[i]);
}


// For Mobile Nav bar 
let model = document.getElementById("contact-model"),
  openModel = document.getElementById("modal-open"),
  closeModel = document.querySelector(".close-model");

openModel.addEventListener("click", function () {
  model.style.display = "block";
});

closeModel.addEventListener("click", function () {
  model.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == model) {
    model.style.display = "none";
  }
});

let model3 = document.getElementById("contact-model1"),
  openModel3 = document.getElementById("modal3-open"),
  closeModel3 = document.querySelector(".close-model1");

openModel3.addEventListener("click", function () {
  model3.style.display = "block";
});

closeModel3.addEventListener("click", function () {
  model3.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == model3) {
    model3.style.display = "none";
  }
});

// For The Main Nav Bar
let model1 = document.getElementById("contact-model"),
  openModel1 = document.getElementById("modal1-open"),
  closeModel1 = document.querySelector(".close-model");

openModel1.addEventListener("click", function () {
  model1.style.display = "block";
});

window.addEventListener("click", function (e) {
  if (e.target == model1) {
    model1.style.display = "none";
  }
});

closeModel1.addEventListener("click", function () {
  model1.style.display = "none";
});

let model2 = document.getElementById("contact-model1"),
  openModel2 = document.getElementById("modal2-open"),
  closeModel2= document.querySelector(".close-model1");

openModel2.addEventListener("click", function () {
  model2.style.display = "block";
});

window.addEventListener("click", function (e) {
  if (e.target == model2) {
    model2.style.display = "none";
  }
});

closeModel2.addEventListener("click", function () {
  model2.style.display = "none";
});

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
