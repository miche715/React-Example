import React from "react";

const students = [
    {
        id: 1, 
        name: "학생 1", 
    }, 
    {
        id: 2, 
        name: "학생 2", 
    }, 
    {
        id: 3, 
        name: "학생 3", 
    }, 
    {
        id: 4, 
        name: "학생 4", 
    }, 
];

function AttendanceBook(props)
{
    return (
        <ul>
            {students.map((student) => {
                return <li key={`student-${student.id}`}>{student.name}</li>;
            })}
        </ul>
    );
}
export default AttendanceBook;