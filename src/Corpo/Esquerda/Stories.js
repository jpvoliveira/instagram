import Story from './Stories/Story'
export default function Stories() {
    const nomeUser = ["9gag","meowed","barked","nathanwpylestrangeplanet","wawawicomics","respondeai","filomoderna","memeriagourmet"]
    return(
        <div class="stories">
            {nomeUser.map(nome => <Story nome={nome}/>)}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

