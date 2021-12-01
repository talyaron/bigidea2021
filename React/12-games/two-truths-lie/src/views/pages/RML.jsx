import { db } from './functions/firebase/config';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'

function setUserInfo() {

    function handleSubmit(ev) {

        ev.preventDefault();
        const setName= ev.target.elements.userName.value;
        const setPic= ev.target.elements.userPicture.value;
        console.log(ev.target.elements.userName.value)
        console.log(ev.target.elements.userPicture.value)
        const user = {name:setName, image:setPic};
        db.ref('/person').push(person);
        
      
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Input Name Here' name="userName" />
            <input type="text" placeholder='Input Photo Here' name="userPicture" />
            <input type="submit" value="Submit" />
        </form>
    );
}



export default setUserInfo;