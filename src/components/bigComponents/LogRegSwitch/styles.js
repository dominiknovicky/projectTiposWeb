import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const StyledWrapper = styled.div`
    width: 100%;
    display: inline-block;
    transition: all .2s ease-in-out;
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    display: inline-block;
    text-align: center;
    width: calc(50% - 6px);
    border: 3px solid rgb(255,255,255);
    height: 65px;
    line-height: 67px;
    margin-bottom: -1px;
    font-size: 19px;
    letter-spacing: 1px;
    cursor: pointer;
    background-color: rgb(255,255,255);
    color: #828282;
    transition: all .2s ease-in-out;
    &:hover{
        text-decoration: none;
    }
    &:focus{
        text-decoration: none;
    }
`;