let characterSequence = function (word){
  let  result = {};

    for (let char = 0; char < word.length; char++) {
        result = Object.assign(word[char], word.length);
    }
    return result;
}



console.log(characterSequence("semicolon.africa"));
