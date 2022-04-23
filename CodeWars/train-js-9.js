function padIt(str,n){
    let result = str;
    while (n > 0 ) {
        if (n%2 !== 0) {
            result = "*" + result;
        }
        if (n%2 === 0) {
            result =  result + "*"
        }
        n--;
    }
    return result;
}
