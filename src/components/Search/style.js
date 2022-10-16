import styled, { keyframes, css } from 'styled-components'


const slideInDown = keyframes`
  0% {
      -webkit-transform: translateY(-300%);
      transform: translateY(-300%);
      visibility: visible;
  }

  100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  animation: ${props =>
    props.anime &&
    css`
      -webkit-animation-name: ${slideInDown};
      animation-name: ${slideInDown};
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    `};
`

export const Input = styled.input`
  border: none;
  border: 2px solid ${(props) => props.theme.colors.grey};
  border-radius: 10px;
  width: 50%;
  padding: 10px;
`
export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  padding: 10px;
  width: 10%;
  margin-left: 10px;
`
