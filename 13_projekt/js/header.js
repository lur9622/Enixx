			$(document).scroll(function(){
					if($(this).scrollTop() >0) {   
						$('.navbar').css({"background":"rgba(255,255,255,1"});
						$('.navbar').animate({ 'marginTop': '0px'}, 600);
						
					}
					else {
						$('.navbar').css({"background":"rgba(255,255,255,0.5"});
						$('.navbar').animate({ 'marginTop': '35px'}, 600);
					}
			});