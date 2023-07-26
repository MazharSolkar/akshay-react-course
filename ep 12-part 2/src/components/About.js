// import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';
import UserContext from '../utils/UserContext';

class About extends Component {
  constructor(props) {
    super(props);
    // console.log('parent constructor is called');
  }

  componentDidMount() {
    // console.log('parent component is mounted');
  }

  render() {
    // console.log('parent render is called');
    return (
      <div>
        <div>
          <UserContext.Consumer>
            {(data) => (
              <h1 className='font-bold text-green-500'>{data.loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass />
      </div>
    );
  }
}

export default About;
