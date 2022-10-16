import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Container from './components/Container'
import Header from './components/Header'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Details from './Pages/Details'

import UserContextProvider from './contexts/User'
import SearchContextProvider from './contexts/Search'
import useToken from './hooks/useToken'

function App() {
  const { token, setToken } = useToken()

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />
        <Container>
          { !token ? (
            <Login setToken={ setToken } />
          ) : (
            <SearchContextProvider>
              <Routes>
                <Route path='/' element={ <Home /> }></Route>
                <Route path='/details/:id' element={ <Details /> }></Route>
              </Routes>
            </SearchContextProvider>
          ) }
        </Container>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
