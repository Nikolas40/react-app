import axios from "axios";

axios.defaults.baseURL = "https://650c4c6a47af3fd22f676cfe.mockapi.io"

export const addMaterials = async (values) => {

    const response = await axios.post("/materials",values)
    
    return response.data

}

export const getMaterials = async (values) => {

    const response = await axios.get("/materials",values)
    
    return response.data

}