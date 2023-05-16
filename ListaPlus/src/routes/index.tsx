import Loading from '@components/Loading'
import { useAuth } from '@hooks/auth'
import { View } from 'react-native'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { NavigationContainer } from '@react-navigation/native'

export function Routes() {
    const { user, isLoadingUserStorageData } = useAuth()

    if (isLoadingUserStorageData) {
        return <Loading />
    }

    console.log(user)

    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                {!user ? <AuthRoutes /> : <AppRoutes />}
            </NavigationContainer>
        </View>
    )
}
