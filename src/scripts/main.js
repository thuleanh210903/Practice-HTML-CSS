document.addEventListener("DOMContentLoaded", function () {
    var animatedElements = [
      ".result-title",
      ".result-cards",
      ".result-desc",
    ];
  
    animatedElements.forEach(function (elementClass) {
      var animatedElement = document.querySelector(elementClass);
      setAnimate(animatedElement);
    });
  });
  
  var setAnimate = (animatedElement) => {
    window.addEventListener("scroll", function () {
      var elementTop = animatedElement.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight * 0.85) {
        animatedElement.classList.add("slide-up");
      }
    });
  };
  