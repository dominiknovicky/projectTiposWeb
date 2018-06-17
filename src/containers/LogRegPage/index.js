import React from 'react';
import { Wrapper, Logo, ContentWrapper, } from '../LogRegPage/styles';
import logo from '../../img/tiposLogo.png';
import LogRegSwitch from '../../components/bigComponents/LogRegSwitch/LogRegSwitch';
import Login from '../../containers/LoginPage/index';
import Register from '../../containers/RegisterPage/index';
import { Switch, Route } from "react-router-dom";

class LogReg extends React.Component {

	render() {

    	return (
			<Wrapper>
                <Logo src={logo}/>
				<ContentWrapper>
					<LogRegSwitch />
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/registration" component={Register} />
					</Switch>
				</ContentWrapper>
			</Wrapper>
	    );
	}
}
export default LogReg;
