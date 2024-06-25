import axios from 'axios'
import React from 'react'

const DeleteFeedback = (feedbackId) => {
  return axios.delete(`http://localhost:6655/feedback/delete/${feedbackId}`)
}

export default DeleteFeedback