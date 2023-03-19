import './App.css';
import { Routes, Route } from "react-router-dom";
import FormExampleForm from "./components/create"
import TableExamplePagination from "./components/read"

function App() {
  return (
   

   <div className='main'>
    <h2 className='main-header'>REACT CRUD OPERATIONS</h2>
    <Routes>
    <Route path='/create' element={<FormExampleForm />} />
    <Route path='/read' element={<TableExamplePagination />} />
    </Routes>     
    
   </div>

  


  );
}

export default App;
