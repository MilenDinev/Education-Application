(function($) {
    // Function to add 'js' class to body on document ready
    function addJsClassToBody() {
        $('body').addClass('js');
    }

    // Function to toggle menu visibility
    function toggleMenu() {
        var $menu = $('#menu'),
            $menuLink = $('.menu-link');

        $menuLink.click(function() {
            $menuLink.toggleClass('active');
            $menu.toggleClass('active');
            return false;
        });
    }

    // Function to initialize Owl Carousel
    function initializeOwlCarousel() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: { items: 1 },
                550: { items: 2 },
                750: { items: 3 },
                1000: { items: 4 },
                1200: { items: 5 }
            }
        });
    }

    // Function to initialize Slick Slider
    function initializeSlickSlider() {
        $(".Modern-Slider").slick({
            autoplay: true,
            autoplaySpeed: 10000,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            dots: true,
            pauseOnDotsHover: true,
            cssEase: 'fade',
            draggable: false,
            prevArrow: '<button class="PrevArrow"></button>',
            nextArrow: '<button class="NextArrow"></button>'
        });
    }

    // Function to toggle visibility of hidden content on hover
    function toggleHiddenContentOnHover() {
        $("div.features-post").hover(
            function() {
                $(this).find("div.content-hide").slideToggle("medium");
            },
            function() {
                $(this).find("div.content-hide").slideToggle("medium");
            }
        );
    }

    // Function to initialize jQuery UI Tabs
    function initializeJQueryUITabs() {
        $("#tabs").tabs();
    }

    // Main function to initialize all functionalities
    function initialize() {
        addJsClassToBody();
        toggleMenu();
        initializeOwlCarousel();
        initializeSlickSlider();
        toggleHiddenContentOnHover();
        initializeJQueryUITabs();
    }

    // Execute the initialization function on document ready
    $(document).ready(function() {
        initialize();
    });

})(jQuery);