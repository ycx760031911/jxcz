// JavaScript Document
//头部
var head='<div class="visible-xs phone-head">';
head+='<div class="phone-menu">';
head+='<a href="#"><img src="images/icon_bar.png"></a>';
head+='</div>';
head+='<p>装饰工程计量与计价</p>';
head+='<div class="phone-login"><a href="#"><img src="images/login_icon.png"></a></div>';
head+='</div>';
head+='<div class="sy-head">';
head+='<div class="sy-topbg hidden-xs"></div>';
head+='<div class="container hidden-xs">';
head+='<ul>';
head+='<li class="sy-logo hidden-xs"><a href="index.html"><img class="img-responsive" src="images/logo.png"></a></li>';
head+='<li class="sy-login hidden-xs"><a href="login.html"><img  src="images/sy_login.png"><span class="login hidden-xs">登录</span></a></li>';
head+='</ul>';
head+='</div>';
head+='<div class="container banner-menu">';
head+='<ul class="nav-menu" id="nav_menu">';
head+='<li><a href="index.html">首  页</a></li>';
head+='<li><a href="kcjs.html">课程介绍</a></li>';
head+='<li><a href="kcxx.html">课程学习</a></li>';
head+='<li><a href="#">技能训练</a></li>';
head+='<li><a href="#">学习活动</a></li>';
head+='<li><a href="#">学习评价</a></li>';
head+='<li><a href="zyzx.html">资源中心</a></li>';
head+='<li><a href="#">工学结合</a></li>';
head+='<li><a href="#">课程应用</a></li>';
head+='<li><a href="#">教学团队</a></li>    ';
head+='<span class="nav-left hidden-xs"><img src="images/nav_left.png"></span>';
head+='<span class="nav-right hidden-xs"><img src="images/nav_right.png"></span>';
head+='</ul>';
head+='</div>';
head+='</div>';

document.write(head);
        
$(function(){
	//当前页的导航或分类高亮显示	
	var urlName = window.location.pathname;  //获取地址栏中文件名或路径。
	$('.nav-menu  li a').each(function() {    //遍历当前网页导航或分类  
		var urlHref = $(this).attr('href');  //获取导航链接地址href值
		if (urlName.indexOf(urlHref)>=0) {   //检测文件名或路径中是否包含当前链接值
			$(this).addClass('active');      //设置高亮css类
		}
	});
})		
    
    
        
           
            
            
            
            
            
            
            
            
            
            
                                                                                 
        
    
