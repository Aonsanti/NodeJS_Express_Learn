import { useState , useEffect } from "react"
import { useParams ,  useNavigate } from "react-router-dom"
import { read , update } from '../functions/product'
const FormEditProduct = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [data , setData] = useState({
        name : '',
        detail : '',
        price : ''
    })

    const loadData = async (id) =>{
        try{
            await read(id)
            .then((res) =>{
                setData(res.data)
            })
        }catch(err){
            console.log(err)
        }
    }
    const handleChange =  (event) =>{
            setData({
                ...data , [event.target.name] : event.target.value
            })
        }
        const handleSubmit = async (event) => {
            event.preventDefault()
            console.log(data)
            try{
                await update(params.id , data);
                navigate('/')
            }catch(err){
                console.log(err);
            }
        }

    useEffect( () => {
        loadData(params.id)
    }, [])


    return (
        <>
            <div>FormEditProduct</div>
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                onChange={event => handleChange(event)} 
                placeholder="name"
                value={data.name}
                />
                <br />
            <input 
                type="text" 
                name="detail" 
                onChange={event => handleChange(event)} 
                placeholder="detail"
                value={data.detail}
                />
                <br />
            <input 
                type="text" 
                name="price" 
                onChange={event => handleChange(event)} 
                placeholder="price"
                value={data.price}
                />
                <br />
            <button>Click Di</button>
        </form>
        </>
        
        
    )
}

export default FormEditProduct