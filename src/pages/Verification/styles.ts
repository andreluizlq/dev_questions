import styled from 'styled-components';


export const Image = styled.img`
    position: absolute;
    bottom: 0;
`;

export const VerificationBlock = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    text-align: center;

    margin-top: 12.5rem;

    h2{
        color: var(--white);
        font-size: 2.5rem;
    }
`;

export const ButtonBlock = styled.div`
    margin-top: 3.125rem;

    button{
        margin: 0 1.875rem;
    }
`;