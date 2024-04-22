const itemsDivElement = document.getElementById('items');
const loaderElement = document.getElementById('loader');

let xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses'); // создаём асинхронный запрос
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === XMLHttpRequest.DONE){
    const data = JSON.parse(xhr.responseText);
    console.log(data.response.Valute);

    itemsDivElement.innerHTML = '';

    for (let key in data.response.Valute) {
       const itemDivElement = document.createElement('div');
       itemDivElement.className = 'item';
       itemDivElement.innerHTML = `
          <div class="item__code">
              ${key}
          </div>
          <div class="item__value">
              ${data.response.Valute[key].Value}
          </div>
          <div class="item__currency">
              ${data.response.Valute[key].Name}
          </div>
       `;

       itemsDivElement.appendChild(itemDivElement);
    }
    loaderElement.className = 'loader';

  }
});

xhr.send();
