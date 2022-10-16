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

    @media(max-width: 768px){
      flex-direction: column;
    }
`

export const Input = styled.input`
  border: none;
  border: 2px solid ${(props) => props.theme.colors.grey};
  border-radius: 10px;
  width: 50%;
  padding: 10px;

  @media(max-width: 768px){
    width: 100%;
  }
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

  &:disabled{
    background: ${(props) => props.theme.colors.disable};
  }

  &:hover{
    background: ${(props) => props.theme.colors.sun};
  }

  &:active{
    background: ${(props) => props.theme.colors.ranger};
  }

  @media(max-width: 768px){
    font-size: 14px;
    
    width: 100%;
    margin-left: 0;
    margin-top:10px;
  }
`
