import Navbar from './Navbar'
import Corpo from './Corpo'
import FundoMobile from './FundoMobile'

import ReactDOM from 'react-dom'
ReactDOM.render(<App/>, document.querySelector(".root"))

function App(){
    return(
        <div>
            <Navbar/>
            <Corpo/>
            <FundoMobile/>
        </div>
    )
}