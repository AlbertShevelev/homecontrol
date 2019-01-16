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
				imglike[j].style.background="grey";
			}
			this.style.background="white";
		} else if(this.id=="2"){
			con1.style.display="none";
			con2.style.display="block";
			con3.style.display="none";
			con4.style.display="none";
			con5.style.display="none";
			for(var j=0;j<imglike.length;j++){
				imglike[j].style.background="grey";
			}
			this.style.background="white";
		} else if(this.id=="3"){
			con1.style.display="none";
			con2.style.display="none";
			con3.style.display="block";
			con4.style.display="none";
			con5.style.display="none";
			for(var j=0;j<imglike.length;j++){
				imglike[j].style.background="grey";
			}
			this.style.background="white";
		} else if(this.id=="4"){
			con1.style.display="none";
			con2.style.display="none";
			con3.style.display="none";
			con4.style.display="block";
			con5.style.display="none";
			for(var j=0;j<imglike.length;j++){
				imglike[j].style.background="grey";
			}
			this.style.background="white";
		} else if(this.id=="5"){
			con1.style.display="none";
			con2.style.display="none";
			con3.style.display="none";
			con4.style.display="none";
			con5.style.display="block";
			for(var j=0;j<imglike.length;j++){
				imglike[j].style.background="grey";
			}
			this.style.background="white";
		}
	}
}