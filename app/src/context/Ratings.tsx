import React, { createContext, useContext, useState, useEffect } from 'react';
import { Quote } from '../api';

type Rating = {
    message: string,
    rating: number
}

type ProviderProps = {
    children: React.ReactNode
}

type RatingsContext = {
    ratings: Array<Rating>
    findRating: (quote: Quote) => number,
    updateRating: (quote: Quote, rating: number) => void
}

const Context = createContext<RatingsContext>({
    ratings: [],
    findRating: (quote: Quote) => 0,
    updateRating: (quote: Quote, rating: number) => {},
});

const hasLocalStorage = () => window && 'localStorage' in window;

const toLocalStorage = (key: string, value: string): void => {
    if (!hasLocalStorage()) {
        return;
    }

    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.error(e);
    }
}

const fromLocalStorage = (key: string): Array<Rating> => {
    if (!hasLocalStorage()) {
        return [];
    }

    const storedItem = window.localStorage.getItem(key);

    if (!storedItem) {
        return [];
    }

    try {
        return JSON.parse(storedItem);
    } catch (e) {
        console.error(e);

        return [];
    }
}

/**
 * Context in which the ratings are stored. Normally I would create a separate backend to store ratings per user, but
 * due to time constraints I use the browser's local storage (if available) to demonstrate the functionality
 */
const Provider = ({ children }: ProviderProps) => {
    const [ ratings, setRatings ] = useState<Array<Rating>>(fromLocalStorage('ratings'));

    const findRating = (quote: Quote): number => ratings.find(rating => rating.message === quote.message)?.rating ?? 0;

    const updateRating = (quote: Quote, rating: number) => setRatings(
    [
            ...ratings.filter(rating => rating.message !== quote.message),
            ...[{ message: quote.message, rating: rating }]
        ]
    );

    useEffect(
        () => {
            toLocalStorage('ratings', JSON.stringify(ratings));
        },
        [ ratings ]
    )

    return (
        <Context.Provider
            value={
                {
                    ratings,
                    findRating,
                    updateRating
                }
            }
        >
            { children }
        </Context.Provider>
    );
}

export const useRatings = () => useContext(Context);

export default Provider;
