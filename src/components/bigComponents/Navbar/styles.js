import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
    width: 20%;
    height: 100vh;
    position:fixed;
    display: inline-block;
    `;
    
    export const StyledLink = styled(NavLink)`
    text-transform: uppercase;
    text-decoration: none;
    font-size: 20px;
    color: #D47A0F;
    letter-spacing: .5px;
    width:100%;
    height: 33.3333vh;
    line-height: 33.3333vh;
    text-align: center;
    display: table;
    background: rgb(230,230,230);
    border-bottom: 2px solid #fff;
    transition: all .2s ease-in-out;
    &:last-child{
        border-bottom: 0;
    }
`;