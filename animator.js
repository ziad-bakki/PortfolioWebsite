
// Box Highlighter

const box = document.getElementById("box");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const boxes = [box, box2, box3, box4, box5];


boxes.forEach(box => {
  // Function to add the 'highlighted' class on mouse enter
  function highlightBox() {
    this.classList.add('highlighted');  // Changed from box to this
  }

  // Function to remove the 'highlighted' class on mouse leave
  function removeHighlight() {
    this.classList.remove('highlighted');  // Changed from box to this
  }

  // Event listener for mouse enter
  box.addEventListener('mouseenter', highlightBox);

  // Event listener for mouse leave
  box.addEventListener('mouseleave', removeHighlight);

  // Box Animator

  box.addEventListener('mouseover', () => {
      box.style.transition = 'transform 0.3s ease';
      box.style.transform = 'scale(1.01)';
  });
  box.addEventListener('mouseout', () => {
      box.style.transition = 'transform 0.3s ease';
      box.style.transform = 'scale(1)';
  });
});


// Icon Animator

const linkedinImage = document.getElementById('LinkedinIcon');
const mailImage = document.getElementById('MailIcon');
const phoneImage = document.getElementById('PhoneIcon');


const images = [linkedinImage, mailImage, phoneImage];

images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.style.transition = 'transform 0.2s ease';
    image.style.transform = 'scale(1.1)';
  });

  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
  });
});



function scrollToTop() {
  // Scroll smoothly to the top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getAbsoluteTop(el) {
  let top = -70;
  while (el) {
      top += el.offsetTop || 0;
      el = el.offsetParent;
  }
  return top;
}

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
      const yPosition = getAbsoluteTop(element);
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
  }
}


document.addEventListener('scroll', function() {
  // Get the scroll position
  var scrollPosition = window.scrollY;

  // If scrolled, add a class to the body (or another parent element)
  if (scrollPosition > 0) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});



document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById('main-header');

    // Applying styles directly using JavaScript
    header.style.color = '#fff';
    header.style.backgroundColor = '#4CAF50';
    header.style.textAlign = 'right';
    header.style.fontSize = '40px';
    header.style.padding = '10px 20px';
    header.style.opacity = '0';

    fadeIn(header);
});

function fadeIn(element) {
    let opacity = 0;
    let timer = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        opacity = (opacity + 0.01).toFixed(2);
    }, 10);
}
