//callback
let names = ['Michael', 'Simon', 'Elliot', 'Liam', 'Zach', 'Jaime']

const shuffled = names.sort((a, b) => 0.5 - Math.random());
let length=names.length-1;

for (let i=0; i<=length/2;i++){
    console.log(shuffled[i])
}