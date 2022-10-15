export function emailValidate(value) {
  return value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
}