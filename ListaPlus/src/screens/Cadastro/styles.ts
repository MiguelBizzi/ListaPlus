import { styled } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { getTopInset } from 'rn-iphone-helper'

export const Container = styled.View`
    flex: 1;
    background-color: transparent;
`

export const ImageContainer = styled.View`
    height: ${RFValue(250 + 20)}px;

    padding-top: ${getTopInset() + RFValue(10)}px;

    background-color: ${({ theme }) => theme.colors.primary_light};
`

export const CloseButton = styled.TouchableOpacity`
    position: absolute;

    top: ${getTopInset() + RFValue(10)}px;
    left: ${RFValue(24)}px;
`

export const CloseIcon = styled(Feather)`
    font-size: ${RFValue(26)}px;
    color: ${({ theme }) => theme.colors.shape};
`

export const ScrollViewComponent = styled.ScrollView`
    margin-top: -${RFValue(20)}px;

    border-top-left-radius: ${RFValue(20)}px;
    border-top-right-radius: ${RFValue(20)}px;

    background-color: ${({ theme }) => theme.colors.shape};
`

export const Content = styled.View`
    flex: 1;

    padding: ${RFValue(24)}px ${RFValue(36)}px;
`

export const Title = styled.Text`
    font-size: ${RFValue(26)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_dark};
`

export const InputGroup = styled.View`
    flex: 1;
    margin-top: ${RFValue(16)}px;
`

export const Button = styled.TouchableOpacity`
    margin-top: ${RFValue(5)}px;
    padding: ${RFValue(10)}px ${RFValue(24)}px;

    justify-content: center;
    align-items: center;
    align-self: center;

    border-radius: ${RFValue(20)}px;

    background-color: ${({ theme }) => theme.colors.primary_light};
`

export const ButtonText = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.text_light};
`

export const Row = styled.View`
    margin-top: ${RFValue(16)}px;

    flex-direction: row;
    align-items: center;
    align-self: center;
`

export const ForgotPasswordText = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.text};
`

export const CadastrarText = styled.Text`
    margin-left: ${RFValue(5)}px;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
`
