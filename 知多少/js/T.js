window.addEventListener('load', function () {
	var focus = document.querySelector('.focus');
	var arrowLeft = document.querySelector('.arrowLeft');
	var arrowRight = document.querySelector('.arrowRight');
	//鼠标移动到轮播图，左右箭头显示
	focus.addEventListener('mouseover', function() {
		arrowLeft.style.display = 'block';
		arrowRight.style.display = 'block';
		clearInterval(timer); //清除定时器
		timer = null;
	})
	focus.addEventListener('mouseout', function() {
		arrowLeft.style.display = 'none';
		arrowRight.style.display = 'none';
		timer = setInterval(function() { //鼠标离开，开启定时器
			arrowRight.click();
		}, 3000);
	})

	var ul = focus.querySelector('ul');
	var ol = focus.querySelector('ol');
	var num=ul.children.length;
	var disc = 0;
//动态生成小圆点
	for (let i = 0; i < num; i++) {
		var li = document.createElement('li');
		ol.appendChild(li);
		li.addEventListener('click', function() {
			for (let k = 0; k < num; k++) {
				ol.children[k].className = '';
				ul.children[k].className = '';
			}
			this.className = 'current';
			ul.children[i].className = 'opa';
			disc = i;
		})
	}
  ol.children[0].className ='current';
	
	//点击右侧箭头
	arrowRight.addEventListener('click', function() {
		disc++; //圆点样式
		if (disc == num) {
			disc = 0;
		}
		for (let k = 0; k < num; k++) {
			ol.children[k].className = '';
			ul.children[k].className = '';
		}
		ol.children[disc].className = 'current';
		ul.children[disc].className = 'opa';
	})
	// 点击左侧按钮
	arrowLeft.addEventListener('click', function() {
		disc--;
		if (disc < 0) {
			disc = num - 1;
		}
		for (let k = 0; k < num; k++) {
			ol.children[k].className = '';
			ul.children[k].className = '';
		}
		ol.children[disc].className = 'current';
		ul.children[disc].className = 'opa';
	})
	//自动播放，像点击右侧按钮
	var timer = setInterval(function() {
		arrowRight.click();
	}, 3000);
})



function changeColor(obj)
{
 
	obj.style.background="powderblue";
}
 
function coreCount()
{
	var cores=0;
	var qestions=document.getElementsByClassName("question")
	for(var i=0;i<qestions.length;i++)
	{
		var count=0;
		var flag=1;
		var answer=document.getElementsByName("answer"+(i+1));
		for(var j=0;j<answer.length;j++)
		{
			if(answer[j].checked)
			{
				if(answer[j].value*1<0)
				{
					flag=0;
					break;
				}
				else
					count+=answer[j].value*1;
			}
		}
		if(flag==1)
			cores+=count;
	}	
	alert("Your score is "+cores);
}
 
function showWhichWrong()
{
	var qestions=document.getElementsByClassName("question")
	for(var i=0;i<qestions.length;i++)
	{
		var answer=document.getElementsByName("answer"+(i+1));
		for(var j=0;j<answer.length;j++)
		{
			if(answer[j].checked)
			{
				if(answer[j].value*1<=0)
				{
					x=document.getElementById(i+1);
					x.style.color="red";
				}
			}
		}
	}
	for(var i=0;i<qestions.length;i++)
		{
			var answer=document.getElementsByName("answer"+(i+1));
			for(var j=0;j<answer.length;j++)
			{
				if(!answer[j].checked)
				{
					if(answer[j].value*1>0)
					{
						answer[j].style.backgroundColor="red";
					}
				}
			}
		}		
}