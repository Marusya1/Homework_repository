var mss = 0;
var sec = 0;
var min = 0;
var hrc = 0;
time = ['00', '00', '00', '000'];

var elementH = document.querySelector('.H'), // с помощью этих четырёх переменных изначально выбираются элементы html, которые будут изменяться. Пример html-body - внизу кода в комментариях.
	elementM = document.querySelector('.M'),
	elementS = document.querySelector('.S'),
	elementMS = document.querySelector('.MS');

var //elementNEW, // для создания новых переменных. Название можно своё. Главное - чтобы совпадала по ходу.
	//elementHTML, // для выделения прочих нужных элементов в html.
	elementStart=document.querySelector('.start'), // для выделения кнопки "старт", "круг" и "сброс".
	elementSplit=document.querySelector('.split'),
	elementReset=document.querySelector('.reset');

var switcher=1, // первоначальные значения, которые будут заданы таймеру. Это - показатель того, включен таймер или нет. Ну, тут фигня какая-то, потому что получается только так, чтобы 1 - выключен, 0 - включён. Если получится иначе - поставлю памятник! ;-)
	timeInit=0, // время начала отсчёта.
	timeNew=0, // время остановки отсчёта.
	timePause=0, // переменная в которой будет храниться разница между временем остановки и начала отсчёта и суммироваться.
	timeTotal=0; // здесь суммируются показатели timePause. Это нужно для того, чтобы таймер после старта начинал с того же показателя времени, что и до остановки.

function startTimer() {
	if (switcher==1) { // проверяем, выключен или выключен счётчик.
		switcher=0; // если выключен - включаем.
		timeInit=new Date(); // и создаём новую точку отсчёта. В console.log она будет передавать что-то типа: 12 Марта 2016 года 12:23:34.123, где 123 - милисекунды.
		timeNew=timeInit;
		elementStart.innerHTML='pause'; // когда мы нажимаем "старт", у нас кнопка поменяется на слово "пауза"
		timer(); // А тут - функция, в которой мы выполняем подсчёт прошедшего времени в нужные нам единицы: часы, минуты, секунды, милисекунды.
	}
	else {
		stopTimer(); // если таймер включён, переходим к этой функции. Здесь вообще можно прописать перед этой строчкой switcher=1; чтобы не писать if в следующей функции. Это можно сделать, чтобы выглядело иначе.
	}
}
function stopTimer() {
	if (switcher==0) { // вот от этого if и литералов {, } можно попробовать избавиться.
		switcher=1;
		timeNew=new Date(); // создаём точку остановки времени, которая будет больше timeInit.
		timePause=timeNew.getTime()-timeInit.getTime(); // медот getTime позволяет переформатировать обратно значения Date() в милисекунды. Как тогда, когда решали задачи по физики, что если у нас было время в часах и минутах, мы переводили всё в секунды.
		elementStart.innerHTML='start'; // возвращаем значение кнопки "Старт".
	} // и этот литерал
	timeTotal=timeTotal+timePause; // суммируем значение пауз. timeTotal повторяется, чтобы не вводить еще одну переменную. В начале вторая timeTotal будет равна 0, поэтому первая будет равна собственно timePause.
}
function timer() { // теперь подробнее о работе таймера.
	if (switcher==0) { // здесь обязательно проверяем, работает ли фунцкия. Иначе она запустится и зациклится, и даже если мы будем жать паузу, таймер не остановится.
		if (switcher==0) { // и опять проверка, иначе у нас в таймере появятся лишние милисекунды - почему так, объясню в конце.
			var timeNow=new Date(); // в начале каждого цикла создаём новую точку отсчёта.
			var hms=(timeNow.getTime()-timeNew.getTime()+timeTotal)-1000*((60*60*hrs)+(60*min)+(sec)); // тут вообще печаль. Вычитаем из нового времени старое. Они у нас всегда будут разные каждый раз, могда мы нажимаем старт или паузу, НО! при этом не будут передавать значение пауз, если они и были. Для этого прибавляем ещё и значение всех пауз в timeTotal.
		}
		else {
			var timeNow=new Date(); // можно попробовать без этой строчки, я не проверял, что будет.
			var hms=(timeNow.getTime()-timeInit.getTime()+timeTotal)-1000*((60*60*hrs)+(60*min)+(sec)); // изначально формула была "(3600000*hrs)+(60000*min)+(1000*sec)". Что это такое? Как и в предыдущей строке, мы вычисляем МИЛИСЕКУНДЫ на основе разницы во времени, но каждую секунду (это 1000 милисекунд) у нас будет появляться секунда в таймере, каждую минуту (а это 60 секунд, или 1000*60 милисекунд) - минута, каждый час (это 1000*60*60 милисекунд). Почему именно милисекунд? Потому что getTime у нас в милисекундах, и нужно сохранять значение переменных именно в этой "валюте"
		}
		mss=hms; // а теперь посчитав разницу в милисекундах по формуле, подставляем их в нашу переменную.
		if (hms>999) { // после значения 999 - обнуляем.
			mss=0;
			sec++; // и добавляем секунду ко времени (вот почему мы будем писать такие формулы в 49 и 53 строке, потому что они не учитываются в getTime, и мы из вычитаем.)
		}
		if (sec>59){ // то же самое с секундами и минутами.
			sec=0;
			min++; // после 59 секунд прибавляем минуту.
		}
		if (min>59){
			min=0;
			hrs++; // после 59 минут - час.
		}
		if (mss<10) time[3]='00'+mss; // записываем в массив значение. От 0 до 9 в милисекундах не будет хватать 2 знаков, поэтому забиваем их нулями через стринг.
		else { // если значение милисекунд будет больше 10, то:
			if (mss<100) time[3]='0'+mss; else time[3]=mss; // если меньше 100, добавляем ещё один нуль, больше ста - берём обычное значение, так как все три цифры уже будут записываться в массив.
		}
		elementMS.innerHTML=time[3]; // теперь записываем полученное значение в соответствующий элемент на странице.
		if (sec<10) time[2]='0'+sec; else time[2]=sec; // и т.д. для всех элементов
		elementS.innerHTML=time[2];
		if (min<10) time[1]='0'+min; else time[1]=min;
		elementM.innerHTML=time[1];
		if (hrs<10) time[0]='0'+hrs; else time[0]=hrs;
		elementH.innerHTML=time[0];
		setTimeout(timer, 1); // а тут - зацикливаем функцию: она будет повторяться через каждую милисекунду (в скобочках - название этой же функции).
	}
}

function START (){
	if (timeTotal==0) {
		startTimer();
	}
	else {
		startTimer();
	}
}
function SPLIT (){
	elementHTML=document.querySelector('.split-box');
	elementNEW=document.createElement('li');
	elementNEW.classList.add('split-line');
	elementNEW.innerHTML=time[0]+' : '+time[1]+' : '+time[2]+' : '+time[3]; // берем для новой строки сплита имеющееся значение массива и записываем в таком же формате, как и в таймере.
	elementHTML.appendChild(elementNEW); // и добавляем на странице.
}
function RESET (){ // просто обнуляем все значения.
	hrs=0;
	min=0;
	sec=0;
	mss=0;
	elementH.innerHTML='00'; // на странице сбрасываем счётчик.
	elementM.innerHTML='00';
	elementS.innerHTML='00';
	elementMS.innerHTML='000'; // можно также добавить for (i=0; i<=2; i++) {time[i]='00';}; time[3]='000';
	timeInit=new Date();
	timeNew=new Date();
	timePause=0; // можно удалять
	timeTotal=0;
	switcher=1; // выключаем счётчик.
	elementStart.innerHTML='start'; // в случае, если таймер был включен, и мы нажмём эту кнопку, на кнопке Старта останется Пауза, так как в этом случае не отработает функция, которая перезаписывает слово СТАРТ (строка 40).
	elementHTML=document.querySelector('.split-box'); // выбираем раздел для строк сплита на странице.
	elementNEW=document.querySelectorAll('.split-line'); // выбираем все созданные сплиты.
	for (var i=0; i<elementNEW.length; i++) elementHTML.removeChild(elementNEW[i]); // и удаляем их через цикл. В elementNEW создается массив (даже если строка одна), и нам нужно пройтись по всем значениям индекса. Отсюда и [i].
}
elementStart.addEventListener('click', START); // кнопки, запускающие функцию. Теперь подробнее о СТАРТЕ. Когда браузер отработает до этой строки, он увидит, что в нём записано событие START и проверит его без разрешения. Проверит сначала значение timeTotal в строке 83 и перейдет по одному из условий. Потом проверит значение switcher в строке 24 и, если оно равно нулю, перейдет дальше по функции в строку 36 и перейдёт обратно в строку 24 и выполнит таймер. Для этого мы там и поставили 2 условия switcher==0. При переходе к функции timer в строке 45 значение switcher будет равно 0, но как только отработает, вернётся к значению 1 (по условию). Вот поэтому мы и ставим 2 if с основной функцией во втрором условии.
elementSplit.addEventListener('click', SPLIT);
elementReset.addEventListener('click', RESET);

/*	