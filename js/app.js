// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function()	{
	$('#thumbs a').on('click', function() {
		$('#thumbs img').css('border', 'none');
		$(this).find('img').css('border', 'solid 5px #B1FFDE');

		var newSrc = $(this).find('img').attr('src');

		$('#fullsize img').slideUp(function(){
				$('#fullsize img').attr('src', newSrc).fadeIn();
		});

		var newCaption = $(this).find('img').data('caption');

		$('#fullsize p').text(newCaption);
	});
	$('#thumbs2 a').on('click', function() {
		$('#thumbs2 img').css('border', 'none');
		$(this).find('img').css('border', 'solid 5px #B1FFDE');

		var newSrc = $(this).find('img').attr('src');

		$('#fullsize2 img').slideUp(function(){
				$('#fullsize2 img').attr('src', newSrc).fadeIn();
		});

		var newCaption = $(this).find('img').data('caption');

		$('#fullsize2 p').text(newCaption);
	});
});