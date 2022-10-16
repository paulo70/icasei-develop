import React, { createContext, useContext, useState } from 'react'
import { getSearchVideos } from '../../services/requests'

const SearchContext = createContext()
SearchContext.displayName = 'Search'

const SearchContextProvider = ({ children }) => {
  const [ value, setValue ] = useState('')
  const [ data, setData ] = useState([])
  const [animate, setAnimate] = useState(false)
  return (
    <SearchContext.Provider value={ { value, setValue, data, setData, animate, setAnimate } }>
      { children }
    </SearchContext.Provider>
  )
}

export function useSearchContext() {
  const { value, setValue, data, setData, animate, setAnimate } = useContext(SearchContext)

  const handleSubmitSearch = async (e) => {
    e.preventDefault()
    setAnimate(true)
    const response = await getSearchVideos(value)
    console.log(response.data.items, 'many times')
    setAnimate(false)
    return setData(response.data.items)
  }

  return {
    value,
    setValue,
    data,
    handleSubmitSearch,
    animate
  }
}

export default SearchContextProvider
