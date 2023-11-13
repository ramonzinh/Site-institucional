import { Carousel } from "react-bootstrap"
export default function Bale(){
    return(
        <body>
            <section>
                {/*Criação do Carousel logo após o cabeçalho*/} 
                <Carousel>  
                    <Carousel.Item style={{'height':"600px"}} >  
                        <img style={{'height':"600px"}}  
                        className="d-block w-100"  
                            src={'assets/img/about/bale_1.jpg'}  />  
                               
                                     </Carousel.Item  >  
                                     <Carousel.Item style={{'height':"600px"}}>  
                                     <img style={{'height':"600px"}}  
                                       className="d-block w-100"  
                                        src={'assets/img/about/bale_2.jpg'}    />  
                                         
                                             </Carousel.Item>  
                                           <Carousel.Item style={{'height':"600px"}}>  
                                           <img style={{'height':"600px"}}  
                                            className="d-block w-100"  
                                             src={'assets/img/about/bale_3.jpg'}   />  
                                           
                                             </Carousel.Item>  
                                            </Carousel>  
            </section>
            {/*Seção destinada ao texto principal da página */} 

            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Venha flutuar</h2>
                        <p>
                        O balé é uma das formas mais expressivas de arte. Com sua combinação única de música, movimento e cenografia, é capaz de contar histórias e transmitir emoções de maneira inigualável. O balé é uma forma de dança que requer muito treino e dedicação, e isso pode ser visto no palco através da elegância e precisão dos movimentos dos bailarinos.<br></br></p>

<p>Além de ser um espetáculo incrível de se assistir, o balé também traz inúmeros benefícios para quem o pratica. Ele ajuda a melhorar a postura, a flexibilidade e o equilíbrio, além de trabalhar a coordenação motora e a resistência física. E não é só o corpo que se beneficia, a mente também é estimulada, já que o balé exige concentração e disciplina.<br></br></p>

<p>Ao longo da história, o balé passou por diversas transformações, desde as coreografias clássicas até os movimentos mais contemporâneos. Ainda assim, ele continua sendo uma das formas mais puras de arte, capaz de transmitir emoções e contar histórias sem precisar de palavras. Assistir um espetáculo de balé é mergulhar em um mundo de magia e sonhos, e se deixar levar pelos movimentos dos bailarinos.<br></br></p>

<p>Para os bailarinos, o palco é um lugar mágico e especial. É onde todo o esforço e dedicação são colocados em prática e transformados em uma experiência única para o público. O palco é também um lugar de desafios, onde a cada apresentação os bailarinos precisam superar suas limitações e se superar. Mas é justamente esse desafio que torna o balé tão apaixonante.<br></br></p>

<p>Seja em apresentações solo ou em conjunto, o balé é capaz de transmitir emoções intensas e envolver o espectador em uma história única. É uma arte que transcende a razão e fala diretamente ao coração, e que nos leva a um mundo de sonhos e fantasia. Para quem tem a oportunidade de vivenciar essa experiência, o balé é uma forma única de arte que jamais será esquecida.<br></br></p>
                        
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

