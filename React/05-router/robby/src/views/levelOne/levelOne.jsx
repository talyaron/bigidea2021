import { Link } from "react-router-dom";

const LevelOne = () => {
    return <div><h1>Pick a Number</h1>
    <Link to ='/levelTwoA'>1</Link><br></br>
    <Link to ='/levelTwoB'>2</Link><br></br>
    <Link to ='/levelTwoC'>3</Link><br></br>
    </div>
  };
  
  export default LevelOne;