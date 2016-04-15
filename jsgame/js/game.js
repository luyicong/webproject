window.onload = function (){

		var oWrapGame = document.getElementById('wrapGame');

		var oBtn =document.getElementById('gameBtn');

		var oGkTxt = document.getElementById('Gk');
		
		document.onkeydown = function (ev){//回车键或J键，游戏开始

			var ev = ev || window.event;

			if(ev.keyCode ==13 || ev.keyCode == 74){

				oBtn.style.display = 'none';

				oWrapGame.style.backgroundImage = 'url(../images/bg.png)';

				Game.init('wrapGame');//执行初始化
			}
		}

		oBtn.onclick = function (){//点击按钮游戏开始

			this.style.display = 'none';

			oWrapGame.style.backgroundImage = 'url(images/bg.png)';

			Game.init('wrapGame');//执行初始化
		}

		var Game = {

			init : function(id){  //游戏初始化

				this.oParent = document.getElementById(id);

				this.createScore();

				this.createEnemy(0);

				this.createAir();
			},

			Enemy : {//小蜜蜂数据

				e1 :{ style : 'enemy1' , blood : 1 , speed : 3 , score : 1},

				e2 :{ style : 'enemy2' , blood : 2 , speed : 4 , score : 2},

				e3 :{ style : 'enemy3' , blood : 3 , speed : 4 , score : 3}
			},

			GameLevel : [//关卡设置

				{

					eMap : [

						'e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2',

						'e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2',

						'e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2',

						'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',

						'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',

						'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',
					],

					colNum : 15,

					iSpeedX : 6,

					iSpeedY : 5,

					time : 2000
				},

				{

					eMap : [

						'e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3',

						'e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3',

						'e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2',

						'e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2',

						'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',

						'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',
					],

					colNum : 15,

					iSpeedX : 7,

					iSpeedY : 4,

					time : 3000
				},

				{

					eMap : [

						'e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3',

						'e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3',

						'e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3','e3',

						'e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2','e2',

						'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',

						'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',
					],

					colNum : 15,

					iSpeedX : 7,

					iSpeedY : 4,

					time : 3000
				}


			],

			Air : {

				style : 'air1',

				bulletStyle : 'bullet'
			},

			createScore : function (){//创建积分

				var oScore = document.createElement('div');

				oScore.id = 'score';

				oScore.innerHTML = '当前积分:<span>0</span>';

				this.oParent.appendChild(oScore);

				this.oScoreNum = oScore.getElementsByTagName('span')[0];
			},

			createEnemy : function (iNum){//创建敌人-->小蜜蜂

				if(this.Ul){

					this.oParent.removeChild( this.Ul );

					clearInterval(this.Ul.timer);

					 var truthBeTold = window.confirm('Good,恭喜您通过第一关，点击“确定”，进入下一关！点击“取消”，游戏重新开始！');

						 if (!truthBeTold) {

						 	window.location.reload();
				 		}

				}

				oGkTxt.innerHTML = '当前关卡：第'+(iNum+1)+'关'

				var oGk = this.GameLevel[iNum];

				var Ul = document.createElement('ul');

				var arr = [];

				Ul.id = 'bee';

				Ul.style.width = oGk.colNum*32 + 'px';

				this.oParent.appendChild(Ul);

				Ul.style.left = (this.oParent.offsetWidth - Ul.offsetWidth)/2 + 'px';

				this.Ul = Ul;

				for(var i = 0;i < oGk.eMap.length;i++){

					var oLi = document.createElement('li');

					oLi.className = this.Enemy[oGk.eMap[i]].style;

					oLi.blood = this.Enemy[oGk.eMap[i]].blood;
					oLi.speed = this.Enemy[oGk.eMap[i]].speed;
					oLi.score = this.Enemy[oGk.eMap[i]].score;

					Ul.appendChild(oLi);
				}

				this.aLi = Ul.getElementsByTagName('li');

				for (var i = 0; i < this.aLi.length; i++) {

					arr.push([this.aLi[i].offsetLeft,this.aLi[i].offsetTop]);
				}

				for (var i = 0; i < this.aLi.length; i++) {

					this.aLi[i].style.position = 'absolute';

					this.aLi[i].style.left = arr[i][0] + 'px';

					this.aLi[i].style.top = arr[i][1] + 'px';
				}

				this.EnemyRun(oGk);
			},

			EnemyRun : function (oGk){//小蜜蜂循环移动

				var This = this;

				var L = 0;

				var R = this.oParent.offsetWidth - this.Ul.offsetWidth;

				this.Ul.timer = setInterval(function(){

					if(This.Ul.offsetLeft > R){

						oGk.iSpeedX*= -1;

						This.Ul.style.top = This.Ul.offsetTop + oGk.iSpeedY+ 'px';

					}else if(This.Ul.offsetLeft < L){

						oGk.iSpeedX*= -1;

						This.Ul.style.top = This.Ul.offsetTop + oGk.iSpeedY+ 'px';
					}

					This.Ul.style.left = This.Ul.offsetLeft + oGk.iSpeedX + 'px';
					
				},200);

				setInterval(function(){

					This.oneRun();

				},oGk.time);

			},

			oneRun : function (){//单个小蜜蜂进攻

				var nowLi = this.aLi[ Math.floor(Math.random()*this.aLi.length) ];//随机选出一个蜜蜂

				var This = this;

				setInterval(function(){

					var a = (This.oAir.offsetLeft + This.oAir.offsetWidth/2) - (nowLi.offsetLeft + nowLi.parentNode.offsetLeft + nowLi.offsetWidth/2);

					var b = (This.oAir.offsetTop+ This.oAir.offsetHeight/2) - (nowLi.offsetTop + nowLi.parentNode.offsetTop + nowLi.offsetHeight/2);

					var c = Math.sqrt(a*a + b*b);

					var iSX = nowLi.speed*a/c;

					var iSY = nowLi.speed*b/c;

					nowLi.style.left = nowLi.offsetLeft + iSX + 'px';

					nowLi.style.top = nowLi.offsetTop + iSY + 'px';

					if(This.casks(This.oAir,nowLi) || nowLi.offsetTop >= (This.oAir.offsetTop + This.oAir.offsetHeight - nowLi.offsetHeight) ){//蜜蜂碰到飞机，游戏结束

						alert('游戏结束,点击"确定"，重玩一次！');
						// var truthBeTold = window.confirm('游戏结束,点击"确定"，重玩一次！点击“取消”，退出游戏');

						// if (truthBeTold) {

						 	window.location.reload();

						// } else {

						// 	window.alert("再见啦！");
						// }


					}
				},30);
			},

			createAir : function (){//创建飞机

				var oAir = document.createElement('div');

				oAir.className = this.Air.style;

				this.oParent.appendChild(oAir);

				this.oAir = oAir;

				oAir.style.left = (this.oParent.offsetWidth - oAir.offsetWidth)/2 + 'px';

				oAir.style.top = this.oParent.offsetHeight - oAir.offsetHeight + 'px';

				this.AirRun();
			},

			AirRun : function (){

				var iNum = 0;

				var This = this;

				var timer = null;

				document.onkeydown = function (ev){//控制飞机上下左右运动

					var ev = ev || window.event;

					if(!timer){

						timer = setInterval(move,30);
					}

					if(ev.keyCode == 37){

						iNum = 1;

					}else if(ev.keyCode == 38){

						iNum = 2;

					}else if(ev.keyCode == 39){

						iNum = 3;

					}else if(ev.keyCode == 40){

						iNum = 4;
					}

				};

				document.onkeyup = function (ev){

					var ev = ev || window.event;

					clearInterval(timer);

					timer = null;

					iNum = 0;

					if(ev.keyCode == 32){//按空格键发射子弹

						This.createBullet();
					}
				}

				function move(){

					if(iNum == 1){

						var L = 0;

						if(This.oAir.offsetLeft < L){

							This.oAir.left = L + 50 +'px';

						}else{

							This.oAir.style.left = This.oAir.offsetLeft - 10 + 'px';
						}
						
					}else if(iNum == 2){

						This.oAir.style.top = This.oAir.offsetTop - 5 + 'px';

					}else if(iNum == 3){

						var R = This.oParent.offsetWidth - This.oAir.offsetWidth;

						if( This.oAir.offsetLeft > R ){

							This.oAir.left = R - 200 + 'px';

						}else{

							This.oAir.style.left = This.oAir.offsetLeft + 10 + 'px';

						}

					}else if(iNum == 4){

						var B = This.oParent.offsetHeight - This.oAir.offsetHeight;

						if(This.oAir.offsetTop > B){

							This.oAir.style.top = B + 'px';
						}else{

							This.oAir.style.top = This.oAir.offsetTop+ 5 + 'px';
						}

					}
				}
			},

			createBullet : function (){//创建子弹

				var oBullet = document.createElement('div');

				oBullet.className = 'bullet';

				this.oParent.appendChild(oBullet);

				oBullet.style.left = this.oAir.offsetLeft + this.oAir.offsetWidth/2 + 'px';

				oBullet.style.top = this.oAir.offsetTop -10 + 'px';

				this.BulletRun(oBullet);


			},

			BulletRun : function(oBullet){//子弹发射

				var This = this;

				oBullet.timer = setInterval(function(){

					var T = oBullet.offsetTop;

					if(T < -10){

						clearInterval(oBullet.timer);

						This.oParent.removeChild(oBullet);
					}

					oBullet.style.top = T - 10 + 'px';

					for (var i = 0; i < This.aLi.length; i++) {

						if( This.casks(oBullet,This.aLi[i]) ){

							if(This.aLi[i].blood == 1){

								clearInterval(This.aLi[i].timer);

								This.oScoreNum.innerHTML = parseInt(This.oScoreNum.innerHTML)+This.aLi[i].score*10;

								This.Ul.removeChild(This.aLi[i]);

							}else{

								This.aLi[i].blood--;
							}

							clearInterval(oBullet.timer);

							This.oParent.removeChild(oBullet);
						}
					}

					if(!This.aLi.length){

						This.createEnemy(1);
					}
				},30);
			},

			casks : function(obj1,obj2){//碰撞检测

				var L1 = obj1.offsetLeft;

				var R1 = obj1.offsetLeft + obj1.offsetWidth;

				var T1 = obj1.offsetTop;

				var B1 = obj1.offsetTop + obj1.offsetHeight;

				var L2 = obj2.offsetLeft + obj2.parentNode.offsetLeft;

				var R2 = obj2.offsetLeft + obj2.offsetWidth+obj2.parentNode.offsetLeft;

				var T2 = obj2.offsetTop + obj2.parentNode.offsetTop;

				var B2 = obj2.offsetTop + obj2.offsetHeight + obj2.parentNode.offsetTop;

				if( R1 < L2 || L1 > R2 || T1 > B2 || B1 < T2){

					return false;
				}else{

					return true;
				}
			}
		}
	}