import React from 'react';
import './App.css';
import { Table,thead,th, tr,tbody } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="heading">
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>New Complain</th>
      <th>case Handler</th>
      <th>Completion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</Table>
    </div>
  );
}

export default App;
