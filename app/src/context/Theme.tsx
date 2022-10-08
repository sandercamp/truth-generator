import React from 'react';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';

const theme = {
    primaryColor: '#0A3161',
    secondaryColor: '#B31942',

    backgroundColor: '#FFFFFF',
};

type Props = {
    children?: React.ReactNode,
}

const Theme = ({ children }: Props) => (
    <BaseThemeProvider
        theme={ theme }
    >
        { children }
    </BaseThemeProvider>
);

export default Theme;
