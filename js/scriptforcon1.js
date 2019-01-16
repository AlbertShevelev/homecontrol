var zagolovki=["Ультразвуковые сенсоры","Датчик температуры","Датчик загрязнения воздуха","Датчик освещенности","Датчик отпечатка пальца"];
var text=["<ul><li>Количество - от 5 до 12 штук</li><li></li></ul>","<ul><li>Количество - от 5 до 12 штук</li><li></li></ul>","<ul><li>Количество - от 5 до 12 штук</li><li></li></ul>","<ul><li>Количество - от 5 до 12 штук</li><li></li></ul>","<ul><li>Количество - от 5 до 12 штук</li><li></li></ul>"];
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