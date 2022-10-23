import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


function BasicTable() {
  return (
    <Container>
    <><h1>Package Details</h1><Table striped bordered hover>
          <thead>
              <tr>
                  <th>#</th>
                  <th>Flight</th>
                  <th>AirWays Bill</th>
                  <th>Validation</th>
                  <th>Claims</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>1</td>
                  <td>Air Canada</td>
                  <td>1234566</td>
                  <td>Valid</td>
                  <td>None</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>Etihad</td>
                  <td>234521</td>
                  <td>Valid</td>
                  <td>None</td>
              </tr>
              <tr>
                  <td>3</td>
                  <td>Air India</td>
                  <td>988383</td>
                  <td>Not Valid</td>
                  <td>None</td>
              </tr>
          </tbody>
      </Table></>
      </Container>
  );
}

export default BasicTable;