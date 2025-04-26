import { useEffect, useState } from 'react'
import Card from '../LogementCard/LogementCard'

function Gallery() {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        fetch("./logements.json")
        .then(response => response.json())
        .then(data => setLogements(data))
    })
    return(
        <section className="gallery-logements">
            {logements.slice(0, 6).map((logement) =>(
                <Card logement={logement} key={logement.id} />
            ))}
        </section>
    )
}

export default Gallery
