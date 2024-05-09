function showWelcomeMessage() {
  const userId = localStorage.getItem('user_id');

  if (userId) {
    const welcomeBlock = document.getElementById('welcome');
    const signinBlock = document.getElementById('signin');
  
    signinBlock.classList.remove('signin_active');
    welcomeBlock.classList.add('welcome_active');
    welcomeBlock.textContent = 'Добро пожаловать, пользователь с id ' + userId;
  }
}

const btn = document.querySelector('.btn').addEventListener('click', (e) => {
  e.preventDefault();

  const form = document.getElementById('signin__form');
  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);

  xhr.onload = function() {
    console.log('Успешно отправлено!');

    const response = xhr.response;
    console.log(response);

    const success = response.success;
    const userId = response.user_id;

    if(success){
      localStorage.setItem('user_id', userId);

      showWelcomeMessage();
      form.reset(); 
    } else {
      alert('Неверный логин или пароль');
    }
  };

  xhr.onerror = function() {
    console.error('Ошибка сети');
  };

  xhr.send(formData);

});

showWelcomeMessage();
