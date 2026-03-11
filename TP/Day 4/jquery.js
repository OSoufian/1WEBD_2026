$(function () {
    // Animation au survol
    $("#menu a").on("mouseenter", function () {
        $(this).stop().animate({
            paddingLeft: "20px",
            opacity: 0.7
        }, 200);
    });

    $("#menu a").on("mouseleave", function () {
        $(this).stop().animate({
            paddingLeft: "12px",
            opacity: 1
        }, 200);
    });

  // Scroll fluide
    $("#menu a").on("click",function (e) {
        e.preventDefault();

        const target = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(target).offset().top - 60
        }, 800);
    });
});