const image = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");

let intervalId;
let lastClickTime;

const isDefaultImagesSizes = () => {
  return image.width === 200 && image.height === 128;
};

const resetImageSizes = function () {
  if (!isDefaultImagesSizes()) {
    image.width = 200;
    image.height = 128;
  }
};

const updateImageSizes = function () {
  if (isDefaultImagesSizes()) {
    image.width += 200*0.1;
    image.height += 128*0.1;
  } else {
    resetImageSizes();
  }
};

const calcClickSpeed = function (timeInSeconds) {
 return 1 / timeInSeconds;
}

image.onclick = function() {
  const currClickTime = Date.now();

  if (lastClickTime) {
    const speed = calcClickSpeed((currClickTime - lastClickTime) / 1000).toFixed(2);

    clickerSpeed.textContent = speed;
  }

  lastClickTime = currClickTime;

  clickerCounter.textContent = parseInt(clickerCounter.textContent) + 1;

  clearTimeout(intervalId);

  updateImageSizes();

  intervalId = setTimeout(function() {
    resetImageSizes();
  }, 1000);
};
