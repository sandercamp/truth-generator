import React from 'react';
import styled from 'styled-components';

const Header = ({ className }: JSX.IntrinsicElements['header']) => (
    <header
        className={ className }
    >
        <span>Truth Generator</span>
    </header>
);

export default styled(Header)`
    grid-area: head;
    
    display:         flex;
    justify-content: center;
    align-items:     center;
   
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      
    background-color: ${({ theme }) => theme.backgroundColor };  
          
    font-size:      2.75rem;
    font-weight:    bold;
    text-transform: uppercase;
    letter-spacing: .2rem;
 
    & > span {
        border-bottom: .25rem solid ${({ theme }) => theme.secondaryColor };
        border-top:    .25rem solid ${({ theme }) => theme.secondaryColor };
        padding:       0 2rem 0 2rem;
    }
`;
