import { Link } from "react-router-dom";
import './Fortune.css';
const Cootie = () => {
    return (
    <div>
        <h1>Find your REAL fortune</h1>
        <h2>Cats or Dogs?</h2>;

        <Link to='/blogs' > Dogs </Link>
        <Link to='/contact' > Cats </Link>
    </div>)
  };
  
  export default Cootie;