import axios from 'axios';
import React, { useState } from 'react'
import PopupMessage from './PopupMessage';


const HomeFeedback = () => {
    const[txtName,setName]  = useState('');
    const[txtFeedback,setFeedback]  = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    
    const sendData = async (e) => {
        e.preventDefault();

        const feedbackData = {
            name: txtName,
            feedback: txtFeedback
        };

        try {
            await axios.post("http://localhost:6655/feedback/add", feedbackData);
            setPopupMessage('Feedback Submited');
        setShowPopup(true);
        
        setTimeout(() => {
            window.location.reload(); // Redirect after a delay
        }, 1000);
        } catch (error) {
            alert(`Error adding Feedback: ${error.message}`);
            console.error("Error adding Feedback", error);
        }
    };
  return (
    <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
        <PopupMessage show={showPopup} message={popupMessage} onHide={() => setShowPopup(false)} />
            <div className="row justify-content-center">
                <div className="col-lg-10 border rounded p-1">
                    <div className="border rounded text-center p-1">
                        <div className="bg-white rounded text-center p-5">
                            <h4 className="mb-4">Give your <span className="text-primary text-uppercase">Feedback</span></h4>
                            <div className=" mx-auto" style={{ maxWidth: '400px' }} >
                            <form onSubmit={sendData}>
                            <input className="form-control w-100 py-3 ps-4 pe-5" style={{marginBottom:'10px'}} type="text" placeholder="Enter your Name" id="txtName" onChange={(e)=>{
                                setName(e.target.value);
                            }}/>
                            <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your Feedback" id="txtFeedback" onChange={(e)=>{
                                setFeedback(e.target.value);
                            }}/>
                            <button type="submit" className="btn btn-primary py-2 px-3 top-0 end-0 mt-2 me-2">Submit</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HomeFeedback