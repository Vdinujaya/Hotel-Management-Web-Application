import React, { useState, useEffect } from 'react';
import axios from 'axios';
import deleteEvent from './DeleteEvent';
import { Link } from 'react-router-dom';
import { notification } from 'antd';

const DownloadPDFButton = () => {
  const handleDownloadPDF = () => {
    axios.get('http://localhost:6655/event/report', {
      responseType: 'blob', // Important: set responseType to 'blob' for downloading files
    })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Event_report.pdf');
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
export default function ShowEvent() {

  const [event, setEvent] = useState([]);

  const getEvent = () => {
    axios.get('http://localhost:6655/event/').then((res) => {
      console.log(res.data);
      setEvent(res.data);
    }).catch((err) => {
      alert(err.message);
    });
  }


  useEffect(() => {
    getEvent();
  }, []);

  const handleDelete = (eventId) => {
    deleteEvent(eventId)
      .then(() => {
        notification.success({ message: 'Success', description: 'Event deleted successfully.' });
        getEvent();
      })
      .catch((err) => {
        alert('event not deleted: ' + err);
      });
  };


  return (
    <div style={{marginTop:'160px'}}>
          <div className='container-fluid mt-5 py-1 px-4 shadow'>
            <h2 className='text-center mb-1'>Event Details</h2>
            <div className='text-center mb-1'>
              <Link to={'/AEE'}><button className='btn btn-outline-primary m-3'>Enter Event</button></Link>
              <DownloadPDFButton />
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Starting Time</th>
                  <th scope="col">Ending Time</th>
                  <th scope="col">Location</th>
                  <th scope="col">Organizer</th>
                  <th scope="col">Capacity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Update</th>
                </tr>
              </thead>
              <tbody>
                {event.map((c, index) => (
                  <tr key={index}>
                    <td>{c.title}</td>
                    <td>{c.description}</td>
                    <td>{c.startDateTime}</td>
                    <td>{c.endDateTime}</td>
                    <td>{c.location}</td>
                    <td>{c.organizer}</td>
                    <td>{c.capacity}</td>
                    <td>{c.price}</td>
                    <td> <button type="button" class="btn btn-outline-danger" alt={`${index}`} onClick={() => handleDelete(c._id)}>Delete</button></td>
                    <td> <Link to={`/updateEvent/${c._id}`}><button type="button" class="btn btn-outline-success">Update</button></Link></td>
                  </tr>
                ))}

              </tbody>
            </table>

          </div>
        </div>
  )
}