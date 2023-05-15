import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useTheme } from 'styled-components/native'

const Loading: React.FC = () => {
    const theme = useTheme()
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <ActivityIndicator color={theme?.colors.primary} />
        </View>
    )
}

export default Loading
