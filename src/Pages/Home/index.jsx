import React, { useEffect, useState } from 'react'

import Search from '../../components/Search'
import VideoList from './HomeList'

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
          <VideoList
            title={video.snippet.title}
            description={video.snippet.description}
            thumbnails={video.snippet.thumbnails.medium.url}
            key={video.id.videoId}
            id={video.id.videoId}
          />
        ))}
      </DetailsWrapper>
    </>
  )
}

export default Home
