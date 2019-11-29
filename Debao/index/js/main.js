$(document).ready(function() {
	$(".right-container .right-item").click(function(event) {
		/* Act on the event */
		$(".left-container .left-item.group"+$(this).data('group')).hide();
		$(".left-container .item" + $(this).data('item')).show();
	});
});