import {Link} from 'react-router-dom'

const Even = () => {
    return <div>
        <h1>Colors</h1>;
        <ul> 
            <li><Link to = '/R5'>Purple</Link></li>
            <li><Link to = '/R6'>Orange</Link></li>
            <li><Link to = '/R7'>Black</Link></li>
            <li><Link to = '/R8'>Cyan</Link></li>

        </ul>
    </div>
    
  };
  
  export default Even;