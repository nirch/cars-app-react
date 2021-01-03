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
            </Container>}
        </div>
    );
}

export default CarDeatilsPage;