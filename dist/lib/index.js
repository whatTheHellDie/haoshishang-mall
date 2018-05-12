
			  	//adv广告轮播
 	
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
    //收藏
	function like(obj){
		console.log($(obj).children().attr("xlink:href")=="#icon-like-g")
		$(obj).children().attr("xlink:href")=="#icon-like-g"?
		$(obj).html("<use xlink:href='#icon-like'></use>"):
		 layer.open({
    content: '你已经喜欢过了'
    ,skin: 'msg'
    ,time: 2 //2秒后自动关闭
  });
		;
		event.preventDefault()
	}
//广告
			  function scrollNews(){
					var trueNewh=$(".news_content_li").height()*($(".news_content_li").length-1)-29;
					if($(".news_content").scrollTop()<trueNewh){
					var newh=$(".news_content").scrollTop()+$(".news_content_li").height();
						$(".news_content").animate({scrollTop:newh},200);
					}
					else{
						$(".news_content").animate({scrollTop:'0px'},200);
					}
				}
				window.setInterval("scrollNews()",3500)
