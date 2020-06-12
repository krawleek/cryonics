var $ = jQuery;
$(document).ready();

// Анимация строк
function Animate(id) {

  var marquee = $(id); 
  marquee.css({"overflow": "hidden", "width": "100%"});
 
  marquee.wrapInner("<span>");
  marquee.find("span").css({ "width": "50%" , "display":"inline-block" }); 
  marquee.append(marquee.find("span").clone()); 

  marquee.wrapInner("<div>");
  marquee.find("div").css("width", "202%");

  var reset = function() {

    $(this).css("margin-left", "0%");
    $(this).animate({ "margin-left": "-100%" }, 10000, 'linear', reset);

  };

  reset.call(marquee.find("div"));

}


$(function() {
  Animate("#marquee");
});


$(function() {
  Animate("#marquee1");
});

$(function() {
  Animate("#marquee2");
});