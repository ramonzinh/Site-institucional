export default function Inicio(){
    return(
        <body>
            {/*Seção da linha do tempo*/}
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
          
                        <h2 className="section-heading text-uppercase">Nossa história</h2>
         
                    </div>
        
    
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/teatro.jpg" alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2001</h4>
                                    <h4 className="subheading">A casa</h4>
                                </div>
                            <div className="timeline-body"><p className="text-white-50">Em 2000 foi levantado na rua Largo do Santo Antônio além do carmo no pelô em Salvador o teatro Companhia Allegro</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/prefeita.jpg" alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2003</h4>
                                    <h4 className="subheading">O financiamento</h4>
                                </div>
                                <div className="timeline-body"><p className="text-white-50"> A prefeita de Salvador destina uma verba de R$1.000.000 para a Companhia Allegro para a finalização de obras nos camarins</p></div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/carecas.jpg" alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2004</h4>
                                <   h4 className="subheading">O primeiro Espetáculo</h4>
                                </div>
                                <div className="timeline-body"><p className="text-white-50">Após a formação de um grupo teatral fizemos o nosso primeiro espetáculo em Janeiro de 2004 "Estranha Coicidência"!</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/palhaços.jpg" alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2006</h4>
                                    <h4 className="subheading">A consolidação</h4>
                                </div>
                            <div className="timeline-body"><p className="text-white-50">No ano de 2006, tivemos a visita da dupla de palhaços Patati e Patatá,o que consolidou a nossa companhia de teatro para vários outros tipos de espeotáculos</p></div>
                            </div>
                        </li>
          
                    </ul>
                </div>
            </section>
            {/*Seção final dos visitantes*/}
    <section className="page-section bg-light" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Estrelas visitantes</h2>
          
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="assets/img/team/Steve.png" alt="..." />
              <h4>Steve Seagal</h4>
              <p className="text-muted"><em>"_O musical dos gordos doidos me deixou emocionado, me tirou lágrimas dos olhos"</em></p>
             
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="assets/img/team/DAMME.jpg" alt="..." />
              <h4>Van Damme</h4>
              <p className="text-muted"><em>"_O balé dos orangutangos contorcionistas me deu motivação para fazer espacates em ferrovias"</em></p>
              
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="assets/img/team/chuck.jpg" alt="..." />
              <h4>Chuck Norris</h4>
              <p className="text-muted"><em>"_Eu já dei uns pegas na professora de sapateado, um espetáculo"</em></p>
              
            </div>
          </div>
        </div>
       
      </div>
    </section>
    <footer className="footer py-4">
<div className="container">
  <div className="row align-items-center">
    
    
    <div className="col-lg-4 text-lg-end">
      <a className="link-dark text-decoration-none me-3" href="#!">Este é um site fictício, criado para servir de portfólio. Feito por @Santosprogrammer </a>
      
    </div>
  </div>
</div>
</footer>

        </body>
        
    
    )
         
}