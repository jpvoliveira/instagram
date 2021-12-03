import Sugestoes from './Sidebar/Sugestoes'
import Usuario from './Sidebar/Usuario'
import Links from './Sidebar/Links'
import Copyright from './Sidebar/Copyright'

export default function Sidebar(){
    return(
        <div class="sidebar">
            <Usuario nome="catanacomics" user="Catana"/>
            <Sugestoes/>
            <Links/>
            <Copyright/> 
        </div>
    )
}