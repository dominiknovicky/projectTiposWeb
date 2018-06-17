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
        this.setState({ login: e.target.value }, ()=>{
            console.log(this.state.login);
        });
    };

    handlePasswordValue = e => {
        this.setState({ password: e.target.value });
    };

    handleEmailValue = e => {
        this.setState({ email: e.target.value });
    };

    handleFirstNameValue = e => {
        this.setState({ firstName: e.target.value });
    };

    handleLastNameValue = e => {
        this.setState({ lastName: e.target.value });
    };

    register = async event => {
        event.preventDefault();
        const form = {
            login: this.state.login,
            password: this.state.password,
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            email: this.state.email
          };

          console.log(form);

        try {
          const response = await axios({
            method: "post",
            url: "/auth/reg",
            data: form,
            config: { headers: { "Content-Type": "aplication/json" } }
          });

          alert("You have successfully registered.");
          this.props.history.push("/login");

        } catch (err) {
            alert("Something went wrong. Try again.");
            window.location.reload();
        }
      };

	render() {

    	return (
			<Wrapper>
                <InputWrapper>
                    <form onSubmit={this.register}>
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
