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

    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                {user ? <AppRoutes /> : <AuthRoutes />}
            </NavigationContainer>
        </View>
    )
}
