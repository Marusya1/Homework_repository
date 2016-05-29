var data = {
	'pageTitle': ' Тест по программированию',
	'question': [{
		'questionName': 'Вопрос № 1',
		'questionList': [{
			'lable': 'Вариант ответа № 1',
			right: true
		},
		{
			'lable': 'Вариант ответа № 2',
			right: false
		},
		{
			'lable': 'Вариант ответа № 3',
			right: false
		}]
	},
	{
		'questionName': 'Вопрос № 2',
		'questionList': [{
			'lable': 'Вариант ответа № 1',
			right: true
		},
		{
			'lable': 'Вариант ответа № 2',
			right: false
		},
		{
			'lable': 'Вариант ответа № 3',
			right: false
		}]
	},
	{	
		'questionName': 'Вопрос № 3',
		'questionList': [{
			'lable': 'Вариант ответа № 1',
			right: true
		},
		{
			'lable': 'Вариант ответа № 2',
			right: false
		},
		{
			'lable': 'Вариант ответа № 3',
			right: false
		}],
		inputName: ['31','32','33'],
	}]
}


var page = {
	addDivWrapper: function() {
		var wrapper = document.createElement('div');
		wrapper.className = 'wrapper';
		document.body.appendChild(wrapper);

		var titlePage = document.createElement('h1');
		titlePage.innerHTML = data.pageTitle;
		wrapper.appendChild(titlePage);
	},

	addList: function() {
		var form = document.createElement('form');
		form.className = 'form';
		document.querySelector('.wrapper').appendChild(form);


		for(var i = 0; i < data.question.length; i++) {
			var questionBox = document.createElement('div');
			questionBox.className = 'questionBox';
			document.querySelector('.form').appendChild(questionBox);

			var titleQuestion = document.createElement('h3');
			titleQuestion.innerHTML = data.question[i].questionName;
			questionBox.appendChild(titleQuestion);

			var varients = document.createElement('ul');
			questionBox.appendChild(varients);

			for (var j = 0; j < data.question[i].questionList.length; j++) {
				var listItem = document.createElement('li');
				varients.appendChild(listItem);

			var label = document.createElement('label');
				label.classList.add('variant');
				listItem.appendChild(label);

				var checkBox = document.createElement('input');
				checkBox.setAttribute('type', 'checkBox');
				checkBox.setAttribute('id', data.question[i].questionList[j].id);					
				lable.appendChild(checkBox);
			}
		}
	},
	addButton: function() {
		var div = document.createElement('button');
		div.className = 'button-box';
		document.querySelector('.form').appendChild(div);
		button.className = 'button';
		button.setAttribute('type', 'submit');
		button.setAttribute('value', 'Проверить мои результаты');
		button.addEventListener('click', function(){
			var answers = document.getElementsByTagName('input');
			if (answers[0].checked && answers[3].checked && answers[6].checked == true) {			
			alert('Молодец!')
		} else {
			alert('Попробуй еще раз!');
		}
		});
	}
