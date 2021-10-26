import './HanaCard.css'
import hana from './hana.png'

function HanaCardFun(){
    return(
        <div className= 'cont'>
            <card>
                <img src={hana} alt="" />
                <h3>
                    Pros;
                </h3>
                <p>
                    - Can sing better than Adele <br/>
                    - Pulls Milfs <br/>
                    - Speaks weeb <br/>
                </p>
                <h3>
                    Cons:
                </h3>
                <p>
                    - Can't drive 
                </p>
            </card>

        </div>
    )
}

export default HanaCardFun;