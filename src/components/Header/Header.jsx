import {NavLink} from 'react-router-dom'
import KasaLogo from './KasaLogo/KasaLogo'

function Header() {
    return (
        <header className="header">
            <KasaLogo />
            <nav>
                <ul className="nav-list">
                    <li> <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Accueil</NavLink> </li>
                    <li> <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>A propos</NavLink> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header 