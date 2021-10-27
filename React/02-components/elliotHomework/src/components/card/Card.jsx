import './Card.css';
import FriendImage from '../image/friendImage.jsx';
import FriendName from '../name/friendName';
import FriendInfo from '../info/friendInfo';

function Card(props) {
    return (
        <div className = 'card'>
            <FriendImage image = {props.image}/>
            <FriendName name = {props.name}/>
            <FriendInfo info = {props.info}/>
        </div>
    )

}

export default Card;