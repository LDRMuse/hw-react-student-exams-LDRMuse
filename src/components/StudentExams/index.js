import React, {setState} from 'react'
import { Table } from './Table'
import { Form } from './Form'

export const StudentExams = () => {
const [student, setStudent] = setState([{
  'firstName': '',
  'lastName': '',
  'score': 0,
}])






const handleAddStudent = (e) => {
  e.preventDefault()

  const newStudent = {
    student: e.target.elements[0].value,
  }
  setStudent(() => student.concat(newStudent))
}

  return (
    <main>
      <h1>Student Exams</h1>
      <Table student={student}/>
      <Form handler={handleAddStudent}/>
    </main>
  )
}
