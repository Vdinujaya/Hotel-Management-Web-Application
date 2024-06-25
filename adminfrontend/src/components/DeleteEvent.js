
import axios from "axios";
export default function deleteEvent(eventId) {
    return axios.delete(`http://localhost:6655/event/delete/${eventId}`)
}