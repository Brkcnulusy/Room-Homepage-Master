const roomHomePage = function () {

    // Variables

    const nextButton = document.querySelector('.js-next-button');
    const backButton = document.querySelector('.js-back-button');
    const images = document.querySelectorAll('.js-galeri img');
    const hamburgerMenu = document.querySelector('.js-hamburger');
    const navbar = document.querySelector('.js-navbar');

    let currentIndex = 0;

    // EventListeners

    const _eventListeners = function () {
        nextButton.addEventListener('click', _nextImage);
        backButton.addEventListener('click', _backImage);
        hamburgerMenu.addEventListener('click', _openHamburgerMenu);
        document.addEventListener('click', function(e){
            const targetElement = e.target;
            _closeNavbar(targetElement);
        });
    }

    const _closeNavbar = function(target) {
        if(target.closest(".js-close-icon")) {
            navbar.style.display = 'none';
        }
    }

    const _openHamburgerMenu = function() {
        navbar.style.display = 'flex';
    }

    const _showImage = function(Index) {
        images.forEach((image)=>{
            image.style.display = 'none';
        });
        images[Index].style.display = 'block';
    }

    const _nextImage = function() {
        currentIndex = (currentIndex + 1) % images.length;
        _showImage(currentIndex);
        console.log('asdsd');
    }
    const _backImage = function() {
        currentIndex = (currentIndex - 1) % images.length;
        if(currentIndex < 0) {
            currentIndex = images.length -1;
            _showImage(currentIndex);
        } else {
            _showImage(currentIndex);
        }
    }

    return {
        init: function () {
            _showImage(currentIndex);
            _eventListeners();
        }
    }
}();

document.addEventListener('DOMContentLoaded',function(){
    roomHomePage.init();
});

