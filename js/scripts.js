// Business (Back-End) Logic //

var surprise = function(userNumber) {
  for(var userNumber=1;userNumber >= 1; userNumber++) {
    if(userNumber === 3) {
      .show("I'm sorry, Dave. I'm afraid I can't do that.");
    }
  }  
}

// User Interface (Front-End) Logic //

$(document).ready(function(){
  $("form#beep-boop").submit(function(event) {
  // console.log("#submitButton");
    event.preventDefault();
    var userNumber = parseInt($("input#userNumber").val());
    var result = surprise(userNumber);

    $(".userNumber").text(userNumber);

    if (isNaN(userNumber)) {
      alert("Error, please insert a number")
    } else {
      $("result").show();
    }
    //console.log(userNumber);
  });
});