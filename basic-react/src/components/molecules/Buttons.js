import React from 'react';
import { Button } from 'reactstrap';


export default class Buttons extends React.Component {
  render() {
    return (
      <div>
      <Button color="primary">Facebook</Button>{' '}
      <Button>Secondary</Button>
      <Button color="success">success</Button>
      <Button color="danger">danger</Button>
      <button>submit</button>
      </div>
    )
  }
}