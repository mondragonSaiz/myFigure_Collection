// Sign Up Logic
const signUpBTN = document.getElementById('signUpSubmit');
signUpBTN.addEventListener('click', async (event) => {
  event.preventDefault();
  const username = document.querySelector('#signupInputUserName').value.trim();
  const email = document.querySelector('#signupInputEmail').value.trim();
  const password = document.querySelector('#signupInputPassword').value.trim();
  const confirmPassword = document
    .querySelector('#signupInputConfirmPassword')
    .value.trim();

  console.log('USERNAME', username);
  console.log('EMAIL', email);
  console.log('PASSWORD', password);

  if (password === confirmPassword) {
    const response = await fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/api/users');
    } else {
      console.log('There was an error creating a user, better go check it out');
    }
  } else {
    alert('Please check your pasword');
  }
});

//Login Logic
const loginBTN = document.getElementById('loginSubmit');
loginBTN.addEventListener('click', async (event) => {
  event.preventDefault();
  const email = document.querySelector('#loginInputEmail').value.trim();
  const password = document.querySelector('#loginInputPassword').value.trim();

  if (email && password) {
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/api/users');
    } else {
      alert('Failed to log in');
    }
  } else {
    alert('Please enter your email and password');
    return;
  }
});
