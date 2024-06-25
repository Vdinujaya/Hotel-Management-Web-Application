import axios from 'axios'
import React from 'react'


const DeleteBooking = (bookingId) => {

    return axios.delete(`http://localhost:6655/booking/delete/${bookingId}`)

}

export default DeleteBooking