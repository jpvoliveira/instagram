export default function Story({nome}){
    return(
        <div class="story">
            <div class="imagem">
                <img src={"assets/img/"+nome+".svg"} />
            </div>
            <div class="usuario">
                {nome}
            </div>
        </div>
    )
}