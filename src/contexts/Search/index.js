import React, { createContext, useContext, useState } from 'react'
import { getSearchVideos } from '../../services/requests'

const SearchContext = createContext()
SearchContext.displayName = 'Search'

const SearchContextProvider = ({ children }) => {
  const [ value, setValue ] = useState('')
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ nextPageToken, setNextPageToken ] = useState('')
  const [ animate, setAnimate ] = useState(false)

  const hasMore = nextPageToken !== ""

  return (
    <SearchContext.Provider value={ {
      value,
      setValue,
      data,
      setData,
      animate,
      setAnimate,
      loading,
      setLoading,
      nextPageToken,
      setNextPageToken,
      hasMore
    } }>
      { children }
    </SearchContext.Provider>
  )
}

export function useSearchContext() {
  const {
    value,
    setValue,
    data,
    setData,
    animate,
    setAnimate,
    loading,
    setLoading,
    nextPageToken,
    setNextPageToken,
    hasMore
  } = useContext(SearchContext)

  const handleSubmitSearch = async (e) => {
    e.preventDefault()

    if (value === '') return
    setData([])
    setLoading(true)
    setAnimate(true)

    const response = await getSearchVideos(value)
    setAnimate(false)
    console.log(response.data?.items, 'items')
    console.log(response.data.nextPageToken, 'quero ver')
    setData(response.data?.items)
    setNextPageToken(response.data.nextPageToken)
    setLoading(false)
  }

  const loadMore = async () => {
    if (hasMore) {
      const response = await getSearchVideos(value, nextPageToken)
      setData((prevData) => [
        ...prevData,
        ...(response.data.items),
      ])
      setNextPageToken(response.data.nextPageToken)
    }
  }


  return {
    value,
    setValue,
    data,
    handleSubmitSearch,
    animate,
    loading,
    hasMore,
    loadMore
  }
}

export default SearchContextProvider
