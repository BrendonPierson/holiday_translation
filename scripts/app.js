$(document).ready(function(){

  //handle click on submit button
  $("#submit").click(function(){
    //get user input, turn it into an array, and lowercase
    var $arrOfUserInput = $("#user-input").val().toLowerCase().split(" ");
    //get selection from select menu
    var $langSelected = $("#lang :selected").text();
    var html = "<div>";
    var returnArr = [];
    //logic to run the correct function
    if ($langSelected === "French") {   
      translate('getFrench');
    } else if ($langSelected === "Italian") {
      translate('getItalian');
    } else if ($langSelected === "Spanish") {
      translate('getSpanish');
    }

    //put the output in the DOM
    $("#user-output").html(html);

    //Function for translating takes the language method as argument
    function translate(langMethod){
      returnArr = [];
      for (var i = 0; i < $arrOfUserInput.length; i++) {
        returnArr[returnArr.length] = Translation[langMethod]($arrOfUserInput[i]);
      }
      html = returnArr.join(" ");
      html += "</div>";
    }
  });
});

