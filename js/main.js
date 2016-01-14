$(document).on('ready', function(){
	//isotope courtesy of david desandro: http://codepen.io/desandro/pen/Ehgij
	$(function() {
  		// init Isotope
  		var $grid = $('.videogallery').isotope({
    	itemSelector: '.videoitem',
    	});

	    $('.filters-button-group').on('click', 'button', function() {
	    	var filterValue = $( this ).attr('data-filter');
	    	$grid.isotope({ filter: filterValue });
	  	});
  		
	  	// change is-checked class on buttons
	  	$('.button-group').each( function( i, buttonGroup ) {
		    var $buttonGroup = $( buttonGroup );

		    $buttonGroup.on( 'click', 'button', function() {
			    $buttonGroup.find('.is-checked').removeClass('is-checked');
			    $( this ).addClass('is-checked');
			});
		});	
	});	 
});   
	    	
  
