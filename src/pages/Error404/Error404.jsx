import {NavLink} from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Error404() {
    return (
        <>
            <Header />
            <main className="error-page-main">
                <h1 className="error-number">404</h1>
                <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
                <p className="homePage-return">
                    <NavLink to="/">Retourner à la page d'accueil</NavLink>
                </p>    
            </main>
            <Footer />
        </>
    )
}

export default Error404