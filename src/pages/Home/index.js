import {useEffect, useState } from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import './home.css';

// https://api.themoviedb.org/3/movie/550?api_key=93629a22ae6dc4e8777ba4142f0f5930&language=pt-br

function Home() {

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
          api_key: '93629a22ae6dc4e8777ba4142f0f5930',
          language: 'pt-br',
          page: 1,
        }
      })

      //console.log(response.data.results.slice(0,10));

      setFilmes(response.data.results.slice(0,10));
      setLoading(false);
    }

    loadFilmes();

  },[])


  if(loading){
    return(
      <div className='loading'>
        <h2>Carregando filmes...</h2>
      </div>
    )
  };

  
  return (
    <div className='container'>
      <div className='lista-filmes'>
      {filmes.map((filmes)=>{
        return(
          <article key={filmes.id}>
            <strong>{filmes.title}</strong>
            <img src={`https://image.tmdb.org/t/p/original/${filmes.poster_path}`} alt={filmes.title} />
            <Link to={`/filme/${filmes.id}`}>Acessar</Link>
          </article>
        )
      })}
      </div>
    </div>
  )
}

export default Home;