import './WillCard.css'
import Will from './will.JPG'

function WillCardFun(){
    return(
        <div className= 'cont'>
            <card>
                <img src={Will} alt="" />
                <h3>
                    Pros;
                </h3>
                <p>
                    - Swims fast <br/>
                    - Wicked smart<br/>
                    - Bro since third grade <br/>
                </p>
                <h3>
                    Cons:
                </h3>
                <p>
                    - Is pain in my asshole's
                </p>
            </card>

        </div>
    )
}

export default WillCardFun;