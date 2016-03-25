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

	(function(){

		carosueMove($('.J_newsCon'),$('.J_newsCon ul'),$('.J_newsCon ul li'),$('.J_newsCon ul li').eq(0).width(),3);//banner轮播

		carosueMove($('.J_cateCon'),$('.J_carouseList'),$('.J_carouseList ul'),$('.J_carouseList ul').eq(0).width(),3);//banner轮播

		function carosueMove(oParent,oChilden,oChilden1,iWidth,len){

			var $oSpan = oParent.find('.next').find('span');

			var iNow = 0;

			var iNow2 = 0;

			var Time = new Date();

			var num = 1;

			$oSpan.html(num+'/'+len);

			oParent.find('.next').click(function(){

				if(new Date() - Time > 500){

					Time = new Date();

					if(iNow == len - 1 ){

						oChilden1.eq(0).css('position','relative');

						oChilden1.eq(0).css('left',len*iWidth);

						iNow = 0;

					}else{

						iNow ++;
					}

					iNow2++;

					num++;

					if(num >len){

						num = 1;
					}

					$oSpan.html(num+'/'+len);

					oChilden.animate({'left':-iWidth*iNow2},600,function(){

						if(iNow == 0){

							oChilden1.eq(0).css('position','static');

							oChilden.css('left',0);

							iNow2 = 0;
						}
					});
				}
			});

			oParent.find('.prev').click(function(){

				if(new Date() - Time > 500){

					Time = new Date();

					if(iNow == 0 ){

						oChilden1.eq(len - 1).css('position','relative');

						oChilden1.eq(len - 1).css('left',-len*iWidth);

						iNow = len - 1;

					}else{

						iNow --;
					}

					iNow2--;

					num--;

					if(num < 1 ){

						num = len;

					}

					$oSpan.html(num+'/'+len);

					oChilden.animate({'left':-iNow2*iWidth},600,function(){

						if(iNow == len - 1){

							oChilden1.eq(len - 1).css('position','static');

							oChilden.css('left',-iNow*iWidth);

							iNow2 = len - 1;
						}
					});
				}
			});
		}
	})();
});