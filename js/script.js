$(window).on('scroll', function(){
  
if($(this).scrollTop() > 0){
    $('.navber').addClass("sticky");
}else{

    $('.navber').removeClass("sticky");
}

})



$(".teams-content").slick({
    

    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'<i class="fas fa-chevron-left prev"></i>',
    nextArrow:'<i class="fas fa-chevron-right next"></i>',
})