//objects & functions

let x = {a:3, b:56, c:function(){
    return this.a + this.b     
}}

console.log(x.c());

let z = 'bam';


//basically an if else
switch(z){
    case 'bam':
        console.log('This was a bam');
        break;
    case 'boom':
        console.log('This was a boom');
        break;
        default:
            console.log('couldnt find a case');
}