import Carousel from 'react-bootstrap/Carousel';

const SingleSlide = ({ text }) => {
    return (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="black.webp"
                alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
                <p>{text}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
}

export default SingleSlide;