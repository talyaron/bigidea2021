
import{doc, setDoc} from 'firebase/firestore'

function UserPhoto(){
    
    function handleSubmit(ev){
        ev.preventDefault()
        let userImage = ev.target.elements.imageURL.value
        console.log(userImage)

        // put into firebase
        
    }

    
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='imageURL'/>
                <input type="submit"/>

            </form>
        </div>

    )
}

export default UserPhoto