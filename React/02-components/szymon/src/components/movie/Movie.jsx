import "./Movie.jsx"
import movie from "./Movie.jpg"

function Movie(){
    return(
        <div className="movie">Spider Man Far From Home
            <img src={movie}></img>
        </div>
    )
}

export default Movie