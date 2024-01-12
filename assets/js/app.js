const roomHomePage = function () {

    // Variables

    const nextButton = document.querySelector('.js-next-button');
    const backButton = document.querySelector('.js-back-button');
    const images = document.querySelectorAll('.js-galeri img');

    let currentIndex = 0;

    console.log(nextButton);
    console.log(backButton);

    // EventListeners

    const _eventListeners = function () {
        nextButton.addEventListener('click', _nextImage);
        backButton.addEventListener('click', _backImage);
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

