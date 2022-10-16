import styled from 'styled-components'

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 10%;
  padding: 40px 0;

  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  box-shadow: -4px 1px 12px -10px rgba(0, 0, 0, 0.72);
  align-items: center;
`
export const Title = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-size: 40px;
  
  margin-left: 10px;
`
export const SubTitle = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: 20px;
  font-weight: bold;
`
export const Label = styled.label`
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
  font-weight: bold;
 
  margin-top: 10px;
  margin-bottom: 5px;
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
  width: 50%;
  margin-top: 20px;

  &:disabled{
    background: ${(props) => props.theme.colors.disable}
  }
`
export const MessageError = styled.h4`
  color: ${(props) => props.theme.colors.red};
  font-size: 14px;
  
  margin-top: 5px;
` 