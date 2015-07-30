// ** THIS IS THE MAIN IIFE -- all Translation modules will augment off this one

var Translation = (function () {
    var spanish = {
        "merry": "Feliz",
        "christmas": "Navidad",
        "and": "y",
        "happy": "Prospero",
        "new": "Nuevo",
        "year": "a&ntilde;o",
        "goodbye": "Au Revoir",
        "shit": "Mierda!",
        "damn":  "Caramba!",
        "blessings": "Benedici&oacute;n",
        ["thank you"]: "Gracias"
        

        }

    return {
        getSpanish: function(userInput) {
            return spanish[userInput]
        }
    }

})();


