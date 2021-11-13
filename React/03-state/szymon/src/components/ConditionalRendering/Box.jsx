import './Box.css';
import dragon1 from './dragon1.jpg'
import dragon2 from './Dragon2.jpg'

function Box(props){

    const isOne=props.isOne

    if(isOne){
        return(
            <div>
                <img src={dragon1} alt="dragon1" />
            </div>
        )
        }else{
            return(
                <div>
                    <img src={dragon2} alt="dragon2" />
                </div>
            )
        }
}

export default Box