import styled, { css } from 'styled-components';

export const QuestionsBlock = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5.5rem;
`;

export const QuestionsContent = styled.div`
    display: flex;
    justify-content: center;
`;

export const AlternativesBlock = styled.div`
    color: var(--white);
    width: 39.375rem;

    #active{
        border: 3px solid var(--orange-800)
    }

    #linear{

        .MuiLinearProgress-barColorPrimary{
            background-color: var(--orange-1000);
        }

        background-color: var(--blue-1000);
        padding: 6px;
        border-radius: 8px;
        margin-bottom: 40px;
        color: var(--orange-1000);
    }

`;

export const Questions = styled.h2`
    font-size: 1.375rem;
    margin-bottom: 2.5rem;
    text-align: justify;
`;

export const AlternativeButton = styled.button`
    display: flex;
    width: 100%;
    
    font-size: 1.25rem;
    padding: 1.25rem;
    background-color: var(--blue-1000);
    margin-top: 1.25rem;
    cursor: pointer;
    border-radius: 8px;

    ${({active}) => active && css`
        border: 3px solid red;
    `}
`;

export const Loading = styled.h2`
    color: var(--white);
    font-size: 1.875rem;
`;

export const Button = styled.button`
    background-color: var(--orange-800);
    margin-top: 4.5rem;
    border-radius: 8px;
    width: 12.5rem;
    height: 3.75rem;
    font-size: 1.25rem;
    transition: 0.4s;
    box-shadow: 0px 4px 4px rgba(0, 0, 0,0.25);
    color: var(--white);
    float: right;
    margin-right: -100px;

    &:hover{
        background-color: var(--orange-1000);
    }
`;

export const Image = styled.img`
    position: absolute;
    bottom: 0;
`;
