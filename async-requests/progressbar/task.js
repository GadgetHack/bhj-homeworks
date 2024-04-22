const progressElement = document.getElementById('progress');
const formElement = document.getElementById('form');
const sendButtonElement = document.getElementById('send');

//progress.value = 0.7;

const sendFiles = () => {
  let xhr = new XMLHttpRequest();
  //debugger
  const formData = new FormData(formElement);
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  xhr.upload.onprogress = (event) => {
    progressElement.value = event.loaded;
    progressElement.max = event.total;
  };

  xhr.addEventListener('readystatechange', () => {
     const data = JSON.parse(xhr.responseText);
  
     console.log(data);
  });

  xhr.upload.onload = function() {
    alert( 'Данные полностью загружены на сервер!' );
  }

  xhr.upload.onerror = function() {
    progressElement.value = 0;
    
    alert( 'Произошла ошибка при загрузке данных на сервер!' );
  }
   
  xhr.send(formData);
}

formElement.onsubmit = (event) => {
  event.preventDefault();

  sendFiles();
}