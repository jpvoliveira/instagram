export default function Sugestao({nome}){
    return(
      <div class="sugestao">
        <div class="usuario">
          <img src={"assets/img/"+nome+".svg"} />
          <div class="texto">
            <div class="nome">{nome}</div>
            <div class="razao">Segue você</div>
          </div>
        </div>
  
        <div class="seguir">Seguir</div>
      </div>
    )
  }