/*
let j=0;
while(j<10) {
    console.log(j);
    j++;
}
*/

function factorial(n) {
    let final= 1;
    while(n > 1) {
        final = final * n;
        n--;
    }
    console.log(final);
}

factorial(5);
factorial(4);
factorial(3);