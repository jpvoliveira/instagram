import Sugestao from './Sugestoes/Sugestao'
export default function Sugestoes() {
  const users = ["bad.vibes.memes","chibirdart","razoesparaacreditar","adorable_animals","smallcutecats"]
  return(
      <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {users.map(nome => <Sugestao nome={nome}/>)}
      </div>
  )
}

