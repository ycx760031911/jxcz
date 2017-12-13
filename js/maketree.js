var menu = menulist.menulist;
function jsontotree(curl){
	 getnum = curl.split("_");
	 znum = parseInt(getnum[0]);
	 zsdnum = parseInt(getnum[1]);
	 var menutree = "";
	 for(i=0;i<menu.length;i++){
	      menutree+= "           <div class=\"panel\">";
		 // document.write(menu[i].title+"<br>");//第一级标题
		  if(i+1==znum){
		  menutree+= "               <div class=\"zj_name\"><a data-toggle=\"collapse\" data-parent=\"#jsontree\" href=\"#collapse"+(i+1)+"\">"+menu[i].title+"</a></div>\n";
		  menutree+= "               <div id=\"collapse"+(i+1)+"\" class=\"panel-collapse collapse in\">\n";
		  }
		  else{
		  menutree+= "               <div class=\"zj_name\"><a data-toggle=\"collapse\" data-parent=\"#jsontree\" href=\"#collapse"+(i+1)+"\">"+menu[i].title+"</a></div>\n";
		  menutree+= "               <div id=\"collapse"+(i+1)+"\" class=\"panel-collapse collapse\">\n";
			}
		  menutree+= "                 <ul class=\"zj2_name\">\n";
		  var twicelevel = menu[i].menulist;
		  for(j=0;j<twicelevel.length;j++){
			 // document.write(twicelevel[j].title+"<br>");//第二级标题	
		     if(j==(zsdnum) && i==(znum-1)){
			 menutree+= "<li class=\"on\"><a href=\"../"+twicelevel[j].url+"\">"+twicelevel[j].title+"</a></li>";
			 }
			 else{
			 menutree+= "<li><a href=\"../"+twicelevel[j].url+"\">"+twicelevel[j].title+"</a></li>";
			 }
		  }
		  menutree+= "                 </ul>\n"; 
		  menutree+= "               </div>\n";
		  menutree+= "           </div>\n";
	  }
	return menutree; 
}

//查询知识点
function findjson(str,yb){
   var numlist=str.split("_");
   var numlength = numlist.length;
   var menutitle="";
   if(yb==1){
	   var znum = parseInt(numlist[0])-1;
   }
   if(yb==0){
	   var znum = parseInt(numlist[0]);
   }
   var jnum = parseInt(numlist[1])-1; 
   //alert(numlength);
   if(numlength==3){
	   var dnum = parseInt(numlist[2])-1; 
	   menutitle=menu[znum].menulist[jnum].menulist[dnum].title
   }
   if(numlength==2){
	   menutitle=menu[znum].menulist[jnum].title
   }
   return menutitle; 
}

//查询章
function findcharname(str,yb){
   var numlist=str.split("_");
   var numlength = numlist.length;
   var menutitle="";
   if(yb==1){
	   var znum = parseInt(numlist[0])-1;
   }
   if(yb==0){
	   var znum = parseInt(numlist[0]);
   }
   var jnum = parseInt(numlist[1])-1; 
   menutitle=menu[znum].title
   return menutitle; 
}