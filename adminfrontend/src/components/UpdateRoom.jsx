import { notification } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UpdateRoom = () => {

    const { id } = useParams();
    const [values, setValues] = useState({
        _id: id,
        image: '',
        roomNumber: '',
        roomType: '',
        bathCount: '',
        bedDetails: '',
        price: '',
        capacity: '',
        description: '',
        isAvailable: ''
    });


    useEffect(() => {
      axios.get(`http://localhost:6655/room/get/${id}`)
          .then((res)=>{
            setValues(res.data.room);
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
        if (!values.roomNumber || !values.roomType || !values.bathCount || !values.price || !values.capacity || !values.description || !values.isAvailable) {
          notification.error({ message: 'Error', description: 'Please fill in all fields.' });
          return;
      }
        axios.put(`http://localhost:6655/room/update/${id}`, values)
            .then(() => {
                notification.success({ message: 'Success', description: 'Room updated successfully.' });
                navigate('/SR');
            })
            .catch(err => {
                console.log(err);
                notification.error({ message: 'Error', description: 'Failed to update room.' });
            });
    };


    


  return (
    <div style={{marginTop:'160px'}}>
          <div className='container mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h2 className='text-center m-3'>Update Room</h2>
            <form class="row g-3" onSubmit={handleSubmit} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <div class="col-md-8">
                <label for="firstName" class="form-label">Room No</label>
                <input type="text" class="form-control" pattern='[0-9]*' id="txtroomNumber" value={values.roomNumber} onChange={e => setValues({ ...values, roomNumber: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Room Type</label>
                <input type="text" class="form-control" id="txtroomType" value={values.roomType} onChange={e => setValues({ ...values, roomType: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Bed Details</label>
                <input type="text" class="form-control" id="txtbedDetails" value={values.bedDetails} onChange={e => setValues({ ...values, bedDetails: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Bathrooms</label>
                <input type="text" class="form-control" pattern='[0-9]*' id="txtbathCount" value={values.bathCount} onChange={e => setValues({ ...values, bathCount: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputEmail4" class="form-label">Price</label>
                <input type="text" class="form-control" pattern='[0-9]*' id="txtprice" value={values.price} onChange={e => setValues({ ...values, price: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputPassword4" class="form-label">Capacity</label>
                <input type="text" class="form-control" pattern='[0-9]*' id="txtcapacity" value={values.capacity} onChange={e => setValues({ ...values, capacity: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputAddress" class="form-label">Description</label>
                <textarea type="text" class="form-control" id="txtdescription" value={values.description} onChange={e => setValues({ ...values, description: e.target.value })}/>
              </div>
              <div class="col-md-8">
                <label for="inputAddress2" class="form-label">Is Avaliable</label>
                <select class="form-control" id="txtisAvailable" value={values.isAvailable} onChange={e => setValues({ ...values, isAvailable: e.target.value })}>
                <option value="">Select Availability</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </div>
              <div class="col-md-8">
                <label for="formFile" class="form-label">Default file input example</label>
                <input class="form-control" type="file" id="txtroomImage" onChange={(e) => {
                    const selectedFile = e.target.files[0];
                    setValues(selectedFile);
                }} />
              </div>
              <div class="col-12">
                <button type="submit" className="btn btn-primary mb-3" id="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default UpdateRoom