import React, { setState } from 'react'
import { Table } from './Table'
import { Form } from './Form'

export const StudentExams = () => {

const [students, setStudents] = setState([])



const handleAddStudent = (e) => {
  e.preventDefault()

  const newStudent = {
    student: e.target.elements[0].value,
  }
  setStudents(() => students.concat(newStudent))
}

  return (
    <main>
      <h1>Student Exams</h1>
      <Table students={students}/>
      <Form handler={handleAddStudent}/>
    </main>
  )
}
