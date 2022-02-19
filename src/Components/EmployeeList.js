import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Button, ButtonGroup } from 'reactstrap';

const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);
    
    const init = () => {
        fetch('/employees')
        .then((response) => {
            let res = response.json();
            console.log(response);
            console.log(res);
            return res;
        })
        .then(employees => setEmployees(employees))
        .catch(err => console.error(err))
    }

    useEffect(() => {
        init();
      }, []);
    
    const handleDelete = (id) => {
        fetch('/employees/' + id, {
            method : 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(init())
    }
    
    return (
        <div>
            <Container fluid>
                <h3 className='text-center'>Employees</h3>
                <Table className='mt-4'>
                    <thead>
                        <tr>
                            <th width='30%'>First Name</th>
                            <th width='30%'>Last Name</th>
                            <th width='30%'>Email</th>
                            <th width='40%'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee => (
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button size='sm' color='primary' tag={Link} to={'/employees/' + employee.id}>Edit</Button>
                                            <Button size='sm' color='danger' onClick={() => handleDelete(employee.id)}>Delete</Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );

}
export default EmployeeList;