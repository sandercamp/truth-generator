import React from 'react';
import styled from 'styled-components';

import Header from '../organisms/Header';
import Main from '../organisms/Main';

type Props = {
    children?: React.ReactNode,
}

const Default = ({ children, ...rest }: Props) => (
    <div { ...rest }>
        <Header/>
        <Main>
            { children }
        </Main>
    </div>
);

export default styled(Default)`
    display: grid;
    grid-template-areas:
        "head"
        "main";
    grid-template-rows: 9rem calc(100vh - 9rem);
   
    transition: all 1s;
 
    background-size: cover;
    background-image: url('assets/images/extra-large.jpg');
    background-position: center;
    background-repeat: no-repeat;
`;
