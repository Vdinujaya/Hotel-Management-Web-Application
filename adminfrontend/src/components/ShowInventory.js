import React, { useState, useEffect } from 'react';
import axios from 'axios';
import deleteInventory from './DeleteInventory';
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
        link.setAttribute('download', 'Inventory_report.pdf');
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
export default function ShowInventory() {

  const [inventory, setInventory] = useState([]);

  const getInventory = () => {
    axios.get('http://localhost:6655/inventory/').then((res) => {
      console.log(res.data);
      setInventory(res.data);
    }).catch((err) => {
      alert(err.message);
    });
  }


  useEffect(() => {
    getInventory();
  }, []);

  const handleDelete = (inventoryId) => {
    deleteInventory(inventoryId)
      .then(() => {
        notification.success({ message: 'Success', description: 'Inventory deleted successfully.' });
        getInventory();
      })
      .catch((err) => {
        alert('inventory not deleted: ' + err);
      });
  };


  return (
    <div style={{marginTop:'160px'}}>
          <div className='container-fluid mt-5 py-1 px-4 shadow'>
            <h2 className='text-center mb-1'>Inventory Details</h2>
            <div className='text-center mb-1'>
              <Link to={'/AI'}><button className='btn btn-outline-primary m-3'>Enter Inventory</button></Link>
              <DownloadPDFButton />
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ItemName</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Description</th>
                  <th scope="col">Supplier</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Update</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((i, index) => (
                  <tr key={index}>
                    <td>{i.itemName}</td>
                    <td>{i.Quantity}</td>
                    <td>{i.price}</td>
                    <td>{i.description}</td>
                    <td>{i.Supplier}</td>
                    <td> <button type="button" class="btn btn-outline-danger" alt={`${index}`} onClick={() => handleDelete(i._id)}>Delete</button></td>
                    <td> <Link to={`/updateInventory/${i._id}`}><button type="button" class="btn btn-outline-success">Update</button></Link></td>
                  </tr>
                ))}

              </tbody>
            </table>

          </div>
        </div>
  )
}