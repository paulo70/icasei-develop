import styled from "styled-components"

export const WrapperLoad = styled.div `
  display: flex;
  justify-content:center;
  margin-top: 30px;
`

export const Button = styled.button`
 background: ${(props) => props.theme.colors.black};
 color: ${(props) => props.theme.colors.white};
 border: none;
 border-radius: 10px;
 
 padding: 10px 15px;
 width: 40%;

 &:hover{
    background: ${(props) => props.theme.colors.moon}
  }

  &:active{
    background-color: ${(props) => props.theme.colors.dark}
  }
`