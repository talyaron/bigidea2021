import { db } from '../functions/firebase/config';
import { doc, setDoc} from 'firebase/firestore'


function MathProblems(){
    function handleSubmit(ev) {
        ev.preventDefault();
        const setName= ev.target.elements.userName.value;
        const setPic= ev.target.elements.userPicture.value;
        console.log(ev)
        console.log(ev.target.elements.userName.value)
        console.log(ev.target.elements.userPicture.value)
        setDoc(doc(db, 'users', 'me'), {name: setName, image: setPic});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Input Name Here' name="userName" />
            <input type="text" placeholder='Input Photo Here' name="userPicture" />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default MathProblems;