/*
*  author : luyicong
*  e-mail : 980469887@qq.com
 */

!(function($){

	$.fn.turnpic = function (options) {
		        //配置默认参数
		        var settings = $.extend(
		            {
		                content_box: '.Carousel ul', //内容容器id或class

		                content_tag: 'li', //内容标签 默认为<li>

		                switcher_box: '.Carousel ol', //切换触发器id或class

		                switcher_tag: 'li', //切换器标签 默认为<li>

		                active_class: 'active', //当前切换器样式名称 不含"."

		                prev: '.prev', //上一个幅箭头样式名称

		                next: '.next', //下一个幅箭头样式名称

		                btn: ".btn",

		                speed: 500, //动画速度

		                space: 3000 //时间间隔

		                //trigger: 'mouseover' //触发事件 注意用mouseover代替hover
		                
		            }, options);

		         var Content_box = $(this).find(settings.content_box),

		            Contents = Content_box.find(settings.content_tag),

		            switcher_box = $(this).find(settings.switcher_box),

		            Switchers = switcher_box.find(settings.switcher_tag),

		            Active_class = settings.active_class,

		            Prev = $(this).find(settings.prev),

		            Next = $(this).find(settings.next),

		            Btn = $(this).find(settings.btn),

		            speeds = settings.speed,

		            autoSpace = settings.space;

			var iNow = 0;

			var iNow2 = 0;

			var timer = null;

			var Time = new Date();

			autoPlay();

			function play(){//l轮播函数

				if(iNow == Contents.length - 1){

						Contents.eq(0).css('position','relative');

						Contents.eq(0).css('left',Contents.length*Contents.eq(0).width());

						iNow = 0;
					}else{

						iNow++;
					}

					iNow2++;

					Switchers.eq(iNow).attr('class',Active_class).siblings().attr('class','');

					Content_box.animate({ left : -iNow2*Contents.eq(0).width()},speeds,function(){

						if(iNow == 0){

							Contents.eq(0).css('position','static');

							Content_box.css('left',0);

							iNow2 = 0;
						}
					});

			}

			function autoPlay(){//自动轮播

				timer = setInterval(function(){

					play();

				},autoSpace);
			}

			Content_box.mouseover(function(){ clearInterval(timer) });

			Btn.mouseover(function(){ clearInterval(timer) });

			switcher_box.mouseover(function(){ clearInterval(timer) })

			Content_box.mouseout(function(){ autoPlay(); });
				
			Btn.mouseout(function(){ autoPlay(); });

			switcher_box.mouseout(function(){ autoPlay(); });

			Prev.click(function(){//上一张

				if(new Date() - Time >speeds){

					Time = new Date();

					if(iNow == 0){

							Contents.eq(Contents.length - 1).css('position','relative');

							Contents.eq(Contents.length - 1).css('left',-(Contents.length)*Contents.eq(0).width());

							iNow = Contents.length - 1;
						}else{

							iNow--
						}

						iNow2--;

						Switchers.eq(iNow).attr('class',Active_class).siblings().attr('class','');

						Content_box.animate({ left : -iNow2*Contents.eq(0).width()},speeds,function(){

							if(iNow == Contents.length - 1){

								Contents.eq(Contents.length - 1).css('position','static');

								Content_box.css('left',-iNow*Contents.eq(0).width());

								iNow2 = Contents.length - 1;
							}
						});
				}

			});

			Next.click(function(){ //下一张

				if(new Date() - Time >speeds){

					Time = new Date();

					play(); 
				}

			});

			Switchers.click(function(){//底部小按钮

				var index = $(this).index();

				iNow = iNow2 = index;

				$(this).attr('class','active').siblings().attr('class','');

				Content_box.animate({ left : -iNow2*Contents.eq(0).width() },speeds);
			});
		}

})(jQuery);