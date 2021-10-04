const numbers = [1000,0.05,1,10]
const initial = numbers[0]
const interest=numbers[1]
const frequency=numbers[2]
const time=numbers[3]
var output=initial
for( let i=time*frequency;i>0;i--){
    output=output+output*interest/frequency;
    
}

console.log(output);
function compound(a,b,c,d){
    let timevar=d*c;
    while (timevar>0){
        a=a+a*(b/c);
        timevar--;
    }
    return a
}
console.log(compound(initial,interest,frequency,time));
