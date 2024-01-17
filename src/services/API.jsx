import axios from "axios";

export async function getProcessInstances() {
    console.log("getProcessInstances");
    const response = await axios.get('process_instances.json');
    return await response.data.payload;
}