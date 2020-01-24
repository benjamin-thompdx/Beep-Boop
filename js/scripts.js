// Business (Back-End) Logic //



// User Interface (Front-End) Logic //

$(document).ready(function(){
  $("form#beep-boop").submit(function(event) {
  console.log("#submitButton");
    event.preventDefault();
    var userNumber = parseInt($("input#userNumber").val());
    var result = (userNumber);

    $(".userNumber").text(userNumber);

    if (isNaN(userNumber)) {
      alert("Error, please insert a number")
    }

    $("result").show();
  });
});