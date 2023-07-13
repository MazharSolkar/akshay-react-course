import React from 'react';

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//       count2: 1,
//     };
//     console.log(this.props.name + 'child consturctor is called');
//   }

//   componentDidMount() {
//     console.log(this.props.name + 'Child component is mounted');
//   }

//   render() {
//     console.log(this.props.name + 'child render is called');
//     const { name, location } = this.props;
//     const { count, count2 } = this.state;
//     return (
//       <div className='user-card'>
//         <h1>Count: {count}</h1>
//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 1,
//             });
//           }}>
//           Count Increase
//         </button>
//         <h2>Name: {name}</h2>
//         <h3>Location: {location}</h3>
//       </div>
//     );
//   }
// }

class UserClass extends React.Component {
  constructor(props) {
    console.log('constructor is called');
    super(props);

    this.state = {
      userInfo: {
        name: 'dummy',
        bio: 'default',
        avatar_url: null,
      },
    };
  }

  async componentDidMount() {
    console.log('Component mounted');
    const data = await fetch('https://api.github.com/users/mazharsolkar');
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log('component did update is called');
  }

  componentWillUnmount() {
    console.log('component will uncmount called');
  }

  render() {
    console.log('render called');
    const { name, bio, avatar_url } = this.state.userInfo;
    return (
      <div className='user-card'>
        <img src={`${avatar_url}`} alt='' />
        <h2>Name: {name}</h2>
        <h3>Bio: {bio}</h3>
      </div>
    );
  }
}

export default UserClass;
