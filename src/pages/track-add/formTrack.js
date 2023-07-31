import React, { useState } from 'react';
import { WhiteBackground } from '../../components/background/styles';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.css'
function FormTrack() {
  const { id, name } = useParams();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    album_id: id,
    number: '',
    title: '',
    duration: ''
  });

  const atualizarDados = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const newTrack = (event) => {
    
    if (formData.album_id === "" || formData.number === "" || formData.title === "" || formData.duration ===""){
      alert('Preencha os campos obrigatórios!');
      return
  }
    event.preventDefault();

    fetch('https://tiao.supliu.com.br/api/track', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "wine.barbosa@gmail.com"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        alert("Nova música adicionada ao album!")
        navigate('/')
      })
      .catch(error => console.error(error));
  };

  return (
    <WhiteBackground>
      <header className='form'>
        <h3>Álbum: {name}</h3>
        <p>Adicione uma nova faixa ao seu álbum preferido!</p>
      </header>
      <form onSubmit={newTrack}>
        <label>
          Número da faixa:
          <input type="number" name="number" value={formData.number} onChange={atualizarDados} />
        </label>
        <label>
          Título:
          <input type="text" name="title" value={formData.title} onChange={atualizarDados} />
        </label>
        <label>
          Duração:
          <input placeholder='exp: 235' id='minutes-duration' pattern="[0-9]+$" title='digite apenas números' type="text" name="duration" maxlength="3" value={formData.duration} onChange={atualizarDados} />
        </label>
        <input className='input-submit-album' type="submit" value="Enviar" />
      </form>
    </WhiteBackground>
  );
}

export default FormTrack;