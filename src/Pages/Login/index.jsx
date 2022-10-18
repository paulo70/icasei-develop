import React, { useContext } from 'react'

import { FormWrapper, Form, Title, SubTitle, Label, Input, Button, MessageError } from './style'

import { loginUser } from '../../services/requests'
import { UserContext } from '../../contexts/User'
import { useNavigate } from 'react-router-dom'

const Login = ({ setToken }) => {
  const { name, setName, email, handleChange, error } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate(0)
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
        <Label>Nome
          <Input type="text" value={ name } onChange={ (e) => setName(e.target.value) } />
        </Label>
        <Label>Email
          <Input type="text" value={ email } onChange={ handleChange } />
        </Label>
        { error && <MessageError>{ error }</MessageError> }
        <Button type="submit" disabled={ name.length < 4 || error }>Entrar</Button>
      </Form>
    </FormWrapper>
  )
}

export default Login
