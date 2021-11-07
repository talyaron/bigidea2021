import './Card.css'
import PropTypes from 'prop-types'

const Card = ({source,id}) =>{
    return <div className='card'>
    <img src={source} alt="Hi" />
    </div>
}
    




export default Card;