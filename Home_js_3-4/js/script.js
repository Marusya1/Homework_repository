//data.pageTitle
var data = {
	'pageTitle': ' Тест по программированию',
	'question': [{
		'questionName': 'Вопрос № 1',
		'questionList': [{
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
		'questionName': 'Вопрос № 2',
		'questionList': [{
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
		'questionName': 'Вопрос № 3',
		'questionList': [{
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
		for(var i = 0; i < data.question.length; i++) {
			var questionBox = document.createElement('div');
			questionBox.className = 'questionBox';
			document.querySelector('.wrapper').appendChild(questionBox);

			var titleQuestion = document.createElement('h2');
			titleQuestion.innerHTML = data.question[i].questionName;
			questionBox.appendChild(titleQuestion);

			var varients = document.createElement('ol');
			questionBox.appendChild(varients);

			for (var j = 0; j < data.question[i].questionList.length; j++) {
				var listItem = document.createElement('li');
				varients.appendChild(listItem);

				var list_link = document.createElement('a');
				list_link.innerHTML = data.question[i].questionList[j].title;
				list_link.setAttribute('href', data.question[i].questionList[j].href);
				listItem.appendChild(list_link);
			}
		}
	},
	addButton: function() {
		var div = document.createElement('form');
		div.className = 'button-box';
		document.querySelector('.wrapper').appendChild(div);

		var button = document.createElement('input');
		button.className = 'button';
		button.setAttribute('type', 'submit');
		button.setAttribute('value', 'Проверить мои результаты');
		div.appendChild(button);
	},
	
	pageInit: function() {
		this.addDivWrapper();
		this.addList();
		this.addButton();
	}
}

page.pageInit();

	console.log(data);	