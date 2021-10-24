function hello(name){
    console.log("hello ", name)
}
hello("Liam")

const add = (a,b) => {
    return a + b;
}

//let arr = [1,2,3,4,5,6,7,8,'b'];

//const cb = element => {
   //console.log(add(2,element));
//}
//arr.forEach(cb)

let namesli = ["liam","bob","bill","jill", "tom","joe","moe","yoav"];
let num = namesli.length;
let namesli2 = [];
for (let index = 0; index < 4; index++) {
    randnum = Math.floor(Math.random() * num);
    namesli2.push(namesli[randnum]);
    namesli.splice(randnum);
    num = num - 1;
}
console.log(namesli2);


//let names = (element) => {
  //  console.log("hello", element);
//}

//namesli.forEach(names);