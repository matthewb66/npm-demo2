exports.isPrime = function(number){
    for(var i = 2; i < number/2; i++) {
        if(number % i === 0) {
            return true;
        }
    }
    return number > 1;
}
