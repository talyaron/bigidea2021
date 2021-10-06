let namelist= ['Jaime','Robby','Elliot','Tal','Eytan','ALex','Max','Szymon','Yoav','Samuel','Michael','Becky']

const shuffled = namelist.sort((a, b) => 0.5 - Math.random());
let length=namelist.length-1;

for (let i=0; i<=length/2;i++){
    console.log(shuffled[i])
}
