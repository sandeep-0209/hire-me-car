document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.quas-ans .quas');

    questions.forEach(function(quas) {
        quas.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isVisible = answer.style.display === 'block';

            document.querySelectorAll('.quas-ans .ans').forEach(function(ans) {
                ans.style.display = 'none';
            });
            document.querySelectorAll('.quas-ans').forEach(function(item) {
                item.classList.remove('open');
            });

            if (!isVisible) {
                answer.style.display = 'block';
                this.parentElement.classList.add('open');
            } else {
                answer.style.display = 'none';
                this.parentElement.classList.remove('open');
            }
        });
    });
});


function autoSlide(interval = 3000) {
    const slides = document.querySelectorAll('.information-custmer');
    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add('active');
    }, interval);
}

autoSlide(3000);  



document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggle-btn");
    const toggleIcon = document.getElementById("toggle");

    toggleBtn.addEventListener("click", function(event) {
        event.preventDefault(); 
        if (toggleIcon.style.display !== "none") {
            toggleIcon.style.display = "none"; 
            toggleBtn.innerHTML = '<i class="fa-solid fa-x"></i>'; 
        } else {
            toggleIcon.style.display = "inline"; 
            toggleBtn.innerHTML = ''; 
            toggleBtn.appendChild(toggleIcon); 
        }
        document.querySelector(".nav-bar").classList.toggle("slide")
    });
});





