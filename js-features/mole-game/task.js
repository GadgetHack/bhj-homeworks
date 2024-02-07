const deadElement = document.getElementById("dead");
const lostElement = document.getElementById("lost");

const resetCounters = function (message) {
  deadElement.textContent = '0';
  lostElement.textContent = '0';
  alert(message);
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
      if (isHoleActive(holeElement)) {
        const result = incrementCounter(deadElement);

        if (result === '10') {
          alert ("Победа");
          resetCounters();
        }
      } else {
        const result = incrementCounter(lostElement);

        if (result === '5') {
          alert ("Вы проиграли");
          resetCounters();
        }
      }
    }

  }
}
assidhEvents();