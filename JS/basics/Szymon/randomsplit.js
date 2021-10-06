function getRandomItem(arr){
    const randomindex=Math.floor(Math.random()*arr.length);

    const item=arr[randomindex];

    return item;
}
/*debugger*/
const array=[`Max`, `Becky`, `Sam`,`Yoav`,`Szymon`,`Eitan`,`Zach`,`Jaime`,`Robby`,`Elliot`,`Alex`, `Liam`]
const answer=[]


const result=getRandomItem(array)
console.log(result);