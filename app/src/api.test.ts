import fetchMock from 'jest-fetch-mock';

import { fetchGeneric, fetchPersonal, fallbackQuotes, fetchAllGeneric, Quotes } from './api';

fetchMock.enableMocks();

const mockQuote = { message: 'Test' };
const mockInvalidQuote = { massage: 'Test' };

const mockQuotes: Quotes = {
    messages: {
        personalized: [
            'Personalized'
        ],
        non_personalized: [
            'Non personalized'
        ]
    }
};

beforeEach(() => {
    fetchMock.resetMocks();

    jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('API tests', () => {
    test('Returns a single generic quote', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(mockQuote));

        const response = await fetchGeneric();

        expect(response).toEqual(mockQuote);
    });

    test('Returns all generic quotes', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(mockQuotes));

        const response = await fetchAllGeneric();

        const result = [
            {
                message: 'Non personalized'
            }
        ];

        expect(response).toEqual(result);
    });

    test('Returns a fallback quote when response contains unexpected JSON', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(mockInvalidQuote));

        const response = await fetchGeneric();

        expect(response).toBeOneOf(fallbackQuotes);
    });

    test('Returns all fallback quotes when response contains unexpected JSON', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(mockInvalidQuote));

        const response = await fetchAllGeneric();

        expect(response).toEqual(fallbackQuotes);
    });

    test('Returns a fallback quote when fetch fails', async () => {
        fetchMock.mockReject(new Error('Something went wrong'));

        const response = await fetchGeneric();

        expect(response).toBeOneOf(fallbackQuotes);
    });
});
