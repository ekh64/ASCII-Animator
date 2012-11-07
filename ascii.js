var ani;
var frames;
var playing = false;
var timer;
var time = 200;
var pos;
var custom;

function start(){
	var temp = document.getElementById("displayarea");
	ani = temp.innerHTML;
	if(!playing){
		playing = true;
		frames = ani.split("=====\n");
		pos = 0;
		animate();
	}	
}
function animate(){
	document.getElementById("displayarea").innerHTML = frames[pos];
	pos = (pos+1)%(frames.length);
	timer = setTimeout("animate()",time);
}
function stop(){
	playing = false;
	clearTimeout(timer);
	document.getElementById("displayarea").innerHTML = ani;
}
function getAnimation(x){
	if(x=="Custom"){
		ani = custom;
	}
	else{
		ani = ANIMATIONS[x];
	}
	var text = document.getElementById("displayarea");
	text.innerHTML = ani;
}
function changeSize(size){
	document.getElementById("displayarea").style.fontSize = size;
}
function changeSpeed(){
	if(document.getElementById("speed").checked){
		time = 50;
	}
	else{
		time = 200;
	}
}

custom = "|------\n" + 
"|\n" + 
"|---\n" + 
"|\n" + 
"|------\n" + 
"=====\n" + 
"|-----\n" + 
"|\n" + 
"|---\n" + 
"|\n" + 
"|-----\n" + 
"=====\n" + 
"|----\n" + 
"|\n" + 
"|---\n" + 
"|\n" + 
"|----\n" + 
"=====\n" + 
"|---\n" + 
"|\n" + 
"|---\n" + 
"|\n" + 
"|---\n" + 
"=====\n" + 
"|--\n" + 
"|\n" + 
"|--\n" + 
"|\n" + 
"|--\n" + 
"=====\n" + 
"|-\n" + 
"|\n" + 
"|-\n" + 
"|\n" + 
"|-\n" + 
"=====\n" + 
"|\n" + 
"|\n" + 
"|\n" + 
"|\n" + 
"|\n" + 
"=====\n" + 
"|-\n" + 
"|\n" + 
"|-\n" + 
"|\n" + 
"|-\n" + 
"=====\n" + 
"|--\n" + 
"|\n" + 
"|--\n" + 
"|\n" + 
"|--\n" + 
"=====\n" + 
"|---\n" + 
"|\n" + 
"|---\n" + 
"|\n" + 
"|---\n" + 
"=====\n" + 
"|----\n" + 
"|\n" + 
"|---\n" + 
"|\n" + 
"|----\n" + 
"=====\n" + 
"|-----\n" + 
"|\n" + 
"|---\n" + 
"|\n" + 
"|-----\n";