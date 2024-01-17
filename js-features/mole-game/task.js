const deadElement = document.getElementById("dead");
const lostElement = document.getElementById("lost");

const resetCounters = function () {
  deadElement.textContent = '0';
  lostElement.textContent = '0';
}

const isHoleActive = (holeElement) => {
  return holeElement.className.includes('hole_has-mole');
}

const incrementCounter = function(element){
  element.textContent = Number(element.textContent) + 1;

  return element.textContent;
}

const assidhEvents = () => {
  for(let i = 1; i <= 9; i++){
    const holeElement = document.getElementById(`hole${i}`);
   
    holeElement.onclick = function (){
      let isFinished = false;

      if (isHoleActive(holeElement)) {
        const result = incrementCounter(deadElement);

        if (result === '10') {
          alert ("Победа");
          isFinished = true;
        }
      } else {
        const result = incrementCounter(lostElement);

        if (result === '5') {
          alert ("Вы проиграли");
          isFinished = true;
        }
      }

      if (isFinished) {
        resetCounters();
      }
    }

  }
}
assidhEvents();