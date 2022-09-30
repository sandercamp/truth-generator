import React, { useEffect, useState } from 'react';
import RandomQuote from '../molecules/RandomQuote';
import Default from '../templates/Default';
import Quotes from '../organisms/Quotes';

const Page = () => (
    <Default>
        <RandomQuote />
    </Default>
);

export default Page;
