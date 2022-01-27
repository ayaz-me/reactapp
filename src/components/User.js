import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  static defaultProps = {
    name : "Bilgi Yok!",
    job : "Bilgi Yok!",
    team : "Bilgi Yok!"
  }

  constructor(props){
    super(props);

    this.state= {
      isVisible : false 
    }
  }

  render() { 
    //Destructing
    const {name,job,team} = this.props; 
    const {isVisible} = this.state; 

    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline">{name}</h4>
            <i className="fas fa-trash-alt" style = {{cursor: "pointer"}}></i>
          </div>
          {isVisible ? <div className="card-body">
            <p className="card-text"><b>Job:</b> {job}</p>
            <p className="card-text"><b>Team:</b> {team}</p>
            <p>{this.state.test }</p>
          </div> : null
          }
        </div>
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
