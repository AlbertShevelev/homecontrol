var zagolovkicon2=["Датчик температуры","Датчики загрязнения"];
var textcon2=["<ul><li>Количество - от 5 до 12 штук</li><li></li></ul>","<ul><li>Количество - от 5 до 12 штук</li><li></li></ul>","<ul><li>Количество - от 5 до 12 штук</li><li></li></ul>","<ul><li>Количество - от 5 до 12 штук</li><li></li></ul>","<ul><li>Количество - от 5 до 12 штук</li><li></li></ul>"];
var headercon2=document.createElement("div");
con2.appendChild(headercon2);
var h2=document.createElement("h2");
headercon2.appendChild(h2);
h2.innerHTML="Климат-контроль";
var maincon2=document.createElement("div");
con2.appendChild(maincon2);
maincon2.className="maincon2";
headercon2.className="headercon2";
for(var i=0;i<2;i++){
	var cardincon2=document.createElement("div");
	maincon2.appendChild(cardincon2);
	cardincon2.className="cardincon2";
	var headerincardcon2=document.createElement("div");
	cardincon2.appendChild(headerincardcon2);
	headerincardcon2.className="headerincardcon2";
	var h3=document.createElement("h3");
	headerincardcon2.appendChild(h3);
	h3.innerHTML=zagolovkicon2[i];
}