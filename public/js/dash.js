// function to handle submitting new blogpost data 
const newBlogHandler = async (event) => {
  // prevent form from refreshing
  event.preventDefault();

  // grab inputs 
  const blogTitle = document.querySelector('#title').value.trim();
  const blogDescription = document.querySelector('#description').value.trim();

  // fetch request to create new post 
  if (blogTitle && blogDescription) {
    const response = await fetch('/api/blogposts', {
      method: 'POST',
      body: JSON.stringify({ blogTitle, blogDescription }),
      headers: { 'Content-Type': 'application/json' },
    });

    // reroute if the response is succesful 
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Could not process request');
    }
  }

};

// function to handle the button to delete a blogpost
const deleteButtonHandler = async (event) => {
  // delete blogpost through the data id
  if (event.target.hasAttribute('data-id')) {
    const blogId = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogpost/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Could not process request')
    }

  }
};

// attach event listeners
document.querySelector('.create-blog-post').addEventListener('submit', newBlogHandler);
document.querySelector('.blogposts').addEventListener('click', deleteButtonHandler);