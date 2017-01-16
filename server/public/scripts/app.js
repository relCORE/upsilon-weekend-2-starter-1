var navCounter = 0;
var navMax = 0;

$(document).ready(function(){

  //AJAX call
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);
        var dataArr = data;
        navMax = data.length - 1;
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
  $('#navBar').on('click', '#prev', function(){
    $('#' + navCounter).toggleClass("selected");
    navCounter--;
    if (navCounter < 0){
      navCounter = navMax;
    }
    console.log(navCounter);
    $('#' + navCounter).toggleClass("selected");

  });

  $('#navBar').on('click', '#next', function(){
    $('#' + navCounter).toggleClass("selected");
    navCounter++;
    if (navCounter > navMax){
      navCounter = 0;
    }
    console.log(navCounter);
    $('#' + navCounter).toggleClass("selected");

  });




});
