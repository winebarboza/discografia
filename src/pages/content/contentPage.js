import React, {  useEffect, useState } from 'react'
import InputSearch from '../../components/input/index'
import './style.css'
import Album from '../../components/album/index'
import Header from '../../components/header'
import ButtonAdc from '../../components/buttons'
import { WhiteBackground } from '../../components/background/styles'



function Content() {

let [album, setAlbum] = useState([])

async function fetchAlbum() {
 
  try {
    const response = await fetch("https://tiao.supliu.com.br/api/album", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "wine.barbosa@gmail.com"
      },
    });
    const result = await response.json();
    setAlbum(result.data)
  } catch (error) {
    console.error("Error:", error);
  }  
}
useEffect(()=>{
  fetchAlbum()
},[])


async function handleSearchAlbum(keyword) {
 
  try {
    const response = await fetch(`https://tiao.supliu.com.br/api/album?keyword=${keyword}&limit=10&page=1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "wine.barbosa@gmail.com"
      },
    });
    const result = await response.json();
    setAlbum(result.data)
  } catch (error) {
    console.error("Error:", error);
  }  
}

  return (
    <WhiteBackground>
      <Header />
      <InputSearch fetchAlbum={fetchAlbum} searchAlbum={handleSearchAlbum} />
      <Album albumProp={album}/>
      <ButtonAdc/>
    </WhiteBackground>
  )
}

export default Content