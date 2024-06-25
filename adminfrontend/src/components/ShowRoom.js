import React, { useState, useEffect } from 'react';
import axios from 'axios';
import deleteRoom from './DeleteRoom';
import { Link } from 'react-router-dom';
import { notification } from 'antd';
const DownloadPDFButton = () => {
  const handleDownloadPDF = () => {
    axios.get('http://localhost:6655/room/report', {
      responseType: 'blob', // Important: set responseType to 'blob' for downloading files
    })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Room_report.pdf');
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

export default function ShowRoom() {

  const [room, setRoom] = useState([]);

  const getRoom = () => {
    axios.get('http://localhost:6655/room/').then((res) => {
      console.log(res.data);
      setRoom(res.data);
    }).catch((err) => {
      alert(err.message);
    });
  }


  useEffect(() => {
    getRoom();
  }, []);

  const handleDelete = (roomId) => {
    deleteRoom(roomId)
      .then(() => {
        notification.success({ message: 'Success', description: 'Room deleted successfully.' });
        getRoom();
      })
      .catch((err) => {
        alert('Room not deleted: ' + err);
      });
  };


  return (
    <div style={{marginTop:'160px'}}>
          <div className='container-fluid mt-5 py-1 px-4 shadow'>
            <h2 className='text-center mb-1'>Room Details</h2>
            <div className='text-center mb-1'>
              <Link to={'/AR'}><button className='btn btn-outline-primary m-3'>Enter Room</button></Link>
              <DownloadPDFButton />
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Room Number</th>
                  <th scope="col">Room Type</th>
                  <th scope="col">Bed Details</th>
                  <th scope="col">Bathrooms</th>
                  <th scope="col">Price</th>
                  <th scope="col">Capacity</th>
                  <th scope="col">Description</th>
                  <th scope="col">Image</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Update</th>
                </tr>
              </thead>
              <tbody>
                {room.map((r, index) => (
                  <tr key={index}>
                    <td>{r.roomNumber}</td>
                    <td>{r.roomType}</td>
                    <td>{r.bedDetails}</td>
                    <td>{r.bathCount}</td>
                    <td>{r.price}</td>
                    <td>{r.capacity}</td>
                    <td>{r.description}</td>                    <td style={{width:'auto',height:'30px'}}>{r.image}</td>
                    <td> <button type="button" class="btn btn-outline-danger" alt={`${index}`} onClick={() => handleDelete(r._id)}>Delete</button></td>
                    <td> <Link to={`/updateRoom/${r._id}`}><button type="button" class="btn btn-outline-success">Update</button></Link></td>
                  </tr>
                ))}

              </tbody>
            </table>

          </div>
        </div>
  )
}