// Business (Back-End) Logic //

function suprise(inputNumber) {
  arrNumbers = []
  for(i = 0; i <= parseInt(inputNumber); i++) {
    arrNumbers.push(i);
  }
  var arrWords = arrNumbers.map(String);
  replace(arrWords);
  return arrWords;
}

// User Interface (Front-End) Logic //

$(document).ready(function() {
  $("form#beep-boop").submit(function(event){
    console.log("#submitButton");
    event.preventDefault();
    // var userNumber = parseInt($("input#userNumber").val());
  });
});