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

function replace(updatedNumbers) {
  updatedNumbers.forEach(function(updatedNumber, index, arr) {
    if (updatedNumber.includes("3")){
      arr[index] = "I'm sorry, Dave. I'm afraid I can't do that."
    } else if (updatedNumber.includes("2")){
      arr[index] = "Boop"
    } else if (updatedNumber.includes("1")){
      arr[index] = "Beep"
    }
  });
}

// User Interface (Front-End) Logic //

$(document).ready(function() {
  $("form#beep-boop").submit(function(event){
    console.log("#submitButton");
    event.preventDefault();
    // var userNumber = parseInt($("input#userNumber").val());
  });
});