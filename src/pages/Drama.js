import { Carousel } from "react-bootstrap"
export default function Drama(){
    return(<body>
            <section>
                {/*Criação do Carousel logo após o cabeçalho*/} 
                <Carousel>  
                    <Carousel.Item style={{'height':"600px"}} >  
                        <img style={{'height':"600px"}}  
                        className="d-block w-100"  
                            src={'assets/img/about/teatro1.jpg'}  />  
                               
                                     </Carousel.Item  >  
                                     <Carousel.Item style={{'height':"600px"}}>  
                                     <img style={{'height':"600px"}}  
                                       className="d-block w-100"  
                                        src={'assets/img/about/teatro_2.jpeg'}    />  
                                         
                                             </Carousel.Item>  
                                           <Carousel.Item style={{'height':"600px"}}>  
                                           <img style={{'height':"600px"}}  
                                            className="d-block w-100"  
                                             src={'assets/img/about/teatro_3.jpg'}   />  
                                           
                                             </Carousel.Item>  
                                            </Carousel>  
            </section>

            {/*Seção destinada ao texto principal da página */} 
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Venha encenar</h2>
                        <p>   Encenar um drama é uma experiência que envolve um mix de emoções intensas e prazeres que só quem vive na pele pode compreender. Há uma série de etapas a serem seguidas, desde a escolha da peça até a estreia, que fazem com que cada apresentação seja única e especial.<br></br></p>

                        <p>Primeiro, é preciso escolher a peça certa. O drama é um gênero teatral que pode ser profundo, emocional e envolvente, então escolher a peça certa pode ser desafiador. É importante encontrar um roteiro que transmita uma mensagem clara e envolvente, que possa cativar a plateia e levá-la a refletir sobre a vida.<br></br></p>

                        <p>Depois, vem a parte da preparação. É preciso estudar o roteiro, compreender o personagem e mergulhar em suas emoções para poder interpretá-lo da forma mais genuína possível. Além disso, é preciso ensaiar muito, trabalhar em grupo, afinar vozes, gestos e emoções para que tudo esteja sincronizado na hora da apresentação.<br></br></p>

                        <p>Quando finalmente chega a hora da estreia, as emoções ficam à flor da pele. É uma mistura de ansiedade, nervosismo, alegria e excitação, tudo ao mesmo tempo. É o momento de deixar tudo o que foi ensaiado de lado e simplesmente viver o personagem, sentir as emoções e transmiti-las ao público.<br></br></p>

                        <p>A plateia é um elemento crucial no drama. Ela é quem dá vida à peça, quem ri, chora, se emociona e se identifica com os personagens. É ela quem faz com que a experiência seja completa e memorável, é ela quem aplaude e se emociona junto com os atores.<br></br></p>

                        <p>Por fim, após a apresentação, vem a sensação de dever cumprido. É um misto de satisfação, alívio e felicidade por ter conseguido transmitir a mensagem que se queria e ter tocado a plateia de alguma forma. É um sentimento indescritível e único que só quem viveu pode entender.

Em resumo, encenar um drama é uma experiência intensa e prazerosa, que envolve um mix de emoções e sensações que só quem viveu pode entender. Desde a escolha da peça até a estreia, tudo é uma mistura de desafios, trabalho em equipe e dedicação que culminam em uma experiência inesquecível para atores e plateia.</p>
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