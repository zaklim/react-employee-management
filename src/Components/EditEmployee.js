import React , { useState, useEffect} from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';

export function EditEmployee(props) {
    
    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const employee = {firstName, lastName, email};
        fetch('/employees/' + id, {
            method : 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        })
        .then(navigate('/employees'));
    }
    
    useEffect(() => {
        fetch('/employees/' + id)
        .then(response => response.json())
        .then(employee => {
            setFirstName(employee.firstName);
            setLastName(employee.lastName);
            setEmail(employee.email);
        })
    },[])

    return (
        <Container className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 style={{ textAlign : 'center' }}>Edit Client</h2>
            <Form  onSubmit={(e) => handleSubmit(e)}>
                <FormGroup>
                    <Input type='text' placeholder='First Name' name='firstName' id='firstName' value={firstName}
                        onChange = {(e) => setFirstName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Input type='text' placeholder='Last Name' name='lastName' id='lastName' value={lastName}
                       onChange = {(e) => setLastName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Input type='text' placeholder='Email' name='email' id='email' value={email}
                        onChange = {(e) => setEmail(e.target.value)}  />
                </FormGroup>
                <FormGroup>
                    <Button color='primary' type='submit'>Save</Button>
                    <Button color='secondary' tag={Link} to='/employees'>Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    );
}