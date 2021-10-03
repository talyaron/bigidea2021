//for loop

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i);
    i = i + 1;
}

// n!
let n = 5;
let final = 1;

while(final > 1){
    final = final * n;
    n = n--;
}

console.log(final);