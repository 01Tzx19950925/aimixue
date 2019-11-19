var btns=document.getElementsByTagName("button");
var pic=document.getElementsByClassName("picture")[0];
var pmg=pic.getElementsByTagName("img");
var tim=document.getElementsByClassName("lunbobox")[0];
var lis=tim.getElementsByTagName("li");
var j=0;
for(var i=0;i<btns.length;i++){
	btns[i].onclick=function(){
		if(this.innerHTML=="&gt;"){
			j++
			if(j==4){
				j=0;
			}
			for(var i=0;i<pmg.length;i++){
				pmg[i].className="";
				lis[i].className=""
			}
			pmg[j].className="active";
			lis[j].className="active";
		}else{
			j--
			if(j==-1){
				j=3;
			}
			for(var i=0;i<pmg.length;i++){
				pmg[i].className="";
				lis[i].className=""
			}
			pmg[j].className="active";
			lis[j].className="active";
		}
	}
}
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		for(var i=0;i<lis.length;i++){
			lis[i].className="";
			pmg[i].className="";
		}
		this.className="active";
		var t=this.getAttribute("fz");
		pmg[t].className="active";
	}
}

timer=setInterval(function(){
		j++
		if(j==4){
			j=0;
		}
		for(var i=0;i<pmg.length;i++){
			pmg[i].className="";
			lis[i].className=""
		}
		pmg[j].className="active";
		lis[j].className="active";
},3000)

//tim.onmouseover=function(){
//	clearInterval(timer);
//	timer=null;
//} 

var lns=$(".news_nav ul li");
var dic=$(".box>div");
for(var i=0;i<lns.length;i++){
	lns[i].onclick=function(){
		for(var i=0;i<lns.length;i++){
			lns[i].className="";
			dic[i].className=" ";
		}
		this.className="active";
		var i=this.getAttribute("sg");
		dic[i].className="active";
	}
}