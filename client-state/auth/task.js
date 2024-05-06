function showWelcomeMessage() {
  const userId = localStorage.getItem('user_id');

  if (userId) {
    const welcomeBlock = document.getElementById('welcome');
    const signinForm = document.getElementById('signin');
  
    signinForm.classList.remove('signin_active');
    welcomeBlock.classList.add('welcome_active');
    welcomeBlock.textContent = 'Добро пожаловать, пользователь с id ' + userId;
  }
}

const btn = document.querySelector('.btn').addEventListener('click', (e) => {
  e.preventDefault();
  const userName = document.getElementsByName('login')[0].value;
  const password = document.getElementsByName('password')[0].value;

  console.log(userName);
  console.log(password);

  const form = document.getElementById('signin__form');
  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);

  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Успешно отправлено!');

      const response = JSON.parse(xhr.responseText);
      console.log(response);

      const success = response.success;
      const userId = response.user_id;

      if(success){
        localStorage.setItem('user_id', userId);

        showWelcomeMessage();
      } else {
        alert('Неверный логин или пароль');
      }
    } else {
      console.error ('Произошла ошибка: ', xhr.statusText);
    }
  };

  xhr.onerror = function() {
    console.error('Ошибка сети');
  };

  xhr.send(formData);

});

showWelcomeMessage();