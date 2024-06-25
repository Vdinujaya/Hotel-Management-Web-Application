import axios from "axios";
export default function deleteInventory(inventoryId) {
    return axios.delete(`http://localhost:6655/inventory/delete/${inventoryId}`);

}