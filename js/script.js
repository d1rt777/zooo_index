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

    const slides = document.querySelector('.slides');
    const slideEls = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');
    let index = 0;

    // точки
    slideEls.forEach((_,i)=>{
      const dot=document.createElement('div');
      dot.classList.add('dot');
      if(i===0) dot.classList.add('active');
      dot.addEventListener('click',()=>{
        index=i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    });
    const dots=document.querySelectorAll('.dot');

    function updateSlider(){
      slides.style.transform=`translateX(-${index*100}%)`;
      dots.forEach(d=>d.classList.remove('active'));
      dots[index].classList.add('active');
    }

    function nextSlide(){
      index=(index+1)%slideEls.length;
      updateSlider();
    }

    function prevSlide(){
      index=(index-1+slideEls.length)%slideEls.length;
      updateSlider();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // автоплей
    setInterval(nextSlide, 7000);
