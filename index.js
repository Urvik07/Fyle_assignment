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
  // Select the image element and text block elements
  const imageElement = document.querySelector('#project-image');
  const textBlocks = document.querySelectorAll('.text-block');
  
  // Array of image sources
  const imageSources = [
    './images/image.png',
    './images/image2_optimized.png',
    './images/image3.png'
  ];
  
  // Add click event listeners to text blocks
  textBlocks.forEach((block, index) => {
    block.addEventListener('click', () => {
      // Remove 'selected' class from all text blocks
      textBlocks.forEach(b => b.classList.remove('selected'));
      // Add 'selected' class to the clicked text block
      block.classList.add('selected');
      // Update the image source based on the clicked text block
      imageElement.src = imageSources[index];
    });
  });
  
  
});
