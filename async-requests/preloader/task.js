
const itemsDivElement = document.getElementById('items');
const loaderElement = document.getElementById('loader');

let xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses'); // создаём асинхронный запрос
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === XMLHttpRequest.DONE){
    const data = JSON.parse(xhr.responseText);

    for (let key in data.response.Valute) {
       const itemDivElement = document.createElement('div');
       itemDivElement.className = 'item';
       itemDivElement.innerHTML = `
          <div class="item__code">
              ${key}
          </div>
          <div class="item__value">
              32
          </div>
          <div class="item__currency">
              руб.
          </div>
       `;

       itemsDivElement.appendChild(itemDivElement);
    }
    loaderElement.className = 'loader';

  }
});

xhr.send();