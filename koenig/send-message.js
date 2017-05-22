function validateEmail(email) { 
        var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
      }
      
      function addClassesError(element) {
        element.parent().removeClass("has-success");
        element.parent().addClass("has-error");
        element.next().removeClass("glyphicon-ok");
        element.next().addClass("glyphicon-remove");
      }

      function addClassesSuccess(element) {
        element.parent().removeClass("has-error");
        element.parent().addClass("has-success");
        element.next().removeClass("glyphicon-remove");
        element.next().addClass("glyphicon-ok");
      }

      $(document).ready(function() {
        $("#mailto").submit(function() { return false; });
        $("#send").on("click", function(){
          var emailval  = $("#email").val();
          var namevl  = $("#name").val();
          var msgval    = $("#message").val();
          var msglen    = msgval.length;
          var mailvalid = validateEmail(emailval);

          if(mailvalid == false) {
            addClassesError($("#email"));
          }
          else if(mailvalid == true){
            addClassesSuccess($("#email"));
          }
          if(msglen < 1) {
            addClassesError($("#message"));
          }
          else if(msglen >= 1){
            addClassesSuccess($("#message"));
          }

          if(mailvalid == true && msglen >= 1) {
            // если обе проверки пройдены
            $("#send-text").html("<em>отправка...</em>");
            $.ajax({
              type: 'POST',
              url: 'send-message.php',
              data: $("#mailto").serialize(),
              success: function(data) {
                if(data == "true") {
                  $("#mailto").fadeOut("fast", function(){
                    $("#send-text").html("<em>Ваше сообщение успешно отправлено!</em>");
                  });                  
                }
                else {
                  $("#mailto").fadeOut("fast", function(){
                    $("#send-text").html("<em>Ошибка при отправке! Пожалуйста, воспользуйтесь другим способом связи.</em>");
                  });  
                }
              }
            });
          }
        });
      });