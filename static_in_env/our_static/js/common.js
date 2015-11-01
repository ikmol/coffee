$(document).ready(function(){

    // header resizer
    wResize();

    if (!device.tablet() && !device.mobile()) {
		$(".player").mb_YTPlayer();
	} else {
		//Если мобильние девайсы
	}

    //hover for social links
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


    /* ajax form */
    sendOrder();

});


function sendOrder(){
    function block_form() {
        $("#loading").show();
       // $('textarea').attr('disabled', 'disabled');
        $('input').attr('disabled', 'disabled');
    }

    function unblock_form() {
        $('#loading').hide();
        //$('textarea').removeAttr('disabled');
        $('input').removeAttr('disabled');
        $('.errorlist').remove();
    }

    // prepare Options Object for plugin
    var options = {
        beforeSubmit: function(form, options) {
            // return false to cancel submit
            block_form();
        },
        success: function() {
            unblock_form();
            $("#form_ajax").show();
            $("#id_name, #id_phone").css("border-bottom", "solid 1px #3A9400");
            setTimeout(function() {
                $("#form_ajax").hide();
                $("#id_name, #id_phone").val("").css("border-bottom", "solid 1px #8f735a");
            }, 2000);
        },
        error:  function(resp) {
            unblock_form();
            // render errors in form fields
            var errors = JSON.parse(resp.responseText);
            for (error in errors) {
                var id = '#id_' + error;
            //    $(id).parent('p').prepend(errors[error]);
                $(id).css("border-bottom", "solid 1px red");
            }
            setTimeout(function() {
                /*$("#id_name, #id_phone").css("border-bottom", "solid 1px #8f735a");*/
            }, 2000);
        }
    };

    $('#ajaxform').ajaxForm(options);

}


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
    $("#loading").css("left", ($(".sendform").width()/2) - ($("#loading").width()/2));
    $("#form_ajax").css("left", ($(".sendform").width()/2) - ($("#form_ajax").width()/2));

    if($(window).width() < 1260){
        $(".gallery .owl-buttons").css("display", "none");
    }
    else if($(window).width() > 1259){
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





