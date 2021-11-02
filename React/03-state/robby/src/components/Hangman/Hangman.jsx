import './Hangman.css'




let word= [];
let dashes= []
function Hangman(){

    function postHandleSubmit(ev){
        ev.target.display.style= "block";
    }
    function handleSubmit(ev){
        ev.preventDefault();
        let guessword= ev.target.elements.hidden.value;
        let wordarr =guessword.split("");
        console.log(wordarr);
        ev.target.style.display = "none"
        for(let i=0; i<wordarr.length; i++){
            word.push(wordarr[i]);
            dashes[i]= "_"
        }
        console.log(word)
        console.log(dashes)

        postHandleSubmit();
        /*for full hangman make for loop that goes through each letter and if its equal replace the dash in
         word2 arr to the real letter */
    }
    return( 
        <div className="hangman">
            <form onSubmit={handleSubmit}>
                <input type= "password" name= "hidden" />
                <input type= "submit" value="Skadoosh" />
                <input type= "text" name= "guess" />
  
            </form>
       
            <div className="wrapper"></div>
            <p></p>
            {
            dashes.map((letter, index) => {
                return(<p key={index}>"{letter}"</p>)
            })
        }
        </div>

    )

}

export default Hangman;