import './friendInfo.css';

function friendInfo(props) {
    return (
        <div className = 'friendInfo'>
            Description: {props.info}
        </div>
    )

}

export default friendInfo;