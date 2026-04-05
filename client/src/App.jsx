import { BrowserRouter , Route , Routes } from 'react-router-dom';
import FormProduct from "./components/FormProduct";
import FormEditProduct from './components/FormEditProduct';
export default function App(){
  // Javascript

  return(
    <BrowserRouter>
      <div>
        <h1>Form CRUD</h1>
        <Routes>
          <Route path="/" element={<FormProduct/>}/>
          <Route path="/edit/:id" element={<FormEditProduct/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  )
}
