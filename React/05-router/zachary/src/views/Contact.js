import { Link } from 'react-router-dom';
import Pizza from '../images/pizza.jpg';
import Fish from '../images/fish.jpg';
import Images from '../components/Images';
const Contact = () => {
  return <div>
    <h1>Which one is better?</h1>
    <div className="Parent">
      <Images source={Pizza} next='/contact.js' name="Pizza" />
      <Images source={Fish} next='/blogs.js' name="Fish" />
    </div>
  </div>;

};

export default Contact;