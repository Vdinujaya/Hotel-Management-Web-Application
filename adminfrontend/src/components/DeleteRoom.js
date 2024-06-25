
import axios from "axios";
export default function deleteRoom(roomId) {
    return axios.delete(`http://localhost:6655/room/delete/${roomId}`);

}