<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<script  type="text/javascript"  src="libs/jquery-1.9.1.min.js"> </script>
	<script type="text/javascript">
		$(function(){
		
			//------------------------------
			// 비동기 통신 : AJAX
			
			// 서버로 보낼 데이터
			let param = { cate:'book', name:'kim'};
			
			/* $.ajax({
				type:'post'					// 전송방식(브라우저마다 default 값이 다름)
				, data : param				// 서버로 보내는 파라미터
				, url : '02_server.jsp'		// 요청 페이지
				, success : parseData		// 성공 시 함수
				, error : function(err){
					alert('문제발생');
					consloe.log(err);
				}
			}) */
			
			// 축약형
			$.post('02_server.jsp', param, parseData);  //url, 보낼데이터, 성공시함수
			
			function parseData(strText){
				
				alert( strText );
				
				var aryData = strText.split("|");
							
				for(var i=0;i<aryData.length;i++){
					var param  = aryData[i].split("=");				
					if( param[0].trim() == 'cate'){  // 공백제거를 하지 않으면 처음에 공백에 들어와서 cate를 찾지 못함
						 document.getElementById("cate").value = param[1];
					}
					
					if( param[0].trim() == 'name'){
						document.getElementById("name").value = param[1];
					}
				
				}
				
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


