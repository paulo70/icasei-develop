import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Container from './components/Container'
import Header from './components/Header'
import Home from './Pages/Home'
import Login from './Pages/Login'

import UserContextProvider from './contexts/User'
import useToken from './hooks/useToken'

function App() {
  const { token, setToken } = useToken()

  return (
    <UserContextProvider>
      <Header />
      <Container>
        { !token ? (
          <Login setToken={ setToken } />
        ) : (
          <>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={ <Home /> }></Route>
              </Routes>
            </BrowserRouter>
          </>
        ) }
      </Container>
    </UserContextProvider>
  )
}

export default App
