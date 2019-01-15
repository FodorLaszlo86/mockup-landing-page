
$(document).ready(function(){


    /* Sticky Navigation Bar */
    $('.js--section-features').waypoint(function(direction) {
        if(direction === 'down') {
            $('#top-nav').addClass('sticky-nav');
            $('.js--logo').removeClass('logo');
            $('.js--logo').addClass('sticky-logo');
        } else {
            $('#top-nav').removeClass('sticky-nav');
            $('.js--logo').removeClass('sticky-logo');
            $('.js--logo').addClass('logo');

        }
    }, { offset: '60px'})

    /* Smooth Scrolling to Target Section */
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });


    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-subscription-plans').offset().top}, 2000); 
     });
     
     $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
     });


    /* Add CSS Animations */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn')
    }, { offset: '80%'})

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp')
    }, { offset: '50%'})

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    }, { offset: '50%'})

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated bounce');
    }, { offset: '50%'})
})


/* RESPONSIVE NAVIGATION BAR */
let menuIcon = document.querySelector('.menu-icon');
let closeMenuIcon = document.querySelector('.close-icon');
let navLinks = document.querySelector('.main-nav-links');
let link = document.querySelectorAll('.nav-link');


$(window).on('load resize', function(){
    var windowWidth = window.innerWidth;
    toggleNavIcon(windowWidth);
 })




function toggleNavIcon(windowWidth) {
    if(windowWidth < 768) {
        menuIcon.classList.remove('present');
        navLinks.style.display = "none";
    } else {
        closeMenuIcon.classList.add('present');
        menuIcon.classList.add('present');
        navLinks.style.display = "block";
        [].forEach.call(link, function(element) {
            element.style.display = "inline-block";
        })
    }
}

/* Swich between menu icon and close icon when clicked respectively */

menuIcon.addEventListener('click', function() {
    menuIcon.classList.add('present');
    closeMenuIcon.classList.remove('present');
    navLinks.style.display = "block";
    [].forEach.call(link, function(navLink) {
        navLink.style.display = "block";
    })
})

closeMenuIcon.addEventListener('click', function() {
    closeMenuIcon.classList.add('present');
    menuIcon.classList.remove('present');
    navLinks.style.display = "none";
})
