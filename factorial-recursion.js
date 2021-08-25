// factorial suppose: 6! = 6*5*4*3*2*1
let fact = 1;
for(let i=6; i>=1; i--){
    fact = fact * i;
}
console.log(fact);

// factorial suppose: 6! = 6*5*4*3*2*1 using  recursion
function factorial(i){
    if(i==1){
        return 1;
    }
    return factorial(i-1) *i;
}
console.log(factorial(6));