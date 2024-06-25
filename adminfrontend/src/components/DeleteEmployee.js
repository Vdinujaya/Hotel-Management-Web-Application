
import axios from "axios";
export default function deleteEmployee(employeeId) {
    return axios.delete(`http://localhost:6655/employee/delete/${employeeId}`);

}