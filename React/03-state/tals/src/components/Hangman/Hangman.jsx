import './Hangman.css'


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
        </div>
    )
}
export default Hangman