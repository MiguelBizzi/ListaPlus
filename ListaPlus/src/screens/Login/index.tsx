import React from 'react'

import {
    Container,
    ImageContainer,
    CloseButton,
    CloseIcon,
    Content,
    Title,
    InputGroup,
    Button,
    ButtonText,
    Row,
    ForgotPasswordText,
    CadastrarText,
} from './styles'
import { TouchableOpacity } from 'react-native'
import Input from '@components/Input'

const Login: React.FC = () => {
    return (
        <Container>
            <ImageContainer>
                <CloseButton>
                    <CloseIcon name="x" />
                </CloseButton>
                {/* <Image /> */}
            </ImageContainer>

            <Content showsVerticalScrollIndicator={false}>
                <Title>Login</Title>

                <InputGroup>
                    <Input label="E-mail" iconName="mail" />

                    <Input label="Senha" iconName="eye" />
                </InputGroup>

                <Button activeOpacity={0.6}>
                    <ButtonText>Entrar</ButtonText>
                </Button>

                <Row>
                    <ForgotPasswordText>Não possui conta?</ForgotPasswordText>
                    <TouchableOpacity activeOpacity={0.4}>
                        <CadastrarText>Cadastre-se</CadastrarText>
                    </TouchableOpacity>
                </Row>
            </Content>
        </Container>
    )
}

export default Login
