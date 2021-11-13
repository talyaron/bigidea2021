import {Link} from 'react-router-dom'

const Home = () => {
    return <div>
        <h1>NUMBERS</h1>
        <ul> 
            <li><Link to = '/odd'>1</Link></li>
            <li><Link to = '/even'>2</Link></li>
            <li><Link to = '/odd'>3</Link></li>
            <li><Link to = '/even'>4</Link></li>
            <li><Link to = '/odd'>5</Link></li>
            <li><Link to = '/even'>6</Link></li>
            <li><Link to = '/odd'>7</Link></li>
            <li><Link to = '/even'>8</Link></li>

        </ul>

    </div>;
  };
  
  export default Home;