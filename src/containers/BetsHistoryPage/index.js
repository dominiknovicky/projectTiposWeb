import React, {Component} from 'react';
import { Wrapper, Title, Tr, Th, Td,LoaderWrapper,LoadingImage, StyledInput } from '../ActualBetsPage/styles';
import './style.css';
import axios from 'axios';
import loading from '../../img/loading.gif';
import { NoContent } from './styles';

export default class BetsHistoryPage extends Component {
    state = {
        userData: [],
        bets: [],
        draw: [],
        loading:true,
        drawNumber: null
    }
    
    componentWillMount(){
        this.getUserData();
    }

    getDrawNumber = event => {
        this.setState({drawNumber:event.target.value}, ()=>{
            this.getTicketsByDrawId();
            this.getDrawNumbers();
        });
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
                url: "/bets/all",
                data: form,
                config: { headers: { "Content-Type": "aplication/json" } }
            });
            this.setState({bets:response.data.tickets}, ()=>{
                this.setState({loading: false});
            });
        } catch (err) {
            alert("Something went wrong. Try again.");
        }
    }

    getTicketsByDrawId = async() => {
        try {
            const response = await axios({
                method: "get",
                url: `/bets/tickets/draw/${this.state.drawNumber}`,
                config: { headers: { "Content-Type": "aplication/json" } }
            });
            this.setState({bets:response.data.tickets}, ()=>{
                this.setState({loading: false});
            });
        } catch (err) {
            alert("Something went wrong. Try again.");
        }
    }

    getDrawNumbers = async() => {
        const id = this.state.drawNumber;
        if(id !== null){

            try {
                const response = await axios({
                    method: "get",
                    url: `/draw/${id}`,
                    config: { headers: { "Content-Type": "aplication/json" } }
                });
                this.setState({draw:response.data},()=>{
                    
                    for (let index = 0; index < this.state.bets.length; index++) {
                        console.log(this.state.bets[index]);
                    }
                });
            } catch (err) {
                alert("Something went wrong. Try again.");
            }
        }
        else {
            alert('null');
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
        
        if(this.state.bets.length === 0 || this.state.bets.length === undefined ){
            return(
                <Wrapper>
                <Title>Bets History</Title>
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
                </table>
                <NoContent>No Content</NoContent>
                <StyledInput onChange={this.getDrawNumber} type='number'/>
            </Wrapper>
            )
        }

        return(
            <Wrapper>
                <Title>Bets History</Title>
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
                <StyledInput onChange={this.getDrawNumber} type='number'/>
            </Wrapper>
        )
    }
}