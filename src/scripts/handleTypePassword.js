const password = document.getElementById('password')
const button = document.getElementById('handlePassword')

button.addEventListener('click', () => {
  if (password.type == 'password') {
    password.type = 'text'
  } else {
    password.type = 'password'
  }
})