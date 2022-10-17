//! init jquery document
$(document).ready(function(){

        //! Volets roulants MonCV
        $("#voletRoulantCV").css({"background-color":"red","height":"70%", "opacity":"0.7"});

        //? mouseenter : la souris entre dans l'image
        $("#voletRoulantCV").mouseenter(function(){      
            $(this).css({"background-color":"black","height":"100%","transition-duration":"0.3s","opacity":"0.9" });
        });

        //? mouseleave : la souris quitte l'image
        $("#voletRoulantCV").mouseleave(function(){
            $("#voletRoulantCV").css({"background-color":"black","height":"70%", "opacity":"0.7"});
        });


        //! Volets roulants dragonBall
        $("#voletRoulantDB").css({"background-color":"red","height":"70%", "opacity":"0.7"});

        //? mouseenter : la souris entre dans l'image
        $("#voletRoulantDB").mouseenter(function(){      
            $(this).css({"background-color":"black","height":"100%","transition-duration":"0.3s","opacity":"0.9" });
        });

        //? mouseleave : la souris quitte l'image
        $("#voletRoulantDB").mouseleave(function(){
            $("#voletRoulantDB").css({"background-color":"black","height":"70%", "opacity":"0.7"});
        });
        
        //! Volets roulants Asterix
        $("#voletRoulantAsterix").css({"background-color":"red","height":"70%", "opacity":"0.7"});

        //? mouseenter : la souris entre dans l'image
        $("#voletRoulantAsterix").mouseenter(function(){
        
        $(this).css({"background-color":"black","height":"100%","transition-duration":"0.3s","opacity":"0.9" });
        });

        //? mouseleave : la souris quitte l'image
        $("#voletRoulantAsterix").mouseleave(function(){
        
        $("#voletRoulantAsterix").css({"background-color":"black","height":"70%", "opacity":"0.7"});
        });

        
        //! Volets roulants Pokemon
        $("#voletRoulantPokemon").css({"background-color":"red","height":"70%", "opacity":"0.7"});

        //? mouseenter : la souris entre dans l'image
        $("#voletRoulantPokemon").mouseenter(function(){
        
        $(this).css({"background-color":"black","height":"100%","transition-duration":"0.3s","opacity":"0.9" });
        });

        //? mouseleave : la souris quitte l'image
        $("#voletRoulantPokemon").mouseleave(function(){
        
        $("#voletRoulantPokemon").css({"background-color":"black","height":"70%", "opacity":"0.7"});
        });

        
        //! Volets roulants voletRoulantBoucheAOreille
        $("#voletRoulantBoucheAOreille").css({"background-color":"red","height":"70%", "opacity":"0.7"});

        //? mouseenter : la souris entre dans l'image
        $("#voletRoulantBoucheAOreille").mouseenter(function(){
        
        $(this).css({"background-color":"black","height":"100%","transition-duration":"0.3s","opacity":"0.9" });
        });

        //? mouseleave : la souris quitte l'image
        $("#voletRoulantBoucheAOreille").mouseleave(function(){
        
        $("#voletRoulantBoucheAOreille").css({"background-color":"black","height":"70%", "opacity":"0.7"});
        });


    //! Volets roulants rogphone vertical sm
    $("#rogPhoneVertical").css({"background-color":"black","height":"90%","border-radius": "30px", "opacity":"1"});


    //! Volets roulants rogphone horizontal
    $("#rogPhoneHorizontal").css({"background-color":"black","height":"40%", "opacity":"0.7"});

    //? mouseenter : la souris entre dans l'image
    $("#rogPhoneHorizontal").mouseenter(function(){
        // alert("You entered .card-img-overlay");
        $(this).css({"background-color":"black","height":"87%","transition-duration":"0.3s","opacity":"0.8" });
    });
    
    //? mouseleave : la souris quitte l'image
    $("#rogPhoneHorizontal").mouseleave(function(){
        // alert("You entered .card-img-overlay");
        $(this).css({"background-color":"black","height":"40%", "opacity":"0.7"});
    });


});

