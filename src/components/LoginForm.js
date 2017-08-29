import React, { Component } from 'react';
import { Input, Button, Card, CardSection } from './common';

class LoginForm extends Component {
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
         <Input
           value={this.state.text}
           label="Email"
           placeholder=""
           onChangeText={text => this.setState({ text: text })}
         /> 
        </CardSection>
        <CardSection>
          
        </CardSection>
        
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    )
  }


}

export default LoginForm;
