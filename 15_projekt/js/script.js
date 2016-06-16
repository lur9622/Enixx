$(function() {
  $( ".showComment" ).click(function() {
    var that =  $(this).parent().parent().find(".comment-content");
    if (that.hasClass('commentContentActive')) {
      that.removeClass( "commentContentActive");
    }
    else {
      that.addClass( "commentContentActive");
    }
  });
});
