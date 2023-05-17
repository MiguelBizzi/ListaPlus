import { styled } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-right: ${RFValue(12)}px;
`

export const Circle = styled.TouchableOpacity`
    width: ${RFValue(65)}px;
    height: ${RFValue(65)}px;

    border-radius: ${RFValue(65 / 2)}px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.shape};
`

export const AlimentoImage = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;

    border-radius: ${RFValue(50 / 2)}px;
`

export const PlusButton = styled.View`
    position: absolute;
    right: 0;
    bottom: 0;
`

export const PlusIcon = styled(Feather)`
    font-size: ${RFValue(17)}px;
    color: ${({ theme }) => theme.colors.text_dark};
`

export const Label = styled.Text`
    width: ${RFValue(65)}px;

    text-align: center;

    margin-top: ${RFValue(3)}px;

    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_light};
`
