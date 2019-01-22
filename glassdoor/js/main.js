$(function(){
  $('.j-input-radio').on('change', function(){
    var inputValue = $(this).val();
    var showValue = 'input2';
    
    $('.j-text')[inputValue === showValue ? 'removeClass' : 'addClass']('disable');

  });
});


$(function(){
	 $('.j-switch').on('change', function(){
		$('.j-switch').toggleClass('active');

    	 });
});