import React from 'react'
import { useContext} from "react"
import {StudentContext } from "../context/StudentContext"

function Students() {

    const {students, dispatch}= useContext(StudentContext)
    return (
        <div>
        {
            students.map((student) => (
                <div className="maame">
                    <h2>{student.name}</h2>
                    <h2>{student.level}</h2>
                    <h3>{student.date}</h3>
                    <h2>{student.indexNo}</h2>
                    <button className="bat" onClick={() => dispatch({type:"DELETE", indexNo: student.indexNo})}>X</button>
                </div>
            ))
        }
        </div>
    )
}

export default Students
