import styled from 'styled-components'

export const Cover = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  padding: 10px;

  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  box-shadow: -4px 1px 12px -10px rgba(0, 0, 0, 0.72);

  img {
    width: 100%;
    object-fit: cover;
  }
`
