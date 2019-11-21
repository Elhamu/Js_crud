var currentIndex = 0;
var siteName = document.getElementById('sitename');
var urlName = document.getElementById('siteurl');
var myBtn = document.getElementById('mybtn');
var searchInp = document.getElementById('searchInp');
var rowData = document.getElementById('rowData');

var siteContainer;
 if(localStorage.getItem('siteContainer')== null){
	siteContainer = [];
}

 else{
 	siteContainer = JSON.parse(localStorage.getItem('siteContainer'));
 	displaysite();
 }
 searchInp.onkeyup=function(){
searchData(searchInp.value)
 }
 function searchData(term){
 	
 		var searchCols = "";
 		for(var i=0;i<siteContainer.length;i++){
 			if(siteContainer[i].name.includes(term)){
 				searchCols+='<div class="col-md-4"><div class="sites"><h3>'+siteContainer[i].name+'</h3><a target="_blank"  class="btn btn-default" href='+siteContainer[i].url+'>Visit</a> </div></div>';
rowData.innerHTML= searchCols;	
}
 	}
 }
myBtn.onclick = function(){
	if(myBtn.innerHTML == 'Add Site'){
addsite();
displaysite();
clearform();
}
else{
updateProduct();
displaysite();
}
}


function addsite(){
	var site = {
		name : siteName.value,
		url : urlName.value,
	}
	siteContainer.push(site);
	localStorage.setItem('siteContainer',JSON.stringify(siteContainer));
}
function updateProduct(){
	 siteContainer[currentIndex].name = siteName.value ;
	  siteContainer[currentIndex].url  = urlName.value;
myBtn.innerHTML = "Add Site";

	localStorage.setItem('siteContainer',JSON.stringify(siteContainer));
	}
function displaysite(){
	var cols = "";
	for (var i = 0; i < siteContainer.length; i++) {
cols+='<div class="col-md-4"><div class="sites"><h3>'+siteContainer[i].name+'</h3><a  class="btn btn-default" href='+siteContainer[i].url+'>Visit</a><button class="btn btn-danger mr-2" onclick="delfun('+i+')">Delete</button><button class="btn btn-info" onclick="setForm('+i+')">Update</button> </div></div>';
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

function setForm(i){
	 siteName.value = siteContainer[i].name;
	 urlName.value = siteContainer[i].url;
	 myBtn.innerHTML = "Update Site";
	 currentIndex =i;
	//alert(i)
}
