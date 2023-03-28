import React from 'react'

const ArrayStudent = () => {
    let studentArray = [
        {
          studentID: 1,
          studentName: "Mike",
          studentGrade: 59,
        },
        {
          studentID: 2,
          studentName: "Nald",
          studentGrade: 69,
        },
        {
          studentID: 3,
          studentName: "Keb",
          studentGrade: 79,
        },
        {
          studentID: 4,
          studentName: "Proff",
          studentGrade: 89,
        }
      ];
  return (
    <p>Student List<p></p> {studentArray.map((student)=>
        (
          <>
            <span>SudentID: {student.studentID} SudentName: {student.studentName} SudentGrade: {student.studentGrade}</span><p></p>
          </>
        )
      )}
    </p>
    
  )
}

export default ArrayStudent