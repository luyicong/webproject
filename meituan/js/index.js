$(function(){

	//topbar
	(function(){

		TopHover($('.myMeituan'),'listShow');

		TopHover($('.latelyBrowing'),'latelylistshow');

		TopHover($('.shopCart'),'shopListshow');

		TopHover($('.custSer'),'serTxtListShow');
		
		TopHover($('.busCenter'),'busCenShowlist');

		TopHover($('.J_cateItem'),'cateActive');

		TopHover($('.busCenter'),'busCenShowlist');
		
		TopHover($('.busCenter'),'busCenShowlist');


		
		function TopHover(linkClass,showClass){//封装公共函数

			linkClass.hover(function(){

				$(this).addClass(showClass);

			},function(){

				$(this).removeClass(showClass);
			});
		}
	})();

	//搜索框
	(function(){

		var aLi = $('.searchNav li');

		aLi.parent().hover(function(){

			$(this).addClass('active');

		},function(){

			$(this).removeClass('active');
		});

		aLi.click(function(){

			var firstTxt = aLi.first().html();

			aLi.first().html($(this).html());

			$(this).html(firstTxt);

			$(this).parent().removeClass('active');
		});
	})();
});