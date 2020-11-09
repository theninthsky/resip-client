import { useState, useEffect } from 'react'
import styled from 'styled-components'

import firebase from '../../firebase'
import If from '../If'
import { useProgressiveImg } from '../../hooks'
import {
  REGISTER,
  LOGIN,
  USERNAME,
  NAME,
  EMAIL,
  PASSWORD,
  PASSWORD_TOOLTIP,
  CONFIRM_PASSWORD,
  ALREADY_A_MEMBER,
  NOT_A_MEMBER
} from './constants'

import { DESKTOP, BLACK_TEXT } from '../../style'
import spoonsImg from '../../images/spoons.png'
import spoonsImgTiny from '../../images/spoons-tiny.png'

const Spoons = styled.img`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 250px;
  filter: ${({ isBlurred }) => (isBlurred ? 'blur(5px)' : 'none')};
`
const Modal = styled.div`
  position: relative;
  width: 400px;
  max-width: 90%;
  height: ${({ mode }) => (mode === LOGIN ? '360px' : '500px')};
  margin: ${({ mode }) => `max(calc((100vh - ${mode === LOGIN ? '360px' : '500px'}) / 2), 25px) auto`};
  box-sizing: border-box;
  overflow: auto;
  border: 1px solid lightgray;
  border-radius: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
`
const Title = styled.h1`
  margin-top: 25px;
  text-align: center;
  font-size: 32px;
  font-weight: normal;
  color: ${BLACK_TEXT};
`
const Form = styled.form`
  margin-top: 40px;
`
const FieldsWrap = styled.div`
  height: ${({ mode }) => (mode === LOGIN ? '90px' : '250px')};
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
  border: ${({ passwordsMatch = true }) => `1px solid ${passwordsMatch ? 'lightgray' : 'red'}`};
  border-radius: 2px;
  box-shadow: none;
  color: ${({ passwordsMatch = true }) => (passwordsMatch ? 'auto' : 'red')};
  background-color: rgba(255, 255, 255, 0.66);
  transition: ease-in-out 0.2s all;

  &:focus {
    outline: none;
    border: 1px solid ${BLACK_TEXT};
  }

  &:focus ~ span {
    top: -8px;
    left: 8px;
    font-size: 14px;
    color: ${BLACK_TEXT};
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
  color: ${({ value, passwordsMatch = true }) => (value ? (passwordsMatch ? BLACK_TEXT : 'red') : '#a9a9a9')};
  background-color: ${({ value }) => (value ? 'white' : 'auto')};
  transition: ease-in-out 0.2s all;
`
const Submit = styled.input`
  display: block;
  margin: 0 auto;
  margin-top: 40px;
  padding: 5px 7.5px;
  border: 1px solid ${BLACK_TEXT};
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  color: ${BLACK_TEXT};
  background-color: rgba(255, 255, 255, 0.25);
  cursor: pointer;

  @media ${DESKTOP} {
    &:hover {
      opacity: 0.75;
    }
  }
`
const RegisterLink = styled.button`
  position: absolute;
  bottom: 15px;
  right: 20px;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 16px;
  color: ${BLACK_TEXT};
  background-color: transparent;
  cursor: pointer;

  @media ${DESKTOP} {
    &:hover {
      opacity: 0.75;
    }
  }
`

const Auth = () => {
  const [spoonsSrc, isBlurred] = useProgressiveImg(spoonsImgTiny, spoonsImg)

  const [mode, setMode] = useState(LOGIN) // Login | Register
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [mode])

  const submitForm = e => {
    e.preventDefault()
    if (!passwordsMatch) return alert('Passwords do not match.')
    if (mode === LOGIN) return firebase.auth().signInWithEmailAndPassword(email, password)

    console.log(username, name, email, password, confirmPassword)
  }

  return (
    <>
      <Spoons isBlurred={isBlurred} src={spoonsSrc} />
      <Modal mode={mode}>
        <Title>RESIP</Title>

        <Form onSubmit={submitForm}>
          <FieldsWrap mode={mode}>
            <If condition={mode === REGISTER}>
              <Field>
                <FieldLabel>
                  <FieldInput
                    type="text"
                    name="username"
                    minLength="2"
                    maxLength="32"
                    required
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                  <FieldPlaceholder value={username}>{USERNAME}</FieldPlaceholder>
                </FieldLabel>
              </Field>
              <Field>
                <FieldLabel>
                  <FieldInput
                    type="text"
                    name="name"
                    minLength="2"
                    maxLength="64"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                  <FieldPlaceholder value={name}>{NAME}</FieldPlaceholder>
                </FieldLabel>
              </Field>
            </If>

            <Field>
              <FieldLabel>
                <FieldInput type="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} />
                <FieldPlaceholder value={email}>{EMAIL}</FieldPlaceholder>
              </FieldLabel>
            </Field>
            <Field>
              <FieldLabel>
                <FieldInput
                  type="password"
                  name="password"
                  minLength="8"
                  maxLength="512"
                  title={PASSWORD_TOOLTIP}
                  value={password}
                  required
                  onChange={e => setPassword(e.target.value)}
                />
                <FieldPlaceholder value={password}>{PASSWORD}</FieldPlaceholder>
              </FieldLabel>
            </Field>

            <If condition={mode === REGISTER}>
              <Field>
                <FieldLabel>
                  <FieldInput
                    passwordsMatch={passwordsMatch}
                    type="password"
                    name="confirm-password"
                    value={confirmPassword}
                    required
                    onChange={e => setConfirmPassword(e.target.value)}
                    onFocus={() => setPasswordsMatch(true)}
                    onBlur={() => setPasswordsMatch(confirmPassword ? password === confirmPassword : true)}
                  />
                  <FieldPlaceholder value={confirmPassword} passwordsMatch={passwordsMatch}>
                    {CONFIRM_PASSWORD}
                  </FieldPlaceholder>
                </FieldLabel>
              </Field>
            </If>
          </FieldsWrap>

          <Submit mode={mode} type="submit" value={mode} />
        </Form>

        <RegisterLink onClick={() => setMode(mode === LOGIN ? REGISTER : LOGIN)}>
          {mode === LOGIN ? NOT_A_MEMBER : ALREADY_A_MEMBER}
        </RegisterLink>
      </Modal>
    </>
  )
}

export default Auth
