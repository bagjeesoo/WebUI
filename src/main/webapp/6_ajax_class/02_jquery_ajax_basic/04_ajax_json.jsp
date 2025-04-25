<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title></title>
	<script  type="text/javascript"  src="libs/jquery-1.9.1.min.js"> </script>
	<script>
	    $(function(){
	    	$.ajax({
	    		type : 'post'
	    		, data : {cate: 'book', name: 'park'}
	    		, url : '04_server.jsp'
	    		, dataType : 'text'  // 추후 JSON 객체로 받았으면 이 부분이 'json'
	    		, success : parseData
	    		, error : function(err){
	    			alert('문제발생');
	    			console.log(err);
	    		}
	    	});
	    	
	    	function parseData(result){
	    		//alert(result); // 추후에 JSON으로 받으면 객체임(형변환 필요없음)
	    		var obj={}; //지금은 text라서 객체로 형변환이 필요
	    		
	    		obj = eval("("+result+")");
	    		
	    		$('#cate').val(obj.first);
	    	}
	    	
	    })
	    
	</script>
</head>

<body>
서버로부터 넘겨받은 데이터<br/>
첫번째 데이터 : <input type="text" name="" id="cate"/><br/>
두번째 데이터 : <input type="text" name="" id="name"/><br/>
</body>
</html>


