
$(document).ready(function () {
    $(".load").hide();
    $(".contain-f").hover(function () {
        $(this).find(".load").toggle(600);
    });

});
$(".click0").click(function () {
    $(".hid-0").slideToggle(1100);
    $(".sh-0").slideToggle(1200);
});

$(".click1").click(function () {
    $(".hid-1").slideToggle(1100);
    $(".sh-1").slideToggle(1200);
});

$(".click2").click(function () {
    $(".hid-2").slideToggle(1100);
    $(".sh-2").slideToggle(1200);
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