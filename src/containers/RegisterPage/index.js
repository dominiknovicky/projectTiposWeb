import React from 'react';
import axios from 'axios';
import { StyledInput, InputWrapper, Wrapper } from '../LoginPage/styles';


class Register extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        login: ''
    };

    handleLoginValue = e => {
        this.setState({ login: e.target.value });
        console.log(e.target.value);
    };
    
    handlePasswordValue = e => {
        this.setState({ password: e.target.value });
        console.log(e.target.value);
    };
    
    handleEmailValue = e => {
        this.setState({ email: e.target.value });
        console.log(e.target.value);
    };
    
    handleFirstNameValue = e => {
        this.setState({ firstName: e.target.value });
        console.log(e.target.value);
    };
    
    handleLastNameValue = e => {
        this.setState({ lastName: e.target.value });
        console.log(e.target.value);
    };

    verifyCallback = response => {
        if (response.length > 0) {
            this.setState({ allowSend: true });
        }
    };

    signIn = async event => {
        event.preventDefault();
        const form = {
            login: this.state.username,
            password: this.state.password
          };

        try {
          const response = await axios({
            method: "post",
            url: "/auth/login",
            data: form,
            config: { headers: { "Content-Type": "aplication/json" } }
          });
          localStorage.setItem('user', JSON.stringify(response.data));

          this.props.history.push("/");

        console.log(response.data);
        } catch (err) {
          console.log(err);
        }
      };

	render() {

    	return (
			<Wrapper>
                <InputWrapper>
                    <form onSubmit={this.signIn}>
                        <StyledInput
                            placeholder="First Name"
                            type='text' 
                            onChange={this.handleFirstNameValue}/>
                        <StyledInput
                            placeholder="Last Name"
                            type='text' 
                            onChange={this.handleLastNameValue}/>
                        <StyledInput
                            placeholder="Login"
                            type='text' 
                            onChange={this.handleLoginValue}/>
                        <StyledInput
                            placeholder="E-mail"
                            type='text' 
                            onChange={this.handleEmailValue}/>
                        <StyledInput
                            placeholder="Password"
                            type='password' 
                            onChange={this.handlePasswordValue}/>
                        <StyledInput 
                            className="login"
                            type="submit" 
                            value="Register"/>
                    </form>
                </InputWrapper>
			</Wrapper>
	    );
	}
}
export default Register;
