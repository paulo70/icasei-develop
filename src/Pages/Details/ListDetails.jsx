import { WrapperDetails, Title, WrapperStatistics, BoxVideos, Like, Views, Paragraph } from "./style"
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

const ListDetails = ({ title, id, likeCount, viewCount, description }) => {
  return (
    <section>
      <WrapperDetails>
        <Title>{ title }</Title>
        <BoxVideos>
          <iframe title={ `${title}` }
            id="ytplayer"
            type="text/html"
            width="100%"
            height="360"
            src={ `http://www.youtube.com/embed/${id}` }
            frameborder="0" />
        </BoxVideos>
        <WrapperStatistics>
          <Like><ThumbUpIcon /> { likeCount }</Like>
          <Views>Visualizações: { viewCount }</Views>
        </WrapperStatistics>
        <article>
          <Paragraph>Descrição: { description }</Paragraph>
        </article>
      </WrapperDetails>
    </section>
  )
}

export default ListDetails