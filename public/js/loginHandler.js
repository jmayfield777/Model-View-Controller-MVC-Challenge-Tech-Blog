const loginHandler = async (event) => {
  // prevent page refresh
  event.preventDefault();

  // grab form data
  const name = document.querySelector('#name-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (name && password) {
    const response = await fetch('/api/users/login', {
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

document.querySelector('.form-login').addEventListener('submit', loginHandler);