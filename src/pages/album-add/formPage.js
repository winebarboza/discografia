import React from 'react'
import { WhiteBackground } from '../../components/background/styles'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'
function FormPage(props) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        year: '',
    });

    const atualizarDados = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const enviarDados = (event) => {
        event.preventDefault();

        if (formData.id === "" || formData.name === "" || formData.year === ""){
            alert('Preencha os campos obrigatórios!');
            return
        }
            

        fetch('https://tiao.supliu.com.br/api/album', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "wine.barbosa@gmail.com"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                alert("Album cadastrado com sucesso!")
                navigate('/')
            })
            .catch(error => console.error(error));
    };
    return (
        <WhiteBackground>
            <header className='header-form'>
                <h3>Adicione um novo álbum!</h3>
            </header>
            <form id="formPage" onSubmit={enviarDados} >
                <label>
                    id:
                    <input type="text" name="id" value={formData.id} onChange={atualizarDados} />
                </label>
                <label>
                    nome:
                    <input type="text" name="name" value={formData.name} onChange={atualizarDados} />
                </label>
                <label>
                    ano:
                    <input type="text" name="year" value={formData.year} onChange={atualizarDados} maxLength={4} />
                </label>
                <input className='button-submit' type="submit" value="Enviar" />
            </form>
        </WhiteBackground>
    )
}

export default FormPage