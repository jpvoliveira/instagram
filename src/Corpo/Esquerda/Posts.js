import Post from './Posts/Post'

export default function Posts() {
  const post = [
  {nome:"meowed",img:"gato-telefone",nomeCurtidas:"respondeai", numeroCurtidas: "101.523" },
  {nome:"barked",img:"dog",nomeCurtidas:"adorable_animals", numeroCurtidas: "99.159" },]
  return(
        <div class="posts">
            {post.map((item)=> <Post nome={item.nome} img={item.img} nomeCurtidas={item.nomeCurtidas} numeroCurtidas={item.numeroCurtidas}/>)}
        </div>
    )
}