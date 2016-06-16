$('#login').on('show.bs.modal', function () {
  $('.container_blur').addClass('blur');
})
          
$('#login').on('hide.bs.modal', function () {
  $('.container_blur').removeClass('blur');
})