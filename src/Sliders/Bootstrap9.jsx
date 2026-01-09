import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bootstrap9() {
    return (
        <div style={{marginTop: "100px"}}><h1>9. React-Bootstrap Slider</h1>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
                    alt="First slide"
                    style={{ height: "350px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                    alt="First slide"
                    style={{ height: "350px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1552410260-0fd9b577afa6"
                    alt="First slide"
                    style={{ height: "350px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Bootstrap9;