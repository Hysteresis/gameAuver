//! init jquery document
$(document).ready(function(){

        //! animation des barres de skill BS
        var animateColorSkillBarBS = 0 ;
        console.log(animateColorSkillBarBS); 
       
        $("#buttonSkillBS").click(function(){

                if (animateColorSkillBarBS === 0){               
                        $("#colorSkillBarBS").css({"background-color":"black","width":"75%","transition-duration":"0.9s","opacity":"0.9" });
                        animateColorSkillBarBS = 1;
                        console.log(animateColorSkillBarBS);        
                                   
                } else {                                     
                        $("#colorSkillBarBS").css({"background-color":"black","width":"0%","transition-duration":"0.9s","opacity":"0.4" });
                        animateColorSkillBarBS = 0; 
                        console.log(animateColorSkillBarBS);        
      
                }
                                      
        }); 
        
        
        //! animation des barres de skill JS
        var animateColorSkillBarJS = 0 ;
        console.log(animateColorSkillBarJS); 

        $("#buttonSkillJS").click(function(){

                if (animateColorSkillBarJS === 0){               
                        $("#colorSkillBarJS").css({"background-color":"black","width":"50%","transition-duration":"0.9s","opacity":"1" });
                        animateColorSkillBarJS = 1;
                        console.log(animateColorSkillBarJS);        
                                
                } else {                                     
                        $("#colorSkillBarJS").css({"background-color":"black","width":"0%","transition-duration":"0.9s","opacity":"0.4" });
                        animateColorSkillBarJS = 0; 
                        console.log(animateColorSkillBarJS);        

                }
                                
        });

   
});
    
    