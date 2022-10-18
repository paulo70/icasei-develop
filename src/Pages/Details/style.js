import styled from "styled-components"

export const WrapperDetails = styled.div `
  display: flex;
  flex-direction: column;
` 

export const Title = styled.h2 `
  font-size: 25px;
  margin-top: 30px;

  @media(max-width: 768px){
    font-size: 18px;
  }
`

export const WrapperStatistics = styled.div `
  display: flex;
  flex-direction:row;
  margin-top: 15px;
  font-size: 12px;

  & svg{
    margin-right:5px;
    margin-top: -6px;
  }

  @media(max-width: 768px){
    justify-content: space-between;
  }
`

export const Like = styled.span `
  margin-right: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`

export const Views = styled.span `
  margin-right: 10px;
  font-size: 15px;
  font-weight: bold;
`

export const BoxVideos = styled.div `
  background:${(props) => props.theme.colors.white};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  box-shadow: -4px 1px 12px -10px rgba(0, 0, 0, 0.72);
 
  max-width:100%;
  width: 660px;
  height: 380px;
  padding: 10px;
  margin-top: 10px;
`

export const Paragraph = styled.p `
  margin-top: 15px;
  
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  white-space: pre-wrap;
`

export const BackButton = styled.span `
  display: inline-flex;
  margin-top: 30px;

  align-items: center;
  font-size: 14px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.red};

  &:hover{
    color:${(props) => props.theme.colors.sun};
    text-decoration: underline;
    cursor: pointer;
  }

  & svg{
    font-size: 18px;
    margin-top:-2px;
  }
 
`