
$(function(){
	//去除点击链接和按钮时出现的虚线框
	$("a").bind("focus",function(){ 
	if(this.blur){ //如果支持 this.blur 
	this.blur(); 
	} 
	}); 

})

/********************首页*************************/
/*手机菜单*/
$(function(){
	$(".phone-nav").click(function(){
		$(".nav >ul").slideToggle("slow");
	});
});

/**数目录显示隐藏**/

$(function(){
	/*一级*/
	$(".tree-one").hover(function(){
		$(this).find("p").addClass("tree-on");
		$(this).find("dl").stop(true,true).delay(300).slideDown(300);
	},function(){
		$(this).find("p").removeClass("tree-on");
		$(this).find("dl").stop(true,true).slideUp(200);
	});
	/*二级*/
	$(".tree-one >dl >dd").click(function(){
		$(this).siblings().find("p").removeClass("p-on");
		$(this).find("p").addClass("p-on");
		$(this).siblings().find("div").hide();
		$(this).find("div").show();
	});
	var host=location.pathname;
	try{
	var isExist=host.match(/(\d)_\w*\/(\d)_\w*/);
		if(isExist[1]==isExist[2]!=null){
			var number=isExist[1];
			$(".tree .tree-one").eq(number-1).children("p").css({
				"background":"#1e4c9d",
				"color":"#fff"
			});
		}
	}
	catch(e){}
})  

/*拓展资源hover*/
$(function(){
	function add()
	{
		var oImg=$(this).find("img").attr("src");
		var oUrl=oImg.split(".")[0]+'_on.png';
		$(this).find("img").attr("src",oUrl);
	}
	function remove()
	{
		var oImg=$(this).find("img").attr("src");
		var oUrl=oImg.split("_")[0]+'.png';
		$(this).find("img").attr("src",oUrl);
	}
	$(".tzzy >ul >li >a").hover( add,remove);
});


/*首页动态效果*/
$(function(){
		$(".nav").delay(100).animate({
			top: '0'
		}, 400, 'easeOutExpo');
		$(".kcjj").delay(400).animate({
			top: '0'
		}, 400, 'easeOutExpo');
		$(".tzzy").delay(800).animate({
			top: '0'
		}, 400, 'easeOutExpo');
		$(".dxsp").delay(1200).animate({
			top: '0'
		}, 400, 'easeOutExpo');
		$(".jqr").delay(1600).animate({
			top: '0'
		}, 400, 'easeOutExpo');
		$(".foot").delay(2000).animate({
			top: '0'
		}, 400, 'easeOutExpo');
		$(".jqr >ul li").eq(0).delay(2000).animate({
			right: '0'
		}, 200, 'easeOutExpo');
		$(".jqr >ul li").eq(1).delay(2200).animate({
			right: '0'
		}, 200, 'easeOutExpo');
		$(".jqr >ul li").eq(2).delay(2400).animate({
			right: '0'
		}, 200, 'easeOutExpo');
		$(".jqr >ul li").eq(3).delay(2600).animate({
			right: '0'
		}, 200, 'easeOutExpo');
		$(".jqr >ul li").eq(4).delay(2800).animate({
			right: '0'
		}, 200, 'easeOutExpo');
		$(".jqr >ul li").eq(5).delay(3000).animate({
			right: '0'
		}, 200, 'easeOutExpo');
		$(".jqr >ul li").eq(6).delay(3200).animate({
			right: '0'
		}, 200, 'easeOutExpo');
		$(".jqr >ul li").eq(7).delay(3400).animate({
			right: '0'
		}, 200, 'easeOutExpo');
		$(".jqr >ul li").eq(8).delay(3600).animate({
			right: '0'
		}, 200, 'easeOutExpo');
		$(".jqr >ul li").eq(9).delay(3800).animate({
			right: '0'
		}, 200, 'easeOutExpo');
});


/**数目录动态效果**/
$(function(){
	/*树结构*/
if($(window).width()>767){	/*电脑动态效果，手机端不显示*/
	$(".tree-one").eq(0).delay(0).animate({
		left: '0'
	}, 100, 'easeOutExpo');
	$(".tree-one").eq(1).delay(100).animate({
		left: '0'
	}, 200, 'easeOutExpo');
	$(".tree-one").eq(2).delay(200).animate({
		left: '0'
	}, 300, 'easeOutExpo');
	$(".tree-one").eq(3).delay(300).animate({
		left: '0'
	}, 400, 'easeOutExpo');
	$(".tree-one").eq(4).delay(400).animate({
		left: '0'
	}, 500, 'easeOutExpo');
	$(".tree-top").find("a").delay(800).animate({
		top: '200%'
	}, 200, 'easeOutExpo');
}
});



function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("content"+i);
  menu.className=i==cursel?"active":"";
  con.style.display=i==cursel?"block":"none";
 }
}

/*点击显示图片*/
$(function(){
	$(".img-btn").click(function(){
		$(this).css("background","url(../images/navigate_up.png) right 30px center no-repeat");
		$(this).siblings(".img-btn").css("background","url(../images/navigate_down.png) right 30px center no-repeat");
		$(this).siblings(".img-btn").css("color","#333");
		$(this).next(".img-hide").siblings(".img-hide").slideUp();
		if($(this).next(".img-hide").css("display") == "block"){
			$(this).next(".img-hide").slideUp();
			$(this).css("background","url(../images/navigate_down.png) right 30px center no-repeat");
			$(this).css("color","#333");
		}else{
			$(this).next(".img-hide").slideDown();
			$(this).css("color","rgb(0, 102, 209)");
		}
	})
})
function fullshowpic(selector){
	var docElm = document.querySelector(selector);
	var maxWidth=document.documentElement.clientWidth;
	var maxHeight=document.documentElement.clientHeight;
	
	var maxRadio=maxWidth/maxHeight;	
	var imgWidth=docElm.offsetWidth;
	var imgHeight=docElm.offsetHeight;
	var imgRadio=imgWidth/imgHeight;

	if(imgRadio>maxRadio){
		docElm.style.width="100%";
		docElm.style.height="auto";
	}
	else{
		docElm.style.width="auto";	
		docElm.style.height="100%";	
	}	
	document.onkeydown=function(e){
		if(e.keyCode==27){
			docElm.style.width="auto";
			docElm.style.height="auto";
		}
	}
	if (docElm.requestFullscreen) {  
		docElm.requestFullscreen(); 
	}
	else if (docElm.mozRequestFullScreen) {  
		docElm.mozRequestFullScreen(); 
	}
	else if (docElm.webkitRequestFullScreen) {  
		docElm.webkitRequestFullScreen(); 
	}
	else if (docElm.msRequestFullscreen) {
	  	docElm.msRequestFullscreen();
	}
	else if(typeof window.ActiveXObject != "undefined"){
		var wscript = new ActiveXObject("WScript.Shell");
		if(wscript != null) {
			wscript.SendKeys("{F11}");
		}
	}
}