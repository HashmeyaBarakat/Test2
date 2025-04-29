// Form Validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let nameError = document.getElementById('name-error');
    let emailError = document.getElementById('email-error');
    let isValid = true;
  
    // Error messages
    nameError.textContent = '';
    emailError.textContent = '';
  
    // Name Validation
    if (name.trim() === '') {
      nameError.textContent = 'Name is required';
      isValid = false;
    }
  
    // Email Validation using Regular Expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email address (e.g., example@domain.com)';
      isValid = false;
    }
  
    // If form is valid
    if (isValid) {
      // Show success message
      const successMessage = document.createElement('p');
      successMessage.textContent = 'Form submitted successfully! We will get back to you soon.';
      successMessage.classList.add('success-message'); // Add CSS class for styling
      document.getElementById('contact-form').appendChild(successMessage);
  
      // Reset the form after 10 seconds
      setTimeout(() => {
        document.getElementById('contact-form').reset();
        successMessage.remove();
      }, 1000);
    }
  });
  
  // Quiz Functionality
  function checkQuiz() {
    const answer = document.getElementById('quiz-answer').value.toLowerCase();
    const result = document.getElementById('quiz-result');
    const quizButton = document.querySelector('#quiz button');
  
    if (answer === 'espresso') {
      result.textContent = 'Correct! Espresso is the main ingredient.';
      result.style.color = 'green';
      quizButton.textContent = 'Try Again'; // Change button text
      quizButton.onclick = resetQuiz; // Change button functionality
    } else {
      result.textContent = 'Incorrect. The correct answer is "Espresso". Try again!';
      result.style.color = 'red';
    }
  }
  
  // Reset Quiz Functionality
  function resetQuiz() {
    const result = document.getElementById('quiz-result');
    const quizButton = document.querySelector('#quiz button');
  
    result.textContent = 'What is the main ingredient in a cappuccino?'; // Reset question
    document.getElementById('quiz-answer').value = ''; // Clear input field
    quizButton.textContent = 'Submit Answer'; // Reset button text
    quizButton.onclick = checkQuiz; // Reset button functionality
  }
  
  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href').substring(1); // Get target section ID
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
      }
    });
  });
  
  // Hamburger Menu Toggle
  function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active'); // Toggle mobile menu visibility
  }
  
  // Close Menu When Clicking Outside
  document.addEventListener('click', function (event) {
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger');
  
    // Close menu if clicked outside
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      navMenu.classList.remove('active');
    }
  });
  
  // Fade-In Animation for Sections
  const sections = document.querySelectorAll('section');
  const options = {
    threshold: 0.1 // Trigger animation when 10% of the section is visible
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, options);
  
  // Apply fade-in animation to all sections
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });