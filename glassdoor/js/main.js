$(function(){
  $('.j-input-radio').on('change', function(){
    var inputValue = $(this).val();
    var showValue = 'input2';
    
      $('.j-text')[inputValue === showValue ? 'removeClass' : 'addClass']('disable');
  });
});

// $(function(){
// 	$( ".j-input-radio" ).change(function() {
//   		if($(this).hasClass('active')) return;

// 		if($(this).attr('class') === '.j-switch'){
// 			$('.j-text').addClass('disable')
// 		} 
// 		else {
// 			$('.j-text').removeClass('disable')
// 		}

// 		$('.j-switch').toggleClass('active');
// 	});

// 	$('.j-form').on('submit', function(e){
// 		e.preventDefault();
// 	})
// });