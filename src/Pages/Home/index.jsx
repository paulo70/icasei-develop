import React, { useEffect, useState } from 'react'
import Search from '../../components/Search'
import ListDetails from './ListDetails'
import { useSearchContext } from '../../contexts/Search'
import { DetailsWrapper } from './style'

const Home = () => {
  const { data, value } = useSearchContext()
  const [videos, setVideos] = useState([])
  console.log(videos, 'data')

  useEffect(() => {
    setVideos(data)
  }, [value, data])

  return (
    <>
      <Search />
      <DetailsWrapper>
        {videos?.map((video) => (
          <ListDetails
            title={video.snippet.title}
            description={video.snippet.description}
            thumbnails={video.snippet.thumbnails.medium.url}
            key={video.id.videoId}
          />
        ))}
      </DetailsWrapper>
    </>
  )
}

export default Home
