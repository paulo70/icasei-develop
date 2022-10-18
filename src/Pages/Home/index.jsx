import React, { memo, useEffect, useState } from 'react'

import Search from '../../components/Search'
import Loading from '../../components/Loading'
import Button from '../../components/Button'
import VideoList from './HomeList'

import { useSearchContext } from '../../contexts/Search'
import { DetailsWrapper } from './style'

const Home = () => {
  const { data, value, loading, loadMore } = useSearchContext()
  const [ videos, setVideos ] = useState([])

  useEffect(() => {
    setVideos(data)
  }, [ value, data ])

  return (
    <section>
      <Search />
      { loading && <Loading /> }
      <DetailsWrapper>
        { videos?.map((video, index) => (
          <div key={index}>
            <VideoList
              title={ video.snippet.title }
              description={ video.snippet.description }
              thumbnails={ video.snippet.thumbnails.medium.url }
              key={ video.id.videoId }
              id={ video.id.videoId }
            />
          </div>
        )) }
      </DetailsWrapper>
      { data.length > 0 && (
        <Button onClick={ () => loadMore() } />
      ) }
    </section>
  )
}

export default memo(Home) 
