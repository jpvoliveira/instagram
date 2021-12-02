import Stories from './Corpo/Stories'
import Posts from './Corpo/Posts'
import Sugestoes from './Corpo/Sugestoes'

export default function Corpo() {
    return(
        <div class="corpo">
        <div class="esquerda">
            <Stories/>
            <Posts/>
            
        </div>
        <div class="sidebar">
            <Usuario/>
            <Sugestoes/>
            <Links/>
            <Copyright/> 
        </div>
      </div>

    )
}

function Usuario(){
    return(
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
                <strong>catanacomics</strong>
                Catana
            </div>
        </div>
    )
}

function Links(){
    return(
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    )
}

function Copyright(){
    return(
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    )
}