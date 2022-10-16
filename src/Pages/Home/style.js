import styled from 'styled-components'

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
`
export const CardWrapper = styled.div`
  width: 250px;
  margin-top: 40px;

  & button{
    background: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};
    border: none;
    border-radius: 5px;
    font-weight: bold;
    
    padding: 10px 15px;
    margin-top: 20px;
    width: 100%;

    &:hover{
      background: ${(props) => props.theme.colors.sun}
    }

    &:active{
      background-color: ${(props) => props.theme.colors.ranger}
    }

  }
`
export const Title = styled.h3`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  margin-bottom: 10px;
`

export const Paragraph = styled.p`
  font-size: 14px;
  margin-top: 10px;
`