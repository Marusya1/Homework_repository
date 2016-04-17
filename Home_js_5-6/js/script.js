var mss = 0;
var sec = 0;
var min = 0;
var hrc = 0;
var dateTimeObj = new Date();
var switcher=0, 
	timeInit=0,
	timeNew=0, 
	timePause=0,
	timeTotal=0,
	time = ['00', '00', '00', '000'];

var elementHrs = document.querySelector('.js-hours'), 
	elementMin = document.querySelector('.js-minutes'),
	elementSec = document.querySelector('.js-seconds'),
	elementMSS = document.querySelector('.js-miliseconds');

var elementNew, 
	elementHTML, 
	elementStart=document.querySelector('.js-start'), 
	elementSplit=document.querySelector('.js-split'),
	elementReset=document.querySelector('.js-reset');

function startTimer() {
	if (switcher == 0) { 
		switcher = true; 
		timeInit = new Date(); 
		timeNew = timeInit;
		elementStart.innerHTML =' pause'; 
		timer();
	}
	else {
		stopTimer(); // если таймер включён, переходим к этой функции. Здесь вообще можно прописать перед этой строчкой switcher=1; чтобы не писать if в следующей функции. Это можно сделать, чтобы выглядело иначе.
	}
}
function stopTimer() {
	if (switcher == 0) { // вот от этого if и литералов {, } можно попробовать избавиться.
		switcher = 1;
		timeNew = new Date(); 
		timePause = timeNew.getTime()-timeInit.getTime(); 
		elementStart.innerHTML = 'start'; 
	} 
	timeTotal = timeTotal+timePause;
}
function timer() { 
	if (switcher == 0) { 
		if (switcher == 0) { 
			var timeNow = new Date(); 
			var hms = (timeNow.getTime()-timeNew.getTime()+timeTotal)-1000*((60*60*hrs)+(60*min)+(sec)); // тут вообще печаль. Вычитаем из нового времени старое. Они у нас всегда будут разные каждый раз, могда мы нажимаем старт или паузу, НО! при этом не будут передавать значение пауз, если они и были. Для этого прибавляем ещё и значение всех пауз в timeTotal.
		}
		else {
		//	var timeNow = new Date();
			var hms = (timeNow.getTime()-timeInit.getTime()+timeTotal)-1000*((60*60*hrs)+(60*min)+(sec)); // изначально формула была "(3600000*hrs)+(60000*min)+(1000*sec)". Что это такое? Как и в предыдущей строке, мы вычисляем МИЛИСЕКУНДЫ на основе разницы во времени, но каждую секунду (это 1000 милисекунд) у нас будет появляться секунда в таймере, каждую минуту (а это 60 секунд, или 1000*60 милисекунд) - минута, каждый час (это 1000*60*60 милисекунд). Почему именно милисекунд? Потому что getTime у нас в милисекундах, и нужно сохранять значение переменных именно в этой "валюте"
		}
		mss=hms; 
		if (hms>999) { 
			mss=0;
			sec++; 
		}
		if (sec>59){ 
			sec=0;
			min++; 
		}
		if (min>59){
			min=0;
			hrs++; 
		}
		if (mss<10) time[3]='00'+mss; 
		else { 
			if (mss<100) time[3]='0'+mss; else time[3]=mss;
		}
		elementMSS.innerHTML=time[3]; 
		if (sec<10) time[2]='0'+sec; else time[2]=sec;
		elementSec.innerHTML=time[2];
		if (min<10) time[1]='0'+min; else time[1]=min;
		elementMin.innerHTML=time[1];
		if (hrs<10) time[0]='0'+hrs; else time[0]=hrs;
		elementHrs.innerHTML=time[0];
		setTimeout(timer, 1); 
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
	elementNew=document.createElement('li');
	elementNew.classList.add('split-line');
	elementNew.innerHTML=time[0]+' : '+time[1]+' : '+time[2]+' : '+time[3]; // берем для новой строки сплита имеющееся значение массива и записываем в таком же формате, как и в таймере.
	elementHTML.appendChild(elementNew);
}
function RESET (){ 
	hrs=0;
	min=0;
	sec=0;
	mss=0;
	elementHrs.innerHTML='00';
	elementMin.innerHTML='00';
	elementSec.innerHTML='00';
	elementMSS.innerHTML='000'; // можно также добавить for (i=0; i<=2; i++) {time[i]='00';}; time[3]='000';
	timeInit=new Date();
	timeNew=new Date();
	timePause=0; // можно удалять
	timeTotal=0;
	switcher=1; 
	elementStart.innerHTML='start'; 
	elementHTML=document.querySelector('.split-box'); 
	elementNew=document.querySelectorAll('.split-line');
	for (var i=0; i<elementNew.length; i++) elementHTML.removeChild(elementNEW[i]); 
}
elementStart.addEventListener('click', START); 
elementSplit.addEventListener('click', SPLIT);
elementReset.addEventListener('click', RESET);
