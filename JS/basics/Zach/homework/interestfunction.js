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
function compound(initial,interest,frequency,time){
    let timeVar=time;
    
    while (frequency*timeVar>0){
        initial= initial* interest*(frequency/time);
        timeVar--;
    }
    return initial;b

}
console.log(compound(initial,interest,frequency,time))