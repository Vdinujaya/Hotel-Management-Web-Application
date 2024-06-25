
import axios from "axios";
export default function deleteCustomer(customerId) {
    return axios.delete(`http://localhost:6655/customer/delete/${customerId}`)
}