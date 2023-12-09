import { Link } from "react-router-dom";
import './erro.css';


function Erro() {
  return (
    <div className="not-found">
        <h1>404</h1>
        <h2>Pagina Não Encontrada =/</h2>
        <Link to="/">Volte para os filmes</Link>
    </div>
  )
}

export default Erro;