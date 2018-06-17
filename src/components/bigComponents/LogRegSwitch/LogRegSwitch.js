import React from "react";
import { StyledWrapper, StyledLink } from "./styles";

const LogRegSwitch =(props) => (

        <StyledWrapper>

            <StyledLink to="/login" 
                activeStyle={{
                    background:"#D47A0F",
                    color:"#fff",
                    border: '3px solid #D47A0F',
                    fontSize: 21,
                    fontWeight:"bold"
                    }}>
            Sign In</StyledLink>
            <StyledLink to="/registration" 
                activeStyle={{
                    background:"#D47A0F",
                    color:"#fff",
                    border: '3px solid #D47A0F',
                    fontSize: 21,
                    fontWeight:"bold"
                    }}>
            Register</StyledLink>

        </StyledWrapper>
    );

export default LogRegSwitch;
