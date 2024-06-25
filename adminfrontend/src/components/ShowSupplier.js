import React, { useState, useEffect } from 'react';
import axios from 'axios';
import deleteSupplier from './DeleteSupplier';
import { Link } from 'react-router-dom';
import { notification } from 'antd';
const DownloadPDFButton = () => {
  const handleDownloadPDF = () => {
    axios.get('http://localhost:6655/inventory/report', {
      responseType: 'blob', // Important: set responseType to 'blob' for downloading files
    })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Supplier_report.pdf');
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
export default function ShowSupplier() {

  const [supplier, setSupplier] = useState([]);

  const getSupplier = () => {
    axios.get('http://localhost:6655/supplier/').then((res) => {
      console.log(res.data);
      setSupplier(res.data);
    }).catch((err) => {
      alert(err.message);
    });
  }


  useEffect(() => {
    getSupplier();
  }, []);

  const handleDelete = (supplierId) => {
    deleteSupplier(supplierId)
      .then(() => {
        notification.success({ message: 'Success', description: 'Supplier deleted successfully.' });
        getSupplier();
      })
      .catch((err) => {
        alert('supplier not deleted: ' + err);
      });
  };


  return (
    <div style={{marginTop:'160px'}}>
          <div className='container-fluid mt-5 py-1 px-4 shadow'>
            <h2 className='text-center mb-1'>Supplier Details</h2>
            <div className='text-center mb-1'>
              <Link to={'/AS'}><button className='btn btn-outline-primary m-3'>Enter Supplier</button></Link>
              <DownloadPDFButton />
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Contract</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact No</th>
                  <th scope="col">Address</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Update</th>
                </tr>
              </thead>
              <tbody>
                {supplier.map((s, index) => (
                  <tr key={index}>
                    <td>{s.name}</td>
                    <td>{s.contactPerson}</td>
                    <td>{s.email}</td>
                    <td>{s.contactNo}</td>
                    <td>{s.address}</td>
                    <td> <button type="button" class="btn btn-outline-danger" alt={`${index}`} onClick={() => handleDelete(s._id)}>Delete</button></td>
                    <td> <Link to={`/updateSupplier/${s._id}`}><button type="button" class="btn btn-outline-success">Update</button></Link></td>
                  </tr>
                ))}

              </tbody>
            </table>

          </div>
        </div>
  )
}