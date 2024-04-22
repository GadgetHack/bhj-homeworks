const pollTitleElement = document.getElementById('poll__title');
const pollAnswersElement = document.getElementById('poll__answers');

const refreshQuestions = () => {
  let xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === XMLHttpRequest.DONE){
      if (xhr.status === 200) { 
      pollAnswersElement.innerHTML = '';

      const { data } = JSON.parse(xhr.responseText);
  
      console.log(data);
      
      pollTitleElement.textContent = data.answers;
  
      for (let key in data.answers) {
        const buttonElement = document.createElement('button');
  
        buttonElement.className = 'poll__answer';
        buttonElement.textContent = data.answers[key];
        pollAnswersElement.appendChild(buttonElement);
  
        buttonElement.onclick = () => {
          window.alert('Спасибо, ваш голос засчитан!');
          refreshQuestions();
        }
      }
    } else {
      console.error('Ошибка при загрузке данных. Код состояния:', xhr.status);
     }
    }
  });
   
  xhr.send();
}

refreshQuestions();