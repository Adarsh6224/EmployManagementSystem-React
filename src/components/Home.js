import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaPen, FaUserPlus, FaUserTimes } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';

function Home() {

  const history=useNavigate()
  const handleDelete=(id)=>{
    var index=Employee.map(item=>item.id).indexOf(id);
    Employee.splice(index,1)
    console.log(Employee);
    history('/')
  }

  const handleEdit=(id,empName,age,designation,salary)=>{
    localStorage.setItem("ID",id);
    localStorage.setItem("NAME",empName);
    localStorage.setItem("AGE",age);
    localStorage.setItem("DESIGNATION",designation);
    localStorage.setItem("SALARY",salary);
    
  }
  return (
    <>
    <h1 className='text-primary text-center m-4'>Employee Management System</h1>
    <p className='p-5 m-4'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. </p>

    <Link to={'/Add'}>  <Button variant='success'>Add  <FaUserPlus/></Button> </Link>
   
    <h3 className='my-5'> List of Employees</h3> 
        <Table striped bordered hover>
    <thead>
      <tr>
        <th>id</th>
        <th>Employee Name</th>
        <th>Age</th>
        <th>Designation</th>
        <th>Salary</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        Employee && Employee.length>0?
        Employee.map((item)=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.empName}</td>
                <td>{item.age}</td>
                <td>{item.designation}</td>
                <td>{item.salary}</td>
                <td>

                <Link to={'/Edit'}> <Button onClick={()=>handleEdit(item.id, item.empName, item.age, item.designation, item.salary)} variant="primary"><FaPen/></Button>{' '}<br/><br/></Link>

                 <Button onClick={()=>handleDelete(item.id)} variant="danger"><FaUserTimes/></Button>{' '}</td>
            </tr>
        )):'No Data available '
      }
      
    </tbody>
  </Table>
  </>
  )
}

export default Home