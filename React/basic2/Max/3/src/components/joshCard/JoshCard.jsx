import './JoshCard.css'
import Josh from './josh.JPG'

function JoshCardFun(){
    return(
        <div className= 'cont'>
            <card>
                <img src={Josh} alt="" />
                <h3>
                    Pros:
                </h3>
                <p>
                    - State level wrestler <br/>
                    - Is in a stable relashonship <br/>
                    - Shreded<br/>
                </p>
                <h3>
                    Cons:
                </h3>
                <p>
                    - Pee's blood
                </p>
            </card>

        </div>
    )
}

export default JoshCardFun;