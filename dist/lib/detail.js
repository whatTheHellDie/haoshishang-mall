var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade',
        autoplay : 3000,
        autoplayDisableOnInteraction : false,
        initialSlide :0,
        
    });
    function addNumber(obj){
	var oNumber=$(obj).siblings(".number");
	oNumber.val(parseInt(oNumber.val())+1)
}
function reduceNumber(obj){
	var oNumber=$(obj).siblings(".number");
	oNumber.val(oNumber.val()-1);
	if(oNumber.val()<=1){
	oNumber.val(1)
	}
}
function  switchTab(obj){
	$(obj).addClass("active").siblings().removeClass("active");
}
function showChoosGuige(){
	$(".choose-guige").css("transform","translateY(0)");
	
}
$(".close").click(function(){
	$(".choose-guige").css("transform","translateY(100%)");
})
function like2(obj){
	$(obj).addClass("active");
	$(obj).html('<svg class="icon" aria-hidden="true" onclick="like(this)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-like"></use></svg>关注')
}


function changePosition(obj){
	$(obj).addClass("active").siblings().removeClass("active")
	var item=$("#item").offset().top;
	var detail=$("#detail").offset().top;
	var comment=$("#comment").offset().top;
	var toBottom=$(document).height()-$(window).height();
	var itemState=parseInt($(obj).attr("itemState"));
	switch(itemState){
		case 1:
		computeTop(item)?
		$(window).scrollTop(item):$(window).scrollTop(toBottom);
		break;
		case 2:
		computeTop(detail)?
		$(window).scrollTop(detail):$(window).scrollTop(toBottom);
		break;
		case 3:
		computeTop(comment)?
		$(window).scrollTop(comment):$(window).scrollTop(toBottom);
		break;
		
	}
}
function computeTop(top){
	return ($(document).height()-top)>=$(window).height()
}
