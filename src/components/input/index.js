import React, { useState, useEffect } from 'react'
import './style.css'
import { Input, Button } from './style'

function InputSearch(props) {

  let [inputValue, setInputValue] = useState('')
  let [hasUsed, setHasUsed] = useState(false)

  const handleInputvalue = (event) => {
    setInputValue(event.target.value)
    setHasUsed(true)
  }


  if (hasUsed === true && inputValue.length === 0) {
    props.fetchAlbum();
    setHasUsed(false)
  }


  return (
    <div>
      <h5>Digite uma palavra chave...</h5>
      <div id='inputSearch'>
        <Input
          type='text'
          name='album'
          value={inputValue}
          onChange={
            handleInputvalue
          }
        />

        <Button disabled={inputValue.length === 0} onClick={() => props.searchAlbum(inputValue)}>
          Pesquisar
        </Button>
      </div>
    </div>
  )
}

export default InputSearch;