import { useState, useCallback } from 'react'
import LogementsData from './LogementsData'
import PrevImg from '../../../assets/images/Carousel/arrow_left.png'
import NextImg from '../../../assets/images/Carousel/arrow_right.png'

function Carousel({logementId}) {
    const [logementImg, setLogementImg] = useState([]);
    const setLogementData = useCallback((data) => {
        setLogementImg(data);
    }, []);

    return(
        <>
            <div className="carousel-img">
                <LogementsData 
                extractData={["id", "title", "pictures"]}
                logementId={logementId}
                logementsDataFiltered={setLogementData}
                />
                
                {logementImg[0]?.pictures?.map((picture, index) => {
                return <img key={index} src={picture} alt={`image ${index + 1}`} />;
})}
            </div>
        </>
    )
}

export default Carousel


