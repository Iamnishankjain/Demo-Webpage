// script.js

// Add event listener to toggle details button
document.querySelector('.toggle-details').addEventListener('click', function() {
    // Get the additional details element
    var additionalDetails = document.querySelector('.additional-details');
    
    // Toggle the hidden class
    additionalDetails.classList.toggle('hidden');
});

// Add event listener to scroll down button
document.querySelector('.scroll-down').addEventListener('click', function() {
    // Scroll to the student details section
    document.querySelector('.student-details').scrollIntoView({ behavior: 'smooth' });
});

// Add event listeners to navigation bar links
document.querySelectorAll('.nav-bar a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();
        
        // Get the section ID from the link href
        var sectionId = link.getAttribute('href');
        
        // Scroll to the section
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});