import './LinkHeader.css';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

let lButton = false;
let eButton, gButton = true; 
let currentPageText = "Login";

function LinkHeader(props){
    const navigate = useNavigate();
    let currentPage = props.page;
    //Activates, might work
    useEffect(() => {
        setVisibleLinks(currentPage);
    }, []);

    function setVisibleLinks(currentPage){
        console.log(currentPage);
        if(currentPage === 'enter'){
            lButton = false;
            eButton = true;
            gButton = false; 
        } else if (currentPage === 'guess'){
            lButton = false;
            eButton = false;
            gButton = true; 
        } else if (currentPage === 'login'){
            lButton = true;
            eButton = false;
            gButton = false;
        } else {
            alert("error is found");
        }
    }   

    //Works
    function sendToPage(ev){
        console.log(ev.target.id);
        if(ev.target.id === 'enter'){
            navigate('/EnterQ');
            setVisibleLinks('enter');
            currentPageText = 'Enter';
        } else if(ev.target.id === 'guess'){
            navigate('/GuessQ');
            setVisibleLinks('guess');
            currentPageText = 'Guess';
        } else if(ev.target.id === 'login'){
            navigate('/Login');
            setVisibleLinks('login');
            currentPageText = 'Login';
        } else {
            alert('error found');
        }
    }

    return(
        <div className='linkHeader'>
            <input type='button' className='pageButton enter' id = 'enter' value = "Add A Question" disabled = {eButton} onClick={sendToPage}/>
            <input type='button' className='pageButton guess' id = 'guess' value = "Play A Round" disabled = {gButton} onClick={sendToPage}/>
            <input type='button' className='pageButton login' id = 'login' value = "Login Page" disabled = {lButton} onClick={sendToPage}/>
            <header className = 'title'>Two Truths and One Lie</header>
            <header className = 'currentPage'>{currentPageText}</header>
        </div>
    );

}

export default LinkHeader;