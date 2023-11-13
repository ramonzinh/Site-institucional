/*importação de páginas e dependências*/
import logo from './logo.svg';
import './App.css';
import {Routes,Route, useResolvedPath, useMatch,Link} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Musical from './pages/Musical';
import Bale from './pages/Bale';
import Drama from './pages/Drama';
import Sapateado from './pages/Sapateado';

/*Construção da função principal do Rectjs*/
function App() {
  return (
    <body id="page-top">
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
     
    </nav>
        <header class="masthead">
        <div className="container">
          <a className="navbar-brand" href="#page-top"><img src="assets/img/logoTeatro.svg" alt="..." /></a>
        
        
        </div>
        </header>
    {/*Criando Customlinks no topo do site para fazer o redirecionamento entre as páginas do mesmo */}
    <section className="page-section">
      <div>
              
        <ul className="nav-list">
        <li><a className="nav-link"><Customlink to="/"><i className= "fa fa-home"/></Customlink></a></li>
          <li><a className="nav-link"><Customlink to ="/Bale">Balé</Customlink></a></li>
          <li><a className="nav-link"><Customlink to="/Musical">Musical</Customlink></a></li>
          <li><a className="nav-link"><Customlink to = "/Sapateado">Sapateado</Customlink></a></li>
          <li><a className="nav-link"><Customlink to="Drama">Drama</Customlink></a></li>
          
        </ul>
        


      </div>
  
    </section>
    {/* Tag para fazer o roteamento entre as páginas*/}
    <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Drama" element={<Drama/>}/>
        <Route path="/Bale" element={<Bale/>}/>
        <Route path="/Sapateado" element={<Sapateado/>}/>
        <Route path="/Musical" element={<Musical/>}/>



    </Routes>
   
    </div>
  </body>
  
  );
}
  {/* Função que promove a ação do customlink*/}
function Customlink({to,children,...props}){
  const resolvedpath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedpath.pathname, end:true}) 

  return (
    <li className={isActive? "active":""}>
      <Link to={to}{...props}>
        {children}
      </Link>
    </li>
  )
}


export default App;


