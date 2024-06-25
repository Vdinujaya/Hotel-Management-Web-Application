import React, { useState, useEffect } from 'react';
import axios from 'axios';
import deleteCustomer from './DeleteCustomer';
import { Link } from 'react-router-dom';
import { notification } from 'antd';

const DownloadPDFButton = () => {
  const handleDownloadPDF = () => {
    axios.get('http://localhost:6655/customer/report', {
      responseType: 'blob', // Important: set responseType to 'blob' for downloading files
    })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Customer_report.pdf');
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
export default function ShowCustomer() {


  const [customer, setCustomer] = useState([]);

  const getCustomer = () => {
    axios.get('http://localhost:6655/customer/').then((res) => {
      console.log(res.data);
      setCustomer(res.data);
    }).catch((err) => {
      alert(err.message);
    });
  }


  useEffect(() => {
    getCustomer();
  }, []);

  const handleDelete = (customerId) => {
    deleteCustomer(customerId)
      .then(() => {
        notification.success({message:"Success",description:'Customer deleted successfully'});
        getCustomer();
      })
      .catch((err) => {
        alert('customer not deleted: ' + err);
      });
  };


  return (
    <div style={{marginTop:'160px'}}>
      <div className='container-fluid mt-5 px-4 py-1 shadow'>
        <h2 className='text-center mb-1'>Customer Details</h2>
        <div className='text-center mb-1'>
          <Link to={'/AC'}><button className='btn btn-outline-primary m-3'>Enter Customer</button></Link>
          <DownloadPDFButton />
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No</th>
              <th scope="col">Address</th>

              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {customer.map((c, index) => (
              <tr key={index}>
                <td>{c._id}</td>
                <td>{c.firstName}</td>
                <td>{c.lastName}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.address}</td>

                <td> <button type="button" class="btn btn-outline-danger" alt={`${index}`} onClick={() => handleDelete(c._id)}>Delete</button></td>
                <td> <Link to={`/updateCUS/${c._id}`}><button type="button" class="btn btn-outline-success">Update</button></Link></td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>
    </div>
  )
}