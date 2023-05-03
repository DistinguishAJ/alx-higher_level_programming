$('document').ready(function () {
	$('DIV#add_item').click(function () {
		$('UL.my_list').append('<li>Item</li>');
	});
	$('DIV#remove_item').click(function () {
		$('UL.my_list li:last').remove();
	});
	$('Dli>Item</li').click(function () {
		$('UL.my_list').empty();
	});
});
