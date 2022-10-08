import styled from 'styled-components';

export default styled.button`
   outline: none;
 
   border:        none;
   border-radius: .25rem;
   width:         fit-content; 
   padding:       .5rem;

   background-color: ${({ theme }) => theme.primaryColor };

   font-family: inherit;
   font-size:   1rem;
   color:       white;
   
   box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
   
    &:not(:disabled) {
        cursor: pointer;
    
        &:hover {
            background-color: ${({ theme }) => theme.secondaryColor };
        }
    }
`;
