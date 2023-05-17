import { RFValue } from 'react-native-responsive-fontsize'
import { styled } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { getTopInset } from 'rn-iphone-helper'

export const Container = styled.View`
    flex: 1;

    padding-top: ${getTopInset() + RFValue(16)}px;

    flex-direction: column;

    background-color: ${({ theme }) => theme.colors.primary_light};
`

export const Header = styled.View`
    width: 100%;

    padding: 0 ${RFValue(24)}px;
`

export const CloseButton = styled.TouchableOpacity`
    margin-left: -${RFValue(5)}px;
`

export const CloseIcon = styled(MaterialIcons)`
    font-size: ${RFValue(26)}px;
    color: ${({ theme }) => theme.colors.shape};
`

export const MainContent = styled.View`
    flex: 1;

    padding: 0 ${RFValue(24)}px;
    margin-top: ${RFValue(36)}px;
`

export const Title = styled.Text`
    width: 100%;
    text-align: center;

    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.light};
`

export const ButtonsContainer = styled.View`
    flex: 1;

    justify-content: space-evenly;

    margin: ${RFValue(36)}px 0 ${RFValue(40)}px;
`

export const Footer = styled.View`
    padding: ${RFValue(24)}px;
    padding-bottom: ${RFValue(50)}px;

    border-top-left-radius: ${RFValue(20)}px;
    border-top-right-radius: ${RFValue(20)}px;

    background-color: ${({ theme }) => theme.colors.primary};
`

export const FooterHeader = styled.View`
    width: 100%;

    padding-top: ${RFValue(12)}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`

export const Circle = styled.View`
    position: relative;

    top: -${RFValue(24)}px;

    width: ${RFValue(70)}px;
    height: ${RFValue(70)}px;

    margin-top: -${RFValue(100)}px;

    justify-content: center;
    align-items: center;

    border-radius: ${RFValue(70 / 2)}px;
    background-color: ${({ theme }) => theme.colors.shape};
`

export const PorquinhoImage = styled.Image`
    width: ${RFValue(70)}px;
    height: ${RFValue(70)}px;

    border-radius: ${RFValue(70 / 2)}px;
`

export const FooterTitle = styled.Text`
    position: relative;

    top: -${RFValue(24)}px;

    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`

export const Description = styled.Text`
    text-align: justify;

    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.light};
`
