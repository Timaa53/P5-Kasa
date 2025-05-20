import {useState, useCallback} from 'react'
import LogementsData from '../LogementsData'
import Collapse from '../../Collapse/Collapse'


function ListingCollapse ({logementId, sectionName, articleKey}) {
    const [logementDetailsId, setLogementDetailsId] = useState([]);
    const setLogementData = useCallback((data) => {setLogementDetailsId(data)}, []);

    const articleValue = logementDetailsId[0]?.[articleKey];

    return(
        <>
            <LogementsData
            extractData={["id", "description", "equipments"]}
            logementId={logementId}
            logementsDataFiltered={setLogementData}
            />
            
            {
                <Collapse sectionName={sectionName}>
                    {articleKey === "description" &&(
                        <p className="collapse-text">{articleValue}</p>
                    )}

                    {articleKey === "equipments" && Array.isArray(articleValue) &&(
                        <ul className="equipment-content">
                            {articleValue.map((equipment, index) =>
                                <li key={index} className="collapse-text">{equipment}</li>
                            )}
                        </ul>    
                    )}
                </Collapse>
            }
        </>
    )
}

export default ListingCollapse