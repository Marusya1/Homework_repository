
$(function() {
    $('.carousel-list').Carousel();



var html = $('#test').html();
    var myself = [
      {
          title: 'info',
          firstName: 'Марина',
          lastName: 'Котлярова',
          email: 'mar.kotlyarova@gmail.com',
          phone: '+380508166211',
          college: 'Студентка курса GoIT',
          country: 'Украина',
          city: 'Харьков',
      }, 
    ];

    var content = tmpl(html, {
        data: myself
    });

    $('body').append(content);

});
    


