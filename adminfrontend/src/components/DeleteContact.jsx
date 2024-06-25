import axios from 'axios'
import React from 'react'

const DeleteContact = (contactId) => {
  return axios.delete(`http://localhost:6655/contact/delete/${contactId}`)
}

export default DeleteContact