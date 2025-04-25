/**
 * 
 */

 	// 1. [감추기] 버튼 클릭했을 때 이미지 사라지기
 	
 	$(function(){
		 $('#hideButton').click(function(){
			 $('#intro>img').fadeOut(1000);
		 })
		 
		 $('#showButton').click(function(){
			 $('#intro>img').fadeIn(1000);
		 })
		 
		 /*$('#toggleButton').click(function(){
			 $('#intro>img').slideToggle(1000);
		 })*/
		 
		 $('#toggleButton').click(function(){
			 let img = $('#intro>img');
			 
			 if(img.is(':visible')){
				 img.fadeOut(1000);
				 $(this).val('보이기');
			 }else{
				 img.fadeIn(1000);
				 $(this).val('감추기');
			 }
		 })
		 
		 // 테이블의 짝수번째 줄에 CSS의 table_striping 클래스 추가		 
		 //$('#celebs .data>tbody>tr:odd').addClass('table_striping');
		 
		 // 테이블의 줄에 마우스가 올라갔을 때 CSS의 td_mouseover 클래스 추가
		 // 마우스 나가면 해당 클래스 제거
		/* $('#celebs .data>tbody>tr').mouseover(function(){
			 $(this).addClass('td_mouseover');
		 })
		 
		 $('#celebs .data>tbody>tr').mouseout(function(){
			 $(this).removeClass('td_mouseover');
		 })
		 */
		
		
		
		 $('#celebs .data>tbody>tr').hover(function(){
			 $(this).addClass('td_mouseover')
		 },function(){
			 $(this).removeClass('td_mouseover');
		 });
		
		
		 /*$('#celebs .data>tbody>tr').eq(2).mouseover(function(){
			 $(this).addClass('td_mouseover');
		 })*/
		 
		 /*$('#celebs .data>tbody>tr').find('td').css({'font-size':'30px'})*/
	 })