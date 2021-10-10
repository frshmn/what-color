import React from 'react';
import { Link } from 'react-router-dom';
// import Two from './two';

class UserInfo extends React.Component{

  render(){
    return(
      <div>
        this is User Information page<br/>
        <p>{this.props.location.state.text}</p>
      </div>
    )
  }
}

export default UserInfo;
