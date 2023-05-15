import React from 'react'

import {
    Container,
    ImageContainer,
    CloseButton,
    CloseIcon,
    ScrollViewComponent,
    Content,
    Title,
    InputGroup,
    Button,
    ButtonText,
    Row,
    ForgotPasswordText,
    CadastrarText,
} from './styles'

import { ScrollView, TouchableOpacity } from 'react-native'
import Input from '@components/Input'

const Cadastro: React.FC = () => {
    return (
        <Container>
            <ImageContainer>
                <CloseButton>
                    <CloseIcon name="x" />
                </CloseButton>
                {/* <Image /> */}
            </ImageContainer>

            <ScrollViewComponent>
                <Content>
                    <Title>Cadastro</Title>

                    <InputGroup>
                        <Input label="Nome" iconName="user" />

                        <Input label="E-mail" iconName="mail" />

                        <Input label="Senha" iconName="eye" />
                    </InputGroup>

                    <Button activeOpacity={0.6}>
                        <ButtonText>Cadastrar</ButtonText>
                    </Button>

                    <Row>
                        <ForgotPasswordText>
                            Voce ja possui uma conta?
                        </ForgotPasswordText>
                        <TouchableOpacity activeOpacity={0.4}>
                            <CadastrarText>Entre</CadastrarText>
                        </TouchableOpacity>
                    </Row>
                </Content>
            </ScrollViewComponent>
        </Container>
    )
}

export default Cadastro
