document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Modal
    const modal = document.getElementById("modal");
    const closeModalBtn = document.querySelector(".modal .close");

    window.openModal = function () {
        modal.style.display = "block";
    };

    window.closeModal = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
/* Demo purposes only */
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );

    
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation flags
    let isValid = true;

    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (phone === '' || !phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Valid phone number is required';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});
// Form Validation
window.validateForm = function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
    } else {
        alert("Thank you for subscribing!");
        document.getElementById("newsletter-form").reset();
    }
};

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
});




function showSidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');
    
    if (!sidebar.contains(e.target) && !menuButton.contains(e.target)) {
        hideSidebar();
    }
  });