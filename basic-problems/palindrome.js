function palindrome(str){
    let rev = '';

    for(i = str.length-1; i>=0; i--){
        rev += str[i];
    }
        if(rev === str){
            return true;
        }
        else{
            return false;
            
    }
}
console.log(palindrome("hello"));



// function palindrome(str) {
//     let rev = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//         rev += str[i];
//     }

//     if (rev === str) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(palindrome("racecar"));  // true