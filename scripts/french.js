// ** THIS IS A SECONDARY IIFE -- this translation module will augment the Main IFFE


var Translation = function(Translation){
var french = {
        "merry": "Joyeux",
      "christmas": "No&euml;l",
      "and": "et",
      "happy": "Bonne",
      "new": "Nouveau",
      "year": "Ann&eacute;e",
      "hello": "Bonjour",
      "goodbye": "Au Revoir",
      "shit": "Merde",
      "damn":  "Zut!",
      "blessings": "B&eacute;n&eacute;dictions",
      ["thank you"]: "Merci Beaucoup"

      }

  
  Translation.getFrench = function(word){
    return french[word];
  }

  return Translation;

}(Translation);



