// Business (Back-End) Logic //

var surprise = function(userNumber)


// User Interface (Front-End) Logic //

$(document).ready(function(){
  $("form#beep-boop").submit(function(event){
  // console.log("#submitButton");
    event.preventDefault();
    var userNumber = parseInt($("input#userNumber").val());
    var result = surprise(userNumber);

    $(".userNumber").text(userNumber);

    if (isNaN(userNumber)){
      alert("Error, please insert a number")
    } else {
      $("result").show();
    }
    //console.log(userNumber);
  });
});