var Translation = function(Translation){
  var italian = {
  "merry": "Buon",
  "christmas": "Natale",
  "and": "e",
  "happy": "Felice",
  "year": "Anno",
  "new": "Nuovo",
  "hello": "Ciao",
  "goodbye": "Arrivederci",
  "shit": "Merda",
  "damn": "Cavolo!",
  ["thank you"]: "Grazie",
  "blessings": "Benedizione"
  }
  
  Translation.getItalian = function(word){
    return italian[word];
  }

  return Translation;

}(Translation);



