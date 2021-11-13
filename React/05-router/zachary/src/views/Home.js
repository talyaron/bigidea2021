import Dog from '../images/dog.jpg'
import Cat from '../images/cat.jpg'
import Images from '../components/Images';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

const Home = () => {
    return <div>
      <h1>What's your favourite animal?</h1>
      <div className="Parent">
        <Images source={Dog} next='/Contact' name="Dog" />
        <Images source={Cat} next='/Blogs' name="Cat"/>
      </div>
      </div>;
  };
  
  export default Home;