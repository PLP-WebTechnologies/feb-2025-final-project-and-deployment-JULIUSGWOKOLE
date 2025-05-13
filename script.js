// Like button functionality
document.querySelector('.like-btn').addEventListener('click', function() {
    const likeCount = document.querySelector('.like-count');
    let count = parseInt(likeCount.textContent);
    likeCount.textContent = count + 1;
});

// Newsletter form
document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for subscribing!');
    this.reset();
});