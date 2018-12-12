$(document).ready(function(){

    console.log('jquery is loaded');
    $('#jquery-test').on('click',function() {

        $('#supplement').addClass('animated slideOutDown');
        $('#supplement').css('display','none');
      
    });

    $('#first-element').on('click',function(){

        $('#first-element').fadeOut("slow");

    })


});