$(document).ready(function(){
	$('#header').delay(500).animate({top:'0',opacity:1},800)
	$('#wrap #section01 .main_morales h2').delay(500).animate({top:'500px',opacity:1},800);
	$('#wrap #section01 .main_morales .morales_pic').delay(800).animate({opacity:1},800);




	$('#wrap').on('mousemove',function(e){
		var posX=e.pageX;
		var posY=e.pageY;

		$('.morales_pic img.pic1_1').css({'top':200-(posY/80),'marginLeft':-300+(posX/80)});
		$('.morales_pic img.pic1_2').css({'top':220-(posY/20),'marginLeft':-300+(posX/20)});
		$('.morales_pic img.pic1_3').css({'top':220-(posY/12),'marginLeft':-300+(posX/12)});

		$('.parker_pic img.pic2_1').css({'top':-50-(posY/-10)});
		$('.parker_pic img.pic2_2').css({'top':-50-(posY/-20)});
		$('.parker_pic img.pic2_3').css({'top':-50-(posY/-80)});

		$('.gwen_pic img.pic3_1').css({'top':100-(posY/80),'marginLeft':-350-(posX/80)});
		$('.gwen_pic img.pic3_2').css({'top':80-(posY/20),'marginLeft':-400-(posX/20)});

		$('.ham_pic img.pic5_1').css({'marginLeft':-175-(posX/80)});
		$('.ham_pic img.pic5_2').css({'marginLeft':-175-(posX/20)});
		$('.ham_pic img.pic5_3').css({'marginLeft':-175+(posX/28)});

		$('.nuar_pic img.pic6_2').css({'marginLeft':-300-(posX/20)});
		$('.nuar_pic img.pic6_3').css({'marginLeft':0-(posX/10)});

		$('.peni_pic img.pic4_1').css({'top':160-(posY/-10)});
		$('.peni_pic img.pic4_2').css({'top':160-(posY/-20)});
		$('.peni_pic img.pic4_3').css({'top':160-(posY/-80)});
	});


	function movemain(index){
        var willMoveLeft;
		var willMoveTop;

        if(index==0){
			willMoveleft=0;
		}else if(index==1){
			willMoveleft='-100%';
		}else if(index==2){
			willMoveleft='-200%';
		}else if(index==3){
			willMoveleft='-300%';
		}else if(index==4){
			willMoveleft='-400%';
		}else{
			willMoveleft='-500%';
		}

		$('#wrap #mainSlide').stop().delay(500).animate({left:willMoveleft},800);
    }

    $('#header .gnb ul li a').each(function(index){
		$(this).attr('data-index', index);
	}).click(function(){
		var index=$(this).attr('data-index');
		movemain(index);
	});


	var selectOn=$('#header .gnb ul li.select_on')

	$('#header .gnb ul li').click(function(){
		selectOn.removeClass('select_on');
		$(this).addClass('select_on');
		selectOn=$(this);


		$('#wrap .mains h2').stop().animate({top:'600px',opacity:0},500);
		$('#wrap .mains .guys').stop().animate({opacity:0},500);
		var numNav=$('#header .gnb ul li').index(this);
		$('#wrap .slide').eq(numNav).find('.mains h2').delay(800).animate({top:'500px',opacity:1},800);
		$('#wrap .slide').eq(numNav).find('.mains .guys').delay(800).animate({opacity:1},800);
	});








	var sct=$(window).scrollTop();
	var hello=$('#wrap').offset();


	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var hello=$('#wrap').offset();

		if(sct>hello.top+1){
			$('#header').stop().animate({opacity:0,top:'-100px'},500);
			$('.mains').stop().animate({opacity:0,top:'-300px'},500);
			$('#wrap').stop().animate({height:'2700px'},100);
		}
		else{
			$('#header').stop().animate({opacity:1,top:'0px'},500);
			$('.mains').stop().animate({opacity:1,top:'0px'},500);
			$('#wrap').stop().animate({height:'1200px'},100);
		}
	});

	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var hello=$('#wrap').offset();

		if(sct>hello.top+100){
			$('#wrap .slide .content01 .up_area img.spiderman').stop().animate({opacity:1,width:'1000px'},500);
			$('#wrap .slide .content01 .up_area img.saying').stop().animate({width:'400px'},500);
			$('#wrap .slide .content01 .up_area .up_text').stop().animate({top:'50px',opacity:1},800);

		}
		else{
			$('#wrap .slide .content01 .up_area img.spiderman').stop().animate({opacity:0,width:'100px'},500);
			$('#wrap .slide .content01 .up_area img.saying').stop().animate({width:0},500);
			$('#wrap .slide .content01 .up_area .up_text').stop().animate({top:'450px',opacity:0},800);
		}
	});



	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var hello=$('#wrap').offset();

		if(sct>hello.top+800){
			$('#wrap .slide .content01 .down_area img.spiderman02').stop().animate({opacity:1,width:'1300px'},500);
			$('#wrap .slide .content01 .down_area img.saying').stop().animate({width:'400px'},500);
			$('#wrap .slide .content01 .down_area .down_text').stop().animate({top:'200px',opacity:1},800);
		}
		else{
			$('#wrap .slide .content01 .down_area img.spiderman02').stop().animate({opacity:0,width:'100px'},500);
			$('#wrap .slide .content01 .down_area img.saying').stop().animate({width:'0px'},500);
			$('#wrap .slide .content01 .down_area .down_text').stop().animate({top:'600px',opacity:0},800);
		}
	});











});
