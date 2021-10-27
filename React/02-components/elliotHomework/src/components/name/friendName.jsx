import './friendName.css';

function friendName(props) {
    return (
        <div className = 'friendName'>
            Name: {props.name}
        </div>
    )

}

export default friendName;