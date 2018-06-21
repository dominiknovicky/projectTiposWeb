import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display:inline-block;
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 0; right: 0; bottom: 0;
    margin: auto;
    width:80%;
    text-align: center;
    height: 100px;
`;

export const Icon = styled.img`
    height: 100px;
    cursor: pointer;
    padding: 0 40px;
`;

export const Tip = styled.span`
    color: #D47A0F;
    font-size: 17px;
    font-weight: bold;
    transition: all .15s ease-in-out;
    letter-spacing: .5px;
`;