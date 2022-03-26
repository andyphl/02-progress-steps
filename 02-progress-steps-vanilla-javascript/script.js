const progress = document.querySelector(".progressbar__progress");
const btnPrev = document.querySelector(".btn--prev");
const btnNext = document.querySelector(".btn--next");
const progressSteps = document.querySelectorAll(".progressbar__step");
let stepLength = 100 / (progressSteps.length - 1);
let currentActive = 1;

btnNext.addEventListener("click", function () {
  currentActive++;
  if (currentActive > progressSteps.length) {
    currentActive = progressSteps.length;
  }

  updateProgress();
});

btnPrev.addEventListener("click", function () {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  updateProgress();
});

function updateProgress() {
  progress.style.width = `${stepLength * (currentActive - 1)}%`;

  progress.addEventListener("transitionend", function (e) {
    if (e.propertyName !== "width") return;
    progressSteps.forEach((step, index) => {
      if (index < currentActive) {
        step.classList.add("progressbar__step--active");
      } else {
        step.classList.remove("progressbar__step--active");
      }
    });
  });

  if (currentActive === 1) {
    btnPrev.disabled = true;
  } else if (currentActive === progressSteps.length) {
    btnNext.disabled = true;
  } else {
    btnPrev.disabled = false;
    btnNext.disabled = false;
  }
}
