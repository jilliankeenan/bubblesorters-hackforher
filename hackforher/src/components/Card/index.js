import styled from 'styled-components';

export const Card = styled.div`
    ${({isFlex, width, noShadow }) => `
        padding: .8rem;
        width: ${width};
        background: white;
        box-shadow: ${noShadow ? '' : '0 10px 20px rgba(0,0,0,0.19), 0 16px 18px rgba(0,0,0,0.23)'};
        margin: 1rem;
        min-height: 300px;
        border-radius: .5rem;

        ${isFlex && `
            padding: 0;
            display: flex;
            justify-content: space-around;
        `}
    `}
`;
