const switchBtn = document.querySelectorAll('.arrow');
const login = document.querySelector('#login');
const signup = document.querySelector('#signup');

switchBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (login.classList.contains('active')) {
      login.classList.remove('active');
      login.classList.add('inactive');
      signup.classList.add('active');
      console.log('switch to signup');
    } else {
      signup.classList.remove('active');
      signup.classList.add('inactive');
      login.classList.add('active');
      console.log('switch to login');
    }
  });
});