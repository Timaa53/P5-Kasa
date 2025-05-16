import { useState, useCallback } from 'react'
import CarouselBtn from './CarouselBtn'
import CarouselCounter from './CarouselCounter'
import LogementsData from '../LogementsData'

function Carousel({logementId}) {
    const [logementImg, setLogementImg] = useState([]);
    const setLogementData = useCallback((data) => {setLogementImg(data);}, []);
    const [currentIndex, setCurrentIndex] = useState(0);

    return(
        <>
            <div className="carousel-content">
                <LogementsData 
                extractData={["id", "title", "pictures"]} //voir si title utilisé, sinon supprimer
                logementId={logementId}
                logementsDataFiltered={setLogementData}
                />
                
                {logementImg[0]?.pictures?.length > 0 && (
                    <img
                    className="carousel-img-slide"
                    src={logementImg[0].pictures[currentIndex]}
                    alt={`image ${currentIndex + 1}`}
                    />
                )}

                <CarouselBtn
                setCurrentIndex={setCurrentIndex}
                carouselImages={logementImg[0]?.pictures?.length}
                />
                <CarouselCounter
                currentIndex={currentIndex}
                carouselImages={logementImg[0]?.pictures.length}
                />
            </div>            
        </>
    )
}

export default Carousel
