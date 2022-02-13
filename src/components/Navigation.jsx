import { Link } from 'react-router-dom'
function Navigation(props){
    return(
        <>
        <nav className="navigation">
            <div className="navigation__links-wrapper">
                <Link to="/"><p>All Characters</p></Link>
                {/* <Link to="/characters/:id"><p>Character Details</p></Link> */}
            </div>
        </nav>
        </>
    )
}



export default Navigation