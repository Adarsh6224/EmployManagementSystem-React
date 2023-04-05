
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';
import uuid from 'react-uuid';

function Add() {



  const[id,setId]=useState('');
  const[empName,setEmpname]=useState('');
  const[age,setAge]=useState('');
  const[designation,setDesignation]=useState('');
  const[salary,setSalary]=useState(0);


 
  const history=useNavigate()
  const handleAdd=(e)=>{
    e.preventDefault();

    let ids=uuid();

    let uniqueId=ids.slice(0,8)



    

    Employee.push({
      id: uniqueId,
      empName: empName,
      age: age,
      designation: designation,
      salary: salary
    })
    history('/')

  }

  return (
    <>
     <h1 className='text-primary text-center m-4'> Add Employee Management System</h1>
    <p className='p-5 m-4'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. </p>

    <Row>
      <Col>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDNRQ_ksBlGNPpntaNswK1MusnCa3mjk6KAU9tgPciApW6dwurOPlYgc9Pfol4VQxTYU&usqp=CAU' />
      </Col>
    </Row>
    <Col>
    <Form className='border border-3 p-5'>
      <Form.Group className="mb-3" >
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Enter ID"
        
        // value={id}
        onChange={(e)=>setId(e.target.value)}
        required
        
        />
       
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>NAME</Form.Label>
        <Form.Control type="text" placeholder="Enter your Name"
        
        // value={empName}
        onChange={(e)=>setEmpname(e.target.value)}
        required
        />
       
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>AGE</Form.Label>
        <Form.Control type="text" placeholder="Enter your Age"
        
        // value={age}
        onChange={(e)=>setAge(e.target.value)}
        required
        />
       
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>DESIGNATION</Form.Label>
        <Form.Control type="text" placeholder="Enter your Designation"
        
        // value={designation}
        onChange={(e)=>setDesignation(e.target.value)}
        required
        />
       
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>SALARY</Form.Label>
        <Form.Control type="text" placeholder="Enter your Salary" 
        
        // value={salary}
        onChange={(e)=>setSalary(e.target.value)}
        required
        />
       
      </Form.Group>

      
      <Button variant="primary" type="submit" onClick={(e)=>handleAdd(e)}>
        Add
      </Button>
    </Form>
    </Col>

    </>
  )
}

export default Add