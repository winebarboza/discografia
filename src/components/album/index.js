import React from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import { PiTrashLight } from 'react-icons/pi'
import { CiFolderOff, CiMusicNote1 } from 'react-icons/ci'
function Album(props) {
  const albumList = props.albumProp;
  const navigate = useNavigate()
  function handleConfirmation(id, name) {

    const result = window.confirm('Deseja deletar a música ' + name + '?');
    if (result) {
      fetch(`https://tiao.supliu.com.br/api/track/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "wine.barbosa@gmail.com"
        },
      })
        .then(response => {
          if (response.ok) {
            alert('Música deletada do álbum com sucesso!');
            window.location.reload();
          } else {
            throw new Error('Erro ao deletar música do álbum');
          }
        })
        .catch(error => console.error(error));
    };
  }

  function handleDeleteAlbum(id, name) {
    const resultado = window.confirm('Deseja deletar o album ' + name + '? todas as músicas do álbum serão excluídas.');
    if (resultado) {
      fetch(`https://tiao.supliu.com.br/api/album/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "wine.barbosa@gmail.com"
        },
      })
        .then(response => {
          if (response.ok) {
            alert('o álbum ' + name + ' foi deletado com sucesso!');
            window.location.reload();
          } else {
            throw new Error('Erro ao deletar álbum');
          }
        })
        .catch(error => console.error(error));
    };

  }
  
function formatDuration(duration){
    const regex = /^(\d+)(\d{2})$/;
   let durationData = String(duration).match(regex)

   if(durationData){
    const minutes = durationData[1];
    const seconds = durationData[2]
    return `${minutes}:${seconds}`
   }
}

  return (
    <div id="scroll-div">
      {albumList.map((album) => (
        <div>
          <h4 key={album.id}>Álbum: {album.name}, {album.year}</h4>
          <div id='icons'>
            <Link to={`/novatrack/${album.name}/${album.id}`}>
              <button>
                <p id='add-music'>
                  <CiMusicNote1 />
                </p>
              </button>
            </Link>
            <button onClick={() => { handleDeleteAlbum(album.id, album.name) }} id='del-button' >
              <CiFolderOff id='del-album' />
            </button>
          </div>
          <table className="album-table">
            {album.tracks.length > 0 ? (
              <>
                <tr>
                  <th className='numero'>Nº</th>
                  <th className='faixa'>Faixa</th>
                  <th></th>
                  <th className='duracao'>Duração</th>
                </tr>
                {album.tracks.map((faixa) => (  
                  <tr key = { faixa.id }>
                    <td>{faixa.number}</td>
                    <td className='faixa'>{faixa.title}</td>
                    <td>
                      <button
                      onClick={() => {
                         handleConfirmation(faixa.id, faixa.title) 
                        }}
                        id='delete-button'>
                        <PiTrashLight />
                      </button>
                    </td>
                    <td className='duracao'>{formatDuration(faixa.duration)}                    
                    </td>
                  </tr>
                ))
                }
          </>
          ) : (
          <tr>
            <td colSpan="3">Não possui faixas</td>
          </tr>
            )}
        </table>
        </div>
  ))
}
    </div >
  )
}

export default Album