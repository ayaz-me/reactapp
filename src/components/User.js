import React, { Component } from 'react';

class User extends Component {
  render() {
    //Destructing
    const {name,job,team} = this.props;
    return ( 
      <div>
        <ul>
            <li>Name: {name}</li>
            <li>Job: {job}</li>
            <li>Team: {team}</li>
        </ul>
      </div>
    )
  }
}

export default User;
