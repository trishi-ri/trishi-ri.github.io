//решение задачки про расположение элементов по окружности: https://toster.ru/q/295935

$(document).ready(function () {
    var radius = document.getElementsByClassName('nav-fitapp-circles')[0].offsetWidth;
    var height = radius * 2 + 'px';
    $('.nav-fitapp-circles').eq(0).css({
        'height': height,
        'border-bottom-right-radius': height,
        'border-top-right-radius': height
    });
    var widthE = document.getElementsByClassName('nav-fitapp-circles-item')[0].offsetWidth;

    var num = document.getElementById('features')
        .getElementsByClassName('nav-fitapp-circles-item').length;
    for (var i = 0; i < num; i++) {
        var f = round2((Math.PI / num) * i - Math.PI / 2 + (Math.PI / num) / 2);
        var left = -widthE / 2 + radius * round2(Math.cos(f)) + 'px';
        var top = radius - widthE / 2 + radius * round2(Math.sin(f)) + 'px';
        $('.nav-fitapp-circles .nav-fitapp-circles-item').eq(i).css({
            'top': top,
            'left': left
        });
    }
});

function round(n, t) {
    var tens = Math.pow(10, t);
    return Math.round(n * tens) / tens;
}

function round2(n) {
    return round(n, 2);
}
