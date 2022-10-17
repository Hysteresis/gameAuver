// jQuery burherMenu
$(document).ready(function(){


    //init menu Top
    $("#accueil").text("Accueil");
    $("#auMenu").text("Au menu");
    $("#patronne").text("Contacter la patronne");
    $("#localiserResto").text("Localiser mon resto");


    //init : menu burger hide
    $(".overlay").hide();

    //fonctionnement croix/ burger
    var burgerCroix = 'Off';
   
    $("#toggleBurger").click(function(){
        
        if ($("#toggleBurger").hasClass("fas fa-bars") && burgerCroix === 'Off' ){
                
                $("#toggleBurger").removeClass("fas fa-bars").addClass("far fa-times-circle");
                burgerCroix = 'On';
                // $(".fa-times-circle").css({"color":"text-muted"});
                $(".overlay").slideDown(100);
                $(".fa-times-circle").css("color","red");
            
        } else {

                $("#toggleBurger").removeClass("far fa-times-circle").addClass("fas fa-bars");
                burgerCroix = 'Off';
                $(".overlay").slideUp(100);
                $(".fa-bars").css("color","slategray");


        }

    });


 
});