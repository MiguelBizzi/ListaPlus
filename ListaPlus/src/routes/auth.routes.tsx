import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import Login from '@screens/Login'
import Cadastro from '@screens/Cadastro'
import Start from '@screens/Start'

type AuthRoutes = {
    start: undefined
    login: undefined
    cadastro: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}
        >
            <Screen name="start" component={Start} />

            <Screen name="login" component={Login} />

            <Screen name="cadastro" component={Cadastro} />
        </Navigator>
    )
}
