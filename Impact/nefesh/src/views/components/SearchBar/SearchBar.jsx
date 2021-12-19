import './ContactUs.css';
function SearchBar (){

return(
<div>
<div class="topnav">
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit">Submit</button>
    </form>
  </div>
</div></div>
)
}

export default SearchBar;