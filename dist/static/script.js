var fetchData = function (url) {
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        async: false,
        success: function (res) {
            data = res;
            console.log(res);
        }
    });
    return data
};


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

Vue.component('overlay', {
    template: '#overlay-template',
    props: ['houseId'],
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
                console.log($prev)
            }
            $prev.addClass('overlay__img--current').removeClass('overlay__img--hide');
            $current.addClass('overlay__img--hide').removeClass('overlay__img--current');
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        items: fetchData('static/data.json')
    },
    methods: {

    }
});

if (  $(window).width() <= 480 ) {
    $('.nav-container').addClass('nav-container--mobile');
    $('.nav').addClass('nav--mobile type');
    $('.nav__logo').addClass('nav__logo--mobile');
    $('.nav__list').addClass('nav__list--mobile');
    $('.nav__madeby').addClass('nav__madeby--mobile');
};

if ( $(window).width() <= 720 ) {
    $('.carousel').addClass('carousel--mobile');
    $('.carousel__list').addClass('carousel__list--mobile');
    $('.carousel__item').addClass('carousel__item--mobile');
}

$('.overlay-container').on('click', function () {
    $('.overlay-container').removeClass('overlay-container--active');
    $('.overlay--show').addClass('overlay--hide').removeClass('overlay--show');
});