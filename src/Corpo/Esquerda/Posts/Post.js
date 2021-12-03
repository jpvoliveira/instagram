export default function Post(props){
    return(
      <div class="post">
        <Topo nome={props.nome}/>
        <Conteudo img={props.img}/>
        <Fundo nomeCurtidas={props.nomeCurtidas} numeroCurtidas={props.numeroCurtidas}/>
      </div>
    )
  }
  
  function Topo(props){
    return(
      <div class="topo">
          <div class="usuario">
            <img src={"assets/img/"+props.nome+".svg"} />
            {props.nome}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
      </div>
    )  
  }
  
  function Conteudo(props){
    return(
      <div class="conteudo">
          <img src={"assets/img/"+props.img+".svg"} />
      </div>
    )
  }
  
  function Fundo(props){
    return(
      <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>
  
          <div class="curtidas">
            <img src={"assets/img/"+props.nomeCurtidas+".svg"} />
            <div class="texto">
              Curtido por <strong>{props.nomeCurtidas}</strong> e <strong>outras {props.numeroCurtidas} pessoas</strong>
            </div>
          </div>
      </div>
    )
  }