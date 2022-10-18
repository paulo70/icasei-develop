import { Button, WrapperLoad } from "./style"
const LoadMore = ({onClick}) => {
  return (
    <WrapperLoad>
      <Button onClick={onClick}>Carregar mais vídeos</Button>
    </WrapperLoad>
  )
}

export default LoadMore