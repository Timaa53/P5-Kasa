import { useState, useCallback } from 'react'
import LogementsData from './LogementsData'
import PrevImg from '../../../assets/images/Carousel/arrow_left.png'
import NextImg from '../../../assets/images/Carousel/arrow_right.png'

function Carousel({logementId}) {
    const [logementImg, setLogementImg] = useState([]);
    const setLogementData = useCallback((data) => {
        setLogementImg(data);
    }, []);
    const [currentIndex, setCurrentIndex] = useState(0);

    return(
        <>
            <div className="carousel-img">
                <LogementsData 
                extractData={["id", "title", "pictures"]}
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
            </div>
            <div className="carousel-btn">
                    <button type="button" onClick={() => setCurrentIndex((prevImg) =>
                        (prevImg - 1 + logementImg[0].pictures.length) % logementImg[0].pictures.length
                        )}>
                        <img src={PrevImg} alt="Image précédente" />
                    </button>

                    <button type="button" onClick={() => setCurrentIndex((nextImg) =>
                        (nextImg + 1) % logementImg[0].pictures.length
                        )}>
                        <img src={NextImg} alt="Image suivante" />
                    </button>
            </div>

            <div className="carousel-counter">
                {currentIndex + 1} / {logementImg[0]?.pictures.length}
            </div>
        </>
    )
}

export default Carousel
