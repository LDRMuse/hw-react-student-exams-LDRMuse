import React, { useState } from 'react'
import { Table } from './Table'
import { Form } from './Form'



export const StudentExams = () => {

const [students, setStudents] = useState([])



const handleAddStudent = (e) => {
  e.preventDefault()

  const newStudent = {
    firstName: e.target.elements[0].value,
    lastName: e.target.elements[1].value,
    score: e.target.elements[2].value,
  }

  setStudents(() => students.concat(newStudent))
  console.log(newStudent)
}

  return (
    <main>
      <h1>Student Exams</h1>
      <Table students={students}/>
      <Form handler={handleAddStudent}/>
    </main>
  )
}
