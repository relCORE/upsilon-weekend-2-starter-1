var navCounter = 0;

$(document).ready(function(){

  //AJAX call
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);
        var dataArr = data;
        var idCounter = 0;
        var $studentBox;
        dataArr.forEach(function(student){
          if(idCounter == 0){
            $studentBox = '<div class = "box selected" id=' + idCounter + '></div>';
          } else{
            $studentBox = '<div class = "box" id=' + idCounter + '></div>';
          }
          idCounter++;
          $('#students').append($studentBox);


        });

      }
    });



  //Button Listenders





});
