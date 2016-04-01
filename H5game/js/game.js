window.onload = function (){

		var oBtn =document.getElementById('gameBtn');

		oBtn.onclick = function (){

			this.style.display = 'none';

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

				e1 :{ style : 'ennmy1' , blood : 1 , speed : 5 , score : 1},

				e2 :{ style : 'ennmy2' , blood : 2 , speed : 7 , score : 2},

				e3 :{ style : 'ennmy3' , blood : 3 , speed : 10 , score : 3}
			},

			GameLevel : [//关卡设置

				{

					eMap : [

						'e2','e2','e2','e2','e2','e2','e2','e2','e2','e2',

						'e2','e2','e2','e2','e2','e2','e2','e2','e2','e2',

						'e2','e2','e2','e2','e2','e2','e2','e2','e2','e2',

						'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',

						'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',

						'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',
					],

					colNum : 10,

					iSpeedX : 10,

					iSpeedY : 10,

					time : 2000
				},

				{

					eMap : [

						'e3','e3','e3','e3','e3','e3','e3','e3','e3','e3',

						'e3','e3','e3','e3','e3','e3','e3','e3','e3','e3',

						'e3','e3','e3','e3','e3','e3','e3','e3','e3','e3',

						'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',

						'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',

						'e1','e1','e1','e1','e1','e1','e1','e1','e1','e1',
					],

					colNum : 10,

					iSpeedX : 10,

					iSpeedY : 10,

					time : 2000
				}

			],

			createScore : function (){//创建积分

				var oScore = document.createElement('div');

				oScore.id = 'score';

				oScore.innerHTML = '当前积分:<span>0</span>';

				this.oParent.appendChild(oScore);

				this.oScoreNum = oScore.getElementsByTagName('span')[0];
			},

			createEnemy : function (iNum){

				var oGk = this.GameLevel[iNum];

				var Ul = document.createElement('ul');

				Ul.id = 'bee';

				Ul.style.width = oGk.colNum*40 + 'px';

				this.oParent.appendChild(Ul);

				Ul.style.left = (this.oParent.offsetWidth - Ul.offsetWidth)/2 + 'px';

				for(var i = 0;i < oGk.eMap.length;i++){

					var oLi = document.createElement('li');

					oLi.className = oGk.eMap[i];

					Ul.appendChild(oLi);
				}
			},

			createAir : function (){

				var oAir = document.createElement('div');

				oAir.className = 'air1';

				this.oParent.appendChild(oAir);

				oAir.style.left = (this.oParent.offsetWidth - oAir.offsetWidth)/2 + 'px'
			}
		}
	}