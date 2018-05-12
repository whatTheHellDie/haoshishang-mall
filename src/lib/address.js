function showEdit(){
	$(".address-manage").show()
	$(".address-list").hide()
}
function showList(){
	$(".address-manage").hide()
	$(".address-list").show()
}
  function checkedWay(obj){
	$(obj).addClass("checked");
	$(obj).parent().parent().siblings("li").find(".choose-item").removeClass("checked")
}
  function checked(obj){
	!$(obj).hasClass("checked")?
	$(obj).addClass("checked")
	:$(obj).removeClass("checked");
}