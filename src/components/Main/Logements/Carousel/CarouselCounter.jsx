
function CarouselCounter({currentIndex, carouselImages}) {

    return(
        <div className="carousel-counter">
                {currentIndex + 1} / {carouselImages}
        </div>
    )
}

export default CarouselCounter