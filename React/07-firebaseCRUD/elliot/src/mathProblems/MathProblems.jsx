import { db } from '../functions/firebase/config';
import { doc, setDoc} from 'firebase/firestore'


function MathProblems(){

  function handleSubmit(ev){
    ev.preventDefault();
    const setName= ev.target.elements.name.value;
    const hideName= ev.target.elements.name;
    const setAnswer=Number(ev.target.elements.answer.value);
    setDoc(doc(db,"answers","answer"),{answer:setAnswer,name:setName});
    hideName.style.display="none"
  }

return (
  <form onSubmit={handleSubmit}>
    <input type="text" name="name"></input>
    <input type="text" name="answer"></input>
    <input type="submit" value="Submit"></input>
  </form>
)
}

export default MathProblems;