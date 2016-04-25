$(function() {
  $('input').on('mouseenter', function() {
    $(this).siblings('span').show();
  });
  $('input').on('mouseleave', function() {
    $(this).siblings('span').hide();
  });
  $('.help').on('click', function(event) {
    event.preventDefault();
    $('span').show();
  })
});

