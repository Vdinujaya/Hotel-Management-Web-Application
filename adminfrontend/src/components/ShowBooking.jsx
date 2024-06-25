import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import deleteBooking from './DeleteBooking'
import { message, notification } from "antd";

const DownloadPDFButton = () => {
  const handleDownloadPDF = () => {
    axios.get('http://localhost:6655/booking/report', {
      responseType: 'blob', // Important: set responseType to 'blob' for downloading files
    })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Booking_report.pdf');
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

const ShowBooking = () => {


    const [booking, setBooking] = useState([]);

  const getBooking = () => {
    axios.get('http://localhost:6655/booking/').then((res) => {
      console.log(res.data);
      setBooking(res.data);
    }).catch((err) => {
      alert(err.message);
    });
  }


  useEffect(() => {
    getBooking();
  }, []);

  const handleDelete = (bookingId) => {
    deleteBooking(bookingId)
      .then(() => {
        notification.success({message:"Success",description:'Booking deleted successfully'});
        getBooking();
      })
      .catch((err) => {
        alert('Booking not deleted: ' + err);
      });
  };
  


  return (
    <div style={{marginTop:'160px'}}>
      <div className='container-fluid mt-5 px-4 py-1 shadow'>
        <h2 className='text-center mb-1'>Booking Details</h2>
        <div className='text-center mb-1'>
          <Link to={'/AB'}><button className='btn btn-outline-primary m-3'>Enter Booking</button></Link>
          <DownloadPDFButton/>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Room ID</th>
              <th scope="col">Room No</th>
              <th scope="col">Customer ID</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Customer Email</th>
              <th scope="col">Check In</th>
              <th scope="col">Check Out</th>
              <th scope="col">Special Requests</th>

              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((c, index) => (
              <tr key={index}>
                <td>{c.roomId}</td>
                <td>{c.roomNo}</td>
                <td>{c.customerId}</td>
                <td>{c.cName}</td>
                <td>{c.cEmail}</td>
                <td>{c.checkIn}</td>
                <td>{c.checkOut}</td>
                <td>{c.sReq}</td>

                <td> <button type="button" class="btn btn-outline-danger" alt={`${index}`} onClick={() => handleDelete(c._id)}>Delete</button></td>
                <td> <Link to={`/updateBooking/${c._id}`}><button type="button" class="btn btn-outline-success">Update</button></Link></td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>
    </div>
  )
}

export default ShowBooking