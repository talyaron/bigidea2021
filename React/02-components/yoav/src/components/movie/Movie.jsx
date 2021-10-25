import './Movie.css'
import carsMovie from '../../pictures/carsMovie.jpg'

function Movie(){
    return(
    <div className='movie'>
        <img src={carsMovie} alt='bla' />
        Cars 1
        </div>

    )
}

export default Movie;