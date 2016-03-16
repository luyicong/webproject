
	window.onscroll = function(){

			var oDiv1 = document.getElementById("scroll_box_1");

			var oDiv2 = document.getElementById("scroll_box_2");

			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

			var t=parseInt((document.documentElement.clientHeight - oDiv1.offsetHeight)/2)+scrollTop;

			startMove(oDiv1,{top:t});
			startMove(oDiv2,{top:t});
		};