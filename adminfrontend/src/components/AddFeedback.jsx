import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddFeedback = () => {

  const [txtName, setName] = useState('')
  const [txtFeedback, setFeedback] = useState('')
  const [txtReply, setReply] = useState('')
  const [txtTime, setTime] = useState('')
  const navigate = useNavigate();


  function sendData(e) {



    e.preventDefault();

    const feedbackData = {
      name: txtName,
      feedback: txtFeedback,
      reply: txtReply,
      createdat: txtTime,
    };

    axios.post("http://localhost:6655/feedback/add", feedbackData)
      .then(() => {
        alert("Feedback added successfully");
        console.log("Feedback added successfully");
        navigate('/SF');
      })
      .catch((error) => {
        alert(`Error adding feedback: ${error.message}`);
        console.error("Error adding feedback", error);
      });
  }

  return (
    <div style={{marginTop:'160px'}}>
          <div className='container-fluid mt-5 py-1 px-4 shadow' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h2 className='text-center m-3'>Add Feedback</h2>
            <form class="row g-3" onSubmit={sendData} style={{width:'50%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

              <div class="col-md-8">
                <label for="firstName" class="form-label">Name</label>
                <input type="text" class="form-control" id="txtName" onChange={(e) => {
                  setName(e.target.value);
                }} disabled/>
              </div>
              <div class="col-md-8">
                <label for="lastName" class="form-label">Feedback</label>
                <input type="text" class="form-control" id="txtFeedback" onChange={(e) => {
                  setFeedback(e.target.value);
                }} disabled/>
              </div>
              <div class="col-md-8">
                <label for="inputEmail4" class="form-label">Reply</label>
                <input type="text" class="form-control" id="txtReply" onChange={(e) => {
                  setReply(e.target.value);
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

export default AddFeedback