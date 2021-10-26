import './SloopyCard.css'
import Sloopy from './sloopy.JPG'

function SloopyCardFun(){
    return(
        <div className= 'cont'>
            <card>
                <img src={Sloopy} alt="" />
                <h3>
                    Pros;
                </h3>
                <p>
                    - Is cute AF <br/>
                    - Best dog ever<br/>
                    - exists <br/>
                </p>
                <h3>
                    Cons:
                </h3>
                <p>
                    - Doesn't understand the consept of fetch 
                </p>
            </card>

        </div>
    )
}

export default SloopyCardFun;