import { RFValue } from 'react-native-responsive-fontsize'
import { styled } from 'styled-components/native'

export const EmptyText = styled.Text`
    margin-top: ${RFValue(10)}px;
    align-self: center;

    font-family: ${({ theme }) => theme.fonts.light};
    font-size: ${RFValue(14.5)}px;
    color: ${({ theme }) => theme.colors.text};
`
