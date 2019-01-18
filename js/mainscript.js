var con=document.querySelectorAll(".content");
var imgcon=document.querySelectorAll(".imgcon");
var textblock=document.querySelectorAll(".textblock");
var imglike=document.querySelectorAll(".imglike");
var header=document.querySelector(".header");
var con1=document.querySelector(".con1");
var con2=document.querySelector(".con2");
var con3=document.querySelector(".con3");
var con4=document.querySelector(".con4");
var con5=document.querySelector(".con5");
for(var i=0;i<con.length;i++){
	imglike[i].style.height=innerWidth/5+"px";
	header.style.height=innerWidth/2.5+"px";
	con[i].style.height=innerHeight-innerWidth/2.5+"px";
	imglike[i].onclick=function(){
		if(this.id=="1"){
			con1.style.display="block";
			con2.style.display="none";
			con3.style.display="none";
			con4.style.display="none";
			con5.style.display="none";
			for(var j=0;j<imglike.length;j++){
				imglike[j].style.background="#ffa94f";
			}
			this.style.background="white";
		} else if(this.id=="2"){
			con1.style.display="none";
			con2.style.display="block";
			con3.style.display="none";
			con4.style.display="none";
			con5.style.display="none";
			for(var j=0;j<imglike.length;j++){
				imglike[j].style.background="#ffa94f";
			}
			this.style.background="white";
		} else if(this.id=="3"){
			con1.style.display="none";
			con2.style.display="none";
			con3.style.display="block";
			con4.style.display="none";
			con5.style.display="none";
			for(var j=0;j<imglike.length;j++){
				imglike[j].style.background="#ffa94f";
			}
			this.style.background="white";
		} else if(this.id=="4"){
			con1.style.display="none";
			con2.style.display="none";
			con3.style.display="none";
			con4.style.display="block";
			con5.style.display="none";
			for(var j=0;j<imglike.length;j++){
				imglike[j].style.background="#ffa94f";
			}
			this.style.background="white";
		} else if(this.id=="5"){
			con1.style.display="none";
			con2.style.display="none";
			con3.style.display="none";
			con4.style.display="none";
			con5.style.display="block";
			for(var j=0;j<imglike.length;j++){
				imglike[j].style.background="#ffa94f";
			}
			this.style.background="white";
		}
	}
}
var kolvo=[12];
var zagolovki=["Ультразвуковые сенсоры","Датчик температуры","Датчик загрязнения воздуха","Датчик освещенности","Датчик отпечатка пальца"];
var text=["<ul><li>Количество - "+kolvo[0]+" штук</li><li>Безопасность</li><li>Автоматизация</li></ul>","<ul><li>Количество - 1 штука</li><li>Климат-контроль</li></ul>","<ul><li>Количество - 2 штуки</li><li>Обнаружение большого содержания пыли в воздухе</li></ul>","<ul><li>Количество - 5 штук</li><li>Автоматизация моторных действий</li></ul>","<ul><li>Количество - 1 штука</li><li>Безопасность</li></ul>"];
for(var i=0;i<5;i++){
	var card=document.createElement("div");
	con1.appendChild(card);
	card.className="card";
	var textblock=document.createElement("div");
	card.appendChild(textblock);
	textblock.className="textblock";
	var textheader=document.createElement("div");
	textblock.appendChild(textheader);
	textheader.className="textheader";
	var h=document.createElement("h3");
	textheader.appendChild(h);
	h.innerHTML=zagolovki[i];
	var textmain=document.createElement("div");
	textblock.appendChild(textmain);
	textmain.className="textmain";
	textmain.innerHTML=text[i];
}
var rand = Math.random() * 30;
rand = Math.round(rand);
var rand2 = Math.random() * 5;
rand2 = Math.round(rand2);
var inputtemp=document.querySelector(".inputtemp");
var scdinf_h=document.querySelector(".scdinf_h");
var scdtextheader=document.querySelector(".scdtextheader");
var scdtextmain2=document.querySelector(".scdtextmain2");
var inp=document.querySelector(".inp");
var btntemp=document.querySelector(".btntemp");
var perc=document.querySelector(".perc");
var optimal=inp.value;
btntemp.onclick=function(){
	optimal=inp.value;
}
inputtemp.type="range";
inputtemp.value=rand;
inputtemp.max=60;
inputtemp.min=0;
perc.innerHTML=rand2+"%";
var scdinffunc=function(){
	scdinf_h.innerHTML=inputtemp.value+"°C";
	if (inputtemp.value==optimal) {
		scdtextheader.innerHTML="Температура оптимальная";
		scdtextmain2.innerHTML="Бездействие";
	} else if(inputtemp.value>optimal){
		scdtextheader.innerHTML="Повышенная температура";
		scdtextmain2.innerHTML="Идёт оптимизация температуры...";
	} else if(inputtemp.value<optimal){
		scdtextheader.innerHTML="Пониженная температура";
		scdtextmain2.innerHTML="Идёт оптимизация температуры...";
	}
}
setInterval(scdinffunc,1000);
var inp1=document.querySelector(".inp1");
var inp2=document.querySelector(".inp2");
var inp3=document.querySelector(".inp3");
var hcardus=document.querySelector(".hcardus");
var btncardus=document.querySelector(".btncardus");
var imgs=document.querySelector(".imgs");
var inputlikediv=document.querySelector(".inputlikediv");
var funccon3=function(){
	inputlikediv.style.left=-100+"%";
}
btncardus.onclick=function(){
	hcardus.innerHTML="Всё спокойно";
	inp2.value="Бездействие";
	inp3.value="Бездействие";
	btncardus.value="Отменено";
}
imgs.onclick=function(){
	inputlikediv.style.left=0;
	setTimeout(funccon3,2000);
}
var n = Math.round(Math.random() * 10);
var masseffect=["Ошибка: попытка деления на ноль","Открылась входная дверь","Открылась дверь кухни","Закрылась входная дверь","Открылась новая вкладка в браузере","error 404: event is not found"];
for(var i=0;i<n;i++){
	var cardcon4=document.createElement("div");
	var year = Math.round(2018 + Math.random() * (2019 - 2018));
	var maincon4=document.querySelector(".maincon4");
	var hours = Math.round(Math.random() * 24);
	var minutes = Math.round(Math.random() * 60);
	var seconds = Math.round(Math.random() * 60);
	var day = Math.round(Math.random() * 31);
	var month = Math.round(Math.random() * 12);
	var rn = Math.round(Math.random() * 5);
	if(hours<10){
		hours="0"+hours;
	}
	if(minutes<10){
		minutes="0"+minutes;
	}
	if(seconds<10){
		seconds="0"+seconds;
	}
	if(day<10){
		day="0"+day;
	}
	if(month<10){
		month="0"+month;
	}
	maincon4.appendChild(cardcon4);
	cardcon4.className="cardcon4";
	var date=document.createElement("div");
	cardcon4.appendChild(date);
	date.className="date";
	var usinpыs=document.createElement("input");
	date.appendChild(usinpыs);
	usinpыs.className="usinp";
	usinpыs.disabled=1;
	usinpыs.value=day+"."+month+"."+year+"  "+hours+":"+minutes+":"+seconds;
	var events=document.createElement("div");
	cardcon4.appendChild(events);
	events.className="events";
	var usinpd=document.createElement("input");
	events.appendChild(usinpd);
	usinpd.className="usinp";
	usinpd.disabled=1;
	usinpd.value=masseffect[rn];
	
}
var maincon5=document.querySelector(".maincon5");
var masseffect4=["Зимние каникулы","Комфорт","Любитель холода","Пляжный курорт","По умолчанию"];
for(var i=0;i<4;i++){
	var cardcon5=document.createElement("div");
	maincon5.appendChild(cardcon5);
	cardcon5.className="cardcon5";
	var hs=document.createElement("h2");
	cardcon5.appendChild(hs);
	hs.innerHTML=masseffect4[i];
}