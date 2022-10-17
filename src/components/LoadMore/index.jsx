import { Button, WrapperLoad } from "./style"
const LoadMore = ({onClick}) => {
  return (
    <WrapperLoad>
      <Button onClick={onClick}>Load More</Button>
    </WrapperLoad>
  )
}

export default LoadMore