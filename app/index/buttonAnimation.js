//! init jquery document
$(document).ready(function(){

    //! animation du bouton fadeToggle Basculer de fadeIn a fadeOut
    $(".hideP").hide();

    $("#btnAnimation").click(function(){
        $(".hideP").slideToggle();
    });


  

});

