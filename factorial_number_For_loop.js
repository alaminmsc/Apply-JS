// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
//For loop
var factorial = 1;
for (var i = 1; i <= 5; i++) {
    factorial = factorial * i;
    console.log(factorial);
}

//While loop
var factorial = 1;
var i = 1;
while (i <= 5) {
    factorial = factorial * i;
    i++;
    console.log(factorial);
}
