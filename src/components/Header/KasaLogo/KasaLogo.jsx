import './KasaLogo.css'
import {Link} from 'react-router-dom'
import Logo from '../../../assets/images/KasaLogo.png'


function KasaLogo() {
    return (
        <Link to="/" title="Accueil">
            <img src={Logo} alt="Logo Kasa" className="logo" />
        </Link>
    )
}

export default KasaLogo
