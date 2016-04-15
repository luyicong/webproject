/* 
 * @Author: luyicong
 * @Date:   2016-03-26 12:05:36
 * @Last Modified by:   Luyicong
 * @Last Modified time: 2016-04-17 16:05:04
 */
$(function() {

        (function() { //顶部送到那个城市

            var $city = $('#city');

            $city.hover(function() {
                $city.find('.city').show();
                $city.find('.more').addClass('act')
                $city.find('.more').find('i').removeClass('icon-angle-down').addClass('icon-angle-up')
            }, function() {
                $city.find('.city').hide();
                $city.find('.more').removeClass('act')
                $city.find('.more').find('i').removeClass('icon-angle-up').addClass('icon-angle-down')
            });

        })();

        (function() { //顶部hover下拉效果

            hoverEvent($('#myjd'), $('.myjd')); //顶部我的京东

            hoverEvent($('#jd_phone'), $('.jd_phone')); //顶部手机京东

            hoverEvent($('#jd_attention'), $('.jd_attention')); //顶部关注京东

            hoverEvent($('#jd_serve'), $('.jd_serve')); //顶部京东服务

            hoverEvent($('#jd_nav'), $('.jd_nav')); //顶部网站导航

            function hoverEvent(obj1, obj2) {

                var json = {

                    classBg: 'act',

                    classDown: 'icon-angle-down',

                    classUp: 'icon-angle-up'
                }

                obj1.hover(function() {

                    obj2.show();

                    $(this).find('i').removeClass(json.classDown).addClass(json.classUp)

                }, function() {

                    obj2.hide();

                    $(this).find('i').removeClass(json.classUp).addClass(json.classDown)

                });

                obj2.hover(function() {

                    $(this).show();

                    obj1.addClass(json.classBg);

                    obj1.find('i').removeClass(json.classDown).addClass(json.classUp)

                }, function() {

                    $(this).hide();

                    obj1.removeClass(json.classBg);

                    obj1.find('i').removeClass(json.classUp).addClass(json.classDown)

                });
            }

        })();

        (function() { //广告banner删除

            $('#J_close').click(function() {

                $('.J_topbanner').fadeOut(600);
            })
        })();

        (function() { //购物车

            var $idmyCart = $('#my_cart');

            var $classmyCart = $('.my_cart');

            $idmyCart.hover(function() {

                $classmyCart.show();

                $classmyCart.css('box-shadow', '0 0 2px #eee');

                $(this).css('box-shadow', '0 -2px 2px #eee');

            }, function() {

                $classmyCart.hide();

                $(this).css('box-shadow', '0 0 0');

            })

            $classmyCart.hover(function() {

                $(this).show();

                $idmyCart.addClass('act');

            }, function() {

                $(this).hide();

                $idmyCart.removeClass('act')

            })

        })();

        (function(){//搜索框效果

                $('.J_searchBox').focus(function() {

                    if (this.value == this.defaultValue) {
                       
                            this.value = "";
                        
                    }
            })

            $('.J_searchBox').blur(function() {

                    if (this.value == "") {

                        this.value = this.defaultValue;
                        
                    }
            })

        })();

        (function() { // 二级导航菜单

            // $.ajaxSetup({ cache: false });
            // $Ext.load('include/ext.html')
            //$('#ext').load('include/ext.html?s=' + Math.random())
            var $Ext = $('#ext');
            var $Li = $('.nav ul li');
            var $Einfo = $('#ext .info');
            var i;
            $Li.hover(function() {
                    i = $(this).index();
                    var j = $(document).scrollTop();
                    if (j > 256) { //判断当前页面位置是否超过flash区边缘
                        $Ext.css('top', j - 256);
                    } else {
                        $Ext.css('top', '0');
                    }
                    $Ext.show();
                    $Einfo.eq(i).show();
                },
                function() {
                    $Ext.hide();
                    $Einfo.eq(i).hide();
                })

            $Ext.hover(function() {
                $Ext.show();
                $Einfo.eq(i).show();
                $Li.eq(i).addClass('select')

            }, function() {
                $Ext.hide();
                $Einfo.eq(i).hide();
                $Li.eq(i).removeClass('select')
            })

        })();

        (function() { // 轮播图

            var c = 0;
            var t = 0; //防止用户狂点左右键
            var timer = null;
            var timer1 = null; //设置延时定时器防止用户晃动轮播按钮
            timer = setInterval(run, 2000)
            $('.J_banner ul li').hover(function() {
                c = $(this).index();
                timer1 = setTimeout(function() { //延时加载鼠标上移事件
                    state(c);
                    clearInterval(timer);
                }, 200)
            }, function() {
                clearInterval(timer1); //清除鼠标快速移出引发的事件
            })

            $('.J_banner').hover(function() { //J_banner框上移停止滚动
                clearInterval(timer);
                $('.J_banner a').show();
            }, function() {
                timer = setInterval(run, 2000);
                $('.J_banner a').hide();
            })

            function run() { //轮播函数
                c++;
                if (c == 6) c = 0;
                state(c);
            }

            function state(c) { //当前状态函数
                $('.J_banner img').eq(c).fadeIn(800).siblings('img').fadeOut(800);
                $('.J_banner ul li').eq(c).addClass('active').siblings('li').removeClass('active');
            }

            $('.J_banner #left').click(function() { //左按钮点击事件
                if (t == 0) { //防止用户狂点
                    c--;
                    if (c == -1) c = 5;
                    state(c);
                    t = 1;
                    setTimeout(function() {
                        t = 0;
                    }, 1000)
                }
            })

            $('.J_banner #right').click(function() { //右按钮点击事件
                if (t == 0) { //防止用户狂点
                    c++;
                    if (c == 6) c = 0;
                    state(c);
                    t = 1;
                    setTimeout(function() {
                        t = 0;
                    }, 1000)
                }
            })

        })();

        (function() { //快捷导航

            var c = 1;
            var timer = null;
            $('.service .ico li').hover(function() {
                var i = $(this).index()
                timer = setTimeout(function() {
                    if (i < 4 && c == 1) {
                        $('.service .ico').hide()
                        $('.service .info').animate({
                            'top': 45
                        }, 300)
                        $('.service .info .list li').eq(i).addClass('active').siblings('li').removeClass('active')
                        $('.service .info .list_more div').eq(i).show().siblings('div').hide()
                    }
                }, 400)
            }, function() {
                clearTimeout(timer);
                c = 1;
            })

            $('.service .info .list li').hover(function() {
                var s = $(this).index();
                $(this).addClass('active').siblings('li').removeClass('active')
                $('.service .info .list_more div').eq(s).show().siblings('div').hide()
            }, function() {})

            $('.service .info .list_more .close').click(function(event) {
                $('.service .ico').show()
                $('.service .info').animate({
                    'top': 252
                }, 300)
                c = 0;
            });

        })();

        (function() { //今日推荐滚动效果

            var c = 0;
            $('.list ul').html(function(index, value) { //ul内容克隆一份
                return value + value;
            })
            // alert($('.list ul li').size()) //判断是否克隆成功
            $('.list').hover(function() {
                $('.list span').show();
            }, function() {
                $('.list span').hide();
            });
            $('.list span#left').click(function() {
                if (c == 4) { //极端位置处理
                    $('.list ul').css('left', 0);
                    c = 0;
                }
                c++;
                $('.list ul').stop().animate({
                    'left': -1000 * c
                }, 300);
            });
            $('.list span#right').click(function() {
                if (c == 0) { //极端位置处理
                    $('.list ul').css('left', -4000);
                    c = 4;
                }
                c--;
                $('.list ul').stop().animate({
                    'left': -1000 * c
                }, 300);
            });

        })();

        (function() { //like 部分处理

            var s = $('.love ul').size()
            var i = 0;
            $('.change').click(function() {
                i++;
                if (i == s) i = 0;
                $('.love ul').eq(i).fadeIn(300).siblings('ul').fadeOut(300)
            })

        })();

        (function(){

            $('.J_hd_top').hover(function(){

                    $(this).find('img').stop().animate({'marginLeft':'-10px'});

            },function(){

                    $(this).find('img').stop().animate({'marginLeft':'0'});
            });

        })();

        (function() { //通用tab切换效果

            $('.floor_nav ul li').hover(function() {
                a = $(this).index()
                $(this).addClass('active').siblings('li').removeClass('active');
                $(this).parent().parent().parent().find('.jd_lis').eq(a).show().siblings('.jd_lis').hide();
            })

        })();

        (function() { //1楼flash

            $('.my_flash').each(function() {
                var jsthis = $(this)[0];
                var jqthis = $(this);

                $(this).find('ul.img').html(function(index, value) {
                    return value + value;
                })
                $(this).find('ul.img').width($(this).find('ul.img li').width() * $(this).find('ul.img li').size())

                jsthis.c = 0;
                jsthis.timer = null;
                var w = $(this).find('ul.img li').width();

                jsthis.run = function() {
                    if (jsthis.c == 4) {
                        jsthis.c = 0;
                        jqthis.find('ul.img').css('left', 0);
                        jqthis.find('ul.num li').eq(jsthis.c).addClass('active').siblings('li').removeClass('active');
                    }
                    jsthis.c++;
                    jqthis.find('ul.img').stop().animate({
                        'left': -jsthis.c * w
                    }, 500);
                    if (jsthis.c == 4) {
                        jqthis.find('ul.num li').eq(0).addClass('active').siblings('li').removeClass('active');
                    } else {
                        jqthis.find('ul.num li').eq(jsthis.c).addClass('active').siblings('li').removeClass('active');
                    }
                }

                jsthis.timer = setInterval(jsthis.run, 2000)

                jqthis.hover(function() {
                    clearInterval(jsthis.timer);
                    jqthis.find('span').show();
                }, function() {
                    jqthis.find('span').hide();
                    clearInterval(jsthis.timer);
                    jsthis.timer = setInterval(jsthis.run, 2000)
                })


                jqthis.find('ul.num li').hover(function() {
                    jsthis.c = $(this).index();
                    $(this).addClass('active').siblings('li').removeClass('active');
                    jqthis.find('ul.img').stop().animate({
                        'left': -jsthis.c * w
                    }, 500);
                })

                jqthis.find('#left').click(function() {
                    if (jsthis.c == 0) {
                        jsthis.c = 4;
                        jqthis.find('ul.img').css('left', -jsthis.c * w);
                    }
                    jsthis.c--;
                    jqthis.find('ul.num li').eq(jsthis.c).addClass('active').siblings('li').removeClass('active');
                    jqthis.find('ul.img').stop().animate({
                        'left': -jsthis.c * w
                    }, 500);
                })

                jqthis.find('#right').click(function() {
                    if (jsthis.c == 4) {
                        jsthis.c = 0;
                        jqthis.find('ul.img').css('left', -jsthis.c * w);
                    }
                    jsthis.c++;
                    jqthis.find('ul.img').stop().animate({
                        'left': -jsthis.c * w
                    }, 500);
                    if (jsthis.c == 4) {
                        jqthis.find('ul.num li').eq(0).addClass('active').siblings('li').removeClass('active');
                    } else {
                        jqthis.find('ul.num li').eq(jsthis.c).addClass('active').siblings('li').removeClass('active');
                    }
                })
            });

        })();

        (function() { //mark部分处理

            var timer = null;
            $('.mark').hover(function() {
                var jqthis = $(this)
                jqthis.find('i').stop().animate({
                    'margin-left': 10,
                    'opacity': '0'
                }, 500, function() {
                    jqthis.find('i').stop().animate({
                        'margin-left': 0,
                        'opacity': '1'
                    }, 500);
                });
                timer = setInterval(function() {
                    jqthis.find('i').stop().animate({
                        'margin-left': 10,
                        'opacity': '0'
                    }, 500, function() {
                        jqthis.find('i').stop().animate({
                            'margin-left': 0,
                            'opacity': '1'
                        }, 500);
                    });
                }, 1000)
            }, function() {
                clearInterval(timer)
            })

        })();

        (function() { //天天低价图片运动

            $('#today img').hover(function() {
                $(this).animate({
                    'margin-left': '-10'
                }, 300)
            }, function() {
                $(this).animate({
                    'margin-left': '0'
                }, 300)
            })

        })();

        (function() { //左侧导航楼层跳转

            var veiwWidth = $(window).width();

            var veiwHeight = $(window).height();

            var $floor = $('.floor');

            var iTop = $floor.offset().top - 200;

            var $scrollTop = $(document).scrollTop();

            $('.left_bar li').on('click', function() {

                var iNow = $(this).index();

                $('body,html').animate({

                    // scrollTop: $(this).index() * veiwHeight
                    scrollTop : $floor.eq(iNow).offset().top - 100

                });

                $(this).attr('class', 'active').siblings().attr('class', '');
            });

            scrollEvent();

            function scrollEvent() {

                $scrollTop = $(document).scrollTop();

                if ($scrollTop >= iTop) {

                    $('.left_bar').show();

                } else {

                    $('.left_bar').hide();
                }

                $floor.each(function(index, ele) {

                    var iHeight = $floor.eq(index).offset().top;

                    if (iHeight >= $scrollTop && iHeight < (veiwHeight / 3 + $scrollTop)) {

                        $('.left_bar li').eq(index).attr('class', 'active').siblings().attr('class', '');
                    }

                });

            }

            $(window).on('scroll', function() {

                scrollEvent();

            });
        })();

        (function() {

            $('.jd_toolbar .mid li').hover(function() {
                // alert();
                $(this).find('.ico').css('background-color', '#C81623')
                $(this).find('.title').css('background-color', '#C81623')
                $(this).find('.title').stop().animate({
                    'left': -60
                }, 300)
            }, function() {
                $(this).find('.ico').css('background-color', '#7A6E6E')
                $(this).find('.title').css('background-color', '#7A6E6E')
                $(this).find('.title').stop().animate({
                    'left': 0
                }, 300)
            })
            $('.jd_toolbar .bot .top').click(function() {
                $('html,body').animate({
                    'scrollTop': '0'
                }, 300);
            });

        })();
});
