import {Link} from 'react-router-dom'

function Header() {
    return (
        <nav>
            <ul>
                <li> <Link to="/">Accueil</Link> </li>
                <li> <Link to="about">A propos</Link> </li>
            </ul>
        </nav>
    )
}

export default Header 