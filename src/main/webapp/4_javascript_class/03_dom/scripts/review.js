
window.onload = function(){
	
	let img=document.querySelector('#profile>img');  // querySelector에선 자식태그 등 찾기 수월함
	let users = document.querySelectorAll('.user');
	// '나는 누구' 글자를 클릭했을 때
	document.querySelector('#btn').onclick = function(){
		img.src='images/me.png';
		users[0].innerHTML="이름 : 박지수";
		users[1].innerHTML="주소 : 미국";
		users[2].innerHTML="연락처 : 010-0000-0000";
	}
	
}