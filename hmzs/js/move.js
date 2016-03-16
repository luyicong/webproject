
/*
原生javascipt完美运动框架...
author:980469887@qq.com
*/

function getStyle(obj,name){ //获取非行间样式

	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj,false)[name];
	};

};
		
var timer = null;

function startMove (obj,json,fnEnd) {//传三个参数  obj-->对象  json对象可以写多个属性值 (attr-->运动属性  iTarget-->目标值)  fnEnd --> 一个函数


	clearInterval(obj.timer);

	obj.timer = setInterval(function(){

		//1.取当前值

		var bStop = true;//假设运动已经结束了。

		for(var attr in json){

			var Cur = 0;

			if (attr == "opacity") 
			{
				Cur = Math.round(parseFloat(getStyle(obj,attr))*100);// Math.round  //四舍五入   //parseFloat  --取透明度
			}
			else
			{
				Cur = parseInt(getStyle(obj,attr));
			};

			//2.算速度

			var speed = (json[attr] - Cur)/8;

			speed = speed >0 ? Math.ceil(speed):Math.floor(speed);  //Math.ceil向上取整  Math.floor向下取整

			//1.检测停止

			if (Cur != json[attr]) { //判断如果有一个属性没有执行完成，bStop = false;不关闭定时器

				bStop = false;
			};

			if (attr == "opacity") 
			{
				obj.style.filter  = "alpha(opacity" + (Cur+ speed) +")";

				obj.style.opacity  = (Cur+ speed)/100;
			}
			else
			{
				obj.style[attr] = Cur+ speed +"px";
			};

			if (bStop) //判断如果所有属性运动执行完成，关闭定时器，执行回调。
			{
				clearInterval(timer);

				if (fnEnd) {

					fnEnd();
				};
			};
		};

	},30);
};
