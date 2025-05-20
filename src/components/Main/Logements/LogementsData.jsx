import {useEffect, useState} from "react";
import {useNavigate} from "react-router";


function LogementsData({extractData = [], logementId, logementsDataFiltered}) {
    const [dataLogements, setDataLogements] = useState([]);
    
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/logements.json")
        .then(response => response.json())
        .then(logements => {
            const logementsFilters = logements
            .filter(logement => logement.id === logementId)
            .map(logement => {
                const selected = {};
                for (const key of extractData) {
                    selected[key] = logement[key];
                };
                return selected;
            });
            setDataLogements(logementsFilters);
            if (logementsDataFiltered) logementsDataFiltered(logementsFilters);
            if (logementsFilters.length === 0) {
                navigate("/404");
            }
        })
        .catch(error => console.error("Erreur appel fetch: ", error));
    }, [extractData, logementId]);

    return null
}

export default LogementsData