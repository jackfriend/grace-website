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
