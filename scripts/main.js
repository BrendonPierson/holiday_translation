// ** THIS IS THE MAIN IIFE -- all Translation modules will augment off this one

    var Translation = (function () {
        var spanish = {
            "merry": "feliz",
            "christmas": "navidad",
            "and": "y",
            "happy": "prospero",
            "new_year": "ano"
            }

        return {
            getSpanish: function(userInput) {
                var output = "<div>";;
                for (var i = 0; i < $arrOfUserInput.length; i++) {
                    output += spanish[$arrOfUserInput[i]] + " ";
                }
                output += "</div>"
            }
        }

    })();


