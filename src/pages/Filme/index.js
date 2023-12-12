/* eslint-disable no-unused-vars */


import {useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './filme.css'
import api from '../../services/api';
import {toast} from 'react-toastify';


function Filme() {

  const {id} = useParams();
  const navigate = useNavigate();
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
          navigate("/", {replace: true})
          return;
        });
    }

    loadFilm();

    return () => {
      console.log("COMPONENTE DEMONTADO")
    }

  },[navigate, id]);

  function salvarFilme(){

    const minhaLista = localStorage.getItem("@robfilme");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id )

    if(hasFilme){
      toast.warn("Esse filme já está na sua lista")
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@robfilme",JSON.stringify(filmesSalvos))
    toast.success("Filme salvo com sucesso")
  }


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

      <button onClick={salvarFilme} >Salvar</button>
      <button>
        <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title} trailer`}>
          Trailer
        </a>
      </button>

      </div>
      
    </div>
  )
}

export default Filme;