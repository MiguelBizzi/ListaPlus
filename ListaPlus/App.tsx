import Login from '@screens/Login'
import React from 'react'
import theme from './src/global/styles/theme'
import { ThemeProvider } from 'styled-components'
import Start from '@screens/Start'
import { StatusBar } from 'react-native'

import {
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    useFonts,
} from '@expo-google-fonts/roboto'
import Loading from '@components/Loading'
import Cadastro from '@screens/Cadastro'

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_300Light,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
    })

    return (
        <ThemeProvider theme={theme}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            {fontsLoaded ? <Login /> : <Loading />}
        </ThemeProvider>
    )
}
