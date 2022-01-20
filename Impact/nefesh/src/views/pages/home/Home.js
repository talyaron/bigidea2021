import React from "react";
import { useEffect, useState } from "react";
import { db } from '../../../functions/firebase/config';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { isAuthorised } from "../../../functions/general";
import { useNavigate } from "react-router-dom";
import {
  Link
} from "react-router-dom";


function Home({ role }) {
  const navigate = useNavigate();
  const authorised = ["superAdmin", "orgAdmin"];
  const [events, setEvents] = useState([]);
  const eventsRef = collection(db, "events");
  let q = query(eventsRef);

  useEffect(() => {
    if (!isAuthorised(role, authorised)) {
      navigate('/401')
    }
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let list = [];

      querySnapshot.forEach((docDB) => {
          const eventTemp = docDB.data();
          eventTemp.id = docDB.id;
          list.push(eventTemp);
      });
      setEvents(list);

  }, e => {
      console.error('on use effect in MainPage:')
      console.error(e)
  });

  return () => {
      unsubscribe();
  }
  }, [])
  console.log(role)
  
  function sortMappedEvents(filter) {
    let sortingList = [];
    let sortingListTrue = [];
    //filter is automaticallu for newest
    events.forEach((docDB) => {
        console.log(docDB.eventDate);
        sortingList.push(docDB.eventDate.seconds);
        sortingListTrue.push(docDB);
    });
  
    for (let i = 0; i < sortingList.length; i++) {
        for (let j = 0; j < sortingList.length - i; j++) {
            if (sortingList[j] < sortingList[j + 1]) {
                let temp = sortingList[j];
                let tempTrue = sortingListTrue[j];
                sortingList[j] = sortingList[j + 1];
                sortingListTrue[j] = sortingListTrue[j + 1];
                sortingList[j + 1] = temp;
                sortingListTrue[j + 1] = tempTrue;
            }
        }
    }

    console.log(sortingList);
    if (sortingListTrue === []) {
        alert("cannot make events list empty");
    } else {
        setEvents(sortingListTrue);
    }
}
  
  return(
  <div>
    {events.map(event => {
      let key=event.id;
      console.log(key);
      return (
        <div key={key}>
          <Link to={{
            pathname: '/articlePage',
            state: {key}
            }}
          >
              <h1>{key}</h1>
          </Link>
        </div>
      )  
    })
    }
  </div>
  )
}
export default Home;