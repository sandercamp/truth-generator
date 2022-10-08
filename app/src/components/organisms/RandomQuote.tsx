import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { fetchGeneric, Quote } from '../../api';

import Truth from '../atoms/Truth';
import Button from '../atoms/Button';
import Rating from '../molecules/Rating';
import Actions from '../molecules/Actions';

const timeInSeconds = (): number => Math.floor(Date.now() / 1000);

const RandomQuote = ({ className }: JSX.IntrinsicElements['div']) => {
    const [ requestedAt, setRequestedAt ] = useState<number>(timeInSeconds());
    const [ quote, setQuote ] = useState<Quote|null>(null);

    useEffect(
        () => {
            fetchGeneric().then(setQuote)
        },
        [ requestedAt ]
    );

    if (quote === null) {
        return null;
    }

    return (
        <div
            className={ className }
        >
            <Truth
                quote={ quote }
            />

            <Actions>
                <Button
                    onClick={ () => setRequestedAt(timeInSeconds()) }
                >
                    Tell me more
                </Button>

                <Rating
                    key={ requestedAt }
                    quote={ quote }
                />
            </Actions>
        </div>
    );
};

export default styled(RandomQuote)`
    display:         flex;
    flex-direction:  column;
    align-items:     center;
    justify-content: center;
       
    margin:     auto;
    box-sizing: border-box;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    margin-top: 5rem;
    width:      fit-content;
    min-width:  25rem;
    max-width:  50rem;
    padding:    2rem;
    
    @media only screen and (max-width: 600px), screen and (max-height: 600px) {
        margin-top: 1rem;
    }
    
    background-color: ${({ theme }) => theme.backgroundColor };
`;
