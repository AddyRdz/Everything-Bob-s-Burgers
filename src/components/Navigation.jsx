import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation(props){
    return(
        <>
        <nav className="navigation" expand="xxl">
            <div className="navigation__links-wrapper">
                <Link to="/"><p>All Characters</p></Link>
                <Link to="/stores"><p>Store Next Door</p></Link>
            </div>
        </nav>
        </>
    )
}







export default Navigation