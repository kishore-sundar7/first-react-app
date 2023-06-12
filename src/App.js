
import './App.css';
import React, { useState } from 'react';
import TopBar from './Components/TopBar';
import Base from './BasePage/Base';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';


function App() {


const studentData = [
  {
  name : "sanjay",
  age : 25
  },
  {
    name : "ajay",
    age : 23
    }
]
const [data, setData] = useState(studentData)
  return (
<div className="App">
  <Dashboard
   data ={data}
   setData ={setData}
  />
</div>
  ); 
}


export default App;




