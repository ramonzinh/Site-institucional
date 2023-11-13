import { Carousel } from "react-bootstrap"
export default function Sapateado(){
    return(
      <body>
      <section>
          {/*Criação do Carousel logo após o cabeçalho*/} 
          <Carousel>  
              <Carousel.Item style={{'height':"600px"}} >  
                  <img style={{'height':"600px"}}  
                  className="d-block w-100"  
                      src={'assets/img/about/sapateado_1.jpg'}  />  
                         
                               </Carousel.Item  >  
                               <Carousel.Item style={{'height':"600px"}}>  
                               <img style={{'height':"600px"}}  
                                 className="d-block w-100"  
                                  src={'assets/img/about/sapateado_2.jpg'}    />  
                                   
                                       </Carousel.Item>  
                                     <Carousel.Item style={{'height':"600px"}}>  
                                     <img style={{'height':"600px"}}  
                                      className="d-block w-100"  
                                       src={'assets/img/about/sapateado_3.jpg'}   />  
                                     
                                       </Carousel.Item>  
                                      </Carousel>  
      </section>

      {/*Seção destinada ao texto principal da página */} 
      <section className="page-section bg-light" id="portfolio">
          <div className="container">
              <div className="text-center">
                  <h2 className="section-heading text-uppercase">Venha sapatear</h2>
                  <p>
                  Sapateado é uma das formas mais divertidas de dança que existe. Com seus passos enérgicos e ritmados, o sapateado é uma mistura de música e dança que é capaz de trazer alegria para qualquer um que esteja assistindo ou praticando.<br></br></p>

                  <p>Um dos melhores aspectos do sapateado é que ele pode ser praticado por pessoas de todas as idades e níveis de habilidade. Desde crianças pequenas até idosos, todos podem se beneficiar das aulas de sapateado. Além disso, o sapateado é uma ótima maneira de se exercitar e melhorar a saúde cardiovascular.<br></br></p>

                  <p>Outra grande vantagem do sapateado é a sensação de liberdade que ele proporciona. Quando você está dançando sapateado, seus pés estão batendo no chão de maneira tão rápida e ritmada que é impossível não sentir uma sensação de liberdade. É quase como se você estivesse flutuando no ar enquanto seus pés continuam batendo no chão.<br></br></p>

                  <p>Além disso, o sapateado é uma arte que permite a expressão pessoal. Quando você está dançando sapateado, você é livre para interpretar a música da maneira que quiser, usando seu corpo e seus movimentos para expressar seus sentimentos e emoções. Essa liberdade de expressão é uma das coisas que tornam o sapateado tão emocionante e gratificante.<br></br></p>

                  <p>Por fim, não podemos esquecer a diversão que o sapateado pode proporcionar. Dançar sapateado é uma das formas mais divertidas de passar o tempo. Você pode dançar sozinho ou com amigos, e é garantido que você se divertirá muito enquanto pratica seus passos e aprende novos movimentos.<br></br></p>

                  <p>Em resumo, o sapateado é uma forma única e emocionante de dança que pode ser apreciada por pessoas de todas as idades e habilidades. Com seus movimentos ritmados, liberdade de expressão e sensação de diversão, o sapateado é uma atividade que traz muita alegria e benefícios para a saúde física e mental.<br></br></p>
                
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