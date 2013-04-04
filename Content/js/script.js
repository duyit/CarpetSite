var interval1, interval2, interval3;
var run = 0;
var check = 0;
var temp = true;
var runButton = 0;
var checkButton = 0;

function StartAnimation() {
	//interval1 = setInterval(Prev, 1500);
	
}
function StartSlideShow()
{
	interval2 = setInterval(setButton, 3000);
	interval3 = setInterval(SlideShow, 3000);
}
function Prev() {
	var array = $('.groupItem').find('.item').get();
	if (array.length == 0)
		return;
	var w = $(array[0]).width() + 12;
	$(".groupItem .animation").animate({
		"margin-left" : "-" + w + "px"
	}, 800, function() {
		$(".groupItem .animation .animationScroll").append($(array[0]));
		$(".groupItem .animation").attr({
			"style" : ""
		});
		$(".groupItem .animation .animationScroll").find($(array[4])).hide();
		$(".groupItem .animation .animationScroll").find($(array[4])).fadeIn("slow");
	});
}

function setButton() {
	var arrayBtn = $('.btnSmallSlideShow .right .buttonSlide').find('.btnBlue').get();
	if (arrayBtn.length > 0) {
		$('.btnBlue').removeClass("btnYellow");
		if(temp == false)
		{
			if(runButton < arrayBtn.length -1)
			{
				$(arrayBtn[runButton+1]).addClass("btnYellow");
				//$(arrayBtn[runButton+1]).addClass("btnYellow");	
			}				
		}
		else
			$(arrayBtn[runButton]).addClass("btnYellow");
		runButton = runButton + 1;
		checkButton ++;
	}
	if (checkButton == arrayBtn.length) {
		runButton = 0;
		checkButton = 0;	
		temp = true;

	}

}

function SlideShow() {
	var arraySlide = $('.poster').find('.poster_').get();

	if (arraySlide.length > 0) {

		$(arraySlide[run]).fadeOut(1500, function() {

		});
		run = run + 1;
		if(run < arraySlide.length)		
		{
			$(arraySlide[run]).fadeIn(1800, function() {});
		}
		check++;
	}
	if (check == arraySlide.length) {
		run = 0;
		check = 0;		
		$(arraySlide[arraySlide.length -1]).fadeOut(1500, function() {});
		$(arraySlide[run]).fadeIn(1800, function() {
			//SlideShow();
		});		

	}
}


$(document).ready(function() {
	$('.btnPrev, .btnNext').hide();
	$('.poster_').hide();
	$('.poster_1').show();
	StartSlideShow();
	StartAnimation();
	
	$(".groupItem .animation .animationScroll .item").mouseover(function() {
		clearInterval(interval1);
		$('.btnPrev, .btnNext').fadeIn("slow");
	}).mouseout(function() {
		$('.btnPrev, .btnNext').fadeOut();
		StartAnimation();
	});
	$('.btnPrev').click(function() {
		Prev();
	});

	var arrayBtn = $('.poster_').find('a').get();
	var str = "";
	for (var i = 0; i < arrayBtn.length; i++) {
		str += "<div class='btnBlue' content='slide" + i + "'></div>";
	}
	$('.btnSmallSlideShow .right .buttonSlide').html(str);
	$('.btnBlue:nth-child(1)').addClass("btnYellow");
	temp = false;

	$('.btnBlue').click(function() {
		$('.btnBlue').removeClass("btnYellow");
		$(this).addClass("btnYellow");
	});
}); 