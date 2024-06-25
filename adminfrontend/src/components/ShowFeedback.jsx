import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import deleteFeedback from './DeleteFeedback'
import { notification, Modal, Form, Input, Button } from 'antd';

const ShowFeedback = () => {

  const [feedback, setFeedback] = useState([]);

  const getFeedback = () => {
    axios.get('http://localhost:6655/feedback/').then((res) => {
      console.log(res.data);
      setFeedback(res.data);
    }).catch((err) => {
      alert(err.message);
    });
  }


  useEffect(() => {
    getFeedback();
  }, []);

  const handleDelete = (feedbackId) => {
    deleteFeedback(feedbackId)
      .then(() => {
        notification.success({ message: 'Success', description: 'Feedback deleted successfully.' });
        getFeedback();
      })
      .catch((err) => {
        alert('Feedback not deleted: ' + err);
      });
  };


  return (
    <div style={{ marginTop: '160px' }}>
      <div className='container-fluid mt-5 px-4 py-1 shadow'>
        <h2 className='text-center mb-5'>Feedback Details</h2>
        <div className='text-center mb-1'>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Customer Name</th>
              <th scope="col">Feedback</th>
              <th scope="col">Reply</th>

              <th scope="col">Delete</th>
              <th scope="col">Reply</th>
            </tr>
          </thead>
          <tbody>
            {feedback.map((c, index) => (
              <tr key={index}>
                <td>{c.name}</td>
                <td>{c.feedback}</td>
                <td>{c.reply}</td>

                <td> <button type="button" class="btn btn-outline-danger" alt={`${index}`} onClick={() => handleDelete(c._id)}>Delete</button></td>
                <td> <Link to={`/updateFeedback/${c._id}`}><button type="button" class="btn btn-outline-success">Reply</button></Link></td>

              </tr>
            ))}

          </tbody>
        </table>

      </div>
    </div>
  )
}

export default ShowFeedback