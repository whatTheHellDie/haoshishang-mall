function addNumber(obj){
	$(obj).parent().addClass("active");
	var oNumber=$(obj).siblings(".number");
	oNumber.val(parseInt(oNumber.val())+1);
	computeNumber()
}
function reduceNumber(obj){
	
	var oNumber=$(obj).siblings(".number");
	oNumber.val(oNumber.val()-1);
	if(oNumber.val()<=0){
	$(obj).parent().removeClass("active");
	oNumber.val(0)
	}
	computeNumber()
}
function computeNumber(){
	var cartNumber=0;
	$(".item_list .number").each(function(i){
	cartNumber+=parseInt($(".item_list .number").eq(i).val());
	})
	$(".foot .number").html(cartNumber)
}
//点击加入购物车特效开始
function throwRound(round1,round2,targetPosition){
var asd = document.querySelectorAll(round1);
   var dsa = document.querySelector(round2);
	for(var i=0;i<asd.length;i++){
   asd[i].addEventListener('click', function (e) {
      console.log(e);
      var clientW = e.target.clientWidth;// 被点元素宽高
      var clientH = e.target.clientHeight;
      var bound = e.target.getBoundingClientRect();// 被点元素位置
      // 创造元素
      var qiu = document.createElement('div');
      qiu.className = 'qiu';
      qiu.style.top = bound.top + 'px';
      qiu.style.left=targetPosition=='right'?parseInt(bound.left)-30 + 'px':parseInt(bound.left)+60 + 'px';
      document.body.appendChild(qiu);
      //目标元素位置
      var mubiao = dsa.getBoundingClientRect();
      var mubiaoT = mubiao.top;
      var mubiaoL = mubiao.left;
      var timer = null;
      //移动元素位置
      var nowT = null;
      var nowL = null;
      // top差值 left差值
      var chaTop = mubiaoT-bound.top;
      var chaLeft = bound.left - mubiaoL;
      console.log(chaTop)
      var a = 1;
      // 规定上抛初速度为 top 差值的十分之一
      var g = chaTop/30;
      // 规定上抛初速度为 top 差值的十分之一
      var vTop = chaTop/10;
      timer = setInterval(function(){
         qiu.style.top = (qiu.getBoundingClientRect().top + (-vTop+g)) + 'px';
         // 重置速度
         vTop-=g;
         if (qiu.getBoundingClientRect().top >= mubiaoT) {
            clearInterval(timer)
            qiu.parentNode.removeChild(qiu)
         }
      },1000/30);

      qiu.style.transform = 'translate3d(' + (-chaLeft) + 'px,0,0)';
   }, false)
   }
	}
   /**
    * [computeHow description]
    * @param  {[Number]} top  [top差值]
    * @param  {[Number]} left [left差值 left是定量增加的]
    * @param  {[Number]} add [left一次增加量]
    * @return {[type]}      [description]
    */
   function computeHow(top,left,add){
      //计算移动次数
      var count = Math.ceil( left/add );
      var reOne = 0;
      for(var i=1;i<count;i++){
         reOne+=i;
      }
      return top/reOne;
   }
   
   //点击加入购物车特效结束\n
   throwRound('.add1','.foot .number','right');
   throwRound('.choose-guige .add','.foot .number','left');
function showChoosGuige(){
	$(".choose-guige").css("transform","translateY(0)");
}
function hideChoosGuige(){
	$(".choose-guige").css("transform","translateY(100%)");
}