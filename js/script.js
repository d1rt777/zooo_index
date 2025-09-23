let currentIndex = 0;
    const reviews = document.querySelectorAll('.review');

    function showReview(index) {
      reviews.forEach((review, i) => {
        review.classList.toggle('active', i === index);
      });
    }

    function nextReview() {
      currentIndex = (currentIndex + 1) % reviews.length;
      showReview(currentIndex);
    }

    function prevReview() {
      currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      showReview(currentIndex);
    }