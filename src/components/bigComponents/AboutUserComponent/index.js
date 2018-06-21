import React from 'react';
import { Wrapper, Header, InfoWrapper, Title, Text, TextWrapper, StyledButton } from './styles';


class AboutUserPage extends React.Component{
    render(){
        return(
            <Wrapper>
                <Header>Personal Information</Header>
                <InfoWrapper>
                    <TextWrapper>
                        <Title>First Name:</Title>
                        <Text>{this.props.firstName}</Text>
                    </TextWrapper>
                    <TextWrapper>
                        <Title>Last Name:</Title>
                        <Text>{this.props.lastName}</Text>
                    </TextWrapper>
                    <TextWrapper>
                        <Title>Login:</Title>
                        <Text>{this.props.login}</Text>
                    </TextWrapper>
                    <TextWrapper>
                        <Title>E-mail address:</Title>
                        <Text>{this.props.email}</Text>
                    </TextWrapper>
                    <StyledButton onClick={this.props.click}>Logout</StyledButton>
                </InfoWrapper>
            </Wrapper>
        )
    }
}

export default AboutUserPage;