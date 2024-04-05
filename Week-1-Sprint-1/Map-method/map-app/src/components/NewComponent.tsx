import React from "react";


type NewComponentType = {
  students: Array<StudentType>
  //students: StudentType[] //You can name array type like that too    
}

type StudentType = {
id: number
name: string
age: number
}


type TopCarType = {
  manufacturer?: string
  model?: string
 // index: number
}
export const NewComponent = (props:NewComponentType) => {
  
  const topCars: Array<TopCarType> = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
  ]
  


  return (
    <>
    
    
      <table>
        {topCars.map((car )=>{
          return<tr>
           <td> {car.manufacturer}</td>
           <td> {car.model}</td>
          </tr>
        })}
      </table>
    

    <ul>
      {props.students.map((objectFromStudentArray: StudentType)=>{
        
        return (
          <li key={objectFromStudentArray.id}>
          <span>{objectFromStudentArray.name}</span>
          <span> age:{objectFromStudentArray.age}</span></li>
        )

        
        
      })}
    </ul>
    </>
  );

};