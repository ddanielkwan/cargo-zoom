import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import { cargoServices } from '../services/general';
function BasicTable() {

    const [items, setItems] = useState({})

    const getAllItems = async () =>{
        const res =  await cargoServices.getAllItems({company: companyId, location: location})
        setItems(res.data)
    }

    useEffect(()=>{
        getAllItems()

    },[])
  return (
    <Container>

    <>
    <h1>Package Details</h1><Table striped bordered hover>

    <thead>
        <tr>
            <th></th>
            <th>ItemId</th>
            <th>Flight</th>
            <th>AirWays Bill</th>
            <th>Validation</th>
            <th>Claims</th>
        </tr>
    </thead>
    <tbody>

    {items.length > 0 && items.map((i)=>{

            return(
                        <tr>
                            <td>{i._id}</td>
                        <td>{i.flight}</td>
                        <td>{i.airbill}</td>
                        <td>{i.validStatus}</td>
                    
                        <td>{i.claims}</td>
                    </tr>
            )
        })
    }
    </tbody>
         
      </Table></>
      </Container>
  );
}

export default BasicTable;