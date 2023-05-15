import { styled } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity`
    width: 100%;

    border-radius: ${RFValue(40)}px;

    margin-bottom: ${RFValue(24)}px;
    padding: ${RFValue(5)}px ${RFValue(5)}px;

    background-color: ${({ theme }) => theme.colors.primary};
`

export const Outline = styled.View`
    padding: ${RFValue(5)}px ${RFValue(5)}px;

    background-color: ${({ theme }) => theme.colors.outline_color};
    border-radius: ${RFValue(30)}px;
`

export const Content = styled.View`
    border-radius: ${RFValue(20)}px;
    padding: ${RFValue(5)}px ${RFValue(8)}px;

    flex-direction: row;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.shape};
`

export const IconCircle = styled.View`
    padding: ${RFValue(5)}px;

    border-radius: ${RFValue(15)}px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.primary_light};
`

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(17)}px;
`

export const Title = styled.Text`
    margin-left: ${RFValue(7)}px;

    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`
