//objects
//debugger
let x={a:3, b:"56", c:function()
    {return this.a * this.b
}}
console.log(x.c())

let z="bam"

switch(z){
    case "bam":
        console.log("this was a bam");
            break;
    case "boom":
        console.log("this was a boom");
            break;
        default:
            console.log("coudn't find case")
}