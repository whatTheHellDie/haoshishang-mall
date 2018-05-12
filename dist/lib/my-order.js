function  switchTab(obj){
	$(obj).addClass("active").siblings().removeClass("active");
}
$(function(){
$(window).scroll(function(){
	$(this).scrollTop()>$(".top-bar").height()?$(".choose_list").addClass("active"):$(".choose_list").removeClass("active")
})
})