import styled, { keyframes } from "styled-components"

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const WrapperLoading = styled.div `
  display: flex;
  justify-content: center;
`

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  width: 30px;
  height: 30px;
  
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid ${(props) => props.theme.colors.silver};
  border-right: 2px solid ${(props) => props.theme.colors.silver};
  border-bottom: 2px solid ${(props) => props.theme.colors.silver};
  border-left: 4px solid ${props => props.theme.colors.red};
  background: transparent;
  border-radius: 50%;
`;