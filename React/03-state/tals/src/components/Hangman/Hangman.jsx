import './Hangman.css'


function Hangman() {

    function handleSubmit(ev) {
        ev.preventDefault();


    }

    return (
        <div className="hangman">
            <form onSubmit={handleSubmit}>
                <input type="password" name="" id="" />
                <input type="submit" value="Hide" />
            </form>
        </div>
    )
}
export default Hangman