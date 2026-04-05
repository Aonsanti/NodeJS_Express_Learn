// rafce
import React, { useState, useEffect } from "react";
import { remove , create , getdata} from "../functions/product";
import { Link } from "react-router-dom";

const FromProduct = () => {
    const [data, setData] = useState([]);
    const [form , setForm] = useState({});
    const API = import.meta.env.VITE_API_URL

    const loadData = async () => {
        await getdata()
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleChange =  (event) =>{
        setForm({
            ...form , [event.target.name] : event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            await create(form);
            await loadData()
        }catch(err){
            console.log(err);
        }
    }
    const handleRemove  = async (id) => {
        try{
            await remove(id)
            await loadData()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <>
        FormProduct
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                onChange={event => handleChange(event)} 
                placeholder="name"/>
                <br />
            <input 
                type="text" 
                name="detail" 
                onChange={event => handleChange(event)} 
                placeholder="detail"/>
                <br />
            <input 
                type="text" 
                name="price" 
                onChange={event => handleChange(event)} 
                placeholder="price"/>
                <br />
            <button>Click Di</button>
        </form>

        <table className="table">
            <thead>
            <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Detail</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
                <th scope="col">Edit</th>
            </tr>
            </thead>
            <tbody>
            {data ? data.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <th scope="row">{item.name}</th>
                        <td>{item.detail}</td>
                        <td>{item.price}</td>
                        <td onClick={() => handleRemove(item._id)}> Delete </td>
                        <td><Link to={`/edit/${item._id}`}>Edit</Link></td>
                    </tr>
                ))
                : null}
            </tbody>
        </table>
        </>
    );
};

export default FromProduct;
