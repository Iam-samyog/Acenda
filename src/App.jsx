import Destinations from "./Destinations/Destinations";
import Home from "./Home";
import { Routes, Route } from 'react-router-dom';


const App=()=>{
  return(
    <>
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path='/destinations' element={<Destinations/>}></Route> 
      </Routes>
    </>
  )
}
export default App;