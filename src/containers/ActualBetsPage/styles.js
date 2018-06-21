import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    // background: rgb(230,230,230);
    box-shadow: 0 0 5px 2px rgb(200,200,200);
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

export const Tr = styled.tr`
    background: rgb(230,230,230);
    &:nth-child(even){
        background: rgb(240,240,240);
    }
`;

export const Td = styled.td`
    text-align: center;
    padding: 5px 0;
`;


export const Th = styled.th`
    background: rgb(200,200,200);
    padding: 10px 0;
    text-transform: uppercase;
`;

export const LoaderWrapper = styled.div`
    background-color: rgba(255,255,255,.7);
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
`;

export const LoadingImage = styled.img`
	  width: 100px;
	  position: absolute;
	  top: 0; left: 0; right: 0; bottom: 0;
	  margin: auto;
`;

export const StyledInput = styled.input`
    width: 50px;
    text-align:center;
    outline: 0;
    &:focus{
        border: 1px solid #D47A0F;
    }
    margin: 15px;
`;