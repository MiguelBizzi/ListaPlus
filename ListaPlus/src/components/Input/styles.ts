import { styled } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

export const Label = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.text};
`

export const InputGroup = styled.View`
    margin: ${RFValue(10)}px 0 ${RFValue(16)}px;

    flex-direction: row;
    align-items: center;
`

export const InputComponent = styled.TextInput`
    width: 100%;

    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};

    background-color: ${({ theme }) => theme.colors.gray_light};
    border-radius: ${RFValue(20)}px;

    padding: ${RFValue(8)}px ${RFValue(16)}px;
    padding-right: ${RFValue(24 + 16)}px;
`

export const IconButton = styled.TouchableOpacity`
    position: absolute;
    right: ${RFValue(16)}px;
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(17)}px;
    color: ${({ theme }) => theme.colors.text};
`
