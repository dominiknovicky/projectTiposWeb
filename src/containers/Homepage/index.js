import React from 'react';
import { Wrapper, Logo } from './styles';
import logo from '../../img/tiposLogo.png';
import {Link} from 'react-router-dom';

class Homepage extends React.Component {

	render() {

    	return (
            <Wrapper>
                <Link to='/login'>
                    <Logo src={logo}/>
                </Link>
            </Wrapper>
	    );
	}
}
export default Homepage;
