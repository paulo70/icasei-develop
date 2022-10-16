export function emailValidate(value) {
  return  /\S+@\S+\.\S+/.test(value)
}