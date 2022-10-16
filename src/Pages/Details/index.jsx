import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import ListDetails from './ListDetails'

import { getDetailsVideos } from '../../services/requests'


const Details = () => {
  const [ data, setData ] = useState()
  const params = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDetailsVideos(`${params.id}`)
        setData(response.data.items)
      } catch (error) {
        console.log(error, 'ERROR')
      }
    }

    fetchData()
  }, [ params.id ])

  console.log(data, 'data')
  return (
    <>
      {
        data?.map(item => (
          <ListDetails
            title={ item.snippet.title }
            id={ item.id }
            likeCount={ item.statistics.likeCount }
            viewCount={ item.statistics.viewCount }
            description={ item.snippet.description }
          />
        ))
      }
    </>
  )
}

export default Details