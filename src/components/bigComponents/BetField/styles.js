import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 60%;
    display: inline-block;
    height: 665px;
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;
    margin: auto;
    background: rgb(230,230,230);
    box-shadow: 0 0 5px 2px rgb(200,200,200);
`;
    
export const Wip = styled.div`
    text-align: left;
    width: 518px;
    margin: auto;
    padding-top: 20px;
`;

export const Dropable = styled.div`
    width: 500px;
    height: 90px;
    line-height: 90px;
    background: rgb(230,230,230);
    border: 2px dotted rgb(140,140,140);
    border-radius: 10px;
    margin: 20px auto;
`;

export const Number = styled.span`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    line-height: 60px;
    display: inline-block;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    background: rgb(212,122,15);
    color: white;
    margin: 5px;
    border: 2px solid white;
    position: relative;
    z-index:100;
    box-shadow: 0 0 7px 1px rgb(140,140,140);
    &:nth-child(odd){
        background: #f1a950;
    }
`;

export const Title = styled.div`
    width: calc(100% - 50px);
    text-transform: uppercase;
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    background: rgb(100,100,100);
    color: white;
    padding: 20px 25px;
`;

export const Submit = styled.input`
    width: 500px;
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

export const SubmitDisabled = styled.input`
    width: 500px;
    text-transform: uppercase;
    font-size: 17px;
    font-weight: bold;
    background: rgba(212, 122, 15, .5);
    border: 0;
    color: #ffffff;
    padding: 10px 25px;
`;

export const DragItHere = styled.div`
    font-size: 18px;
    color: rgb(140,140,140);
`;