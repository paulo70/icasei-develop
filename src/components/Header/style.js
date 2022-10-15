import styled from 'styled-components'

export const ContentHeader = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-size: 40px;
  margin-left: 10px;
`
export const HeaderSubTitle = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: 20px;
  font-weight: bold;
`
export const HeaderUser = styled.h2`
  font-size: 12px;
  display: flex;
  display: inline-flex;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  margin-right: 10px;
`
export const UserLogout = styled.a`
  text-decoration: underline;
  margin: 0 10px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.black};
`
