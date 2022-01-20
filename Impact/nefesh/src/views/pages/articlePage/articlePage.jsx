import "./articlePage.css";
import { useEffect, useState } from "react"
import { db } from '../../../functions/firebase/config';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';

function articlePage(props){
    let event = props;
    console.log(event + "hello?");
    //console.log("can print here");



    return (
        <div>HELLO {event}</div> 
    );
}

export default articlePage;