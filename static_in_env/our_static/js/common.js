$(document).ready(function(){
    // header resizer
    wResize();

    //hover for socizl links
    socialHover("my_c");

    $("#smak").owlCarousel({
        items : 3,
        navigation: true,
        navigationText: [
            "<i class='fa fa-arrow-left fa-3x'></i>",
            "<i class='fa fa-arrow-right fa-3x'></i>"
            ]
    });



});

$(window).resize(function(){
    wResize();
});

//resize header for device
function wResize(){
    $("header").css("height", $(window).height());

    if($(window).width() > 1200)
        $(".form").css("left", ($(window).width()/2) - ($(".sendform").width()+35));
    else if($(window).width() <= 1199 && $(window).width() > 771)
        $(".form").css("left", ($(window).width()/2) - ($(".sendform").width()+15));
    else if($(window).width() < 770)
        $(".form").css("left", ($(window).width()/2) - ($(".sendform").width()/2));
}

function socialHover(p1){
    classHover = 'my_b';
    $("."+p1).hover(
        function(){
            $(this).removeClass(p1);
            $(this).addClass(classHover);
        },
        function(){
            $(this).removeClass(classHover);
            $(this).addClass(p1);
        }
    );
}





