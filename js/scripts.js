
$(document).ready(function () {
    $(".hovs").hide();
    $(".delani").hover(function () {
        $(this).find(".hovs").toggle(600);
    });

});
$(".design").click(function () {
    $(".design-img").slideToggle(1100);
    $(".design-p").slideToggle(1200);
});

$(".development").click(function () {
    $(".development-img").slideToggle(1100);
    $(".development-p").slideToggle(1200);
});

$(".product").click(function () {
    $(".product-img").slideToggle(1100);
    $(".product-p").slideToggle(1200);
});

$("button").click(function (party) {
    var client = document.getElementById('nameDetail').value;
    alert('Thanks ' + ' message received successful. ' + '!');
    party.preventDefault();
});

$("button").on('click', function () {
    $('form').each(function () {
        this.reset();
    });
});