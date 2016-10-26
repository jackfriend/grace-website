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

var template = `
    <div class="carousel__item">
        <img class="carousel__img" v-bind:src="houseImage">
        <div class="carousel__info">
          <h1>{{ houseName }}</h1>
          <p>{{ houseDescription }}</p>
        </div>
        <div class="carousel__button"><a v-bind:href="houseLink">Read More</a>
        </div>
      </div>`

Vue.component('house-item', {
    template: template,
    props: ['houseName', 'houseDescription', 'houseImage', 'houseLink']
});

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
};
