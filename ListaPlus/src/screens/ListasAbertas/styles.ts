import { styled } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { getTopInset } from 'rn-iphone-helper'

export const Container = styled.View`
    flex: 1;

    padding: ${getTopInset() + RFValue(16)}px ${RFValue(24)}px ${RFValue(16)}px;

    background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
    margin-bottom: ${RFValue(16)}px;
`

export const CircleButton = styled.TouchableOpacity`
    width: ${RFValue(35)}px;
    height: ${RFValue(35)}px;

    border-radius: ${RFValue(35 / 2)}px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.primary_light};
`

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(20)}px;
`

export const Title = styled.Text`
    margin-top: ${RFValue(16)}px;

    color: ${({ theme }) => theme.colors.text_dark};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
`
