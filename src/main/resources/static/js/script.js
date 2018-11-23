$(document).ready(function () {
    var d, h, m, deg;
    var hdeg = 360 / 24;
    var mdeg = 360 / 24 / 60;

    function clock() {
        d = new Date();
        h = d.getHours();
        m = d.getMinutes();
        deg = (hdeg*h) + (mdeg*m);
        console.log(deg);
    }
    setInterval(function () {
        clock();
        $(".clock").css("transform", "rotateZ("+ deg +"deg)");
    }, 1000);
});
