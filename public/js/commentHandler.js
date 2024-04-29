const newCommentHandler = async (event) => {
  // prevent page from refreshing
  event.preventDefault();

  // grab inputs
  const commentBlogId = document.querySelector('.create-new-comment').dataset.blogpostid;
  const commentDescription = document.querySelector('#comment-description').value.trim();

  // fetch request post method for new comment
  if (commentDescription) {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ blogpostid, commentDescription }),
      headers: { 'Content-Type': 'application/json' },
    });

    document.location.reload();
  }
};

document.querySelector('.create-new-comment').addEventListener('submit', newCommentHandler);