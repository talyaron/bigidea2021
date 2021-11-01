import './Hangman.css'
function Hangman(){
    function handleSubmit(ev){
        ev.preventDefault();
        let guessword= ev.target.elements.hidden.value;
        console.log(guessword);
        ev.target.style.display = "none"

    }
    return( 
        <div className="hangman">
            <form onSubmit={handleSubmit}>
                <input type= "password" name= "hidden" />
                <input type= "submit" value="Skadoosh" />
            </form>
        </div>
    )

}

export default Hangman;