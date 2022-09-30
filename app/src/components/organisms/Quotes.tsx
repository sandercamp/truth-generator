import React, { useEffect, useState } from 'react';

import { fetchAll, Quote } from '../../api';

import Truth from '../atoms/Truth';

const Quotes = () => {
    const [ quotes, setQuotes ] = useState<Array<Quote>>([]);

    useEffect(
        () => {
            fetchAll().then(setQuotes)
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
