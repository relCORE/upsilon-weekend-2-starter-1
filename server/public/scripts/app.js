var navCounter = 0;
var navMax = 0;
var dataArr;
var timer;

$(document).ready(function(){

  //AJAX call
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);
        dataArr = data;
        navMax = data.length - 1;
        var idCounter = 0;
        var $studentBox;
        dataArr.forEach(function(student){
          if(idCounter == 0){
            $studentBox = '<div class = "box selected" id=' + idCounter + '>' + (idCounter+1) + '</div>';
            changeStudent(student);
          } else{
            $studentBox = '<div class = "box" id=' + idCounter + '>' + (idCounter+1) + '</div>';
          }
          idCounter++;
          $('#students').append($studentBox);

        });

        timer = setInterval(next, 10000);

      }
    });



  //Button Listenders
  $('#navBar').on('click', '#prev', prev);

  $('#navBar').on('click', '#next', next);

  $('#students').on('click', ".box", changeById);




});


function next () {
  clearInterval(timer);
  timer = setInterval(next, 10000);
  $('#' + navCounter).toggleClass("selected");
  navCounter++;
  if (navCounter > navMax){
    navCounter = 0;
  }
  console.log(navCounter);
  changeStudent(dataArr[navCounter]);
  $('#' + navCounter).toggleClass("selected");

}

function prev () {
  clearInterval(timer);
  timer = setInterval(next, 10000);
    $('#' + navCounter).toggleClass("selected");
    navCounter--;
    if (navCounter < 0){
      navCounter = navMax;
    }
    console.log(navCounter);
    changeStudent(dataArr[navCounter]);
    $('#' + navCounter).toggleClass("selected");
}


function changeById () {
  $('#' + navCounter).toggleClass("selected");
  navCounter = Number(this.id);
  $('#' + navCounter).toggleClass("selected");
  changeStudent(dataArr[navCounter]);

}


function changeStudent (student){


  $("#realName").fadeOut(function() {$(this).text(student.name)}).fadeIn(1000);
  $("#gitName").fadeOut(function() {$(this).text("https://github.com/" + student.githubUserName)}).fadeIn(1000);
  $("#shoutOut").fadeOut(function() {$(this).text(student.shoutout)}).fadeIn(1000);

  // $('#realName').fadeOut(1000);
  // $('#gitName').fadeOut(1000);
  // $('#shoutOut').fadeOut(1000);
  //
  // $('#realName').text(student.name);
  // $('#gitName').text(student.githubUserName);
  // $('#shoutOut').text(student.shoutout);
  //
  // $('#realName').fadeIn(1000);
  // $('#gitName').fadeIn(1000);
  // $('#shoutOut').fadeIn(1000);


}
