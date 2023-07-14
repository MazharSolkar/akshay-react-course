import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    console.log('parent constructor is called');
  }

  componentDidMount() {
    console.log('parent component is mounted');
  }

  render() {
    console.log('parent render is called');
    return (
      <div>
        <UserClass />
      </div>
    );
  }
}

export default About;
