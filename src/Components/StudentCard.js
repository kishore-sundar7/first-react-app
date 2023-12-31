import { useNavigate } from "react-router-dom"

export default function StudentCard({student,studentData,setData}){
  const navigate=useNavigate()
    const removeStudent=(id)=>{
      let response=window.confirm("Are you sure you want to delete?")
      if(response){
      const newStudentData=studentData.filter((stud)=>stud.id !==id)
      setData(newStudentData)
      }
    }
    return (
        <div>
    <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
          <h2 className="card-title">{student.name}</h2>
           <p>Batch: {student.batch}</p>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
            <p>EDU  : {student.qualification}</p>
            <div className="card-actions justify-end">
        <button className="btn btn-danger"
        onClick={()=>removeStudent(student.id)}
        >Delete</button>

     <button className="btn btn-primary"
        onClick={()=>navigate(`/edit/${student.id}`)}
        >Edit</button>
         </div>
       </div>
       </div>
        </div>
    )
    

}
