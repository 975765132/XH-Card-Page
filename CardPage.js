if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    alert("使用 横屏 以获得最佳体验\nUse landscape mode for the best experience") 
    $('head').append('<link rel="stylesheet" type="text/css" href="banPress.css"/>');
}

$(window).resize(function() {
    var TransformWidth =  1/$(window).width();
    document.getElementsByTagName("body")[0].setAttribute(
        "Transform", "scale("+TransformWidth+");"
    );
});
$(document).ready(function(){
    $('#color1').click(function(){
        $('#bord').css({
            "background-color": "rgb(252, 255, 209)"
        });
        $('#flow1, #flow2, #flow4').css({
            "background-color": "rgb(250, 222, 162)"
        });
        $('#flow3').css({
            "background-color": "rgb(184, 199, 241)"
        });
        $('#flow5').css({
            "background-color": "rgb(253, 194, 194)"
        });
        $('#Content, #UrlXH').css({
            "color": "rgb(143, 109, 0)"
        });
        $('#UrlXH').hover(function(){
            $('#UrlXH').css({
                "color": "rgb(205, 245, 255)"
            });
        },function(){
            $("#UrlXH").css({
                "color": "rgb(143, 109, 0)" 
            });
        });
        $('#theNot').css({
            "color": "rgb(82, 189, 197)"
        });
        $('#wxh2').css({
            "color": "rgb(88, 183, 212)"
        });
    });

    $('#color2').click(function(){
        $('#bord').css({
            "background-color": "rgb(195, 255, 235)"
        });
        $('#flow1, #flow2, #flow4').css({
            "background": "rgb(162, 250, 177)"
        });
        $('#flow3').css({
            "background": "rgb(235, 241, 184)"
        });
        $('#flow5').css({
            "background": "rgb(207, 214, 252)"
        });
        $('#Content, #UrlXH').css({
            "color": "rgb(0, 137, 161)"
        });
        $('#UrlXH').hover(function(){
            $('#UrlXH').css({
                "color": "rgb(251, 205, 255)"
            });
        },function(){
            $("#UrlXH").css({
                "color": "rgb(0, 137, 161)" 
            });
        });
        $('#theNot').css({
            "color": "rgb(221, 45, 45)"
        });
        $('#wxh2').css({
            "color": "rgb(88, 212, 88)"
        });
    });
  });
