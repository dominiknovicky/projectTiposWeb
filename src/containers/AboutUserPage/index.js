import React from 'react';
import { Wrapper } from './styles';
import AboutUser from '../../components/bigComponents/AboutUserComponent/index';
import axios from 'axios';


class AboutUserPage extends React.Component{

    state = {
       userData: []
    }

    componentWillMount (){
        this.getUserData();
    }

    getUserData = () => {
        this.setState({userData: JSON.parse(localStorage.getItem("user"))});
    }

    logout = async () => {
        try {
            const response = await axios({
              method: "get",
              url: `/auth/logout/${this.state.userData.token}`,
              config: { headers: { "Content-Type": "aplication/json" } }
            });
            localStorage.removeItem('user');
            this.props.history.push("/");
          } catch (err) {
              alert("Something went wrong. Try again.");
          }
    }

    render(){
        return(
            <Wrapper>
                <AboutUser
                    firstName={this.state.userData.firstname}
                    lastName={this.state.userData.lastname}
                    login={this.state.userData.login}
                    email={this.state.userData.email}
                    click={this.logout}/>
            </Wrapper>
        )
    }
}

export default AboutUserPage;