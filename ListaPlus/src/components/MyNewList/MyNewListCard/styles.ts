import { styled } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { FontAwesome5 } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
    width: 100%;

    margin-top: ${RFValue(10)}px;
    padding: ${RFValue(8)}px ${RFValue(16)}px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-radius: ${RFValue(20)}px;
    background-color: rgba(0, 0, 0, 0.15);
`

export const Name = styled.Text`
    flex: 1;

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.shape};
`

export const InfoGroup = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Units = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(13)}px;
    color: ${({ theme }) => theme.colors.success};
`

export const CheckBoxIcon = styled(FontAwesome5)`
    margin-left: ${RFValue(10)}px;

    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.shape};
`

export const Line = styled.View`
    position: absolute;

    width: 100%;
    height: ${RFValue(1)}px;

    left: ${RFValue(16)}px;

    background-color: ${({ theme }) => theme.colors.shape};
`
