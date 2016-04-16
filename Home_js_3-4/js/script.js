//data.pageTitle
var data = {
	'pageTitle': ' Тест по программированию',
	'question': [{
		'questionName': 'Вопрос № 1',
		'questionList': [{
			'lable': 'Вариант ответа № 1'
		},
		{
			'lable': 'Вариант ответа № 2'
		},
		{
			'lable': 'Вариант ответа № 3'
		}]
	},
	{
		'questionName': 'Вопрос № 2',
		'questionList': [{
			'lable': 'Вариант ответа № 1',
		},
		{
			'lable': 'Вариант ответа № 2',
		},
		{
			'lable': 'Вариант ответа № 3',
		}]
	},
	{	
		'questionName': 'Вопрос № 3',
		'questionList': [{
			'lable': 'Вариант ответа № 1',
		},
		{
			'lable': 'Вариант ответа № 2',
		},
		{
			'lable': 'Вариант ответа № 3',
		}]
	}]
}

	/*for (var i = 0; i < data.question.length; i++) {
	console.log(i + 1 + ' . ' + data.question[i].questionName);

	for (var j = 0; j < data.question[i].questionList.length; j++) {
		console.log(data.question[i].questionList[j]);
	}
}*/

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

				var checkBox = document.createElement('input');
				checkBox.setAttribute('type', 'checkBox');
				checkBox.setAttribute('id', data.question[i].questionList[j].id);					
				listItem.appendChild(checkBox);


				var list_link = document.createElement('lable');
				list_link.innerHTML = data.question[i].questionList[j].lable;
				list_link.setAttribute('for', data.question[i].questionList[j].id);
				listItem.appendChild(list_link);
			}
		}
	},
	addButton: function() {
		var div = document.createElement('button');
		div.className = 'button-box';
		document.querySelector('.form').appendChild(div);

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