import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import { useNavigate } from 'react-router-dom'

import ListDetails from './ListDetails'

import { getDetailsVideos } from '../../services/requests'

import {BackButton} from './style'


const Details = () => {
  const [ data, setData ] = useState()
  const params = useParams()
  const navigate = useNavigate()

  const handleBackHistory = () => {
    navigate(-1)
  }

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

  return (
    <section>
      <BackButton onClick={handleBackHistory}><ArrowBackIosOutlinedIcon/> Voltar</BackButton>
      {
        data?.map(item => (
          <ListDetails
            key={item.id}
            title={ item.snippet.title }
            id={ item.id }
            likeCount={ item.statistics.likeCount }
            viewCount={ item.statistics.viewCount }
            description={ item.snippet.description }
          />
        ))
      }
    </section>
  )
}

export default Details