
import { Button, Container, Spinner, Table } from 'react-bootstrap';
import CarRow from '../components/CarRow/CarRow';
import CarModel from '../model/CarModel';
import './CarsPage.css';

function CarsPage(props) {
    const {cars, onAddCar} = props;

    function addCar() {
        onAddCar(new CarModel("Subaru", "B4", 2005, 233000, "Hertzel 10, Haifa"));
    }

    // Checking that cars is not null
    let carRows;
    if (cars)
    {
        // Finding the highestKmPerYear car
        let highestKmPerYear = cars[0];
        for (let i = 1; i < cars.length; i++) {
            if (cars[i].kmPerYear() > highestKmPerYear.kmPerYear()) {
                highestKmPerYear = cars[i];
            }
        }
        
        // convert car data into table rows
        carRows = cars.map((car, index) => <CarRow key={index} car={car} index={index} isHighestKMPerYear={car === highestKmPerYear} />);
    }


    return (
        <div className="p-cars">
            {!cars ? <Spinner animation="border" /> :
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>KM</th>
                            <th>KM Per Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carRows}
                    </tbody>
                </Table>
                <Button variant="primary" onClick={addCar}>Add Car</Button>
            </Container>}
        </div>
    )
}

export default CarsPage;