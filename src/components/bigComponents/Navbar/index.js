import React from "react";
import { Wrapper, StyledLink } from "./styles";

const Navbar =(props) => (
        <Wrapper>
            <StyledLink
                to='/user/profile'
                activeStyle={{
                    background:"#D47A0F",
                    color:"#fff",
                    fontSize: 21,
                    fontWeight:"bold"
                    }}>Profile</StyledLink>
            <StyledLink
                to='/user/bets'
                activeStyle={{
                    background:"#D47A0F",
                    color:"#fff",
                    fontSize: 21,
                    fontWeight:"bold"
                    }}>Bets</StyledLink>
            <StyledLink
                to='/user/draws'
                activeStyle={{
                    background:"#D47A0F",
                    color:"#fff",
                    fontSize: 21,
                    fontWeight:"bold"
                    }}>Draws</StyledLink>
        </Wrapper>
    );

export default Navbar;
