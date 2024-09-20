// function name(num){
//     for(i=2; i<num; i++){
//         if(num % i === 0){
//             return false
//         }

//     }
//     return true
// }
// console.log(name(2));


let num = 5;
let f = true;
for(i=2;i<num;i++){
    if(num % 2 === 0){
        f = false; 
    }   
}
console.log(f);
