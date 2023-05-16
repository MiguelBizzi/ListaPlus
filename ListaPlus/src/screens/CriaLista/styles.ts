import { styled } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { getTopInset } from 'rn-iphone-helper'

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
    padding: ${getTopInset() + RFValue(10)}px 0 ${RFValue(24)}px;

    border-bottom-left-radius: ${RFValue(25)}px;
    border-bottom-right-radius: ${RFValue(25)}px;

    background-color: ${({ theme }) => theme.colors.primary_light};
`

export const TopRow = styled.View`
    padding: 0 ${RFValue(24)}px;

    flex-direction: row;
    align-items: center;
`

export const BackButton = styled.TouchableOpacity``

export const BackIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.shape};
`

export const Title = styled.Text`
    margin-left: ${RFValue(10)}px;

    font-size: ${RFValue(19)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_light};
`

export const SearchContainer = styled.View`
    padding: ${RFValue(16)}px ${RFValue(24)}px;

    flex-direction: row;
    align-items: center;
`

export const SearchIcon = styled(Feather)`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};
`

export const SearchTextInput = styled.TextInput`
    flex: 1;

    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.text_dark};

    padding: ${RFValue(2)}px ${RFValue(10)}px;
    margin-left: ${RFValue(10)}px;

    border-width: ${RFValue(1)}px;
    border-color: ${({ theme }) => theme.colors.outline_color};
    border-radius: ${RFValue(10)}px;

    background-color: ${({ theme }) => theme.colors.gray};
`

export const SuggestContainer = styled.View`
    padding-left: ${RFValue(24)}px;
`

export const SuggestTitle = styled.Text`
    margin-bottom: ${RFValue(10)}px;

    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_light};
`

export const Main = styled.ScrollView`
    flex: 1;
    padding: ${RFValue(24)}px;
`

export const Footer = styled.View`
    padding: ${RFValue(24)}px ${RFValue(24)}px;

    flex-direction: row;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.shape};
`

export const CartCircle = styled.View`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;

    border-radius: ${RFValue(50 / 2)}px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.primary_light};
`

export const CartIcon = styled(Feather)`
    margin-left: -${RFValue(2)}px;

    font-size: ${RFValue(22)}px;
    color: ${({ theme }) => theme.colors.shape};
`

export const FooterText = styled.Text`
    margin-left: ${RFValue(16)}px;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_dark};
`
