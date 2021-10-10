import React from 'react';
import {withRouter} from 'react-router-dom';
import {UserInfo, QuestionOne, QuestionTwo, QuestionThree, Thanks} from './index';

class Front extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
      color: ''
    }
  }

  handleToUserInfo = () => {
    this.props.history.push({
      pathname: '/userinfo',
      state: {
        text: 'this is test',
      }
    })
  }

  render(){

    return(
      <div>
        this is front page<br/>
        <button value="#fff000" onClick={this.handleToUserInfo}>
          User Information
        </button>
      </div>
    );
  }
}

export default withRouter(Front);
