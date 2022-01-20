import "./articlePage.css";
import {  useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import { db } from '../../../functions/firebase/config';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';

function ArticlePage(){
    const {id} = useParams();
    console.log(id + "hello?");
    //console.log("can print here");



    return (
        <div>HELLO {id}</div> 
    );
}

export default ArticlePage;