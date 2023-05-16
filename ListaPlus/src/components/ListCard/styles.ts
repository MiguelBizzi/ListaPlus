import { styled } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    width: 100%;
    margin-bottom: ${RFValue(24)}px;
`

export const Header = styled.TouchableOpacity`
    padding: ${RFValue(12)}px ${RFValue(10)}px;

    flex-direction: row;

    border-radius: ${RFValue(20)}px;

    background-color: ${({ theme }) => theme.colors.shape};
`

export const IconContainer = styled.View`
    width: ${RFValue(50)}px;

    justify-content: center;
    align-items: center;

    border-radius: ${RFValue(50)}px;

    background-color: ${({ theme }) => theme.colors.gray};
`

export const Icon = styled(Feather)`
    margin-left: -${RFValue(2)}px;

    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(25)}px;
`

export const Info = styled.View`
    flex: 1;

    justify-content: space-between;

    margin-left: ${RFValue(8)}px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`

export const Date = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.light};
`

interface StatusProps {
    isFinished: boolean
}

export const Status = styled.Text<StatusProps>`
    color: ${({ theme, isFinished }) =>
        isFinished ? theme.colors.attention : theme.colors.success};
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`

export const ButtonsGroup = styled.View`
    justify-content: space-between;
    margin-right: ${RFValue(10)}px;
`

export const Button = styled.TouchableOpacity`
    padding: ${RFValue(4)}px;

    border-radius: ${RFValue(5)}px;
    background-color: ${({ theme }) => theme.colors.primary};
`

export const ButtonIcon = styled(Feather)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(15)}px;
`

export const ListContainer = styled.View``
