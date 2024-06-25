import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import deleteContact from './DeleteContact'
import { notification } from 'antd';

const ShowContact = () => {


    const [contact, setContact] = useState([]);

  const getContact = () => {
    axios.get('http://localhost:6655/contact/').then((res) => {
      console.log(res.data);
      setContact(res.data);
    }).catch((err) => {
      alert(err.message);
    });
  }


  useEffect(() => {
    getContact();
  }, []);

  const handleDelete = (contactId) => {
    deleteContact(contactId)
      .then(() => {
        notification.success({message:"Success",description:'Message deleted successfully'});
        getContact();
      })
      .catch((err) => {
        alert('Contact not deleted: ' + err);
      });
  };

  return (
    <div style={{marginTop:'160px'}}>
      <div className='container-fluid mt-5 px-4 py-1 shadow'>
        <h2 className='text-center mb-5'>Messages</h2>
        <div className='text-center mb-1'>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Customer Name</th>
              <th scope="col">Customer Email</th>
              <th scope="col">Subject</th>
              <th scope="col">Message</th>

              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((c, index) => (
              <tr key={index}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.subject}</td>
                <td>{c.message}</td>

                <td> <button type="button" class="btn btn-outline-danger" alt={`${index}`} onClick={() => handleDelete(c._id)}>Delete</button></td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>
    </div>
  )
}

export default ShowContact