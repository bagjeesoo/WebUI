<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
   
<%	// 1. 이전 화면에서 넘겨받은 데이타
	String cate = request.getParameter("cate");
	String name = request.getParameter("name");
	
	// 2. 다시 화면으로 보낼 데이터 구성
	String result ="";
	
	result += "{";
	result += "'first' : "+ "'changed_"+cate+"_by_server" +"',";
	result += "'second' : "+ "'from_"+name+"_server'";
	result += "}";
	System.out.println(result);
	out.write(result);
	
	/***************************************
		추후에는 JSON 라이브러리를 이용해서 JSON객체로 전송하지만
		지금은 형식만 빌린 문자열
	*/
%> 