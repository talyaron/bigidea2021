import "./articlePage.css";
import {  useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import { db } from '../../../functions/firebase/config';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { doc } from 'firebase/firestore';


function ArticlePage(){
    const {id} = useParams();
    let eventRef = doc(db, 'events', id);
    console.log(eventRef);
    console.log(id + "hello?");
    //console.log("can print here");
    useEffect(() => {
        const unsubscribe = onSnapshot(eventRef, (eventDB) => {
          console.log(eventDB.data())
        });
        return () => {
          unsubscribe();
        }
      }, [])



    return (
        <div>HELLO {id}</div> 
    );
}

export default ArticlePage;