
window.onload = function(){
	let items = document.querySelectorAll('#tbl td');
	
	for(let i=0;i<items.length;i++){
		items[i].onclick=function(){
			//alert('ok');
			alert(this.getAttribute('data-price'));
		}
	}
}
