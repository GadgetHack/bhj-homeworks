console.log(document.cookie);

function setCookie(name, value){
  document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
  const pairs = document.cookie.split(';');
  const cookieItem = pairs.find(p => p.startsWith(String(name)));
  
  return cookieItem ? cookieItem.substring(name.length +1) : undefined;
}

const isModalShown = getCookie('modalShown');
const modalElement = document.querySelector('.modal');


if (!isModalShown) {
  modalElement.classList.add('modal_active');
}

const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click' , () => {
  setCookie('modalShown', '1');
  modalElement.classList.remove('modal_active');
})