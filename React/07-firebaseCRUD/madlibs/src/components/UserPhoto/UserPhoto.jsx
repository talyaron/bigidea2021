import {useState,useEffect} from 'react';
import {db} from '../../functions/firebase/config'
import {collection,getDocs,addDoc}from 'firebase/firestore'
import{doc, setDoc,add} from 'firebase/firestore'

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