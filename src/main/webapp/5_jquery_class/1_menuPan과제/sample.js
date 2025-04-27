/**
 * 
 */

$(function(){
	$('#menu1Count').change(function(){
	 //alert($(this).val())
	 
	 
	 var tr1 = $('#listTable tbody').append($('<tr><tr/>'))
	 var v = $(this).val()
	 tr1.prepend($('<td></td>'))
	 tr1.prepend($(`<td>${v}</td>`))
	 tr1.prepend($('<td>삭제</td>'))
	 
 })
})

