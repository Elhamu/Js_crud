var siteName = document.getElementById('sitename');
var urlName = document.getElementById('siteurl');
var myBtn = document.getElementById('mybtn');
var siteContainer;
 if(localStorage.getItem('siteContainer')== null){
	siteContainer = [];
}

 else{
 	siteContainer = JSON.parse(localStorage.getItem('siteContainer'));
 	displaysite();
 }
myBtn.onclick = function(){
addsite();
displaysite();
clearform();
}
function addsite(){
	var site = {
		name : siteName.value,
		url : urlName.value,
	}
	siteContainer.push(site);
	localStorage.setItem('siteContainer',JSON.stringify(siteContainer));
}
function displaysite(){
	var cols = "";
	for (var i = 0; i < siteContainer.length; i++) {
cols+='<div class="col-md-12"><div class="sites"><h3>'+siteContainer[i].name+'</h3><a  class="btn btn-default" href='+siteContainer[i].url+'>Visit</a><button class="btn btn-danger" onclick="delfun('+i+')">Delete</button> </div></div>';
document.getElementById('myrow').innerHTML= cols;
	}
}
function clearform(){
	var inputs = document.getElementsByClassName('form-control');
	for(var i=0;i<inputs.length;i++){
		inputs[i].value = " ";
	}
}function delfun(id){
	siteContainer.splice(id,1);
		localStorage.setItem("siteContainer",JSON.stringify(siteContainer));
	displaysite();
}
