import { Link } from 'react-router-dom'

const Contact = () => {
  return <div>
    <h1>Which one is better?</h1>
    <div className="Parent">
      <Images source={Dog} next='/contact.js' name="Dog" />
      <Images source={Cat} next='/blogs.js' name="Cat" />
    </div>
  </div>;

};

export default Contact;