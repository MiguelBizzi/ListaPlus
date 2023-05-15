import { css, styled } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

export const Label = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.text};
`

interface ErrorProps {
    error: boolean
}

export const InputGroup = styled.View<ErrorProps>`
    margin: ${RFValue(10)}px 0 0;

    flex-direction: row;
    align-items: center;

    border-radius: ${RFValue(20)}px;

    ${({ error }) =>
        error &&
        css`
            border-width: ${RFValue(1)}px;
            border-color: ${({ theme }) => theme.colors.attention};
        `}
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

export const Icon = styled(Feather)<ErrorProps>`
    font-size: ${RFValue(17)}px;
    color: ${({ theme, error }) =>
        error ? theme.colors.attention : theme.colors.text};
`

export const Error = styled.Text`
    margin-bottom: ${RFValue(16)}px;
    margin-top: ${RFValue(5)}px;

    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.attention};
`
