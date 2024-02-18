let validatePassword = function(password){
    let pattern = RegExp("/^[A-Z]$/");
   return !!password.match(pattern);

}

console.log(validatePassword("P"));
