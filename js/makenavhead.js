var navmenu = navlist.menulist;
function jsontonavhead(level){//level=1表示首页调用，不加../;level=0表示内页调用，自动添加../
    var webpath="";
	if(level==0){
	     webpath="../";	
	}
	var navhead="<div class=\"head\">";
	navhead+="      <div class=\"row\">";
	navhead+="        <div class=\"head-logo\">";
	navhead+="          <a href=\""+webpath+"index.html\"><img src=\"images/logo.png\" /></a>";
	navhead+="        </div>";
	navhead+="        <div class=\"navbar navbar-default\" role=\"navigation\">";
	navhead+="           <div class=\"navbar-header\">";
	navhead+="              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#example-navbar-collapse\">";
	navhead+="                 <span class=\"sr-only\">切换导航</span>";
	navhead+="                 <span class=\"icon-bar\"></span>";
	navhead+="                 <span class=\"icon-bar\"></span>";
	navhead+="                 <span class=\"icon-bar\"></span>";
	navhead+="              </button>";
	navhead+="           </div>";
	navhead+="           <div class=\"navbar-collapse collapse\" id=\"example-navbar-collapse\">";
	navhead+="              <ul class=\"nav navbar-nav\">";
	 /*for(i=0;i<navmenu.length;i++){
	navhead+="        <li class=\"ul_li\"><a href=\""+webpath+navmenu[i].url+"\"><span data-hover=\""+navmenu[i].title+"\">"+navmenu[i].title+"</span></a></li>";
	 }*/
	for(i=0;i<navmenu.length;i++){
          if(navmenu[i].menulist.length>0){
			   navhead+="<li class=\"dropdown ul_li\">"; 
			   navhead+="<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">"+navmenu[i].title+" <b class=\"caret\"></b><span data-hover=\""+navmenu[i].title+"\">"+navmenu[i].title+"</span>"; 
			   navhead+="</a>";
			   navhead+="<ul class=\"dropdown-menu\">";
			    var twicelevel = navmenu[i].menulist;
				for(j=0;j<twicelevel.length;j++){
			       navhead+="<li  class=\"ul_li\"><a href=\""+webpath+twicelevel[j].url+"\">"+twicelevel[j].title+"><span data-hover=\""+navmenu[i].title+"\">"+navmenu[i].title+"</span></a></li>";
				}
			   navhead+="</ul>";
			   navhead+="</li>";
		  }
		  else{
		  navhead+="<li><a href=\""+webpath+navmenu[i].url+"\">"+navmenu[i].title+"</a></li>";
		  }
	  }
	navhead+="        <li><a href=\""+webpath+"1_1/1_1.html\"><img class=\"top-menu-button\" src=\""+webpath+"images/ksxx.jpg\" /></a></li>";
	navhead+="              </ul>";
	navhead+="           </div>";
	navhead+="        </div>";
	navhead+="      </div>";
	navhead+="  </div>";
	return navhead; 
}
