// recursion 1+2+3+4+..............................................+nth number sum
function sum(i){
    if(i==1){
        return 1;
    }
    return i + sum(i-1);
}
console.log(sum(5));