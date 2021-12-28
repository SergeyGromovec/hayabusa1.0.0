$(function() {
    $('.open-search').click(function(e) {
        e.preventDefault();
        $('#search').addClass('active');
    });
    
    $('.close-search').click(function() {
        
        $('#search').removeClass('active');
    });
});



$('.carousel').bcSwipe({ threshold: 50 });