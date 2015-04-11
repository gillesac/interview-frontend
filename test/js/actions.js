$(document).ready(function(){
	function clearDivs() {
		$("#breadcrumbs").remove();
		$("#articleTitle").remove();
		$("#articles").remove();
		console.log("divs cleared!");
	}
	$.ajax({url:"articles/news.html",cache:false}).done(function(html) {
		clearDivs();
		$("#container1").append(html);
	});
	$(".menu1").click(function(){
		$.ajax({url:"articles/news.html",cache:false}).done(function(html){
			clearDivs();
			$("#container1").append(html);
		});
	});
	$(".menu2").click(function(){
		$.ajax({url:"articles/business.html",cache:false}).done(function(html){
			clearDivs();
			$("#container1").append(html);
		});
	});
});