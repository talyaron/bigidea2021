import { useState, useEffect } from 'react';
import './App.css';

//components
import Group from './components/group/Group';
import Team from './components/team/Team';

import { startGroup, randomGroups } from './healpers/helpers'



function App() {

  const [startGroupObj, setStartGroupObj] = useState([])

  useEffect(() => {
    setStartGroupObj(startGroup.map(member => { return { member, active: true } }));
    console.log(startGroupObj)
  }, [])

  console.log(startGroupObj);
  return (
    <div className="App">
      <Team startGroup={startGroupObj} setStartGroupObj={setStartGroupObj} />
      <Group />
    </div>
  );
}

export default App;
