import './LinkHeader.css';
import {useHistory} from 'react-router-dom';

function LinkHeader(props){
    const history = useHistory;
    let buttonL = 'visible' 
    let buttonE = 'visible' 
    let buttonG = 'visible' 
    let currentPage = props.page;

    if(currentPage === 'EnterQuestion'){
        buttonE = 'hidden'; 
    } else if (currentPage === 'GuessQuestion'){
        buttonG = 'hidden'; 
    } else {
        buttonE = 'hidden';
        buttonG = 'hidden';
    }

    function sendToPage(ev){
        if(ev.placeholder.name === 'EnterQuestion'){
            history.push('/EnterQ');
        } else if(ev.placeholder.name === 'GuessQuestion'){
            history.push('/GuessQ');
        } else {
            history.push('/');
        }
    }

    return(
        <div className='linkHeader'>
            <input type='button' className='pageButton enter' visibility = {buttonE} name = 'EnterQuestion' placeholder = "Add A Question" onClick={sendToPage()}/>
            <input type='button' className='pageButton guess' visibility = {buttonG} name = 'GuessQuestion' placeholder = "Play A Round" onClick={sendToPage()}/>
            <input type='button' className='pageButton login' visibility = {buttonL} name = 'Login' placeholder = "Login Page" onClick={sendToPage()}/>
        </div>
    );

}

export default LinkHeader;