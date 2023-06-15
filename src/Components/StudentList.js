import Base from "../BasePage/Base"
import StudentCard from "./StudentCard"

function StudentList({studentData,setData}){
    return (
        <Base>
            {studentData.map((stud, idx)=>(
                <StudentCard
                student={stud}
                key={stud.id}
                setData={setData}
                studentData={studentData}
                />
            ))}
        </Base>
    )
}
export default StudentList