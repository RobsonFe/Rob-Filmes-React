/* eslint-disable no-unused-vars */


import {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './filme.css'

import api from '../../services/api';


function Filme() {

  const {id} = useParams();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    async function loadFilm() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: '93629a22ae6dc4e8777ba4142f0f5930',
          language: 'pt-br',
        },
      })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);  
        })
        .catch(() => {
          console.log("FILME NÃO ENCONTRADO");
        });
    }

    loadFilm();

    return () => {
      console.log("COMPONENTE DEMONTADO")
    }

  },[]);


  if(loading){
    return(
      <div className='filme-info' >
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }

  return (
    <div className='filme-info'>

      <h1>{filme.title}</h1>

       <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

       <h3>Sinopse</h3>
       <span>{filme.overview}</span>

       <strong>Avaliação: {filme.vote_average} / 10</strong>

      <div className='area-btn'>

      <button >Salvar</button>
      <button>
        <a href='#'>
          Trailer
        </a>
      </button>

      </div>
      
    </div>
  )
}

export default Filme;