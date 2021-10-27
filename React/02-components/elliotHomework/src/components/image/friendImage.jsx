import './friendImage.css';

function friendImage(props) {
    return (
        <div className = 'friendImage'>
            <img src = {props.image} alt = 'avg' />
        </div>
    )

}

export default friendImage;