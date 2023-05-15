import React, { useRef } from 'react'

import {
    Container,
    ImageContainer,
    CloseButton,
    CloseIcon,
    ScrollViewComponent,
    Content,
    Title,
    Button,
    ButtonText,
    Row,
    ForgotPasswordText,
    CadastrarText,
} from './styles'

import { TouchableOpacity } from 'react-native'
import * as Yup from 'yup'
import Input from '@components/Input'
import { Form } from '@unform/mobile'
import { RFValue } from 'react-native-responsive-fontsize'

const Cadastro: React.FC = () => {
    const formRef = useRef<any>(null)

    async function handleSubmit(data: any) {
        try {
            formRef.current.setErrors({})

            const schema = Yup.object().shape({
                nome: Yup.string().required('Nome é obrigatória'),
                email: Yup.string()
                    .email('Insira um email válido')
                    .required('E-mail é obrigatório'),
                senha: Yup.string().required('Senha é obrigatória'),
            })

            await schema.validate(data, {
                abortEarly: false,
            })
            // Validation passed
            console.log(data)
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages: { [key: string]: string } = {}

                err.inner.forEach((error) => {
                    if (error.path) errorMessages[error.path] = error.message
                })

                formRef.current?.setErrors(errorMessages)
            }
        }
    }

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

                    <Form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        style={{ flex: 1, marginTop: RFValue(16) }}
                    >
                        <Input
                            name="nome"
                            label="Nome"
                            iconName="user"
                            autoCapitalize="words"
                            returnKeyType="next"
                            placeholder="Digite seu nome"
                            onSubmitEditing={() => {
                                formRef.current?.getFieldRef('email').focus()
                            }}
                        />

                        <Input
                            name="email"
                            label="E-mail"
                            iconName="mail"
                            keyboardType="email-address"
                            returnKeyType="next"
                            placeholder="Digite seu e-mail"
                            onSubmitEditing={() => {
                                formRef.current?.getFieldRef('senha').focus()
                            }}
                        />

                        <Input
                            name="senha"
                            label="Senha"
                            iconName="eye"
                            isPassword
                            placeholder="Digite sua senha"
                            returnKeyType="done"
                            onSubmitEditing={() => {
                                formRef?.current?.submitForm()
                            }}
                        />
                    </Form>

                    <Button
                        activeOpacity={0.6}
                        onPress={() => formRef?.current?.submitForm()}
                    >
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
