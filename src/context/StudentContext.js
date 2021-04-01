import {createContext } from "react"
import studentReducer from "../reducers/studentReducer"
import {useReducer } from "react"

const initialStudents = [ 
    {name:"Wahab Sessay", level:300, date:"12/12/12", indexNo:"RGN0293" },
    {name:"Enock Kwabena", level:100, date:"02/11/21", indexNo:"RGN0367" },
    {name:"James Agalga", level:200, date:"23/01/20", indexNo:"RGN0454" }
]

export const StudentContext = createContext()

function StudentContextProvider({children}) {
    const [students, dispatch] = useReducer(studentReducer, initialStudents)
    return(
        <StudentContext.Provider value={{students, dispatch}}>
            {children}
        </StudentContext.Provider>
    )
}
export default StudentContextProvider