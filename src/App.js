import { useState } from 'react';
import './App.css';

function App() {
const [acceptCount, setAcceptCount] = useState(0)

  const studentsData=[
    {
      name:"Kishore",
      batch:"B47WD",
      education:"FSD",
    },
    {
      name:"Karthick",
      batch:"F45",
      education:"FE",
    },
    {
      name:"Abi",
      batch:"B45",
      education:"B.E",
    }
  ]
  return (
    <div className="App">
      <div>
        <h1>Accepted Students :{acceptCount}</h1>
      </div>

      <div className='student-name'>
        {studentsData.map((stud,idx)=>(
          <StudentCard
          key={idx}
          name={stud.name}
          batch={stud.batch}
          education={stud.education}
          acceptCount={acceptCount}
          setAcceptCount={setAcceptCount}
          />

        )
        )}
      </div>
      
      
    </div>
  );
}

export default App;

function StudentCard({name,batch,education,acceptCount,setAcceptCount}){

  const[show, setShow] = useState(true)
  
  function handleAccept(){
    setShow(!show)
    setAcceptCount(acceptCount+1)
  }
  function handleReject(){
    setShow(!show)
    setAcceptCount(acceptCount -1)
  }

  return(
  <div id='student' className='student-name'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_J4IeylQzW8W_6kSUF9c7seuRg757hfjyhejz6QFv&s'alt='name/'></img>
    <h3> {name}</h3>
    <p> {batch}</p>
    <p>{education}</p>
    {
      show ? <button className='accept-btn btn'onClick={handleAccept}>Accept</button>
    :
    <button className='reject-btn btn'onClick={handleAccept}>Reject</button>
}

  </div>
  )
}
// function Greeting2(){
//   return(
//     React.createElement('div',{id:"Welcome"},
//     React.createElement('h1',{}, 'Hi'))
//     )
// }
