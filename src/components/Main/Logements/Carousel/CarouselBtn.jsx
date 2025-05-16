import PrevImg from '../../../../assets/images/Carousel/arrow_left.png'
import NextImg from '../../../../assets/images/Carousel/arrow_right.png'

function CarouselBtn({setCurrentIndex, carouselImages}) {

    return(
        <div className="carousel-btn">
                    <button type="button" onClick={() => setCurrentIndex((prevImg) =>
                        (prevImg - 1 + carouselImages) % carouselImages
                        )}>
                        <img src={PrevImg} alt="Image précédente" />
                    </button>

                    <button type="button" onClick={() => setCurrentIndex((nextImg) =>
                        (nextImg + 1) % carouselImages
                        )}>
                        <img src={NextImg} alt="Image suivante" />
                    </button>
            </div>
    )

}

export default CarouselBtn