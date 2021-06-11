// 10! = 1*2*3*4*5*6*7*8*9*10
//  0! = 1
//

function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
console.log(factorial(5));
