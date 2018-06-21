import React from 'react';
import { Wrapper } from './styles';
import { Switch, Route } from "react-router-dom";
import Navbar from '../../components/bigComponents/Navbar';
import AboutUserPage from '../AboutUserPage';
import Bets from '../BetsPage';

class Userprofile extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <Wrapper>
                    <Switch>
                        <Route
                            path="/user/profile"
                            component={AboutUserPage} />
                        />
                        <Route
                            path="/user/bets"
                            component={Bets} />
                        />
                    </Switch>
                </Wrapper>
            </div>
        )
    }
}

export default Userprofile;