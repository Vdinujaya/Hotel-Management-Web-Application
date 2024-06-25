
import axios from "axios";
export default function deleteSupplier(supplierId) {
    return axios.delete(`http://localhost:6655/supplier/delete/${supplierId}`);

}