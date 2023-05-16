import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import CriaLista from '@screens/CriaLista'
import Historico from '@screens/Historico'
import Home from '@screens/Home'
import ListasAbertas from '@screens/ListasAbertas'

type AppRoutes = {
    home: undefined
    new_list: undefined
    open_list: undefined
    historic: undefined
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>()

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}
        >
            <Screen name="home" component={Home} />

            <Screen name="new_list" component={CriaLista} />

            <Screen name="open_list" component={ListasAbertas} />

            <Screen name="historic" component={Historico} />
        </Navigator>
    )
}
