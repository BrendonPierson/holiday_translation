$(document).ready(function(){

  //handle click on submit button
  $("#submit").click(function(){
    //get user input, turn it into an array, and lowercase
    var $arrOfUserInput = $("#user-input").val().toLowerCase().split(" ");
    //get selection from select menu
    var $langSelected = $("#lang :selected").text();
    var html = "";

    //logic to run the correct function
    if ($langSelected === "French") {
        html = Translation.getFrench($arrOfUserInput);
    } else if ($langSelected === "Italian") {
        html = Translation.getItalian($arrOfUserInput);
    } else if ($langSelected === "Spanish") {
        html = Translation.getSpanish($arrOfUserInput);
    }

    $("#user-output").html(html);
  });
});