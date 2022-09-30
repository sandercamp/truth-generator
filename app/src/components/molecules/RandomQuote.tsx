import React, { useEffect, useState } from 'react';

import {fetchGeneric, fetchPersonal, Quote} from '../../api';

import Truth from '../atoms/Truth';

const RandomQuote = () => {
    const [ requestedAt, setRequestedAt ] = useState<Date>(new Date());
    const [ quote, setQuote ] = useState<Quote|null>(null);

    useEffect(
        () => {
            fetchPersonal('Sander').then(setQuote)
        },
        [ requestedAt ]
    );

    if (quote === null) {
        return null;
    }

    return (
        <div>
            <Truth quote={ quote } />

            <button></button>
        </div>
    );
};

export default RandomQuote;
