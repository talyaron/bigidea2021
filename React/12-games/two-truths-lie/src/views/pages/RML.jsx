//import { db } from ;
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'

function setUserInfo() {

    function handleSubmit(ev) {

        ev.preventDefault();
        const setName= ev.target.elements.userName.value;
        const setPic= ev.target.elements.userPicture.value;
        console.log(ev.target.elements.userName.value)
        console.log(ev.target.elements.userPicture.value)
        
      
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Input Name Here' name="userName" />
            <input type="text" placeholder='Input Photo Here' name="userPicture" />
            <input type="submit" value="Submit" />
        </form>
    );
}


class User: NSObject {
    var name: String
    var email: String?

    static var sharedInstance: User!

    init(name: String, email: String) {
         self.name = name
         self.email = email
    }

}

export default setUserInfo;