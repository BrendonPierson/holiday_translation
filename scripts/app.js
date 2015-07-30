$(document).ready(function(){

// text to speech function
    function speak(text, callback) {
        var uSpanish = new SpeechSynthesisUtterance();
        uSpanish.text = text;
        uSpanish.lang = 'es-US';
     
        uSpanish.onend = function () {
            if (callback) {
                callback();
            }
        };
     
        uSpanish.onerror = function (e) {
            if (callback) {
                callback(e);
            }
        };

        var uFrench = new SpeechSynthesisUtterance();
        uFrench.text = text;
        uFrench.lang = 'fr-FR';
     
        uFrench.onend = function () {
            if (callback) {
                callback();
            }
        };
     
        uFrench.onerror = function (e) {
            if (callback) {
                callback(e);
            }
        };

        var uItalian = new SpeechSynthesisUtterance();
        uItalian.text = text;
        uItalian.lang = 'es-US';
     
        uItalian.onend = function () {
            if (callback) {
                callback();
            }
        };
     
        uItalian.onerror = function (e) {
            if (callback) {
                callback(e);
            }
        };
     
     var $langSelected = $("#lang :selected").text();
       if ($langSelected === "French") {   
        speechSynthesis.speak(uFrench);
      } else if ($langSelected === "Italian") {
        speechSynthesis.speak(uItalian);
      } else if ($langSelected === "Spanish") {
        speechSynthesis.speak(uSpanish);
      }

        
    }


  //handle click on submit button
  $("#submit").click(function(){
    //get user input, turn it into an array, and lowercase
    var $arrOfUserInput = $("#user-input").val().toLowerCase().split(" ");
    //get selection from select menu
    var $langSelected = $("#lang :selected").text();
    var html;
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

    // Show output and styling on click.
    $("#user-output").css("display", "inline-block")    

    //Function for translating takes the language method as argument
    function translate(langMethod){
      returnArr = [];
      for (var i = 0; i < $arrOfUserInput.length; i++) {
        returnArr[returnArr.length] = Translation[langMethod]($arrOfUserInput[i]);
      }
      html = returnArr.join(" ");
    }

    speak(html);

  });
});



 

