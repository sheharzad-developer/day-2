'use strict';

        var userName = document.forms['myForm']['userName'];
        var password = document.forms['myForm']['password'];
      
      
        var userName_error = document.getElementById('userName_error');
        var password_error = document.getElementById('password_error');
      
        var validation = true;
      
            function validateForm() {
      
              validation = true;
            
              if (userName.value == "" || password.value == "") {
                  document.getElementById("userName_error").classList.add("error");
                  document.getElementById("password_error").classList.add("error");
                  validation = false;
              }
      
              else
              {
                  document.getElementById("userName_error").classList.remove("error");
                  document.getElementById("password_error").classList.remove("error");
              }
      
              if (validation != true){
                  return false;
              }
            };
      

        var userNameChinese = document.forms['ChineseForm']['userNameChinese'];
        var passwordChinese = document.forms['ChineseForm']['passwordChinese'];
      
      
        var userName_error = document.getElementById('userNameChinese_error');
        var password_error = document.getElementById('passwordChinese_error');
      
        var validation = true;
      
            function validateFormChinese() {
      
              validation = true;
            
              if (userNameChinese.value == "" || passwordChinese.value == "") {
                  document.getElementById("userNameChinese_error").classList.add("error");
                  document.getElementById("passwordChinese_error").classList.add("error");
                  validation = false;
              }
      
              else
              {
                  document.getElementById("userNameChinese_error").classList.remove("error");
                  document.getElementById("passwordChinese_error").classList.remove("error");
              }
      
              if (validation != true){
                  return false;
              }
            };
      
            $('form :input').focus(function(){
                $('label[for="' + this.id + '"]').addClass('labelfocus');
                }).blur(function(){
                    var val = $(this).val();
                    if(val == ''){
                     $('label[for="' + this.id + '"]').removeClass('labelfocus');
                   }
                });
  
  
                'use strict';