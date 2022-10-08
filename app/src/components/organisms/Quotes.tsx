import React, { useEffect, useState } from 'react';

import { fetchAllGeneric, Quote } from '../../api';

import Truth from '../atoms/Truth';

const Quotes = () => {
    const [ quotes, setQuotes ] = useState<Array<Quote>>([]);

    useEffect(
        () => {
            fetchAllGeneric().then(setQuotes)
        },
        [ ]
    );

    if (quotes.length === 0) {
        return null;
    }

    return (
        <div>
            {
                quotes.map(quote => (
                    <Truth quote={ quote } />
                ))
            }
        </div>
    );
};

export default Quotes;
