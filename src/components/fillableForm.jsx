import Form from "react-bootstrap/Form"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";



const FillForm = () => {
    return(
        <Container>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Sender Details</Form.Label>
                <Form.Control placeholder="Full Name"></Form.Control>
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Start typing address, city or postal code"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Recipient Details</Form.Label>
                <Form.Control placeholder="Full Name"></Form.Control>
                <DropdownButton align="end" title="Select your destination" id="dropdown-menu-align-end" >
                <Dropdown.Item eventKey="1">Canada</Dropdown.Item>
                <Dropdown.Item eventKey="2">US</Dropdown.Item>
                <Dropdown.Item eventKey="3">Mexico</Dropdown.Item>
                </DropdownButton>
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Start typing address, city or postal code"></Form.Control>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control placeholder="#"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>What is the reason for sending </Form.Label>
                <Form.Control placeholder="Full Name"></Form.Control>
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Start typing address, city or postal code"></Form.Control>
                <br></br>
                <InputGroup>
                    <InputGroup.Radio />
                    <Form.Label>&nbsp;Gift</Form.Label>
                </InputGroup>
                <InputGroup>
                    <InputGroup.Radio />
                    <Form.Label>&nbsp;Sale</Form.Label>
                </InputGroup>
                <InputGroup>
                    <InputGroup.Radio />
                    <Form.Label>&nbsp;Commercial Sample</Form.Label>
                </InputGroup>
                <InputGroup>
                    <InputGroup.Radio />
                    <Form.Label>&nbsp;Document</Form.Label>
                </InputGroup>
                <InputGroup>
                    <InputGroup.Radio />
                    <Form.Label>&nbsp;Return/Repair/Warrenty</Form.Label>
                </InputGroup>
                <InputGroup>
                    <InputGroup.Radio />
                    <Form.Label>&nbsp;Other</Form.Label>
                </InputGroup>
                <Form.Control placeholder="#"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>If package undelivered</Form.Label>
                <br></br>
                <Form.Text className="text-muted">Provide details on the contents of the package. Accurate and detailed item descriptions make it easier for your package to clear customs.</Form.Text>
                <br/>
                <Form.Label>Description (Max. 25 characters)</Form.Label>
                <Form.Control></Form.Control>
                <Form.Label>Quantity</Form.Label>
                <Form.Control></Form.Control>
                <Form.Label>Value of individual item ($ CAD)</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <br></br>
        </Form>
        </Container>
    )
}

export default FillForm