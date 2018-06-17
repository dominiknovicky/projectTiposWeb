import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    margin: auto;
`;

export const StyledInput = styled.input`
    width: calc(100% - 51px);
    height: 45px;
    padding: 0 25px;
    font-size: 15px;
    border: 1px solid rgb(210,210,210);
    margin-bottom: 10px;
    outline: 0;
    display: inline-block;
    &:focus{
        border: 1px solid #D47A0F;
    }
    &:last-child{
        width: 100%;
        background: #D47A0F;
        border: 1px solid #D47A0F;
        font-size: 17px;
        letter-spacing: 1px;
        color: #fff;
        margin-top: 9px;
        transition: all .2s ease-in-out;
        &:hover{
            background: #fff;
            color: #D47A0F;
        }
    }
`;

export const InputWrapper = styled.div`
    border: 2px solid #D47A0F;
    padding: 35px;
    position: relative;
`;