// create an object for each house
Vue.component('house-item', {
    template: '#house-item-template',
    props: ['houseName', 'houseDescription', 'houseImage', 'houseLink', 'houseId'],
    methods: {
        openOverlay: function (houseId) {
            console.log('houseId: ', houseId);
            var $overlayContainer = $('.overlay-container');
            $overlayContainer.addClass('overlay-container--active');
            $overlayContainer.find('#' + houseId).addClass('overlay--show').removeClass('overlay--hide');
        }
    }
});


// gotta create a new overlay object for each house
Vue.component('overlay', {
    template: '#overlay-template',
    props: ['houseId', 'houseName', 'houseImages', 'houseDates', 'houseDescription'],
    methods: {
        nextImage: function () {
            var $current = $('.overlay__img--current');
            if ( $current.next().is('div') ) {
                var $next = $current.next();
            } else {
                var $next = $current.parent().find('> :first');
            }
            $next.addClass('overlay__img--current').removeClass('overlay__img--hide');
            $current.addClass('overlay__img--hide').removeClass('overlay__img--current');
        },
        prevImage: function () {
            var $current = $('.overlay__img--current');
            if ( $current.prev().is('div') ) {
                var $prev = $current.prev();
            } else {
                var $prev = $current.parent().find('> :last');
            }
            $prev.addClass('overlay__img--current').removeClass('overlay__img--hide');
            $current.addClass('overlay__img--hide').removeClass('overlay__img--current');
        }
    }
});

// init the app
var app = new Vue({
    el: '#app',
    data: {
        items: $houseData
    },
    methods: {
        openOverlay: function (houseId) {
            console.log('houseId: ', houseId);
            var $overlayContainer = $('.overlay-container');
            $overlayContainer.addClass('overlay-container--active');
            $overlayContainer.find('#' + houseId).addClass('overlay--show').removeClass('overlay--hide');
        },
        onTap: function () {
            $('body').text('filler');
        }
    }
});

// repsonsive for width
if (  $(window).width() <= 640 ) {
    $('.nav-container').addClass('nav-container--mobile');
    $('.nav').addClass('nav--mobile type');
    $('.nav__logo').addClass('nav__logo--mobile');
    $('.nav__list').addClass('nav__list--mobile');
    $('.nav__madeby').addClass('nav__madeby--mobile');
    $('.carousel').addClass('carousel--hide');
    $('.overlay__btnprev').addClass('overlay__btnprev--mobile');
    $('.overlay__btnnext').addClass('overlay__btnnext--mobile');
    $('.overlay__gallery').addClass('overlay__gallery--mobile');
    $('.overlay__gallery').addClass('overlay__gallery--mobile');
    $('.overlay__mobilebtnprev').addClass('overlay__mobilebtnprev--mobile');
    $('.overlay__mobilebtnnext').addClass('overlay__mobilebtnnext--mobile');
    $('.overlay__img').addClass('overlay__img--mobile');
};

if ( $(window).width() <= 720 ) {
    $('.carousel').addClass('carousel--mobile');
    $('.carousel__list').addClass('carousel__list--mobile');
    $('.carousel__item').addClass('carousel__item--mobile');
    $('overlay__carousel').addClass('overlay__carousel--mobile');
}

// to deactivate the overlay
$('.overlay-container').on('click', function (event) {
    if ( ($(event.target).is('.overlay')) ) {
        $('.overlay-container').removeClass('overlay-container--active');
        $('.overlay--show').addClass('overlay--hide').removeClass('overlay--show');
    }
});
