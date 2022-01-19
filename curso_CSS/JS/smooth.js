(function(){
    // efecto smooth
    $('a.scroll').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 800);
    })
}());
// scroll
$(document).ready(function(){
    $("html").niceScroll({
        cursorcpolor:"#111",
        zindex: 1100,
        cursorborderradius: 3,
        cursorborder:"1px solid #fff",
        horizrailenabled: false,
        cursorfixedheight: 120,
        cursorwidth:"12px",
    })
})