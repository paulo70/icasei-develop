import React from 'react'
import { useSearchContext } from '../../contexts/Search'
import { Input, Form, Button } from './style'
const Search = () => {
  const { value, setValue, handleSubmitSearch, animate} = useSearchContext()
  return (
    <Form onSubmit={handleSubmitSearch} anime={animate}>
      <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Pesquisar" />
      <Button type="submit" disabled={value.length < 1}>Buscar</Button>
    </Form>
  )
}

export default Search
