import "./DataFilters.css";
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
const [tags, setTags] = useState([]);

useEffect(() => {
    const q= query(collection(db, "events"));
    const unsubscribe= onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc)=> {
            const ev
        })
    }
    )
}
)

  
  function revealFilters() {
   console.log('reveal')
    setHidden(true);
    
  }
return(
<div>
    <button onClick={revealFilters} name="hi">
        Click here to apply filters
      </button>
      {hidden ? (
        <div>
          Filters:
          <input
            className="checkbox"
            type="checkbox"
            name="dinner"
            onClick={getTarget}
          />
          Dinner
          <input
            className="checkbox"
            type="checkbox"
            name="60+"
            onClick={getTarget}
          />
          60+
          <input
            className="checkbox"
            type="checkbox"
            name="party"
            onClick={getTarget}
          />
          Party
          <input
            className="submitbutton"
            type="submit"
            name="submit1"
            onClick={getEvents}
          />
        </div>
      ) : null}
      </div>
)

}

export default CheckBoxes