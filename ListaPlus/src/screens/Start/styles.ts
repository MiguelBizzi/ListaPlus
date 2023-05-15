import { styled } from 'styled-components/native'
import { getTopInset } from 'rn-iphone-helper'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
`

export const Content = styled.View`
    width: 40%;

    padding: ${getTopInset() + RFValue(10)}px ${RFValue(24)}px ${RFValue(24)}px;

    flex-direction: column;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors.gray_strong};
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text_light};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`

export const StartButton = styled.TouchableOpacity`
    width: 100%;

    padding: ${RFValue(5)}px;

    justify-content: center;
    align-items: center;

    border-radius: ${RFValue(15)}px;
    border-width: ${RFValue(1)}px;
    border-color: ${({ theme }) => theme.colors.shape};
`

export const StartButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.text_light};
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`

export const ImageContainer = styled.View`
    flex: 1;
    padding: 0 ${RFValue(10)}px;

    justify-content: center;
    align-items: center;
`

export const ImageContainerTitle = styled.Text`
    text-align: right;

    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`
