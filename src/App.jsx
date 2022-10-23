import './App.css';
import Test from './components/barcode';

import NavBar from './components/navbar';
import FillForm from './components/fillableForm';
import BasicTable from './components/tablescript';


import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";

function App() {
  return (
    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    
<NavBar/>
<Test/>
    {/* <FillForm/> */}
    <FillForm/>
    <BasicTable/>

   
   
    </>
  );
}

export default App;
