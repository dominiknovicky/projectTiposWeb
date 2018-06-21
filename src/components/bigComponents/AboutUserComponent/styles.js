import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: inline-block;
    height:100%;
    background: rgb(230,230,230);
`;

export const Header = styled.div`
    width: calc(100% - 50px);
    font-size: 22px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    padding: 12px 25px;
    background: #D47A0F;
`;

export const InfoWrapper = styled.div`
    padding:25px;
`;

export const TextWrapper = styled.div`
    padding-bottom: 15px;
    &:last-child{
        padding-bottom: 0;
    }
`;

export const Title = styled.div`
    font-size: 19px;
    font-weight: bold;
`;

export const Text = styled.div`
    font-size: 17px;
`;

export const StyledButton = styled.button`
    width: 200px;
    text-transform: uppercase;
    font-size: 17px;
    font-weight: bold;
    background: #D47A0F;
    border: 1px solid #d47a0f;
    color: #ffffff;
    padding: 10px 25px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover{
        background: #fff;
        color: #D47A0F;
    }
`;