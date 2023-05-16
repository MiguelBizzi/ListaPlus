import React from 'react'
import theme from './src/global/styles/theme'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'

import {
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    useFonts,
} from '@expo-google-fonts/roboto'
import Loading from '@components/Loading'
import { AuthProvider } from '@hooks/auth'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { Routes } from '@routes/index'

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_300Light,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
    })

    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="transparent"
                    translucent
                />
                {fontsLoaded ? <Routes /> : <Loading />}
            </AuthProvider>
            <Toast />
        </ThemeProvider>
    )
}
