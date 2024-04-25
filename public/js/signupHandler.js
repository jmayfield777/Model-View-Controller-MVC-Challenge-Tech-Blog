const signupHandler = async (event) => {
  // prevent default behavior
  event.preventDefault();

  // get the form info
  const name = document.querySelector('#name-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // fetch request
  if (name && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.status(500));
    }
  }
};

document.querySelector('.form-signup').addEventListener('submit', signupHandler);