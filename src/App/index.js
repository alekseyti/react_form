import React, {Component, Fragment} from 'react';
import LoginForm from '../components/LoginForm';

class App extends Component {
  
    submit = values => {
      window.alert (JSON.stringify (values));
    };

    getInitialValues () {
        return {
          username: '',
          password: '',
        };
      }
    
    render () {
      return (
        <Fragment>
          <h1>Redux Form</h1>
            <LoginForm 
                onSubmit={this.submit} 
                initialValues={this.getInitialValues()}
            />

            
        </Fragment>
      );
    }
  }
  
  export default App;