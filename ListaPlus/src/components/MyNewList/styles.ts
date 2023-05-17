import { styled } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    width: 100%;
`

export const Header = styled.TouchableOpacity`
    width: 100%;

    padding: ${RFValue(10)}px ${RFValue(16)}px;

    border-width: ${RFValue(5)}px;
    border-color: ${({ theme }) => theme.colors.gray};

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: ${RFValue(20)}px;
    background-color: ${({ theme }) => theme.colors.shape};
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14.5)}px;
    color: ${({ theme }) => theme.colors.text_dark};
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text_dark};
`
export const EmptyText = styled.Text`
    margin-top: ${RFValue(10)}px;
    align-self: center;

    font-family: ${({ theme }) => theme.fonts.light};
    font-size: ${RFValue(14.5)}px;
    color: ${({ theme }) => theme.colors.text};
`
