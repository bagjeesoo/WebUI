/**
 * 
 */
$(function(){
	
	$('#signup>form').validate({
		rules:{
			name: {required: true}
			,email:{required:true, email:true}
			,website:{url:true}
			,password:{
			required:true
			,minlength:6
			,maxlength:12
			}
			,passconf:{
				equalTo:'#password'
			}
		}
		, success:function(label){
			label.addClass('valid');
			label.text('성공');
		}
		
	});
	// 속성지정:attr() -> prop()
	$('.stats>.check-all').click(function(){
		//alert($(this).is(':checked'))
				
		/*if($(this).is(':checked')){
			$('.agree').prop('checked',true)
		}else{
			$('.agree').prop('checked', '')
		}*/
		
		$('.agree').prop('checked', $(this).is(':checked'));
		
		
	})
	
	$('.agree').click(function(){
		$('.check-all').prop('checked',$(this).is(':checked')); 
	})
	
})