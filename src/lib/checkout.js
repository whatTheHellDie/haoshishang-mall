function confirmPay(){
      //询问框
  layer.open({
    content: '支付密码：<input type="password" class="passwordInput"  />'
    ,btn: ['确定', '取消']
    ,yes: function(index){
      window.location.href="pay-success.html"
    }
  });
  $(".passwordInput").focus()
}
 function checkedWay(obj){
	$(obj).addClass("checked");
	$(obj).parent().parent().siblings("li").find(".choose-item").removeClass("checked")
}