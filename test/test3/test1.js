
function danxt(){		//��ѡ��

	/*��ȷ��*/
	var RTans = new Array (
	    "D","B","A","A","B",
		"A","B","C","A","A");
	var j = 1;

	for(var i = 0; i < RTans.length; i++){

		var answer = document.getElementsByName("k"+j);

		/*��ȡ�û�ѡ��Ĵ�*/
		var SelectAns ="δѡ";
		for(var m=0; m<answer.length; m++)
		{
			if(answer[m].checked)
				SelectAns = answer[m].value;
		}

		/*�ж�����*/
		if(SelectAns == RTans[i])
		{    document.getElementById("result"+j).innerHTML= '<img src="css/relative_item.gif"/> '+ "����ѡ���ǣ�"+ SelectAns + '<img src="css/02.png"/> '+ "��ȷ���ǣ�"+"<span style='color:red'>" +RTans[i]+"</span>";
			document.getElementById("result"+j).style.backgroundColor = "#F1F1F1";
		}
		else
		{
			document.getElementById("result"+j).innerHTML= '<img src="css/relative_item.gif"/> '+"����ѡ���ǣ�"+ SelectAns +'<img src="css/01.png"/>' + "��ȷ���ǣ�" + "<span style='color:red'>"+RTans[i]+"</span>";
			document.getElementById("result"+j).style.backgroundColor = "#F1F1F1";


		}

		j++;

	}
}  //ShowAns1   end


function Resetdanxt(){

	for(var i = 1; ; i++){

		/*���ѡ��*/
		var answer = document.getElementsByName("k"+i);
		if(answer.length<=0)
		 break;
		for(var m=0; m<answer.length; m++)
		{
			answer[m].checked=false;
		}

		/*	�����ȷ��*/
		document.getElementById("result"+i).innerHTML="";
		//$("#result"+i).html("");
		
	}
} //Reset1 end



//��ѡ��
function duoxt(){			

    var da=new Array("C","D","BE","DE","CE","AC","ACE","ADE","BE","E");
	var answer=new Array();
	var selectAns=new Array();
	var flag;
	for(var i=0 ;i<da.length; i++){
		selectAns=document.getElementsByName("DX"+(i+1));
		answer[i]="";
		for(var j=0;j<selectAns.length;j++){
			if(selectAns[j].checked)
			  answer[i] += selectAns[j].value;
		}
		if(answer[i]==da[i])
		flag='<img src="css/02.png"/>';
		else
		flag='<img src="css/01.png"/> ';
		if(answer[i]=="")
		answer[i]="δѡ";
		var str='<img src="css/relative_item.gif"/> '+ "����ѡ���ǣ�"+ answer[i] + flag + "��ȷ���ǣ�"+"<span style='color:red'>" +da[i]+"</span>";
		//$("#DXresult"+(i+1)).html(str);
		document.getElementById("DXresult"+(i+1)).innerHTML=str;
		document.getElementById("DXresult"+(i+1)).style.backgroundColor = "#F1F1F1";
	}

}

function Resetduoxt(){
	for(var i = 1;; i++){
		/*���ѡ��*/
		var selectAns=document.getElementsByName("DX"+i);
		if(selectAns.length<=0)
		break;
		for(var j=0; j<selectAns.length; j++)
		{
			selectAns[j].checked= false;
		}
		/*	�����ȷ��*/
		document.getElementById("DXresult"+i).innerHTML="";
		//$("#DXresult"+i).html("");	
	}
}


//����� 
function wendt(){
	var evt = window.event || arguments.callee.caller.arguments[0]; ; // ��ȡevent����
    var obj = evt.srcElement || evt.target;
	if($(obj).parents(".test").eq(0).find(".t").val()==""){
	alert("�Բ������Ȼش����⣡");
	}
	else
	$(obj).parents(".test").eq(0).find(".ansDiv").show();
}
function Resetwendt(){
	var evt = window.event || arguments.callee.caller.arguments[0]; ; // ��ȡevent����
    var obj = evt.srcElement || evt.target;
	$(obj).parents(".test").eq(0).find(".ansDiv").hide();
	$(obj).parents(".test").eq(0).find(".t").val("");
}


//�ж���   start
function pandt()
{ 
/*��ȷ��*/
 var RTans = new Array ("��","��","��","��","��",
						 "��","��","��","��","��");
 
 var j = 1;
 for( var i = 0; i < RTans.length; i++)
 {
      var answer = document.getElementsByName("PD"+j);
	  	 
	 /*��ȡ�û�ѡ��Ĵ�*/	
	  var SelectAns ="δѡ";
      if(answer[0].checked)
	      SelectAns = "��";
	  else if(answer[1].checked)
	      SelectAns = "��";
 

    /*�ж�����*/
	  if(SelectAns == RTans[i])
	  {    document.getElementById("PDresult"+j).innerHTML= '<img src="css/relative_item.gif"/> '+ "����ѡ���ǣ�"+ SelectAns + '<img src="css/02.png"/> '+ "��ȷ���ǣ�"+"<span style='color:red'>" +RTans[i]+"</span>";	
		   document.getElementById("PDresult"+j).style.backgroundColor = "#F1F1F1"; 
	  }
	  else
	  {
	       document.getElementById("PDresult"+j).innerHTML= '<img src="css/relative_item.gif"/> '+"����ѡ���ǣ�"+ SelectAns +'<img src="css/01.png"/>' + "��ȷ���ǣ�" + "<span style='color:red'>"+RTans[i]+"</span>";
		   document.getElementById("PDresult"+j).style.backgroundColor = "#F1F1F1"; 
	   }
	   j++;
}


}

function Resetpandt(){

for(var i = 1;; i++){
		/*���ѡ��*/
		var selectAns=document.getElementsByName("PD"+i);
		if(selectAns.length<=0)
		break;
		for(var j=0; j<selectAns.length; j++)
		{
			selectAns[j].checked= false;
		}
		/*	�����ȷ��*/
		document.getElementById("PDresult"+i).innerHTML="";
		//$("#DXresult"+i).html("");	
	}
} //Reset1 end 




//�ж���   end
