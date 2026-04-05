import axios from 'axios';
const API = import.meta.env.VITE_API_URL

export const remove  = async(id) =>{
    return await axios.delete(`${API}/product/${id}`)
}

export const create = async(data) =>{
    return await axios.post(`${API}/product` ,  data)
}

export const getdata =  async() =>  {
    return await axios.get(`${API}/product` )
}

export const read = async (id) =>{
    return await axios.get(`${API}/product/${id}` )
}

export const update = async (id,data) =>{
    return await axios.put(`${API}/product/${id}` , data )
}