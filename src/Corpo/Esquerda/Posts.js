export default function Posts() {
  return(
        <div class="posts">
            <Post/>
        </div>
    )
}

function Post(){
  const post = [{nomeUser:"meowed",nomeImg:"gato-telefone",nomeCurtidas:"respondeai", numeroCurtidas: "101.523" },
  {nomeUser:"barked",nomeImg:"dog",nomeCurtidas:"adorable_animals", numeroCurtidas: "99.159" }]
  return(
    <div class="post">
      {post.map(nomeUser => <Topo nome={nomeUser}/>)}
      {post.map(nomeImg => <Conteudo nome={nomeImg}/>)}
      {post.map(curtidas => <Fundo nome={curtidas}/>)}
    </div>
  )
}

function Topo({nome}){
  return(
    <div class="topo">
        <div class="usuario">
          <img src={"assets/img/"+nome.nomeUser+".svg"} />
          {nome.nomeUser}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    </div>
  )  
}

function Conteudo({nome}){
  return(
    <div class="conteudo">
        <img src={"assets/img/"+nome.nomeImg+".svg"} />
    </div>
  )
}

function Fundo({nome}){
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
          <img src={"assets/img/"+nome.nomeCurtidas+".svg"} />
          <div class="texto">
            Curtido por <strong>{nome.nomeCurtidas}</strong> e <strong>outras {nome.numeroCurtidas} pessoas</strong>
          </div>
        </div>
    </div>
  )
}