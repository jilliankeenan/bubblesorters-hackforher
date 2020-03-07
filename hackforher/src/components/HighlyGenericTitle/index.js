import styled from 'styled-components';

export default styled.h2`
    margin-top: 0;

    ${({ isPadded }) => isPadded && `
        padding: 2rem;
    `}
`;
