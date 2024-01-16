
  let playing = true,
    activeHole = 1;

  const stop = () => playing = false,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index =>
      getHole( index ).className = 'hole',
    activateHole = index =>
      getHole( index ).className = 'hole hole_has-mole',
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );
      next();
    }, 800 );

  next();

const isHoleActive = (holeElement) => {
  return holeElement.className.includes('hole_has-mole');
}

const incrementDeadCounter = function(){
  const deadElement = document.getElementById("dead");
  deadElement.textContent = Number(deadElement.textContent)+1;
  if (deadElement.textContent === '10') {
    alert ("Победа");
    stop ();

  }

}

const incrementLostCounter = function () {
  const lostElement = document.getElementById("lost");
  lostElement.textContent = Number(lostElement.textContent)+1;
  if (lostElement.textContent === '5') {
    alert ("Вы проиграли");
    stop ();


  }

}

const assidhEvents = () => {
  for(let i = 1; i <= 9; i++){
    const holeElement = document.getElementById(`hole${i}`);
   
    holeElement.onclick = function (){
      if (isHoleActive(holeElement)) {
        incrementDeadCounter();
      } else {
        incrementLostCounter();
      }
    }

  }
}
assidhEvents();