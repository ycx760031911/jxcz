var myPlayer = _V_("example_video_1");

vdw = $("#sp1").width();
if(vdw>850){
	vdw=850;
}
var howWideIsIt = myPlayer.width();
var howTallIsIt = myPlayer.height()+19;
myPlayer.width(vdw);
myPlayer.height(vdw*howTallIsIt/howWideIsIt);
$(window).resize(function(){
  vdw = $("#sp1").width();
  if(vdw>850){
	vdw=850;
  }
  myPlayer.width(vdw);
  myPlayer.height(vdw*howTallIsIt/howWideIsIt);
});