data.pageTitle
var data = {
	'pageTitle': ' Тест по программированию',
	'questions': [{
		'questionsName': 'Вопрос № 1',
		'questionsList': [{
			'title': 'Вариант ответа № 1'
		},
		{
			'title': 'Вариант ответа № 2'
		},
		{
			'title': 'Вариант ответа № 3'
		}]
	},
	{
		'questionsName': 'Вопрос № 2',
		'questionsList': [{
			'title': 'Вариант ответа № 1',
		},
		{
			'title': 'Вариант ответа № 2',
		},
		{
			'title': 'Вариант ответа № 3',
		}]
	},
	{	
		'questionsName': 'Вопрос № 3',
		'questionsList': [{
			'title': 'Вариант ответа № 1',
		},
		{
			'title': 'Вариант ответа № 2',
		},
		{
			'title': 'Вариант ответа № 3',
		}]
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
		for(var i = 0; i < data.questions.length; i++) {
			var questionBox = document.createElement('div');
			questionBox.className = 'questionBox';
			document.querySelector('.wrapper').appendChild(questionBox);

			var titleQuestion = document.createElement('h2');
			titleQuestion.innerHTML = data.questions[i].questionName;
			questionBox.appendChild(titleQuestion);

			var varients = document.createElement('ul');
			questionBox.appendChild(varients);

			for (var j = 0; j < data.questions[i].questionList.length; j++) {
				var listItem = document.createElement('li');
				varients.appendChild(listItem);

				var list_link = document.createElement('a');
				list_link.innerHTML = data.questions[i].questionList[j].title;
				list_link.setAttribute('href', data.questions[i].questionList[j].href);
				listItem.appendChild(list_link);
			}
		}
	},
	addButton: function() {
		var div = document.createElement('div');
		div.className = 'button-box';
		document.querySelector('.form').appendChild(div);

		var button = document.createElement('input');
		button.className = 'button';
		button.setAttribute('type', 'submit');
		button.setAttribute('value', 'Проверить мои результаты');
		div.appendChild(button);
	},
	
	pageTitle: function() {
		this.addDivWrapper();
		this.addList();
		this.addButton();
	}
}

page.pageInit();

	console.log(data);	