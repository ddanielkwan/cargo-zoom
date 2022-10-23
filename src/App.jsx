import './App.css';
import Test from './components/barcode';

import NavBar from './components/navbar';
import FillForm from './components/fillableForm';
import BasicTable from './components/tablescript';
function App() {
  return (
    <>
    <NavBar/>
<Test/>
    {/* <FillForm/> */}
    <FillForm/>
    <BasicTable/>
    </>
  );
}

export default App;
