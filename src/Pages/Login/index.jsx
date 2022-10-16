import React, { useContext } from 'react'

import { FormWrapper, Form, Title, SubTitle, Label, Input, Button, MessageError } from './style'

import { loginUser } from '../../services/requests'
import { UserContext } from '../../contexts/User'

const Login = ({ setToken }) => {
  const { name, setName, email, handleChange, error } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = await loginUser({
      name,
      email,
    })
    setToken(token)
  }

  return (
    <FormWrapper>
      <Form onSubmit={ handleSubmit }>
        <Title>
          YouTube <SubTitle>videos</SubTitle>
        </Title>
        <Label>Nome</Label>
        <Input type="text" value={ name } onChange={ (e) => setName(e.target.value) } />
        <Label>Email</Label>
        <Input type="text" value={ email } onChange={ handleChange } />
        { error && <MessageError>{ error }</MessageError> }
        <Button type="submit" disabled={ name.length < 4 || error }>Entrar</Button>
      </Form>
    </FormWrapper>
  )
}

export default Login
