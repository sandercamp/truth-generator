import { z } from 'zod';

const Quote = z.object({
    message: z.string(),
});

const Quotes = z.object({
    messages: z.object({
        non_personalized: z.array(z.string()),
        personalized: z.array(z.string())
    })
});

export type Quote = z.infer<typeof Quote>;
export type Quotes = z.infer<typeof Quotes>;

export const fallbackQuotes: Array<Quote> = [
    { message: 'Private jets cost a lot of money.' },
    { message: 'Why can’t we use nuclear weapons?' },
    { message: 'I love the poorly educated.' },
    { message: 'The beauty of me is that I\'m very rich.' },
    { message: 'I have a great relationship with the blacks.' },
];

const randomFallbackQuote = (): Quote => fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];

const baseUrl = 'https://api.whatdoestrumpthink.com/api';

export const fetchAllGeneric = (): Promise<Array<Quote>> => {
    const url = `${ baseUrl }/v1/quotes`;

    return fetch(url)
        .then(response => {
            if (response.status !== 200) {
                throw new Error(`Expected status 200, received ${ response.status }`);
            }

            return response.json()
        })
        .then(json => Quotes
            .parse(json).messages.non_personalized
            .map(zString => ({ message: zString.toString() }))
        )
        .catch(e => {
            console.error(e);

            return fallbackQuotes;
        })
};

export const fetchGeneric = (): Promise<Quote> => {
    const url = `${ baseUrl }/v1/quotes/random`;

    return fetch(url)
        .then(response => response.json())
        .then(json => Quote.parse(json))
        .catch(e => {
            console.error(e);

            return randomFallbackQuote();
        });
};

export const fetchPersonal = (name: string): Promise<Quote> => {
    const query = new URLSearchParams({ q: name }).toString();
    const url = `${ baseUrl }/v1/quotes/personalized?${ query }`;

    return fetch(url)
        .then(response => response.json())
        .then(json => Quote.parse(json))
        .catch(e => {
            console.error(e);

            return randomFallbackQuote();
        });
};
