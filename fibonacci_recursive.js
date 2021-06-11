function fibonacci(n){
    if( n == 0){
        return 0;
    }
    if( n == 1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}
const result = fibonacci(12);
console.log(result);

//Create fibonacci series
function fibonacciCreate(n){
    if( n == 0){
        return 0;
    }
    if( n == 1){
        return [0, 1];
    }
    else{
        var fibo = fibonacciCreate(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}
const result2 = fibonacciCreate(10);
console.log(result2);