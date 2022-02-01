import "../DataFilters/DataFilters.css";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "../../../scripts/firebase/config";
import {
  collection,
  doc,
  orderBy,
  query,
  onSnapshot,
  getDocs,
  where,
  getFirestore,
} from "firebase/firestore";

function CheckBoxes(){
const [hidden, setHidden] = useState(false);
const tags = ["dinner", "60+", "party", "fun", "outdoors"];

// useEffect(() => {
//     const q= query(collection(db, "events"));
//     const unsubscribe= onSnapshot(q, (querySnapshot) => {
//         querySnapshot.forEach((doc)=> {
//             const ev
//         })
//     }
//     )
// }
// )

  
  function revealFilters() {
   console.log('reveal')
    setHidden(true);
    
  }
return(
<div>
    <button onClick={revealFilters} name="hi">
        Click here to apply filters
      </button>
      {hidden? 
      <div id="tagsContainer">
      {tags.map((tag) => {
        return(
          <div>
            <p>{tag}</p>
            <input name="checkbox" type="checkbox"/>
          </div>
        )
      })}
    </div> : null}
</div>
)

}

export default CheckBoxes