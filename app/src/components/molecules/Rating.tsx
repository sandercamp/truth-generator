import React, {useContext, useEffect, useState} from 'react';
import styled, { ThemeContext } from 'styled-components';

import { Quote } from '../../api';
import { useRatings } from '../../context/Ratings';

import Star from '../atoms/Star';

type Props = {
    quote: Quote
}

const Rating = ({ className, quote }: JSX.IntrinsicElements['div'] & Props) => {
    const theme = useContext(ThemeContext);
    const { findRating, updateRating } = useRatings();
    const [ rating, setRating ] = useState<number>(0);

    useEffect(
        () => {
            setRating(findRating(quote));
        },
        [ quote ]
    )

    return (
        <div
            className={ className }
        >
            {
                [1, 2, 3, 4, 5].map(key => (
                    <Star
                        key={ key }
                        fill={ rating >= key ? theme.primaryColor : theme.backgroundColor }
                        stroke={ theme.primaryColor }
                        onClick={ () => {
                            setRating(key);
                            updateRating(quote, key);
                        } }
                    />
                ))
            }
        </div>
    );
};

export default styled(Rating)`
    display:     flex;
    gap:         .2rem;
   
    height: 1.25rem;
    
    &:hover {
        & > svg {
            cursor: pointer;

            fill: ${({ theme }) => theme.primaryColor };
        }
    }
    
    & > svg {
        &:hover {
            & ~ svg {
                fill: white };
            }
        }
    }
`;
