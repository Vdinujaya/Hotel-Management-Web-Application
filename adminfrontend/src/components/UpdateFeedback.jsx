import { notification } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const UpdateFeedback = () => {

    const { id } = useParams();
    const [values, setValues] = useState({
        _id: id,
        name: '',
        feedback: '',
        reply: '',
    });


    useEffect(() => {
        axios.get(`http://localhost:6655/feedback/update/${id}`)
            .then(res => setValues({ ...values, ...res.data }))
            .catch(err => {
                console.log(err);
                notification.error({ message: 'Error', description: 'Failed to fetch feedback data.' });
            });
    }, [id]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:6655/feedback/update/${id}`, values)
            .then(() => {
                notification.success({ message: 'Success', description: 'Feedback updated successfully.' });
                navigate('/SF');
            })
            .catch(err => {
                console.log(err);
                notification.error({ message: 'Error', description: 'Failed to update feedback.' });
            });
    };

  return (
    <div style={{marginTop:'160px'}}>
          <div className='container mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h2 className='text-center m-3'>Add Feedback</h2>
            <form class="row g-3" onSubmit={handleSubmit} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <div class="col-md-8">
                <label for="firstName" class="form-label">Name</label>
                <input type="text" class="form-control" id="txtName" value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} disabled/>
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Feedback</label>
                <textarea type="text" class="form-control" id="txtFeedback" value={values.feedback} onChange={e => setValues({ ...values, feedback: e.target.value })} disabled/>
              </div>
              <div class="col-md-8">
                <label for="inputEmail4" class="form-label">Reply</label>
                <textarea type="text" class="form-control" id="txtReply" value={values.reply} onChange={e => setValues({ ...values, reply: e.target.value })}/>
              </div>
              <div class="col-12">
                <button type="submit" className="btn btn-primary mb-3" id="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default UpdateFeedback