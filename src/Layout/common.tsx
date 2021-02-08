import styled, { css } from 'styled-components';
import ScaleLoader from "react-spinners/ScaleLoader";

export const FLEX_CENTER_STYLE = {
    display: 'flex',
    justifyContent: 'center'
};

export const StyledAuthorSpan = styled.span`
    text-decoration: underline;
`;

export const StyledComments = styled.div`
    margin-top:15px;
    color: lightgray;
    :hover {
        color: white;
    }
`;

export const StyledAuthorHeader = styled.header`
    font-size: 14px;
    color: lightgray;
`;

export const StyledCenteredDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const Spinner = ({ loading }) => {
    return <ScaleLoader color={'red'} loading={loading} height={50} width={10} radius={2} margin={2} />
};

export const Button = styled.button`
    color: white;
    background-color: orangered;
    border: none;
    padding: 10px 15px;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin-left: 10px;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    transition-duration: 0.4s;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

    :hover {
        color: orangered;
        background-color: white;        
    }

    @media only screen and (max-width: 450px) {
        font-size: 12px;
    }

    ${({loading}) => loading && css`
        opacity: 0.6;
        cursor: not-allowed;
    `}
`;