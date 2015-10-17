$(document).ready(function(){
    // header resizer
    wResize();

    //hover for socizl links
    socialHover("my_b", "my_a");
    socialHover("my_d", "my_c");
    socialHover("my_f", "my_e");
    socialHover("my_h", "my_g");

    $("#smak").owlCarousel({
        items : 3,
        navigation: true,
        navigationText: [
            "<i class='my my_j'></i>",
            "<i class='my my_k'></i>"
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
    else if($(window).width() < 1200 && $(window).width() > 771)
        $(".form").css("left", ($(window).width()/2) - ($(".sendform").width()+15));
    else if($(window).width() < 770)
        $(".form").css("left", ($(window).width()/2) - ($(".sendform").width()/2));
}

function socialHover(p1, p2){
    $("."+p1).hover(
        function(){
            $(this).removeClass(p1);
            $(this).addClass(p2);
        },
        function(){
            $(this).removeClass(p2);
            $(this).addClass(p1);
        }
    );
}





