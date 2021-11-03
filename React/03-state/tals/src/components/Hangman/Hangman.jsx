import './Hangman.css';


let word = ['a', 'b', 'c', 'd', 'e', 'f']

function Hangman() {

    function handleSubmit(ev) {
        ev.preventDefault();
        console.log(ev.target.elements.word.value);


    }

    return (
        <div className="hangman">
            <form onSubmit={handleSubmit}>
                <input type="password" name="word" id="" />
                <input type="submit" value="Hide" />
            </form>
            <div className="wrapper">
            {
                word.map((letter, index) => {
                    return (<div key={index}>"{letter}",</div>)
                })
            }
            </div>

        </div>

    )
}
export default Hangman