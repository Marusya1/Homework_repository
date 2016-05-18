$(function () {

	$('a.fancybox').fancybox ({
	overlayColor: 'green'
	});
	$('.carousel-list').Carousel();

});

$(function () {

	var html = $('#test').html();
	var myself = [
		{
			name: 'Марина Котлярова',
			info: 'Студентка курса GoIT'
		},
		{
			content: 'Хочу выучить Frontend, потому что',
			reason: 'Хочу освоить новую специальность',
			reason:	'Получить современное образование'
		},
		{
			phone: '380508166211',
			email: 'mar.kotlyarova@gmail.com',
			vk: 'vk.com/id9701748'
		}
	];

	var content = tmpl(html,{
		data: myself
	});

	$('body').append(content);

});