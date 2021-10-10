import React from 'react';
import { Link } from 'react-router-dom';
// import Two from './two';

class UserInfo extends React.Component{
  render(){
    return(
      <div>
        this is User Information page<br/>

        <input type="hidden" data-color={this.props.location.state.color} />
      </div>
    )
  }
}

export default UserInfo;
