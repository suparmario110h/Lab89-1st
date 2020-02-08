function slick() {
    $(".food-slider").slick({
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 3e3
    }),
    $(".event-slider").slick({
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 3e3
    })
}
function smoothScroll() {
    const e = $(window).width()
      , o = $(".pc-header").height()
      , t = $(".sp-header").height();
    $('a[href^="#"]').click(function() {
        const n = $(this).attr("href")
          , a = $("#" == n || "" == n ? "html" : n);
        var i = a.offset().top;
        return console.log(o),
        e >= 768 ? i -= o : (i -= t,
        $(".sp-header .hamburger-menu").removeClass("is-active"),
        $(".sp-header .menu").fadeOut(200)),
        $("html, body").animate({
            scrollTop: i
        }, 500, "swing"),
        !1
    })
}
function toggleMenu() {
    const e = $(".hamburger-menu")
      , o = $(".sp-header .menu")
      , t = 200
      , n = "is-active";
    e.click(function() {
        e.toggleClass(n),
        e.hasClass(n) ? o.fadeIn(t) : o.fadeOut(t)
    })
}
function changeHeaderColor() {
    const e = $(".pc-header")
      , o = (e.height(),
    $(".concept").offset().top);
    $(window).on("load scroll", function() {
        var t = $(this).scrollTop()
          , n = !1;
        !n && t >= o ? (e.addClass("is-active"),
        n = !0) : (e.removeClass("is-active"),
        n = !1)
    })
}
$(function() {
    slick(),
    smoothScroll(),
    toggleMenu(),
    changeHeaderColor()
});
