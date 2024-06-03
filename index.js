document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("contactModal");
  var btn = document.querySelector(".btn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  const slidesWrapper = document.querySelector('.slides-wrapper');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function showSlide(n) {
    const slideWidth = document.querySelector('.slide').clientWidth;
    slidesWrapper.style.transform = `translateX(-${slideWidth * n}px)`;

    dots.forEach(dot => {
      dot.src = './images/dot.png';
      dot.classList.remove('active');
    });
    dots[n].src = './images/activedot.png';
    dots[n].classList.add('active');
  }

  function setSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => setSlide(index));
  });

  // Show the first slide initially
  showSlide(currentSlide);

  document.querySelectorAll(".read-more-content").forEach(function(button) {
    button.addEventListener("click", function() {
      window.open("https://fylehq.com", "_blank");
    });
  });
  
  const imageElement = document.querySelector('#project-image');
  const textBlocks = document.querySelectorAll('.text-block');
  
  const imageSources = [
    './images/image.png',
    './images/image2_optimized.png',
    './images/image3.png'
  ];
  
  textBlocks.forEach((block, index) => {
    block.addEventListener('click', () => {
      textBlocks.forEach(b => b.classList.remove('selected'));
      block.classList.add('selected');
      imageElement.src = imageSources[index];
    });
  });
  
  
});
