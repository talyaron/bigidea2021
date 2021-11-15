import {useState,useEffect} from 'react';
import {db} from '../../functions/firebase/config'
import {collection,getDocs,addDoc}from 'firebase/firestore'
import{doc, setDoc} from 'firebase/firestore'

function UserPhoto(){
    
    function handleSubmit(ev){
        ev.preventDefault()
        const usersCollectionRef=collection(db, "Images");
        let userImage = ev.target.elements.imageURL.value
        console.log(userImage)
        // put into firebase
        addDoc(usersCollectionRef,{ImageUrl:userImage});
    }

    
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input> </input>
                <input type='text' name='imageURL'>URL</input>
                
                <input type="submit"/>

            </form>
        </div>

    )
}

export default UserPhoto