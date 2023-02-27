import Carousel from 'react-bootstrap/Carousel';

const Content = ({ slides }) => {
    const renderContent = () => {
        return slides.map(({ text }, idx) => (
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
        ));
    }

    return (
        <Carousel interval={null}>{renderContent()}</Carousel>
    );
}

export default Content;