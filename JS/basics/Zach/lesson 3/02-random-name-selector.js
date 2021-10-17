let namelist= ['Jaime','Robby','Elliot','Tal','Eytan','ALex','Max','Szymon','Yoav','Samuel','Michael','Becky']

const shuffled = namelist.sort((a, b) => 0.5 - Math.random());
let length=namelist.length-1;

for (let i=0; i<=length/2;i++){
    console.log(shuffled[i])
}
console.log(shuffled);

let namelist2= ['Jaime','Robby','Elliot','Tal','Eytan','ALex','Max','Szymon','Yoav','Samuel','Michael','Becky']

const shuffleArray = element => {
    for (let i = namelist2.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i +1));
      const temp = namelist2[i];
      namelist2[i] = namelist2[j];
      namelist2[j] = temp;
    }
    return(namelist2)
  }
  console.log(shuffleArray(namelist2))

  for (let i=0; i<=length/2;i++){
    console.log(shuffled[i])
}