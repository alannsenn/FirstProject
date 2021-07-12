require("./bootstrap");
// require("./script");
require("./jquery.countdown");

// Countdown
$("#getting-started").countdown("2021/12/25", function (event) {
    $("#days").text(event.strftime("%D"));
    $("#hours").text(event.strftime("%H"));
    $("#mins").text(event.strftime("%M"));
    $("#secs").text(event.strftime("%S"));
});

// Navbar
$(window).scroll(function () {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
});

$(document).ready(function () {
    $(".nav-item").bind("click", function (event) {
        var clicked = $(this);
        $(".nav-item").each(function () {
            $(this).removeClass("active");
        });
        clicked.addClass("active");
    });
});

$(document).ready(function () {
    $(".nav-link").bind("click", function (event) {
        var clicked = $(this);
        $(".nav-link").each(function () {
            $(this).removeClass("main");
            $(this).css({ color: "#8B9CAF" });
        });
        clicked.addClass("main");
        clicked.css({ color: "#FEBC2C" });
        $(this).open(clicked.href);
    });
});

// GSAP
gsap.registerPlugin(TextPlugin);
gsap.to(".caption-text-content-3-8", {
    duration: 2,
    text: "Choose one of our friendly prices that suit the most with your learning style",
});
