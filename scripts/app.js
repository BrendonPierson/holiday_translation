$(document).ready(function(){

  //handle click on submit button
  $("#submit").click(function(){
    //get user input, turn it into an array, and lowercase
    var $arrOfUserInput = $("#user-input").val().toLowerCase().split(" ");
    console.log($arrOfUserInput);
    //get selection from select menu
    var $langSelected = $("#lang :selected").text();
    var html = "<div>";

    //logic to run the correct function
    if ($langSelected === "French") {   
    
    } else if ($langSelected === "Italian") {
        html = Translation.getItalian($arrOfUserInput);
    } else if ($langSelected === "Spanish") {
      var returnArr = [];
      for (var i = 0; i < $arrOfUserInput.length; i++) {
        returnArr[returnArr.length] = Translation.getSpanish($arrOfUserInput[i]);
      }
      html = returnArr.join(" ");
      html += "</div>";
    }
    $("#user-output").html(html);
  });
});

function translate(lang){

}