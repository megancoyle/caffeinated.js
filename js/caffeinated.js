var MyApp = {};

// Edit item in a field
$('#edit-field').on('click','.text-field',function() {

         var fieldText = $(this).text();
         var input = $('<input value="'+fieldText+'"/>');
         $(this).text('').append(input);
         $('input').focus();


});

//Toggle function
$('#edit-field').on('blur','input',function() {
    $(this).parent().text($(this).val());
});


$('.show_hide').click(function(){
        $(this).next('.toggle').slideToggle();
         return false;
    });
