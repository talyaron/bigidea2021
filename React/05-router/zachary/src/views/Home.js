import Dog from '../images/dog.jpg'
import Cat from '../images/cat.jpg'
import Images from '../components/Images';
const Home = () => {
    return <div>
      <h1>What's your favourite animal?</h1>
      <div className="Parent">
        <Images source={Dog} />;
        <Images source={Cat} />;
      </div>
      </div>;
  };
  
  export default Home;