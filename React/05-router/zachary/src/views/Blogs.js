const Blogs = () => {
    return  <div>
    <h1>What's your favourite animal?</h1>
    <div className="Parent">
      <Images source={Dog} next='/contact.js' name="Dog" />
      <Images source={Cat} next='/blogs.js' name="Cat"/>
    </div>
    </div>;
  };
  
  export default Blogs;