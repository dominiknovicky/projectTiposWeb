import React, {Component} from 'react';
import { Wrapper, Title, Tr, Th, Td,LoaderWrapper,LoadingImage } from './styles';
import './style.css';
import axios from 'axios';
import loading from '../../img/loading.gif';

export default class BetsHistoryPage extends Component {

    state = {
        userData: [],
        bets: [],
        loading:true

    }
    
    componentWillMount(){
        this.getUserData();
    }

    getUserData = () => {
        this.setState({userData: JSON.parse(localStorage.getItem('user'))}, ()=>{
            this.getActualBets();
        });
    }

    getActualBets = async() => {
        const form = {
            login: this.state.userData.login,
            token: this.state.userData.token
        };

        try {
            const response = await axios({
                method: "post",
                url: "/bets/actual",
                data: form,
                config: { headers: { "Content-Type": "aplication/json" } }
            });
            this.setState({bets:response.data.tickets}, ()=>{
                this.setState({loading: false});
                console.log(this.state.bets);
            });
        } catch (err) {
            alert("Something went wrong. Try again.");
        }
    }
        
    render(){

        if(this.state.loading){
			return(
				<LoaderWrapper>
					<LoadingImage src={loading}/>
				</LoaderWrapper>
			)
		}

        return(
            <Wrapper>
                <Title>Actual Bets</Title>
                <table className='table'>
                    <thead>
                        <Tr>
                            <Th>Bet 1</Th>
                            <Th>Bet 2</Th>
                            <Th>Bet 3</Th>
                            <Th>Bet 4</Th>
                            <Th>Bet 5</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {this.state.bets.map((item) => (
							<Tr>
                                <Td>{item.bet1}</Td>
                                <Td>{item.bet2}</Td>
                                <Td>{item.bet3}</Td>
                                <Td>{item.bet4}</Td>
                                <Td>{item.bet5}</Td>
							</Tr>

						))}
                    </tbody>
                </table>
            </Wrapper>
        )
    }
}