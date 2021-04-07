
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Nav, Navbar,Button ,Col} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#About">About US</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    <div className="mystyle">
      <h1>sign up your baby</h1>
    <Form>
    <Form.Group controlId="formGridAddress1">
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Surname </Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Baby Name</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>


    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Age</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form></div>
    </div>
  );
}
export default App;
