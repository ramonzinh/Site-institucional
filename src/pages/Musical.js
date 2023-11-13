import { Carousel } from "react-bootstrap"
export default function Musical(){
    return(
        <body>
            {/*Criação do Carousel logo após o cabeçalho*/} 
            <section>
                <Carousel>  
                    <Carousel.Item style={{'height':"600px"}} >  
                        <img style={{'height':"600px"}}  
                        className="d-block w-100"  
                            src={'assets/img/about/musical_1.jpg'}  />  
                               
                                     </Carousel.Item  >  
                                     <Carousel.Item style={{'height':"600px"}}>  
                                     <img style={{'height':"600px"}}  
                                       className="d-block w-100"  
                                        src={'assets/img/about/musical_2.jpeg'}    />  
                                         
                                             </Carousel.Item>  
                                           <Carousel.Item style={{'height':"600px"}}>  
                                           <img style={{'height':"600px"}}  
                                            className="d-block w-100"  
                                             src={'assets/img/about/musical_3.jpeg'}   />  
                                           
                                             </Carousel.Item>  
                                            </Carousel>  
            </section>

            {/*Seção destinada ao texto principal da página */} 
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Venha cantar</h2>
                    
    
    <p>Se há algo que consegue unir gerações e culturas, é a música. E quando ela é combinada com a arte da dança, temos um verdadeiro espetáculo: o musical. O musical é uma forma de expressão artística que mistura teatro, música e dança, criando um ambiente único e envolvente para o público. É uma experiência que envolve todos os sentidos e que nos faz esquecer dos problemas do mundo por algumas horas.<br></br></p>
    
    <p>Uma das coisas mais incríveis sobre o musical é a capacidade que ele tem de nos transportar para outro mundo. Quando assistimos a um musical, somos levados para um universo onde a música e a dança reinam absolutas. A sensação de fazer parte de algo maior, de se sentir conectado com algo além de nós mesmos, é simplesmente incrível. É como se estivéssemos sendo envolvidos por uma aura mágica que nos faz sentir vivos de verdade.<br></br></p>
    
    <p>O processo de criação de um musical é algo que fascina muitas pessoas. Desde a escolha do tema até a seleção do elenco, tudo é pensado com muito cuidado para garantir que o espetáculo seja um sucesso. Os ensaios são intensos e desafiadores, mas o resultado final é sempre gratificante. Ver a plateia vibrando e aplaudindo é a recompensa para todo o trabalho árduo.<br></br></p>
    
    <p>Além de proporcionar entretenimento e diversão, o musical também é uma forma de arte que pode transmitir mensagens importantes. Muitos musicais abordam temas sociais relevantes, como preconceito, racismo e intolerância. Eles podem ser uma forma poderosa de conscientização e de estimular reflexões sobre questões importantes da nossa sociedade.<br></br></p>
    
    <p>Assistir a um musical ao vivo é uma experiência indescritível. A energia que emana do palco é contagiante, e a interação entre os atores e o público é algo único. Não há nada igual ao som da orquestra tocando ao vivo, aos atores cantando e dançando no palco, e à plateia aplaudindo e se emocionando. É uma experiência que nos faz sentir vivos de verdade.<br></br></p>
    
    <p>Em resumo, o musical é uma forma de arte que é capaz de nos transportar para outros mundos e nos fazer sentir vivos de verdade. É uma experiência que envolve todos os nossos sentidos e nos faz esquecer dos problemas do mundo por algumas horas. Além disso, é uma forma de arte que pode transmitir mensagens importantes e conscientizar as pessoas sobre questões sociais relevantes. Não há nada igual a assistir a um musical ao vivo e sentir a energia contagiante que emana do palco.<br></br></p>
                    
                    </div>
                </div>
            </section>
             {/*Seção final, destinada ao contato, NÃO EXISTE EVENTO ASSOCIADO AO BUTTON SUBMIT*/}
            <section className="page-section" id="contact">
<div className="container">
  <div className="text-center">
    <h2 className="section-heading text-uppercase">Entre para o nosso time</h2>
  </div>
 
  <form id="contactForm" data-sb-form-api-token="API_TOKEN">
    <div className="row align-items-stretch mb-5">
      <div className="col-md-6">
        <div className="form-group">
          
          <input className="form-control" id="name" type="text" placeholder="Teu Nome" data-sb-validations="required" />
          <div className="invalid-feedback" data-sb-feedback="name:required">Este campo é obrigatório.</div>
        </div>
        <div className="form-group">
          <input className="form-control" id="email" type="email" placeholder="Teu melhor email " data-sb-validations="required,email" />
          <div className="invalid-feedback" data-sb-feedback="email:required">Este campo é obrigatório.</div>
          <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
        </div>
        <div className="form-group mb-md-0">
          <input className="form-control" id="phone" type="tel" placeholder="Teu telefone " data-sb-validations="required" />
          <div className="invalid-feedback" data-sb-feedback="phone:required">Este campo é obrigatório..</div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group form-group-textarea mb-md-0">
          <textarea className="form-control" id="message" placeholder="Tua mensagem" data-sb-validations="required" defaultValue={""} />
          <div className="invalid-feedback" data-sb-feedback="message:required">Este campo é obrigatório..</div>
        </div>
      </div>
    </div>
    
    <div className="d-none" id="submitSuccessMessage">
      <div className="text-center text-white mb-3">
        <div className="fw-bolder">Form submission successful!</div>
        To activate this form, sign up at
        <br />
        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
      </div>
    </div>
   
    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
   
    <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Enviar</button></div>
  </form>
</div>
</section>
            </body>

    )
}