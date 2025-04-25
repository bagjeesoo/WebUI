<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title> 아이디 중복 검사 </title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
	$('#id_check').click(function(){
		let param = {id : $('.userinput').val() };
		//console.log(param);
		$.ajax({
			type:'get'
			, data: param
			, url: 'IdCheck.jsp'
			, dataType: 'text' 
			, success: function(data){
				//alert(data)
				if(data.trim() == 'YES'){  // 앞뒤 공백이 많이 생겨서 trim() 사용해야함
					$('#idmessage').text('이미 사용중인 아이디가 있습니다.');
					$('#idmessage').show();
				}else{
					$('#idmessage').text('사용 가능한 아이디입니다.')
					$('#idmessage').show();
				}
				
			}
			, error : function(err){
				alert('실패');
				console.log(err);
			}
		});
	})
})

</script>

</head>
<body>

<input name="id" type="text" class="userinput" size="15" />
<button type="button" id="id_check">중복체크</button><br/><br/>
<div id="idmessage" style="display:none;"></div>

</body>
</html>