import React from 'react';
import './App.css';
import { Table, thead, th, tr, tbody, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: "New"
    };

    this.backward = this.backward.bind(this);
    this.internal = this.internal.bind(this);
    this.forward = this.forward.bind(this);
  }

  backward(){
    console.log("backward")
    var dataset={
      mystate:this.state.status,
      action:"backward"
    }
    this.TriggerApi(dataset)
  }

  internal(){
    console.log("internal")
    var dataset={
      mystate:this.state.status,
      action:"internal"
    }
    this.TriggerApi(dataset)
  }

  forward(){
    console.log("forward")
    var dataset={
      mystate:this.state.status,
      action:"forward"
    }
    this.TriggerApi(dataset)
  }

  TriggerApi(dataset){
    console.log(dataset)

  }

  render() {
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
              <td>
                <Card className="card">
                  <h3>Complain</h3>
                  <p>A text can be any example of written or spoken language, from something as complex as a book or legal document to something as simple as the body of an email or the words on the back of a cereal box.</p>
                  <h4>Status:  {this.state.status}</h4>
                  <div>
                    <button onClick={this.backward} >backward</button>
                    <button onClick={this.internal}>Internal</button>
                    <button onClick={this.forward}>Forward</button>
                  </div>
                </Card>

              </td>
              <td>
                <Card className="card">
                  <h3>Complain</h3>
                  <p>A text can be any example of written or spoken language, from something as complex as a book or legal document to something as simple as the body of an email or the words on the back of a cereal box.</p>
                </Card>
              </td>
              <td>
                <Card className="card">
                  <h3>Complain</h3>
                  <p>A text can be any example of written or spoken language, from something as complex as a book or legal document to something as simple as the body of an email or the words on the back of a cereal box.</p>
                </Card>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}


export default App;
