function Card({logement}) {
    return (
        <div className="logement-card">
            <img src={logement.cover} alt={logement.title} title={logement.title} />
            <h4>{logement.title}</h4>
        </div>
    )
}

export default Card