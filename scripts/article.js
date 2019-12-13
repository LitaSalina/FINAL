$('.small-art1').hover(function(){
var smallAttr = $(this).attr('src')
$('.main-art1').attr('src', smallAttr)
})