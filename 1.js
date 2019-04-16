 $(function(){
 	$(window).scroll(function(){
 		console.log($('body').scrollTop());
 		if($(window).scrollTop() > 20) {
			$('.navbar').addClass('down');
 		} else {
 			$('.navbar').removeClass('down');
 		}
 		if($(window).scrollTop() > 300) {
			$('.nutlen').addClass('show');
 		} else {
 			$('.nutlen').removeClass('show');
 		}
 	})
 	$('.nutlen').click(function(){
 		$('html, body').animate({scrollTop:0}, 'slow');
 		return false;
 	})
})  
 