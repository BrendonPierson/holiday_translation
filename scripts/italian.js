var Translation = function(Translation){
  var italian = {
  "merry": "buon",
  "christmas": "Natale",
  "and": "e",
  "happy": "Felice",
  "year": "Anno",
  "new": "Nuovo"
  }
  
  Translation.getItalian: function(word){
    return italian[word];
  }

  return Translation;

}(Translation);



