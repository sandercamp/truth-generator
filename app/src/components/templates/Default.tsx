import React from 'react';
import styled from 'styled-components';

type Props = {
    children?: React.ReactNode,
}

const Default = ({ children, ...rest }: Props) => (
    <main { ...rest }>
        { children }
    </main>
);

export default styled(Default)`
    display: flex;

    align-items:     center;
    justify-content: center;

    height: 100vh;
`;
