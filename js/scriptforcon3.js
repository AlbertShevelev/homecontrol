var zagolovkicon3=["Ультразвуковые сенсоры","Датчик отпечатка пальца"];
var textcon3=[""];
var headercon3=document.createElement("div");
con3.appendChild(headercon3);
headercon3.className="headercon3";
var h2=document.createElement("h2");
headercon3.appendChild(h2);
h2.innerHTML="Безопасность";
var maincon3=document.createElement("div");
con3.appendChild(maincon3);
maincon3.className="maincon3";
for(var i=0;i<2;i++){
	var cardincon3=document.createElement("div");
	maincon3.appendChild(cardincon3);
	cardincon3.className="cardincon3";
	var headerincardcon3=document.createElement("div");
	cardincon3.appendChild(headerincardcon3);
	headerincardcon3.className="headerincardcon3";
	var h3=document.createElement("h3");
	headerincardcon3.appendChild(h3);
	h3.innerHTML=zagolovkicon3[i];
}