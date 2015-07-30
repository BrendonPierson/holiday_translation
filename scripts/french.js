// ** THIS IS A SECONDARY IIFE -- this translation module will augment the Main IFFE


var Translation = function(Translation){
var french = {
        "merry": "Joyeux",
        "christmas": "Noel",
        "and": "et",
        "happy": "Bonne",
        "new": "Nouveau",
        "year": "Annee"
        }

  
  Translation.getFrench = function(word){
    return french[word];
  }

  return Translation;

}(Translation);



