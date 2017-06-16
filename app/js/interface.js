$(document).ready(function() {
	flexibility(document.documentElement);


	//TOP-MENU
	menu = $(".top-nav__list");
	indicator = $('<span class="indicator"></span>');
	menu.append(indicator);
	position_indicator(menu.find(".top-nav__item.active"));  
	setTimeout(function(){indicator.css("opacity", 1);}, 500);
	// menu.find(".top-nav__item").mouseenter(function(){
	// 	position_indicator($(this));
	// });
	// menu.find(".top-nav__item").mouseleave(function(){
	// 	position_indicator(menu.find(".top-nav__item.active"));
	// });

	
	//SUBNAV
	$("body").on("click", ".top-nav__link", function(e){
		e.preventDefault();
		$('.top-nav__item').removeClass('active');
		$(this).parents('.top-nav__item').addClass('active');
		position_indicator(menu.find(".top-nav__item.active"));
		$('.subnav').hide().removeClass('active'); 
		$(this).next('.subnav').show().addClass('active');  
	})



	//SUBNAV-CLOSE
	$("body").on("click", ".subnav__close", function(e){
		e.preventDefault();
		$(this).parents('.subnav').hide(); 
	})

	//SUBNAV

});




$(window).resize(function () {
	position_indicator(menu.find(".top-nav__item.active")); 
});

// $(window).load(function(){

// });

// functions
function position_indicator(ele){
	var left = ele.offset().left;
	var width = ele.width();
	indicator.stop().animate({
		left: left,
		width: width
	});
}

// links pages
// $('body').append(
// 	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
// 		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
// 	<style> \
// 		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
// 		#pages a { text-decoration: none; } \
// 		#pages li { margin: 5px 0; } \
// 	</style> \
// 	<ol id="pages"> \
// 		<li><a href="about.html">About</a></li> \
// 		<li><a href="index.html">Index</a></li> \
// 	</ol> \
// </div>');
