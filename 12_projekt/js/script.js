$(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('.navbar').attr("style", "background-color:rgba(0,0,0,0.8);");
    }
    else{
        $('.navbar').attr("style", "background-color:rgba(0,0,0,0.2);");
    }
  });
});
