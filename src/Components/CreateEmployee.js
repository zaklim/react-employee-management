import React, {useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

const CreateEmployee = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const employee = {firstName, lastName, email};
        fetch('/employees', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        })
        .then(navigate('/employees'));
    }
    
    return (
        <Container className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 style={{ textAlign : 'center' }}>Add Client</h2>
            <Form onSubmit={(e) => handleSubmit(e)} >
                <FormGroup>
                    <Input type='text' placeholder='First Name' name='firstName' id='firstName' value={firstName}
                        onChange={(e) => {
                            console.log(e);
                            console.log(e.target);
                            console.log(e.target.value);
                            return setFirstName(e.target.value);
                            }} />
                </FormGroup>
                <FormGroup>
                    <Input type='text' placeholder='Last Name' name='lastName' id='lastName' value={lastName}
                        onChange= {(e) => setlastName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Input type='text' placeholder='Email' name='email' id='email' value={email}
                        onChange={(e) => setEmail(e.target.value)}    />
                </FormGroup>
                <FormGroup>
                    <Button color='primary' type='submit'>Save</Button>
                    <Button color='secondary' tag={Link} to='/employees'>Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    );
}

export default CreateEmployee;