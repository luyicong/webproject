$(function(){
	
	moveUp($('.J_rollTxt1 li'),$('.J_rollTxt1'),3000);
	moveUp($('.J_rollTxt2 li'),$('.J_rollTxt2'),4000);
	moveUp($('.J_rollTxt3 li'),$('.J_rollTxt3'),4500);

	function moveUp(obj1,obj2,time){
		
		var iW = obj1.eq(0).height();
		
		var iNow = 0;
	
		var timer = setInterval(function(){
			
			iNow++;
			
			if(iNow > obj1.length-1){
				
				iNow = 0;
			}
			
			obj2.animate({top:-iW*iNow},600);
			
		},time);
	}
	
	
	$('.jobContent').add('.resumeList').css('height',$(window).height());
	
	
});
