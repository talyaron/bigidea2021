import './TernaryOperator.css';

function TernaryOperator(props) {
    const isGood = props.isGood;

    return (
        <div className={isGood?"green box":"red box"}>
            TernaryOperator
        </div>
    )
}

export default TernaryOperator;