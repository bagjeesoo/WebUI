$(function(){
	
	let topDiv = $('div.tabSet');
	let anchors = topDiv.find('ul.tabs>li>a');
	let panelDivs = topDiv.find('.panel');
	
	anchors.show();
	panelDivs.hide();
	
	let lastAnchor=anchors.filter('.on');
	let lastPanel=$(lastAnchor.attr('href'));
	console.log(lastPanel);
	lastPanel.show();
	
	anchors.click(function(){
		let currentAnchor = $(this);
		let currentPaner = $(currentAnchor.attr('href'));
		
		lastAnchor.removeClass('on');
		currentAnchor.addClass('on');
		
		lastPanel.hide();
		currentPaner.show();
		
		lastAnchor=currentAnchor;
		lastPanel=currentPaner;
	})
	
})