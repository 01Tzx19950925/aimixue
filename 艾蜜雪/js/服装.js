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
},2000)

tim.onmouseover=function(){
	clearInterval(timer);
	timer=null;
} 
// 鼠标移入

sp1.onmousemove=function(){
	span1.innerHTML="KOREAN STYLE";
	span1.style.color="#e3645d";
	span1.style.width="132px";
};
sp1.onmouseout=function(){
	span1.innerHTML="韩国风格";
	span1.style.color="#666";
	span1.style.width="72px";
};
sp2.onmousemove=function(){
	span2.innerHTML="SIMPLE STYLE";
	span2.style.color="#e3645d";
	span2.style.width="132px";
};
sp2.onmouseout=function(){
	span2.innerHTML="简约风格";
	span2.style.color="#666";
	span2.style.width="72px";
};
sp3.onmousemove=function(){
	span3.innerHTML="KOREAN STYLE";
	span3.style.color="#e3645d";
	span3.style.width="132px";
};
sp3.onmouseout=function(){
	span3.innerHTML="韩版风格";
	span3.style.color="#666";
	span3.style.width="72px";
};
sp4.onmousemove=function(){
	span4.innerHTML="JOKER STYLE";
	span4.style.color="#e3645d";
	span4.style.width="132px";
};
sp4.onmouseout=function(){
	span4.innerHTML="百搭风格";
	span4.style.color="#666";
	span4.style.width="72px";
};

