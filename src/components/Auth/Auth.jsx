import { useState } from 'react'
import styled from 'styled-components'

import { $black_text } from '../../styles'

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(20px);
`
const Title = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 36px;
  color: ${$black_text};
`
const Form = styled.form`
  margin-top: 60px;
`
const FieldsWrap = styled.div`
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Field = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`
const FieldLabel = styled.label`
  position: relative;
`
const FieldInput = styled.input`
  position: relative;
  margin: 0 auto;
  padding: 10px 15px;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: none;
  background-color: rgba(255, 255, 255, 0.66);
  transition: ease-in-out 0.2s all;

  &:focus {
    outline: none;
    border: 1px solid ${$black_text};
  }

  &:focus ~ span {
    top: -8px;
    left: 8px;
    font-size: 14px;
    color: ${$black_text};
    background-color: white;
  }
`
const FieldPlaceholder = styled.span`
  z-index: 1;
  position: absolute;
  top: ${({ value }) => (value ? '-8px' : '10px')};
  left: ${({ value }) => (value ? '8px' : '12px')};
  padding: 0 2.5px;
  font-size: ${({ value }) => (value ? '14px' : 'auto')};
  color: ${({ value }) => (value ? $black_text : '#a9a9a9')};
  background-color: ${({ value }) => (value ? 'white' : 'auto')};
  transition: ease-in-out 0.2s all;
`
const Submit = styled.input`
  display: block;
  width: 60px;
  height: 30px;
  margin: 90px auto 0 auto;
  border: 1px solid ${$black_text};
  border-radius: 5px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.25);
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Modal>
      <Title>Login</Title>

      <Form>
        <FieldsWrap>
          <Field>
            <FieldLabel>
              <FieldInput type="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} />
              <FieldPlaceholder value={email}>Email</FieldPlaceholder>
            </FieldLabel>
          </Field>
          <Field>
            <FieldLabel>
              <FieldInput
                type="password"
                name="password"
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
              />
              <FieldPlaceholder value={password}>Password</FieldPlaceholder>
            </FieldLabel>
          </Field>
        </FieldsWrap>

        <Submit type="submit" value="Submit" />
      </Form>
    </Modal>
  )
}

export default Auth
