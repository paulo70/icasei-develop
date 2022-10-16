import { Input } from "./style"
const Button = (children, id) => {
  return (
    <Input type='button' id={id}>{children}</Input>
  )
}

export default Button