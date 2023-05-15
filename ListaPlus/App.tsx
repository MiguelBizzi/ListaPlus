import Login from '@screens/Login'
import React from 'react'
import theme from './src/global/styles/theme'
import { ThemeProvider } from 'styled-components'

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Login />
        </ThemeProvider>
    )
}
