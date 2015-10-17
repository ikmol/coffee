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
            ],
        itemsMobile: [479, 2],
        autoHeight: true,
        lazyLoad : true
    });

    $(".infoblock").hover(
        function(){
            $(this).addClass("active");
        },
        function(){
            $(this).removeClass("active");
        }
    );


});

String.prototype.trimToLength = function(m) {
      return (this.length > m)
        ? jQuery.trim(this).substring(0, m).split(" ").slice(0, -1).join(" ") + "..."
        : this;
    };

$(window).resize(function(){
    wResize();
});

//resize header for device
function wResize(){
    $("header").css("height", $(window).height());
    $(".tobottom").css("left", ($(window).width()/2) - ($(".sendform").width()/2));
    if($(window).width() < 1260){
        $(".gallery .owl-buttons").css("display", "none");
    }
    else if($(window).width() > 1261){
        $(".gallery .owl-buttons").css("display", "inline-block");
    }


    if($(window).width() > 700) {
        if ($("#mainnews").text().length > 125) {
            $("#mainnews").text($("#mainnews").text().trimToLength(125));
        }
    }

    if($(window).width() < 700) {
        $(".shelf div").removeClass("col-xs-6 col-xs-offset-3");
        $(".shelf img").css("display", "none");
    }
    else{
        $(".shelf img").css("display", "block");
        $(".shelf div").addClass("col-xs-6 col-xs-offset-3");
    }
    if($(window).width() < 480) {
        $("#blocknews1").removeClass("col-xs-6");
        $("#blocknews1").addClass("col-xs-12");
        $("#blocknews2").removeClass("col-xs-6");
        $("#blocknews2").addClass("col-xs-12");
        $("#blocknews3").removeClass("col-xs-6");
        $("#blocknews3").addClass("col-xs-12");
        $("#blocknews4").removeClass("col-xs-6");
        $("#blocknews4").addClass("col-xs-12");
    }
    else{
        $("#blocknews1").removeClass("col-xs-12");
        $("#blocknews1").addClass("col-xs-6");
        $("#blocknews2").removeClass("col-xs-12");
        $("#blocknews2").addClass("col-xs-6");
        $("#blocknews3").removeClass("col-xs-12");
        $("#blocknews3").addClass("col-xs-6");
        $("#blocknews4").removeClass("col-xs-12");
        $("#blocknews4").addClass("col-xs-6");
    }

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





