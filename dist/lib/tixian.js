//function chooseCard(obj){
//	var name=$(obj).find(".elipse").text();
//	var type=$(obj).find(".type").text();
//	var cardNumber=$(obj).find(".number").text();
//	cardNumber=cardNumber.slice(15,19)
//	$(obj).parent().hide();
//	$(".high1").html(name+'<span class="card-d">('+type+' '+cardNumber+')</span><svg class="icon icon-right" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-right"></use></svg>')
//}
//function chooseAccount(obj){
//	$(obj).parent().hide();
//	$(".high2").html($(obj).text()+'<svg class="icon icon-right" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-right"></use></svg>')
//}
//function showChoice(obj){
//	$(obj).siblings("ul").show();
//}
function checked(obj){
	$(obj).addClass("checked").parent().siblings().find(".choose-item").removeClass("checked");
}