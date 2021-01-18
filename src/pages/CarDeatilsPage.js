import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";


function CarDeatilsPage(props) {
    const {cars} = props;
    const {index} = useParams();

    let car;
    if (cars) {
        car = cars[index];
    }

    return (
        <div>
            {!car ? <Spinner animation="border" />  :
              <Container>
                <p>Brand: {car.brand}</p>
                <p>Model: {car.model}</p>
                <p>KM: {car.km}</p>
                <p>Year: {car.year}</p>
                <p>KM per Year: {car.kmPerYear()}</p>
                <iframe
                    width="600"
                    height="450"
                    frameborder="0" style={{border:0}}
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAi5g_KBXE7z_IVdXbbr3oJV3E8YUn7Fec&q=${car.address}`} allowfullscreen>
                </iframe>
            </Container>}
        </div>
    );
}

export default CarDeatilsPage;