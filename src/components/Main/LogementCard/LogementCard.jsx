import {NavLink} from 'react-router-dom'

function Card({logement}) {
    return (
        <div className="logement-card">
            <NavLink to={`/logement/${logement.id}`}>
                <img src={logement.cover} alt={logement.title} title={logement.title} />
                <h4>{logement.title}</h4>
            </NavLink>
        </div>
    )
}

export default Card