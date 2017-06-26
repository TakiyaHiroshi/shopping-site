var $PCwidth = 640;

/* PC, SPでのtop menu出しわけ　*/
$(window).on('load resize', function() {
  var windowWidth = window.innerWidth;
  
  if (windowWidth >= $PCwidth) {
	  $(".top_navi").css("display", "block");
	  $(".sp_top_navi").css("display", "none");
  } else {
	  $(".top_navi").css("display", "none");
	  $(".sp_top_navi").css("display", "block");
  }
});

/* topメニュー SP ハンバーガーメニュー */
$(document).ready(function(){
	$("#sp_top_navi_toggle").click(function(){
		$(".top_navi").slideToggle();
	});
});

/* カルーセル セッティング */
$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
		{
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
		}
	);
});

/* アコーディオンメニュー */
$(document).ready(function(){
	$("#sub_navi .accordion ul").css("display", "none");

	$("#sub_navi .accordion h3.page_link").on("click", function() {
		$(this).next().slideToggle();

		if ($('#sub_navi .accordion h3.page_link a').hasClass('rotate_icon')) {
			$('#sub_navi .accordion h3.page_link a').removeClass('rotate_icon');
		} else {
			$('#sub_navi .accordion h3.page_link a').addClass('rotate_icon');
		}
	});
	$("#sub_navi .accordion h3.categories").on("click", function() {
		$(this).next().slideToggle();

		if ($('#sub_navi .accordion h3.categories a').hasClass('rotate_icon')) {
			$('#sub_navi .accordion h3.categories a').removeClass('rotate_icon');
		} else {
			$('#sub_navi .accordion h3.categories a').addClass('rotate_icon');
		}
	});
});

/* スライドショー */
$(window).load(function(){
	$(".slide_menu .photo_item img").click(function(){
		var img_src = $(this).attr("src");
		$(".slide_menu .photo img").attr("src", img_src);
		return false;
	});
});

/* ページトップ */
$(document).ready(function(){
    $('#page_top').click(function () {
        $('html,body').animate({
			scrollTop:0
		}, 500);
		return false;
    });
});