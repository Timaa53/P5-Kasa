import './Header.css'
import {Link} from 'react-router-dom'
import KasaLogo from './KasaLogo/KasaLogo'

function Header() {
    return (
        <header className="header">
            <KasaLogo />
            <nav>
                <ul>
                    <li> <Link to="/">Accueil</Link> </li>
                    <li> <Link to="about">A propos</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header 