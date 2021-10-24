import './App.css';
import Szymon from './Game.jpg'
function Blog(){
  return(
    <div className="Blog">
      <header>
      Favorite Video Game of the Poor Sucker Writing This
      </header>
      <b>
        My favorite video game is Monster Hunter World. This is my favorite because I enjoy hunting massive beasts and showing them whose boss. I most enjoy obtaining their materials to make better gear and then hunt other mosnters.
      </b>
      <img src={Szymon}/>
    </div>
  )
}
export default Blog