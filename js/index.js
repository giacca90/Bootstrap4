$(document).ready(function(){
           $('[data-toggle="tooltip"]').tooltip();
           $("#carousel").carousel({interval: 4000});
            });
           $('#loginModal').on('hide.bs.modal',function(e){
            console.log('el modal se ma a esconder')
           });
           $('#loginModal').on('hidden.bs.modal',function(e){
            console.log('el modal se ha escondido')
           });
           $('#loginModal').on('show.bs.modal',function(e){
            console.log('el modal se va a mostrar')
           });
           $('#loginModal').on('shown.bs.modal',function(e){
            console.log('el modal se ha mostrado');
           });
           
           $("#loginForm").keyup(function() {

                $correoText = $("#InputEmail").val();
                $passwordText= $("#InputPassword").val();

                if( $correoText.length<=0 || $passwordText.length<= 0){
                    console.log('disabled');
                    $('#loginButton').addClass('disabled')
                
                }
                else{
                    console.log('abled');
                    $('#loginButton').removeClass('disabled');
                } 
            });

            $("#registerForm").keyup(function() {

                $correoText2 = $("#InputEmail2").val();
                $passwordText2= $("#InputPassword2").val();
                $passwordText3= $("#InputPassword3").val();

                if( $correoText2.length<=0 || $passwordText2.length<= 0 || $passwordText3.length<=0){
                    console.log('disabled');
                    $('#registerButton').addClass('disabled')
                
                }
                else{
                    if($passwordText2==$passwordText3){
                        console.log('abled');
                    $('#registerButton').removeClass('disabled');
                    }
                    
                } 
            })
            