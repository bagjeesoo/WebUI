$(function(){
	
	
	// 1. 오늘날짜
	let today = new Date();
	$('#date_wrap>.year').text(today.getFullYear());
	$('#date_wrap>.month').text(today.getMonth()+1);
	$('#date_wrap>.date').text(today.getDate());
	
	
	//2. 포커스
	$('#keyword').focus(function(){
		$(this).css('background','none');
	})
	
	$('#keyword').focusout(function(){
		$(this).removeAttr('style');
	})
	
	//3. 탭팬
	let allDd = $('#tabmenu>dd');
	$('#tabmenu>.tab_btn1').click(function(){
		allDd.hide();
		$(this).next().show();
	})
	$('#tabmenu>.tab_btn2').click(function(){
		allDd.hide();
		$(this).next().show();
	})
	$('#tabmenu>.tab_btn3').click(function(){
		allDd.hide();
		$(this).next().show();
	})
	
	//4. 이미지슬라이드
	
	//5. 로그인
	$('.login_wrap').click(function(){
		//alert('dd')
		$('#login_f>fieldset').show();
	})
})