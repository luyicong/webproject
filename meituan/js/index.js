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

		// var  oSearch = $('.J_keyword');

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

		// oSearch.on('focus',function(){

		// 	alert(123);
		// });

	})();

	(function(){//轮播图

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

	//楼层跳转
	(function(){

		var $elevator = $('.J_Elevator');

		var $eleLi = $elevator.find('li');

		var $groupP = $('.J_GroupP');

		var index = 0;

		var $elemoffsetTop = 0;

		var iScrollTop = 0;

		var iWindowH = 0;

		var $initScrollTop = $('.content').offset().top;

		$(window).scroll(function(){

			scrollEvent();

		});

		$eleLi.on('click',function(){

			 var iTop = $groupP.eq($(this).index()).offset().top;

			$(this).addClass('active').siblings().removeClass('active');

			$('html,body').stop().animate({scrollTop : iTop });
		});

		function scrollEvent(){

			iScrollTop = $(window).scrollTop();

			iWindowH = $(window).height();

			if(iScrollTop > $initScrollTop){

				$elevator.fadeIn();

			}else if(iScrollTop < $initScrollTop){

				$elevator.fadeOut();
			}

			$groupP.each(function(index,obj){

				$elemoffsetTop = $groupP.eq(index).offset().top;

				if( $elemoffsetTop > $initScrollTop && $elemoffsetTop < iWindowH/3 + iScrollTop){

					$eleLi.eq(index).addClass('active').siblings().removeClass('active');
				}
			});
		}
	})();

	(function(){//回到顶部

		var $backTop = $('.J_backTop');

		$(window).on('scroll',function(){

			var iScrollTop = $(window).scrollTop();

			if(iScrollTop > 500){

				$backTop.fadeIn();
			}else{
				$backTop.fadeOut();
			}
		});

		$backTop.on('click',function(){

			$('html,body').animate({

				scrollTop : 0
			});
		});

	})();

	(function(){//倒计时

		var $Hour = $('.J_timeH').find('span');

		var $Min = $('.J_timeM').find('span');

		var $Sec = $('.J_timeS').find('span');

		var timer = null;

		function setDigit(num,n){

			var str=""+num;

			while(str.length<n){

				str="0"+str;
			}
			return str;
		};

		timer=setInterval(updatetime,1000);

		updatetime();

		function updatetime(){

			var oDateNow = new Date();

			var endTime = $('.J_Countdown').attr('data-time');

			var iRemain= endTime - oDateNow.getTime()/1000;//计算剩余全部的秒数

			if (iRemain<=0) {

				clearInterval(timer);

				iRemain=0;

				alert('已过时间');
			};

			var iDay=parseInt(iRemain/86400);//计算剩余天数

			iRemain%=86400;

			var iHour=parseInt(iRemain/3600);//计算剩余小时数

			iRemain%=3600;
			
			var iMin=parseInt(iRemain/60);//计算剩余分钟数

			iRemain%=60;

			var iSec=parseInt(iRemain);//计算剩余秒数

			function setTime(obj,time){

				obj.each(function(i){

					obj.eq(i).html(setDigit(time,2)[i]);
				});
			}

			setTime($Hour,iHour);

			setTime($Min,iMin);

			setTime($Sec,iSec);
		}
	})();
});