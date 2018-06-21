import React from 'react';
import { Wrapper, ButtonWrapper, Tip, Icon } from './styles';
import plus from '../../img/plus.png';
import actual from '../../img/actual.png';
import history from '../../img/history.png';
import ReactTooltip from 'react-tooltip';
import AddNewBetPage from '../AddNewBetPage/index';
import ActualBetsPage from '../ActualBetsPage';
import BetsHistoryPage from '../BetsHistoryPage';

class Bets extends React.Component {

    state = {
        addNewBet: false,
        actualBets: false,
        betsHistory: false
    }

    handleNewBet = () => {
        this.setState({
            addNewBet: true,
            actualBets: false,
            betsHistory: false
        });
    }

    getActualBets = () => {
        this.setState({
            addNewBet: false,
            actualBets: true,
            betsHistory: false
        });
    }

    getHistoryBets = () => {
        this.setState({
            addNewBet: false,
            actualBets: false,
            betsHistory: true
        });
    }

    render(){
        if(this.state.addNewBet){
            return(
                <Wrapper>
                    <AddNewBetPage />
                </Wrapper>
            )
        }

        if(this.state.actualBets){
            return(
                <Wrapper>
                    <ActualBetsPage />
                </Wrapper>
            )
        }

        if(this.state.betsHistory){
            return(
                <Wrapper>
                    <BetsHistoryPage />
                </Wrapper>
            )
        }
            return(
                <Wrapper>
                <ButtonWrapper>
                    <ReactTooltip id='plusButton' effect='solid' place='bottom' type='light' >
                        <Tip>NEW BET</Tip>
                    </ReactTooltip>
                    <Icon onClick={this.handleNewBet} data-tip data-for='plusButton' src={plus}/>

                    <ReactTooltip id='actual' effect='solid' place='bottom' type='light' >
                        <Tip>ACTUAL BETS</Tip>
                    </ReactTooltip>
                    <Icon onClick={this.getActualBets} data-tip data-for='actual' src={actual}/>

                    <ReactTooltip id='history' effect='solid' place='bottom' type='light' >
                        <Tip>BETS HISTORY</Tip>
                    </ReactTooltip>
                    <Icon onClick={this.getHistoryBets} data-tip data-for='history' src={history}/>
                </ButtonWrapper>
            </Wrapper>
        )
    }
}

export default Bets;