document.addEventListener("DOMContentLoaded", function () {
  var animatedElements = [
    { selector: ".result-title", animationClass: "slide-up" },
    { selector: ".result-cards", animationClass: "slide-up" },
    { selector: ".result-desc", animationClass: "slide-up" },
    { selector: ".feedback-title", animationClass: "slide-up" },
    { selector: ".feedback-card_primary", animationClass: "slide-left" },
    { selector: ".feedback-card_secondary", animationClass: "slide-right" },


  ];

  animatedElements.forEach(function (elementInfo) {
    var animatedElement = document.querySelector(elementInfo.selector);
    if (animatedElement) {
      setAnimate(animatedElement, elementInfo.animationClass);
    }
  });
});

var setAnimate = (animatedElement, animationClass) => {
  window.addEventListener("scroll", function () {
    var elementTop = animatedElement.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (elementTop < windowHeight * 0.85) {
      animatedElement.classList.add(animationClass);
    }
  });
};
