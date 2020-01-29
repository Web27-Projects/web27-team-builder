import React, {useState} from 'react';
import Form from './Components/Form';
import './App.css';
import TeamMembers from './Components/TeamMembers';


function App() {
  const [teamMember, newTeamMember] = useState([
    {
      id: 1,
      first_name: 'Miley' ,
      last_name: 'Wright' ,
      email: 'mileywright@yahoo.com',
      github: 'MileyWright'
    }, 
    {
      id: 2,
      first_name: 'Brayden' ,
      last_name: 'Chen' ,
      email: 'braydenchen@yahoo.com',
      github: 'BraydenChen'
    }
  ]);

 

  return (
    <div className="App">
      <div classNAme = 'container'>
      Hello
      <Form />
      <TeamMembers />
      </div>
    </div>
  );
}

export default App;
