import {Link} from 'react-router-dom'

const Odd = () => {
    return <div>
      <h1>Pick a Color</h1>

        <ul> 
            <li><Link to = '/R1'>Red</Link></li>
            <li><Link to = '/R2'>Green</Link></li>
            <li><Link to = '/R3'>Blue</Link></li>
            <li><Link to = '/R4'>Yellow</Link></li>

        </ul>
      
      </div>;
  };
  
  export default Odd;