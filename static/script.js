var fetchData = function (url) {
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        async: false,
        success: function (res) {
            data = res;
        }
    });
    return data
}

var app = new Vue({
    el: '#app',
    data: {
        items: fetchData('static/data.json')
    }
});

if (  $(window).width() <= 480 ) {
    $('.nav-container').addClass('nav-container--mobile');
    $('.nav').addClass('nav--mobile type');
    $('.nav__logo').addClass('nav__logo--mobile');
    $('.nav__list').addClass('nav__list--mobile');
    $('.nav__madeby').addClass('nav__madeby--mobile');
}
