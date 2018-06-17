import React from 'react';
import { StyledInput, InputWrapper, Wrapper, StyledInputCaptcha } from '../LoginPage/styles';
import Captcha from "react-captcha";
import './style.css';
import axios from 'axios';

class Login extends React.Component {

    state = {
        allowSend: false
    };

    handleLoginValue = e => {
        this.setState({ username: e.target.value });
    };
    
    handlePasswordValue = e => {
        this.setState({ password: e.target.value });
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

          this.props.history.push("user/profile");

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
                            placeholder="Login"
                            type='text' 
                            onChange={this.handleLoginValue}/>
                        <StyledInput
                            placeholder="Password"
                            type='password' 
                            onChange={this.handlePasswordValue}/>

                        <Captcha
                            sitekey="6Lcy_lsUAAAAAAwGCk8rJO9OL0xRPqebV-dpDQXF"
                            lang="en"
                            theme="light"
                            type="image"
                            callback={this.verifyCallback}
                        />
                        {this.state.allowSend === true ? (
                            <StyledInput 
                                className="login"
                                type="submit" 
                                value="Sign In"/>
                        ) : (
                            <StyledInputCaptcha 
                                disabled
                                className="login"
                                type="submit" 
                                value="Sign In"/>
                        )}
                    </form>
                </InputWrapper>
			</Wrapper>
	    );
	}
}
export default Login;
