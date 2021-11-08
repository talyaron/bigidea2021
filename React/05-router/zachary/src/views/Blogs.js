import { Link } from 'react-router-dom';
import Pizza from '../images/pizza.jpg';
import Fish from '../images/fish.jpg';
import Images from '../components/Images';

const Blogs = () => {
    return  <div>
    <h1>Do you prefer watching or playing sports?</h1>
    <div className="Parent">
      <Images source={Dog} next='/contact.js' name="Dog" />
      <Images source={Cat} next='/blogs.js' name="Cat"/>
    </div>
    </div>;
  };
  
  export default Blogs;