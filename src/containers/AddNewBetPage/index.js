import React from 'react';
import { Wrapper } from './styles';
import BetField from '../../components/bigComponents/BetField/index';

class AddNewBet extends React.Component{
    render(){
        return(
            <Wrapper>
                <BetField/>
            </Wrapper>
        )
    }
}

export default AddNewBet;