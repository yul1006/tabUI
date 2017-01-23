document.addEventListener("DOMContentLoaded",function(){
	console.log("The page was Loaded");
	clickTab();
});


function clickTab(){
	var position = document.querySelector("#position");
	var friend = document.querySelector("#friend");
	var theme = document.querySelector("#theme");
	var news = document.querySelector("#news");

	position.addEventListener("click", function(){
		var url = "http://jsonplaceholder.typicode.com/posts/1";
		ajaxReq(url,this);
	});
	friend.addEventListener("click", function(){
		var url = "http://jsonplaceholder.typicode.com/posts/2";
		ajaxReq(url,this);
	});
	theme.addEventListener("click",function(){
		var url = "http://jsonplaceholder.typicode.com/posts/3";
		ajaxReq(url,this);
	});
	news.addEventListener("click",function(){
		var url = "http://jsonplaceholder.typicode.com/posts/4";
		ajaxReq(url,this);
	});
}
function changeContents(resultObj,div){

	var myName = document.querySelector(".myName").innerHTML = resultObj.title;
	var myDesc = document.querySelector(".myDesc").innerHTML = resultObj.body;

	var curTab = document.querySelector(".selectedTab");
	curTab.classList.remove("selectedTab");
	div.classList.add("selectedTab");

}

function ajaxReq(url,div){
	function reqListener(){
		var resultStr = this.responseText;
		var resultObj = JSON.parse(resultStr);

		changeContents(resultObj,div);

	}

	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load",reqListener);
	oReq.open("GET",url);
	oReq.send();
}
