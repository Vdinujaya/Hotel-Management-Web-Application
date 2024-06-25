import React, { useState, useEffect } from 'react';
import axios from 'axios';
import deleteEmployee from './DeleteEmployee';
import { Link } from 'react-router-dom';
import { message, notification } from 'antd';

const DownloadPDFButton = () => {
  const handleDownloadPDF = () => {
    axios.get('http://localhost:6655/employee/report', {
      responseType: 'blob', // Important: set responseType to 'blob' for downloading files
    })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Employee_report.pdf');
        document.body.appendChild(link);
        link.click();
      })
      .catch((err) => {
        console.error('Error downloading PDF:', err);
        alert('Error downloading PDF. Please try again later.');
      });
  };

  return (
    <button className='btn btn-outline-primary' onClick={handleDownloadPDF}>Download PDF Report</button>
  );
};

export default function ShowEmployee() {

  const [employee, setEmployee] = useState([]);

  const getEmployee = () => {
    axios.get('http://localhost:6655/employee/').then((res) => {
      console.log(res.data);
      setEmployee(res.data);
    }).catch((err) => {
      alert(err.message);
    });
  }


  useEffect(() => {
    getEmployee();
  }, []);

  const handleDelete = (employeeId) => {
    deleteEmployee(employeeId)
      .then(() => {
        notification.success({ message: 'Success', description: 'Employee deleted successfully.' });
        getEmployee();
      })
      .catch((err) => {
        alert('employee not deleted: ' + err);
      });
  };


  return (
    <div style={{marginTop:'160px'}}>
          <div className='container-fluid mt-5 py-1 px-4 shadow'>
            <h2 className='text-center mb-1'>Employee Details</h2>
            <div className='text-center mb-1'>
              <Link to={'/AE'}><button className='btn btn-outline-primary m-3'>Enter Employee</button></Link>
              <DownloadPDFButton />
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Age</th>
                  <th scope="col">Role</th>
                  <th scope="col">Address</th>
                  <th scope="col">Description</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Update</th>
                </tr>
              </thead>
              <tbody>
                {employee.map((e, index) => (
                  <tr key={index}>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.age}</td>
                    <td>{e.role}</td>
                    <td>{e.address}</td>
                    <td>{e.description}</td>
                    <td> <button type="button" class="btn btn-outline-danger" alt={`${index}`} onClick={() => handleDelete(e._id)}>Delete</button></td>
                    <td> <Link to={`/updateEM/${e._id}`}><button type="button" class="btn btn-outline-success">Update</button></Link></td>
                  </tr>
                ))}

              </tbody>
            </table>

          </div>
        </div>
  )
}