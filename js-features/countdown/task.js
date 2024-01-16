const timeEnd = function (){
  const timer = document.getElementById("timer");
  timer.textContent -=1;
  if (timer.textContent <= 0) {
    clearInterval(intervalId);
    alert ("Вы победили в конкурсе!");
};

}
const intervalId = setInterval(timeEnd, 1000);
const timer = document.getElementById("timer");

