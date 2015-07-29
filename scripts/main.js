// ** THIS IS THE MAIN IIFE -- all Translation modules will augment off this one

    var Translation = (function () {
        var spanish = {
            "merry": "feliz",
            "christmas": "navidad",
            "and": "y",
            "happy": "prospero",
            "new": "nuevo",
            "year": "ano"
            }

        return {
            getSpanish: function(userInput) {
                return spanish[userInput]
            }
        }

    })();


