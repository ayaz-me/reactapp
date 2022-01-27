import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  static defaultProps = {
    name : "Bilgi Yok!",
    job : "Bilgi Yok!",
    team : "Bilgi Yok!"
  }

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

User.propTypes = {
  name : PropTypes.string.isRequired,
  job : PropTypes.string.isRequired,
  team : PropTypes.string.isRequired
}

export default User;
