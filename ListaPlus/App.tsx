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
import { AuthRoutes } from '@routes/auth.routes'
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from '@routes/app.routes'

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_300Light,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
    })

    return (
        <NavigationContainer>
            <ThemeProvider theme={theme}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="transparent"
                    translucent
                />
                {fontsLoaded ? <AppRoutes /> : <Loading />}
            </ThemeProvider>
        </NavigationContainer>
    )
}
