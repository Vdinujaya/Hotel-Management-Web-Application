import { notification } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const UpdateContact = () => {

    const { id } = useParams();
    const [values, setValues] = useState({
        _id: id,
        name: '',
        email: '',
        subject: '',
        message: ''
    });


    useEffect(() => {
        axios.get(`http://localhost:6655/contact/update/${id}`)
            .then(res => setValues({ ...values, ...res.data }))
            .catch(err => {
                console.log(err);
                notification.error({ message: 'Error', description: 'Failed to fetch contact data.' });
            });
    }, [id]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!values.name || !values.email || !values.subject || !values.message) {
          notification.error({ message: 'Error', description: 'Please fill in all required fields.' });
          return;
      }

        axios.put(`http://localhost:6655/contact/update/${id}`, values)
            .then(() => {
                notification.success({ message: 'Success', description: 'Contact updated successfully.' });
                navigate('/SCU');
            })
            .catch(err => {
                console.log(err);
                notification.error({ message: 'Error', description: 'Failed to update contact.' });
            });
    };

  return (
    <div style={{marginTop:'160px'}}>
          <div className='container-fluid mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h2 className='text-center m-3'>Update Contact</h2>
            <form class="row g-3" onSubmit={handleSubmit} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <div class="col-12">
                <label for="firstName" class="form-label">Name</label>
                <input type="text" class="form-control" id="txtName" value={values.name} onChange={e => setValues({ ...values, name: e.target.value })}/>
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="txtEmail" value={values.email} onChange={e => setValues({ ...values, email: e.target.value })}/>
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Subject</label>
                <input type="text" class="form-control" id="txtSubject" value={values.subject} onChange={e => setValues({ ...values, subject: e.target.value })}/>
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">Message</label>
                <input type="text" class="form-control" id="txtMessage" value={values.message} onChange={e => setValues({ ...values, message: e.target.value })}/>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary" id="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default UpdateContact