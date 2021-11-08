import { Link } from 'react-router-dom';
import Watching from '../images/watching.jpg';
import Playing from '../images/football.jpg';
import Images from '../components/Images';

const Blogs = () => {
    return  <div>
    <h1>Do you prefer watching or playing sports?</h1>
    <div className="Parent">
      <Images source={Watching} next='/Contact.js' name="Watching" />
      <Images source={Playing} next='/Blogs.js' name="Playing"/>
    </div>
    </div>;
  };
  
  export default Blogs;