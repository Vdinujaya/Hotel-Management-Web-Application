import { notification } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UpdateEvent = () => {

    const { id } = useParams();
    const [values, setValues] = useState({
        _id: id,
        title: '',
        description: '',
        startDateTime: '',
        endDateTime: '',
        location: '',
        organizer: '',
        capacity: '',
        price: ''
    });


    useEffect(() => {
      axios.get(`http://localhost:6655/event/get/${id}`)
          .then((res)=>{
            setValues(res.data.event);
            console.log(res.data);
          })
          .catch(err => {
              console.log(err);
              notification.error({ message: 'Error', description: 'Failed to fetch inventory data.' });
          });
  }, [id]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.title || !values.description || !values.startDateTime || !values.endDateTime || !values.location || !values.organizer || !values.capacity) {
          notification.error({ message: 'Error', description: 'Please fill in all required fields except Price.' });
          return;
      }
      if (new Date(values.endDateTime) < new Date(values.startDateTime)) {
        notification.error({ message: 'Error', description: 'End date cannot be before start date.' });
        return;
      }
        axios.put(`http://localhost:6655/event/update/${id}`, values)
            .then(() => {
                notification.success({ message: 'Success', description: 'Event updated successfully.' });
                navigate('/SEE');
            })
            .catch(err => {
                console.log(err);
                notification.error({ message: 'Error', description: 'Failed to update event.' });
            });
    };



  return (
    <div style={{marginTop:'160px'}}>
          <div className='container mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h2 className='text-center m-3'>Update Event</h2>
            <form class="row g-3" onSubmit={handleSubmit} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <div class="col-md-8">
                <label for="firstName" class="form-label">Title</label>
                <input type="text" class="form-control" id="txttitle" value={values.title} onChange={e => setValues({ ...values, title: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Description</label>
                <textarea type="text" class="form-control" id="txtDescription" value={values.description} onChange={e => setValues({ ...values, description: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputEmail4" class="form-label">Starting Date</label>
                <input type="date" class="form-control" id="txtstartDateTime" value={values.startDateTime} onChange={e => setValues({ ...values, startDateTime: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputPassword4" class="form-label">Ending Date</label>
                <input type="date" class="form-control" id="txtEndDateTime" value={values.endDateTime} onChange={(e) => {
                            const selectedCheckOutDate = new Date(e.target.value);
                            const selectedCheckInDate = new Date(values.startDateTime);
                            if (selectedCheckOutDate < selectedCheckInDate) {
                                // If selected check-out date is before check-in date, reset to check-in date
                                notification.error({ message: 'Error', description: 'Ending date cannot be before Starting date.' });
                                setValues({ ...values, endDateTime: values.startDateTime });
                            } else {
                                // Update check-out date state
                                setValues({ ...values, endDateTime: e.target.value });
                            }
                        }}/>
              </div>
              <div class="col-md-8">
                <label for="inputAddress" class="form-label">Location</label>
                <input type="text" class="form-control" id="txtLocation" value={values.location} onChange={e => setValues({ ...values, location: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputAddress2" class="form-label">Organizer</label>
                <input type="text" class="form-control" id="txtOrganizer" value={values.organizer} onChange={e => setValues({ ...values, organizer: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputAddress2" class="form-label">Capacity</label>
                <input type="text" class="form-control" id="txtCapacity" value={values.capacity} onChange={e => setValues({ ...values, capacity: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputAddress2" class="form-label">Price</label>
                <input type="text" class="form-control" id="txtPrice" value={values.price} onChange={e => setValues({ ...values, price: e.target.value })}/>
              </div>
              <div class="col-12">
                <button type="submit" className="btn btn-primary mb-3" id="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default UpdateEvent