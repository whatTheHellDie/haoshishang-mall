function checked(obj){
	!$(obj).hasClass("checked")?
	$(obj).addClass("checked")
	:$(obj).removeClass("checked");
}
function editCard(){
	$(".choose-item").css("display","inline-block");
	$(".edit1").hide();
	$(".del").show();
}
function delCard(){
}
function addCard(){
	$(".add-card").show()
	$(".btn-addcard").eq(0).hide()
	$(".bank").hide()
	
}
function getCheck(obj){
	$(obj).addClass("active")
	$(obj).text("获取验证码(60)")
}
