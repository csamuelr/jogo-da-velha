$(document).ready(function(){
   
    var arg = 3;
    var vez = 0;

    jogadas = new Array();

    $('#desfazer_jogada').click(function(e){
        e.preventDefault(); 
        b = confirm($(jogadas[jogadas.length - 2]).val() );

       if(b){
        $('.btn-game').each(function(i){
          if(i == (jogadas[jogadas.length - 1]) ){
            $(this).val('');
          }

          if(vez){
            vez = 0;
          }
          else{
            vez = 1;
          }

        });
       }
    });

    $('#reiniciar').click(function(e){
        e.preventDefault();
        $('.game').html();
        $('.btn-game').each(function(i){
          $(this).prop("disabled", false);
          $(this).val('');
        });
        
        vez = 0;
        delete jogadas;
        jogadas = new Array();
        console.log('click');
    });

    nova_partida();

    function nova_partida(){
      var html = "<div class='col'>";

      for(var i = 0; i < arg; i++){
          html += "<div class='row'>";
          for(var j = 0; j < arg; j++){
            html += "<input class='btn btn-outline-dark btn-game' type='button' value=''></input>"
          }
          html += "</div>"
      }

      html += "</div>"
    
      $('.game').html(html);
      $('.btn-game').css({'width':'32%', 'height':'32%', 'font-size':'35pt'});

    }

    $('.btn-game').each(function(i){
        
        $(this).click(function(e){
          jogadas.push($(this), i);         
          
          //
          $('.btn-game').each(function(i){
            if($(this).val() == ''){
              $(this).prop("disabled", false);
            }
          });

          if(vez == 0){          
              $(this).val("X");
              $(this).prop("disabled", true);              
              // $(this).css({'background-image': 'url("icons/cacto.png', 'background-size': 'contain'});
              vez = 1;                        
          }
          else{
              $(this).val('O');
              $(this).prop("disabled", true);
              // $(this).css({'background-image': 'url("icons/praia.png', 'background-size': 'contain'});
              vez = 0;
          }
          check();
        });      
       
    });

    function check(){
      values = new Array();
      game_over = false;
      
      $('.btn-game').each(function(i){
          values[i] = $(this).attr('value');
      });

      if(!game_over){
          if(caso1(values)){
            // 0 4 8
            game_over = true;
            console.log('Caso 1');
            $('.btn-game').each(function(i){
              if(i == 0 || i == 4 || i == 8){
                $(this).prop("class", "btn btn-success");
              }
              else{
                $(this).prop("class", "btn btn-outline-danger");
                $(this).prop("disabled", true);
              }
            });

          }
          else if(caso2(values)){
            // 2 4 6
            game_over = true; 
            console.log('Caso 2');
            $('.btn-game').each(function(i){
              if(i == 2 || i == 4 || i == 6){
                $(this).prop("class", "btn btn-success");
              }
              else{
                $(this).prop("class", "btn btn-outline-danger");
                $(this).prop("disabled", true);
              }
            });

          }
          else if(caso3(values)){
            // 0 1 2
            game_over = true; 
            console.log('Caso 3');
            $('.btn-game').each(function(i){
              if(i == 0 || i == 1 || i == 2){
                $(this).prop("class", "btn btn-success");
              }
              else{
                $(this).prop("class", "btn btn-outline-danger");
                $(this).prop("disabled", true);
              }
            });
          }
          else if(caso4(values)){
            // 3 4 5
            game_over = true; 
            console.log('Caso 4');
            $('.btn-game').each(function(i){
              if(i == 3 || i == 4 || i == 5){
                $(this).prop("class", "btn btn-success");
              }
              else{
                $(this).prop("class", "btn btn-outline-danger");
                $(this).prop("disabled", true);
              }
            });
          }
          else if(caso5(values)){
            // 6 7 8
            game_over = true; 
            console.log('Caso 5');
            $('.btn-game').each(function(i){
              if(i == 6 || i == 7 || i == 8){
                $(this).prop("class", "btn btn-success");
              }
              else{
                $(this).prop("class", "btn btn-outline-danger");
                $(this).prop("disabled", true);
              }
            });
          }
          else if(caso6(values)){
            // 0 3 6
            game_over = true; 
            console.log('Caso 6');
            $('.btn-game').each(function(i){
              if(i == 0 || i == 3 || i == 6){
                $(this).prop("class", "btn btn-success");
              }
              else{
                $(this).prop("class", "btn btn-outline-danger");
                $(this).prop("disabled", true);
              }
            });
          }
          else if(caso7(values)){
            // 1 4 7
            game_over = true; 
            console.log('Caso 7');
            $('.btn-game').each(function(i){
              if(i == 1 || i == 4 || i == 7){
                $(this).prop("class", "btn btn-success");
              }
              else{
                $(this).prop("class", "btn btn-outline-danger");
                $(this).prop("disabled", true);
              }
            });
          }
          else if(caso8(values)){
            // 2 5 8
            game_over = true; 
            console.log('Caso 8');
            $('.btn-game').each(function(i){
              if(i == 2 || i == 5 || i == 8){
                $(this).prop("class", "btn btn-success");
              }
              else{
                $(this).prop("class", "btn btn-outline-danger");
                $(this).prop("disabled", true);
              }
            });
          }
          else{

            $('.btn-game').each(function(i){
              if($(this).val() != ''){
                game_over = true;
              }
              else{
                game_over = false;
              }
            });
            
          }
      }

      if(game_over){
        console.log('Deu velha!');
      }
           
    }

    function caso1(values){
      if(values[0] != ''){
        if(values[0] == values[4] && values[4] == values[8]){
          $('.resultado').html("Vencedor: " + values[0]);
          $('.game').slideUp();
          $('.game').slideDown();
          $('.game').html("<h1>" + values[0] + "</h><br><h3>Vencedor</h3>" );

          return true;
        }  
      }  
    }

    function caso2(values){
      if(values[2] != ''){
        if(values[2] == values[4] && values[4] == values[6]){
          $('.resultado').html("Vencedor: " + values[2]);
          return true;
        }
      }
    }

    function caso3(values){
      if(values[0] != ''){
        if(values[0] == values[1] && values[1] == values[2]){
          $('.resultado').html("Vencedor: " + values[0]);
          return true;
        }
      }
    }

    function caso4(values){
      if(values[3]){
        if(values[3] == values[4] && values[4] == values[5]){
          $('.resultado').html("Vencedor: " + values[3]);
          return true;
        }
      }
    }

    function caso5(values){
      if(values[6]){
        if(values[6] == values[7] && values[7] == values[8]){
          $('.resultado').html("Vencedor: " + values[6]);
          return true;
        }
      }
    }

    function caso6(values){
      if(values[0] != ''){
        if(values[0] == values[3] && values[3] == values[6]){
          $('.resultado').html("Vencedor: " + values[0]);
          return true;
        }
      }
    }

    function caso7(values){
      if(values[1] != ''){
        if(values[1] == values[4] && values[4] == values[7]){
          $('.resultado').html("Vencedor: " + values[1]);
          return true;
        }
      }
    }

    function caso8(values){
      if(values[2] != ''){
        if(values[2] == values[5] && values[5] == values[8]){
          $('.resultado').html("Vencedor: " + values[2]);
          return true;
        }
      }
    }

});