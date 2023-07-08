const signUpBTN = document.getElementById('signUpSubmit');

signUpBTN.addEventListener('click', async (event) => {
  event.preventDefault();
  const username = document.querySelector('#signupInputUserName').value.trim();
  const email = document.querySelector('#signupInputEmail').value.trim();
  const password = document.querySelector('#signupInputPassword').value.trim();
  console.log('USERNAME', username);
  console.log('EMAIL', email);
  console.log('PASSWORD', password);

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
});
