import styled from 'styled-components';

export const ButtonBlock = styled.button`
        background-color: var(--orange-800);
        border-radius: 8px;
        height: 3.75rem;
        width: 12.5rem;
        font-size: 1.25rem;
        transition: 0.4s;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: var(--white);

        &:hover{
            background-color: var(--orange-1000);
        }
`;
