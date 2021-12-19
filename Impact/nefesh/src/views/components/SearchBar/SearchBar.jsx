import './SearchBar.css';

const tags = ['aaa','bbb']

function SearchBar() {
  function getTarget(ev) {
    // var input, filter, ul, li, a, i, txtValue;
    // input = ev.elements.target.
    // filter = input.value.toUpperCase();
    //  ul = document.getElementById("myUL");
    // li = ul.getElementsByTagName('li');  
    //   for (i = 0; i < li.length; i++) {
    //     a = li[i].getElementsByTagName("a")[0];
    //     txtValue = a.textContent || a.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //       li[i].style.display = "";
    //     } else {
    //       li[i].style.display = "none";
    //     }
    //   }

    console.dir(ev.target.value)
  }
  return (
    <div>
      <input type="text" list="data" onChange={getTarget} />

      <datalist id="data">
        {tags.map((item, key) =>
          <option key={key} value={item} />
        )}
      </datalist>

    </div>
  )
}

export default SearchBar;