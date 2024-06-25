import { notification } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UpdateBooking = () => {

    const { id } = useParams();
    const [values, setValues] = useState({
        _id: id,
        roomNo: '',
        cName: '',
        cEmail: '',
        checkIn: '',
        checkOut: '',
        sReq: '',
    });


    useEffect(() => {
        axios.get(`http://localhost:6655/booking/update/${id}`)
            .then(res => setValues({ ...values, ...res.data }))
            .catch(err => {
                console.log(err);
                notification.error({ message: 'Error', description: 'Failed to fetch booking data.' });
            });
    }, [id]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.roomNo || !values.cEmail || !values.checkIn || !values.checkOut || !values.cName) {
          notification.error({ message: 'Error', description: 'Please fill in all required fields.' });
          return; // Prevent further execution
      }
        axios.put(`http://localhost:6655/booking/update/${id}`, values)
            .then(() => {
                notification.success({ message: 'Success', description: 'Booking updated successfully.' });
                navigate('/SB');
            })
            .catch(err => {
                console.log(err);
                notification.error({ message: 'Error', description: 'Failed to update booking.' });
            });
    };

  return (
    <div style={{marginTop:'160px'}}>
          <div className='container mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h2 className='text-center m-3'>Update Booking</h2>
            <form class="row g-3" onSubmit={handleSubmit} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <div class="col-md-8">
                <label for="firstName" class="form-label">Room No</label>
                <input type="text" class="form-control" id="txtRoomNo" pattern="[0-9]*" value={values.roomNo} onChange={e => setValues({ ...values, roomNo: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Customer Name</label>
                <input type="text" class="form-control" id="txtName" value={values.cName} onChange={e => setValues({ ...values, cName: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Customer Email</label>
                <input type="email" class="form-control" id="txtEmail" value={values.cEmail} onChange={e => setValues({ ...values, cEmail: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputEmail4" class="form-label">Check In</label>
                <input type="date" class="form-control" id="txtCheckIn" value={values.checkIn} onChange={e => setValues({ ...values, checkIn: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputEmail4" class="form-label">Check Out</label>
                <input type="date" class="form-control" id="txtCheckOut" value={values.checkOut} onChange={(e) => {
                            const selectedCheckOutDate = new Date(e.target.value);
                            const selectedCheckInDate = new Date(values.checkIn);
                            if (selectedCheckOutDate < selectedCheckInDate) {
                                // If selected check-out date is before check-in date, reset to check-in date
                                notification.error({ message: 'Error', description: 'Check-out date cannot be before check-in date.' });
                                setValues({ ...values, checkOut: values.checkIn });
                            } else {
                                // Update check-out date state
                                setValues({ ...values, checkOut: e.target.value });
                            }
                        }}/>
              </div>
              <div class="col-md-8">
                <label for="inputPassword4" class="form-label">Special Request</label>
                <textarea type="text" class="form-control" id="txtRequest" value={values.sReq} onChange={e => setValues({ ...values, sReq: e.target.value })}/>
              </div>
              <div class="col-12">
                <button type="submit" className="btn btn-primary mb-3" id="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default UpdateBooking