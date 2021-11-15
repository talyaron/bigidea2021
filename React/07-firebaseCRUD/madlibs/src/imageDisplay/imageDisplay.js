import './imageDisplay.css'
import useState from 'react'
//import database



function imageDisplay(){
const [Image, setImage] = useState('');

return(
    <div className = 'imageDisplay' background ={Image}>
        <form>
            <input type = 'button' value ='New Game' ></input> 
        </form>
    </div>
)
}

export default imageDisplay;