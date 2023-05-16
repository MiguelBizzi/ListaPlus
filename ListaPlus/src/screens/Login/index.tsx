import React, { useRef } from 'react'

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

import * as Yup from 'yup'
import { TouchableOpacity } from 'react-native'
import Input from '@components/Input'
import { Form } from '@unform/mobile'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

const Login: React.FC = () => {
    const formRef = useRef<any>(null)
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    async function handleSubmit(data: any) {
        try {
            formRef.current.setErrors({})

            const schema = Yup.object().shape({
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

    function handleGoBack() {
        navigation.goBack()
    }

    function handleGoToCadastro() {
        navigation.navigate('cadastro')
    }

    return (
        <Container>
            <ImageContainer>
                <CloseButton onPress={handleGoBack}>
                    <CloseIcon name="arrow-left" />
                </CloseButton>
            </ImageContainer>

            <Content showsVerticalScrollIndicator={false}>
                <Title>Login</Title>

                <Form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    style={{ flex: 1, marginTop: RFValue(24) }}
                >
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
                    <ButtonText>Entrar</ButtonText>
                </Button>

                <Row>
                    <ForgotPasswordText>Não possui conta?</ForgotPasswordText>
                    <TouchableOpacity
                        onPress={handleGoToCadastro}
                        activeOpacity={0.4}
                    >
                        <CadastrarText>Cadastre-se</CadastrarText>
                    </TouchableOpacity>
                </Row>
            </Content>
        </Container>
    )
}

export default Login
